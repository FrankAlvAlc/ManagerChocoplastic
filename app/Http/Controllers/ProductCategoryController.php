<?php

namespace App\Http\Controllers;

use App\ProductCategory;
use Illuminate\Http\Request;
use DB;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function CategoriesList(){
        $stores = DB::table('product_categories AS P')
        ->get();
        
        
        return response()->json([
            'success' => true,
            'message' => 'Stores loaded',
            'data' => $stores,
        ], 200);
    }

    public function Categories(){
        $stores = DB::table('product_categories AS P')
        ->where('prca_status','=','1')
        ->get();
        
        
        return response()->json([
            'success' => true,
            'message' => 'Stores loaded',
            'data' => $stores,
        ], 200);
    }

    public function add(Request $request)
    {        
       
        $stores = new ProductCategory();        
        $stores->prca_name = $request->prca_name;
        $stores->prca_status = $request->prca_status;

        $stores->save();
    }

    public function update(Request $request)
    {        
        
        \DB::update("update product_categories set"
        . "   prca_name = '" . $request->prca_name 
        . "', prca_status = " .  $request->prca_status
        . " where prca_pk = ". $request->prca_pk);

    }

    public function delete(Request $request)
    { 
        \DB::update("update product_categories set prca_status = '0' where prca_pk = ". $request->prca_pk );
    }
}