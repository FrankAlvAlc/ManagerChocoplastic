<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Throwable;
use App\ProviderReturn;
use Illuminate\Http\Request;
use App\Http\Controllers\api\ApiResponseController;
use App\ProviderPurchase;
use App\ProviderPurchaseDetail;

class ProviderReturnController extends ApiResponseController
{
    /** 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            $vProviderReturns = DB::table('provider_returns AS PR')
                ->join('provider_purchases AS PP', 'PP.prpu_pk', '=', 'PR.prpu_fk')
                ->join('providers AS P', 'P.prov_pk', '=', 'PR.prov_fk')
                ->join('stores AS S', 'S.stor_pk', '=', 'PR.stor_fk')
                ->leftjoin('return_motives AS RM', 'RM.remo_pk', '=', 'PR.remo_fk')
                ->select(
                    'PR.prre_pk',
                    'PR.prre_observation',
                    'PR.prre_status',
                    DB::raw('
                        (CASE 
                            WHEN PR.prre_status = 0 THEN "Cancelada" 
                            WHEN PR.prre_status = 1 THEN "Pendiente" 
                            WHEN PR.prre_status = 2 THEN "Finalizada" 
                            ELSE "" END
                        ) AS prre_status_description'),
                    'PR.created_at',
            
                    'PP.prpu_pk',
                    'PP.prpu_identifier',

                    'P.prov_pk',
                    'P.prov_identifier',
                    'P.prov_name',
                    'P.prov_rfc',                           

                    'S.stor_pk',
                    'S.stor_name',

                    'RM.remo_pk',
                    'RM.remo_description',
                )
                ->orderByDesc('PR.prre_pk')
                ->get();
    
            return $this->dbResponse($vProviderReturns, 200, null, 'Lista de Devoluciones de Proveedores');
          
        } 
        catch (Throwable $vTh) 
        {
            return $this->dbResponse(null, 500, $vTh, "Error || Consultar con el Administrador del Sistema");
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        $vInput = $r->all();

        $vVal = Validator::make($vInput, [
            'prpu_pk' => 'required|int' // PK Compra
        ]);

        if($vVal->fails()) {
            return $this->dbResponse(null, 500, $vVal->errors(), 'Detalle de Validación');
        }

        try {
            //Asignacion de variables
           $vprpu_pk = $vInput['prpu_pk'];

            $vProviderPurchase = ProviderPurchase::where('prpu_pk', '=', $vprpu_pk)
                        ->whereIn('prpu_status', [2, 3])
                        ->first();

            if($vProviderPurchase)
            { 
                $vProviderReturn = ProviderReturn::where('prpu_fk', '=', $vprpu_pk)->first();

                if($vProviderReturn)
                {

                }
                else
                {
                    //Insertar Encabezado de Devolución Proveedor
                    $vSelPP = ProviderPurchase::where('prpu_pk', '=', $vprpu_pk)
                    ->select(
                        'prov_fk', 
                        'prpu_pk AS prpu_fk',
                        'stor_fk', 
                        DB::raw("1 AS prre_status"),
                        DB::raw("NOW() AS created_at"),
                        DB::raw("NOW() AS updated_at")
                    );
                    DB::table('provider_returns')
                        ->insertUsing(
                            [
                                'prov_fk', 
                                'prpu_fk',
                                'stor_fk', 
                                'prre_status', 
                                'created_at', 
                                'updated_at'
                            ]
                        , $vSelPP);
                }


                $vProviderReturns = DB::table('provider_returns AS PR')
                    ->join('provider_purchases AS PP', 'PP.prpu_pk', '=', 'PR.prpu_fk')
                    ->join('providers AS P', 'P.prov_pk', '=', 'PR.prov_fk')
                    ->join('stores AS S', 'S.stor_pk', '=', 'PR.stor_fk')
                    ->leftjoin('return_motives AS RM', 'RM.remo_pk', '=', 'PR.remo_fk')
                    ->select(
                        'PR.prre_pk',
                        'PR.prre_observation',
                        'PR.prre_status',
                        DB::raw('
                            (CASE 
                                WHEN PR.prre_status = 0 THEN "Cancelada" 
                                WHEN PR.prre_status = 1 THEN "Pendiente" 
                                WHEN PR.prre_status = 2 THEN "Finalizada" 
                                ELSE "" END
                            ) AS prre_status_description'),
                        'PR.created_at',
                
                        'PP.prpu_pk',
                        'PP.prpu_identifier',

                        'P.prov_pk',
                        'P.prov_identifier',
                        'P.prov_name',
                        'P.prov_rfc',                           

                        'S.stor_pk',
                        'S.stor_name',

                        'RM.remo_pk',
                        'RM.remo_description',
                    )
                    ->where('PR.prpu_fk', '=', $vprpu_pk)
                    ->first();

                if($vProviderReturn)
                {

                }
                else
                {
                    //Insertar Detallado de Devolución
                    $vSelPPD = ProviderPurchaseDetail::where('prpu_fk', '=', $vprpu_pk)->where('prpd_status', '=', 1)
                    ->select(
                        array(
                            DB::raw("$vProviderReturns->prre_pk AS clre_fk"),
                            'prod_fk AS prod_fk',
                            'meas_fk AS meas_fk',
                            'prpd_quantity AS prrd_quantity',
                            'prpd_quantity AS prrd_quantity_purchase',
                            'prpd_price AS prrd_price',
                            DB::raw("1 AS prrd_status"),
                            DB::raw("NOW() AS created_at"),
                            DB::raw("NOW() AS updated_at")
                        )
                    );

                    DB::table('provider_return_details')
                        ->insertUsing(
                            [
                                'prre_fk',
                                'prod_fk', 
                                'meas_fk',
                                'prrd_quantity', 
                                'prrd_quantity_purchase', 
                                'prrd_price', 
                                'prrd_status', 
                                'created_at', 
                                'updated_at'
                            ]
                        , $vSelPPD);
                }

                $vProviderReturnDetails = DB::table('provider_return_details AS PRD')
                    ->join('products AS P', 'P.prod_pk', '=', 'PRD.prod_fk')
                    ->join('measurements AS M', 'M.meas_pk', '=', 'PRD.meas_fk')
                    ->select(
                        'PRD.prrd_pk',
                        'PRD.prre_fk',

                        'P.prod_pk',
                        'P.prod_identifier',
                        'P.prod_name',

                        'M.meas_pk',
                        'M.meas_name',
                        'M.meas_abbreviation',

                        'PRD.prrd_quantity',
                        'PRD.prrd_quantity_purchase',
                        'PRD.prrd_price',
                        'PRD.prrd_status'
                    )
                    ->where('PRD.prre_fk', '=', $vProviderReturns->prre_pk)
                    ->where('PRD.prrd_status', '=', 1)
                    ->get();
                    
                $vData =
                    [
                        'ProviderReturns' => $vProviderReturns, 
                        'ProviderReturnDetails' => $vProviderReturnDetails
                    ];

                return $this->dbResponse($vData, 200, null, 'Devolución de Proveedor');
            }
            else
            {
                return $this->dbResponse(null, 404, null, 'Compra No Encontrada');
            }

        } catch (Throwable $vTh) {
            return $this->dbResponse(null, 500, $vTh, "Error || Consultar con el Administrador del Sistema");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProviderReturn  $providerReturn
     * @return \Illuminate\Http\Response
     */
    public function show(ProviderReturn $providerReturn)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProviderReturn  $providerReturn
     * @return \Illuminate\Http\Response
     */
    public function edit(ProviderReturn $providerReturn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProviderReturn  $providerReturn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r)
    {
        $vInput = $r->all();

        $vVal = Validator::make($vInput, [
            'prre_pk' => 'required|int', // PK Devolucion Proveedor
            'remo_fk' => 'required|int', // PK Motivo Devolucion
        ]);

        if ($vVal->fails()) {
            return $this->dbResponse(null, 500, $vVal->errors(), 'Detalle de Validación');
        }

        try {
            //Asignacion de variables
            $vprre_pk = $vInput['prre_pk'];
            $vremo_fk = $vInput['remo_fk'];
            $vprre_observation = $vInput['prre_observation'];   

            $vProviderReturn = ProviderReturn::where('prre_pk', '=', $vprre_pk)->first();

            if($vProviderReturn)
            { 
                //Modificar Devolución (Finalizar)
                DB::table('provider_returns')
                ->where('prre_pk', '=', $vprre_pk)
                ->update([
                    'prre_status' =>  2, 
                    'remo_fk' =>  $vremo_fk, 
                    'prre_observation' =>  $vprre_observation
                ]);

                return $this->dbResponse($vprre_pk, 200, null, 'Devolución Finalizada Correctamente');
            }
            else
            {
                return $this->dbResponse($vprre_pk, 404, null, 'Devolución NO Encontrada');
            }

        } catch (Throwable $vTh) {
            return $this->dbResponse(null, 500, $vTh, "Error || Consultar con el Administrador del Sistema");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProviderReturn  $providerReturn
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProviderReturn $providerReturn)
    {
        //
    }
}
