<?php

namespace App\Http\Controllers;

use DB;
use Throwable;
use Validator;
use App\ClientDebt;
use App\ClientSale;
use App\ClientReturn;
use App\ClientPayment;
use App\ClientSaleDetail;
use App\ProductInventory;
use App\ClientReturnDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\api\ApiResponseController;
use App\Product;

class ClientReturnController extends ApiResponseController
{ 
    /**  
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            $vStore = Auth::user()->store_id;
            $vrole_id = Auth::user()->role_id;

            if($vrole_id == 1)
            {

                $vClientReturns = DB::table('client_returns AS CR')
                ->join('client_sales AS CS', 'CS.clsa_pk', '=', 'CR.clsa_fk')
                ->join('clients AS C', 'C.clie_pk', '=', 'CR.clie_fk')
                ->join('stores AS S', 'S.stor_pk', '=', 'CR.stor_fk')
                ->leftjoin('return_motives AS RM', 'RM.remo_pk', '=', 'CR.remo_fk')
                ->select(
                    'CR.clre_pk',
                    'CR.clre_observation',
                    'CR.clre_status',
                    DB::raw('
                        (CASE 
                            WHEN CR.clre_status = 0 THEN "Cancelada" 
                            WHEN CR.clre_status = 1 THEN "Pendiente" 
                            WHEN CR.clre_status = 2 THEN "Finalizada" 
                            ELSE "" END
                        ) AS clre_status_description'),
                    'CR.created_at',
            
                    'CS.clsa_pk',
                    'CS.clsa_identifier',

                    'C.clie_pk',
                    'C.clie_identifier',
                    'C.clie_name',
                    'C.clie_rfc',                           

                    'S.stor_pk',
                    'S.stor_name',

                    'RM.remo_pk',
                    'RM.remo_description',
                )
                ->orderByDesc('CR.clre_pk')
                ->get();
            }
            else
            {
                $vClientReturns = DB::table('client_returns AS CR')
                ->join('client_sales AS CS', 'CS.clsa_pk', '=', 'CR.clsa_fk')
                ->join('clients AS C', 'C.clie_pk', '=', 'CR.clie_fk')
                ->join('stores AS S', 'S.stor_pk', '=', 'CR.stor_fk')
                ->leftjoin('return_motives AS RM', 'RM.remo_pk', '=', 'CR.remo_fk')
                ->select(
                    'CR.clre_pk',
                    'CR.clre_observation',
                    'CR.clre_status',
                    DB::raw('
                        (CASE 
                            WHEN CR.clre_status = 0 THEN "Cancelada" 
                            WHEN CR.clre_status = 1 THEN "Pendiente" 
                            WHEN CR.clre_status = 2 THEN "Finalizada" 
                            ELSE "" END
                        ) AS clre_status_description'),
                    'CR.created_at',
            
                    'CS.clsa_pk',
                    'CS.clsa_identifier',

                    'C.clie_pk',
                    'C.clie_identifier',
                    'C.clie_name',
                    'C.clie_rfc',                           

                    'S.stor_pk',
                    'S.stor_name',

                    'RM.remo_pk',
                    'RM.remo_description',
                )
                ->where('S.stor_pk','=',$vStore)
                ->orderByDesc('CR.clre_pk')
                ->get();
            }
            
            return $this->dbResponse($vClientReturns, 200, null, 'Lista de Devoluciones de Clientes');
          
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
            'clsa_pk' => 'required|int' // PK Venta Cliente
        ]);

        if ($vVal->fails()) {
            return $this->dbResponse(null, 500, $vVal->errors(), 'Detalle de Validación');
        }

        try {
            //Asignacion de variables
           $vclsa_pk = $vInput['clsa_pk'];

            $vClientSale = ClientSale::where('clsa_pk', '=', $vclsa_pk)
                ->whereIn('clsa_status', [2, 3])
                ->first();

            if($vClientSale)
            { 
                $vClientReturn = ClientReturn::where('clsa_fk', '=', $vclsa_pk)->first();

                if($vClientReturn)
                {

                }
                else
                {

                    //Inserción Encabezado de Devolución Cliente
                    $vCRI = new ClientReturn();
                    $vCRI->clsa_fk = $vClientSale->clsa_pk;
                    $vCRI->clie_fk = $vClientSale->clie_fk;
                    $vCRI->stor_fk = $vClientSale->stor_fk;
                    $vCRI->clre_status = 1;
                    $vCRI->save();

                    //Asignación de PK de Devolución Proveedor
                    $vclre_pk = $vCRI->clre_pk; 

                    //////////////////  Inserción de Log  //////////////////
                    $this->getstorelog('client_returns', $vclre_pk, 1);


                    //Insertar Detallado de Devolución
                    $vSelCSD = ClientSaleDetail::where('clsa_fk', '=', $vclsa_pk)->where('clsd_status', '=', 1)
                    ->select(
                        array(
                            DB::raw("$vclre_pk AS clre_fk"),
                            'prod_fk AS prod_fk',
                            'meas_fk AS meas_fk',
                            DB::raw("0 AS clrd_quantity"),
                            'clsd_quantity AS clrd_quantity_sale',
                            'clsd_price AS clrd_price',
                            DB::raw("1 AS clrd_status"),
                            DB::raw("NOW() AS created_at"),
                            DB::raw("NOW() AS updated_at")
                        )
                    );

                    DB::table('client_return_details')
                        ->insertUsing(
                            [
                                'clre_fk',
                                'prod_fk', 
                                'meas_fk',
                                'clrd_quantity', 
                                'clrd_quantity_sale', 
                                'clrd_price', 
                                'clrd_status', 
                                'created_at', 
                                'updated_at'
                            ]
                        , $vSelCSD);
                }


                $vClientReturns = DB::table('client_returns AS CR')
                    ->join('client_sales AS CS', 'CS.clsa_pk', '=', 'CR.clsa_fk')
                    ->join('clients AS C', 'C.clie_pk', '=', 'CR.clie_fk')
                    ->join('stores AS S', 'S.stor_pk', '=', 'CR.stor_fk')
                    ->leftjoin('return_motives AS RM', 'RM.remo_pk', '=', 'CR.remo_fk')
                    ->select(
                        'CR.clre_pk',
                        'CR.clre_observation',
                        'CR.clre_status',
                        'CR.created_at',
                
                        'CS.clsa_pk',
                        'CS.clsa_identifier',

                        'C.clie_pk',
                        'C.clie_identifier',
                        'C.clie_name',
                        'C.clie_rfc',                           

                        'S.stor_pk',
                        'S.stor_name',

                        'RM.remo_pk',
                        'RM.remo_description',
                    )
                    ->where('CR.clsa_fk', '=', $vclsa_pk)
                    ->orderByDesc('CR.clre_pk')
                    ->first();

                $vClientReturnDetails = DB::table('client_return_details AS CRD')
                    ->join('products AS P', 'P.prod_pk', '=', 'CRD.prod_fk')
                    ->join('measurements AS M', 'M.meas_pk', '=', 'CRD.meas_fk')
                    ->select(
                        'CRD.clrd_pk',
                        'CRD.clre_fk',

                        'P.prod_pk',
                        'P.prod_identifier',
                        'P.prod_name',

                        'M.meas_pk',
                        'M.meas_name',
                        'M.meas_abbreviation',

                        'CRD.clrd_quantity',
                        'CRD.clrd_quantity_sale',
                        'CRD.clrd_price',
                        'CRD.clrd_status'
                    )
                    ->where('CRD.clre_fk', '=', $vClientReturns->clre_pk)
                    ->where('CRD.clrd_status', '=', 1)
                    ->get();




                    
                $vData =
                    [
                        'ClientReturns' => $vClientReturns, 
                        'ClientReturnDetails' => $vClientReturnDetails
                    ];

                return $this->dbResponse($vData, 200, null, 'Devolución de Cliente');
            }
            else
            {
                return $this->dbResponse(null, 404, null, 'Venta No Encontrada');
            }

        } 
        catch (Throwable $vTh) 
        {
            return $vTh;
            return $this->dbResponse(null, 500, $vTh, 'Detalle Interno, informar al Administrador del Sistema.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ClientReturn  $clientReturn
     * @return \Illuminate\Http\Response
     */
    public function show($clre_pk)
    {
        try 
        {
            //Asignacion de variables
            $vclre_pk = $clre_pk;

            if ($vclre_pk == '' || $vclre_pk == 0) {
                return $this->dbResponse(null, 500, null, 'Ingresar Llave Primaria Devolución');
            }

            $vCR = DB::table('client_returns AS CR')
                ->join('client_sales AS CS', 'CS.clsa_pk', '=', 'CR.clsa_fk')
                ->join('clients AS C', 'C.clie_pk', '=', 'CR.clie_fk')
                ->join('stores AS S', 'S.stor_pk', '=', 'CR.stor_fk')
                ->leftjoin('return_motives AS RM', 'RM.remo_pk', '=', 'CR.remo_fk')
                ->select
                (
                    'CR.clre_pk',
                    'CR.clre_observation',
                    'CR.clre_status',
                    'CR.created_at',
            
                    'CS.clsa_pk',
                    'CS.clsa_identifier',

                    'C.clie_pk',
                    'C.clie_identifier',
                    'C.clie_name',
                    'C.clie_rfc',                           

                    'S.stor_pk',
                    'S.stor_name',

                    'RM.remo_pk',
                    'RM.remo_description',
                )
                ->where('CR.clre_pk', '=', $vclre_pk)
                ->first();

            if($vCR)
            {
                $vCRD = DB::table('client_return_details AS CRD')
                    ->join('products AS P', 'P.prod_pk', '=', 'CRD.prod_fk')
                    ->join('measurements AS M', 'M.meas_pk', '=', 'CRD.meas_fk')
                    ->select(
                        'CRD.clrd_pk',
                        'CRD.clre_fk',

                        'P.prod_pk',
                        'P.prod_identifier',
                        'P.prod_name',

                        'M.meas_pk',
                        'M.meas_name',
                        'M.meas_abbreviation',

                        'CRD.clrd_quantity',
                        'CRD.clrd_quantity_sale',
                        'CRD.clrd_price',
                        'CRD.clrd_status'
                    )
                    ->where('CRD.clre_fk', '=', $vclre_pk)
                    ->where('CRD.clrd_status', '=', 1)
                    ->get();
                        
                    $vData =
                        [
                            'ClientReturns' => $vCR, 
                            'ClientReturnDetails' => $vCRD
                        ];

                return $this->dbResponse($vData, 200, null, 'Devolución de Cliente');
            }
            else
            {
                return $this->dbResponse(null, 404, null, 'Devolución de Cliente NO Encontrada');
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
     * @param  \App\ClientReturn  $clientReturn
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientReturn $clientReturn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ClientReturn  $clientReturn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r)
    {
        $vInput = $r->all();

        $vVal = Validator::make($vInput, [
            'clre_pk' => 'required|int', // PK Devolucion Cliente
            'remo_fk' => 'required|int', // PK Motivo Devolucion
            'bocu_fk' => 'required|int', // PK Caja
        ]);

        if ($vVal->fails()) {
            return $this->dbResponse(null, 500, $vVal->errors(), 'Detalle de Validación');
        }

        try {
            //Asignacion de variables
           $vclre_pk = $vInput['clre_pk'];
           $vremo_fk = $vInput['remo_fk'];
           $vclre_observation = $vInput['clre_observation'];
           $vbocu_fk = $vInput['bocu_fk'];

            $vClientReturn = ClientReturn::where('clre_pk', '=', $vclre_pk)->first();

            if($vClientReturn)
            { 

                //Modificar Devolución (Finalizar)
                DB::table('client_returns')
                ->where('clre_pk', '=', $vclre_pk)
                ->update([
                    'clre_status' =>  2, 
                    'remo_fk' =>  $vremo_fk, 
                    'clre_observation' =>  $vclre_observation
                ]);
                
                //////////////////  Inserción de Log  //////////////////
                $this->getstorelog('client_returns', $vclre_pk, 2);


                //Anexar Monto por Devolución

                //Consultar Deuda Cliente
                $vCDSel = ClientDebt::where('clsa_fk', '=', $vClientReturn->clsa_fk)->first();
                //Validar Si si aplica inserción de pago de deuda
                if($vCDSel)
                {
                    //Consultar Monto de la Devolución
                    $vMontoDevolucion = ClientReturnDetail::where('clre_fk', '=', $vclre_pk)->where('clrd_status', '=', 1)->sum(\DB::raw('clrd_price * clrd_quantity')); 

                    //Insertar Pago del cliente
                    $vCPC = new ClientPayment();        
                    $vCPC->clie_fk = $vClientReturn->clie_fk;
                    $vCPC->clde_fk = $vCDSel->clde_pk;
                    $vCPC->pash_fk = 5;
                    $vCPC->bocu_fk = $vbocu_fk;
                    $vCPC->clpa_amount = $vMontoDevolucion;
                    $vCPC->clpa_reference = 'Devolución';
                    $vCPC->save();

                    //Asignación de PK Pago Cliente
                    $vclpa_pk = $vCPC->clpa_pk;

                    //////////////////  Inserción de Log  //////////////////
                    $this->getstorelog('client_payments', $vclpa_pk, 1);

                }






                /////////////////////////////////Anexo de Inventario

                //Consultar Detallado de Devolución
                $vPPD = DB::table('client_return_details AS CRD')
                    ->select('prod_fk','clrd_quantity')
                    ->where('CRD.clre_fk', '=', $vclre_pk)
                    ->where('CRD.clrd_status', '=', 1)
                    ->get();
                
                foreach($vPPD as $vP)
                {
                    $vprod_pk = $vP->prod_fk; //Llave primaria de producto

                    //Consultar Producto
                    $vSelProd = Product::where('prod_pk', '=', $vprod_pk)->first();

                    //Validar si es un producto principal o un derivado
                    if($vSelProd->prod_main_pk == NULL)
                    {
                        //Buscar Producto en el Inventario 
                        $vPI = ProductInventory::where('prod_fk', '=', $vprod_pk)
                            ->where('prin_status', '=', 1)
                            ->where('stor_fk', '=', $vClientReturn->stor_fk)
                            ->first();
                        $vclrd_quantity = $vP->clrd_quantity; //Catidad de la devolución
                    }
                    else                    
                    {
                        //Buscar el Producto en el Inventario de la Sucursal || Producto Principal
                        $vPI = ProductInventory::join('products AS P', 'P.prod_pk', '=', 'prod_fk')
                            ->where('prod_fk', '=', $vSelProd->prod_main_pk)
                            ->where('prin_status', '=', 1)
                            ->where('stor_fk', '=', $vClientReturn->stor_fk)
                            ->first();

                        $vclrd_quantity = $vP->clrd_quantity * $vSelProd->prod_fact_convert;
                    }

                    $vprin_pk = $vPI->prin_pk; //Llave primaria del Inventario
                    $vprin_stock = $vPI->prin_stock; //Stock actual

                    //Modificar Producto Inventario
                    $vPIU = ProductInventory::find($vprin_pk);
                    $vPIU->prin_stock = $vprin_stock + $vclrd_quantity;
                    $vPIU->save();

                }


                return $this->dbResponse($vclre_pk, 200, null, 'Devolución Finalizada Correctamente');
            }
            else
            {
                return $this->dbResponse($vclre_pk, 404, null, 'Devolución NO Encontrada');
            }

        } 
        catch (Throwable $vTh) 
        {
            return $this->dbResponse(null, 500, $vTh->getMessage(), 'Detalle Interno, informar al Administrador del Sistema.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ClientReturn  $clientReturn
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientReturn $clientReturn)
    {
        //
    }
}
