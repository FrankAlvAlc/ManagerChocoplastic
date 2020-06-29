<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Cliente || Pagos
        Schema::create('client_payments', function (Blueprint $table) {
            $table->bigIncrements('clpa_pk'); //Llave Primaria

            $table->bigInteger('prov_fk')->unsigned(); //Llave Foranea Catálogo de Proveedores
            $table->foreign('prov_fk')->references('prov_pk')->on('providers')->onUpdate('cascade');

            $table->bigInteger('clde_fk')->unsigned(); //Llave Foranea Cliente Deuda 
            $table->foreign('clde_fk')->references('clde_pk')->on('client_debts')->onUpdate('cascade');
            
            $table->bigInteger('pash_fk')->unsigned(); //Llave Foranea Catalgo Forma de Pago 
            $table->foreign('pash_fk')->references('pash_pk')->on('payment_shapes')->onUpdate('cascade');
            
            $table->decimal('clpa_amount', 12, 2); //Monto
            $table->smallInteger('clpa_status')->default(1); //Estatus
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
        Schema::dropIfExists('client_payments');
    }
}