<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('systems', function (Blueprint $table) {
            $table->bigIncrements('syst_pk');
            $table->bigInteger('syst_clie_order'); //Folio Cliente Pedido
            $table->bigInteger('syst_clie_sale'); //Folio Cliente Venta
            $table->bigInteger('syst_prov_order'); //Folio Proveedor Orden de compra
            $table->bigInteger('syst_prov_purchase'); //Folio Proveedor Compra
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('systems');
    }
}
