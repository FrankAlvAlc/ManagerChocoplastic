<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Inventario
        Schema::create('product_inventories', function (Blueprint $table) {
            $table->bigIncrements('prin_pk'); //Llave Primaria

            $table->bigInteger('prod_fk')->unsigned(); //Llave Foranea Catálogo de Productos
            $table->foreign('prod_fk')->references('prod_pk')->on('products')->onUpdate('cascade');

            $table->bigInteger('stor_fk')->unsigned(); //Llave Foranea Catálogo Sucursal
            $table->foreign('stor_fk')->references('stor_pk')->on('stores')->onUpdate('cascade');

            $table->integer('prin_stock'); //Stock

            $table->smallInteger('prin_status')->default(1); //Estatus

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
        Schema::dropIfExists('product_inventories');
    }
}
