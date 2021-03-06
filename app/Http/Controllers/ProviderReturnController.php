<?php

namespace App\Http\Controllers;

use DB;
use Throwable;
use Validator;
use App\ProviderDebt;
use App\ProviderReturn;
use App\ProviderPayment;
use App\ProductInventory;
use App\ProviderPurchase;
use Illuminate\Http\Request;
use App\ProviderReturnDetail;
use App\ProviderPurchaseDetail;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\Constraint\IsFalse;
use App\Http\Controllers\api\ApiResponseController;

class ProviderReturnController extends ApiResponseController
{
    /** 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try 
        {
            $vStore = Auth::user()->store_id;
            $vrole_id = Auth::user()->role_id;

            if($vrole_id == 1)
            {
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
            }
            else
            {
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
                    ->where('S.stor_pk','=',$vStore)
                    ->orderByDesc('PR.prre_pk')
                    ->get();
            }
           
    
            return $this->dbResponse($vProviderReturns, 200, null, 'Lista de Devoluciones de Proveedores');
          
        } 
        catch (Throwable $vTh) 
        {
            return $this->dbResponse(null, 500, $vTh, 'Detalle Interno, informar al Administrador del Sistema.');
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

        try 
        {
            //Asignacion de variables
           $vprpu_pk = $vInput['prpu_pk']; //PK Compra

           //Consulta de Compra Proveedor
            $vProviderPurchase = ProviderPurchase::where('prpu_pk', '=', $vprpu_pk)
                ->whereIn('prpu_status', [2, 3])
                ->first();

            //Validar si la compra existe 
            if($vProviderPurchase)
            { 
                //Consultar Devolución
                $vProviderReturn = ProviderReturn::where('prpu_fk', '=', $vprpu_pk)->first();
                //Validar si existe una devolución de esa compra

                if($vProviderReturn)
                {

                }
                else
                {
                    //Inserción Encabezado de Devolución Proveedor
                    $vPRI = new ProviderReturn();
                    $vPRI->prpu_fk = $vProviderPurchase->prpu_pk;
                    $vPRI->prov_fk = $vProviderPurchase->prov_fk;
                    $vPRI->stor_fk = $vProviderPurchase->stor_fk;
                    $vPRI->prre_status = 1;
                    $vPRI->save();

                    //Asignación de PK de Devolución Proveedor
                    $vprre_pk = $vPRI->prre_pk; 

                    //////////////////  Inserción de Log  //////////////////
                    $this->getstorelog('provider_returns', $vprre_pk, 1);

                    //Insertar Detallado de Devolución
                    $vSelPPD = DB::table('provider_purchase_details AS PPD')
                    ->join('products AS P', 'P.prod_pk', '=', 'PPD.prod_fk')
                    ->where('prpu_fk', '=', $vprpu_pk)
                    ->where('prpd_status', '=', 1)
                    ->select(
                        array(
                            DB::raw("$vprre_pk AS prre_fk"),
                            'prod_fk AS prod_fk',
                            'P.meas_fk_output AS meas_fk',
                            DB::raw("0 AS prrd_quantity"),
                            DB::raw('(
                                    CASE WHEN PPD.meas_fk = P.meas_fk_input 
                                        THEN 
                                            prpd_quantity * prod_packingquantity 
                                        ELSE 
                                            prpd_quantity 
                                    END
                                    ) AS prrd_quantity_purchase'),

                            DB::raw('(
                                CASE WHEN PPD.meas_fk = P.meas_fk_input 
                                    THEN 
                                        prpd_price / prod_packingquantity 
                                    ELSE 
                                        prpd_price 
                                END
                                ) AS prrd_price'),

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



                //Consulta Devolución Proveedor
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
              

                //Consultar Devolución Detallado 
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

        } 
        catch (Throwable $vTh) 
        {
            return $this->dbResponse(null, 500, $vTh, 'Detalle Interno, informar al Administrador del Sistema.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProviderReturn  $providerReturn
     * @return \Illuminate\Http\Response
     */
    public function show($prre_pk)
    {

        try 
        {
            //Asignacion de variables
            $vprre_pk = $prre_pk;

            if ($vprre_pk == '' || $vprre_pk == 0) {
                return $this->dbResponse(null, 500, null, 'Ingresar Llave Primaria Devolución');
            }

            $vPR = DB::table('provider_returns AS PR')
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
                ->where('PR.prre_pk', '=', $vprre_pk)
                ->first();

                if($vPR)
                {
                    $vPRD = DB::table('provider_return_details AS PRD')
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
                        ->where('PRD.prre_fk', '=', $vprre_pk)
                        ->where('PRD.prrd_status', '=', 1)
                        ->get();
                        
                    $vData =
                        [
                            'ProviderReturns' => $vPR, 
                            'ProviderReturnDetails' => $vPRD
                        ];

                    return $this->dbResponse($vData, 200, null, 'Devolución de Proveedor');

                }
                else
                {
                    return $this->dbResponse(null, 404, null, 'Devolución de Proveedor NO Encontrada');
                }


        } 
        catch (Throwable $vTh) 
        {
            return $this->dbResponse(null, 500, $vTh, 'Detalle Interno, informar al Administrador del Sistema.');
        }
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

        try 
        {
            //Asignacion de variables
            $vprre_pk = $vInput['prre_pk'];
            $vremo_fk = $vInput['remo_fk'];
            $vprre_observation = $vInput['prre_observation'];   
            $vVal_Dev = false;   

            $vProviderReturn = ProviderReturn::where('prre_pk', '=', $vprre_pk)->first();

            if($vProviderReturn)
            { 
                //Consulta Devolución Detallado
                $vPRD = ProviderReturnDetail::where('prre_fk', '=', $vprre_pk)
                    ->where('prrd_status', '=', 1)
                    ->get();


                $vMensajeInventario = '';
                //Validar Devolución Detallado
                foreach($vPRD as $vP)
                {
                    //Datos del Producto a devolver
                    $vprod_fk = $vP->prod_fk;
                    $vprrd_quantity = $vP->prrd_quantity;
                    
                    //Buscar el Producto en el Inventario de la Sucursal 
                    $vPI = DB::table('product_inventories AS PI')
                        ->join('products AS P', 'P.prod_pk', '=', 'PI.prod_fk')
                        ->where('PI.prod_fk', '=', $vprod_fk)
                        ->where('PI.prin_status', '=', 1)
                        ->where('PI.stor_fk', '=', $vProviderReturn->stor_fk)
                        ->first();
                        
                    if ($vPI) 
                    {
                        //Datos del producto en el Inventario
                        $vprin_stock = $vPI->prin_stock; //Stock actual
                        $vprod_identifier = $vPI->prod_identifier; //Stock actual

                        //Validar la cantidad del producto
                        if($vprin_stock >= $vprrd_quantity)
                        {
                            //Si aplicar Devolucion
                            $vVal_Dev = true;
                        }
                        else
                        {
                            $vMensajeInventario = 'Producto Insuficiente para Devolución. Inventario Actual de ' . $vprod_identifier . ': ' . $vprin_stock;
                            $vVal_Dev = false;
                            break;
                        }
                    } 
                    else 
                    {
                        $vMensajeInventario = 'Producto NO Encontrado, NO se puede devolver';
                        $vVal_Dev = false;
                        break;
                    }
                }

                //Validar si es posible hacer toda la devolucion
                if ($vVal_Dev) {
                    //Modificar Devolución (Finalizar)
                    DB::table('provider_returns')
                    ->where('prre_pk', '=', $vprre_pk)
                    ->update([
                        'prre_status' =>  2, 
                        'remo_fk' =>  $vremo_fk, 
                        'prre_observation' =>  $vprre_observation
                    ]);

                    //////////////////  Inserción de Log  //////////////////
                    $this->getstorelog('provider_returns', $vprre_pk, 2);

                    
                    //Anexar Monto por Devolución
                    
                    //Consultar Deuda
                    $vPDSel = ProviderDebt::where('prpu_fk', '=', $vProviderReturn->prpu_fk)->first();
                    //Validar Si si aplica inserción de pago de deuda
                    if($vPDSel)
                    {
                        //Consultar Monto de la Devolución
                        $vMontoDevolucion = ProviderReturnDetail::where('prre_fk', '=', $vprre_pk)->where('prrd_status', '=', 1)->sum(\DB::raw('prrd_price * prrd_quantity')); 

                        //Insertar Pago del Proveedor
                        $vPP = new ProviderPayment();        
                        $vPP->prov_fk = $vProviderReturn->prov_fk;
                        $vPP->prde_fk = $vPDSel->prde_pk;
                        $vPP->pash_fk = 5;
                        $vPP->prpa_amount = $vMontoDevolucion;
                        $vPP->prpa_reference = 'Devolución';
                        $vPP->save();

                        //Asignación de PK de Pago Proveedor
                        $vprpa_pk = $vPP->prpa_pk;

                        //////////////////  Inserción de Log  //////////////////
                        $this->getstorelog('provider_payments', $vprpa_pk, 1);
                    }



                    //Aplicar modificación de Inventario
                    foreach($vPRD as $vP)
                    {
                        //Datos del Producto a devolver
                        $vprod_fk = $vP->prod_fk;
                        $vprrd_quantity = $vP->prrd_quantity;

                        //Buscar el Producto en el Inventario de la Sucursal 
                        $vPI = ProductInventory::where('prod_fk', '=', $vprod_fk)
                            ->where('prin_status', '=', 1)
                            ->where('stor_fk', '=', $vProviderReturn->stor_fk)
                            ->first();

                        $vprin_pk = $vPI->prin_pk; //PK Inventario
                        $vprin_stock = $vPI->prin_stock; //Stock actual

                        //Modificar Inventario
                        $vPIU = ProductInventory::find($vprin_pk);
                        $vPIU->prin_stock = $vprin_stock - $vprrd_quantity;
                        $vPIU->save();

                        //////////////////  Inserción de Log  //////////////////
                        $this->getstorelog('product_inventories', $vprin_pk, 2);
                    }

                    return $this->dbResponse($vprre_pk, 200, null, 'Devolución Finalizada Correctamente');
                } 
                else 
                {
                    return $this->dbResponse($vprre_pk, 501, null, $vMensajeInventario);
                }
            }
            else
            {
                return $this->dbResponse($vprre_pk, 404, null, 'Devolución NO Encontrada');
            }

        } 
        catch (Throwable $vTh) 
        {
            return $this->dbResponse(null, 500, $vTh, 'Detalle Interno, informar al Administrador del Sistema.'); 
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
