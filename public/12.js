(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{39:function(t,e,a){"use strict";a.r(e);var o=a(2),i=a(1),s=a.n(i);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){return{clor_pk:this.$route.params.id,valid:!1,sales:[],stores:[],clients:[],payments:[],paymentsShapes:[],paymentsOriginal:[],saleHeader:"",saleDetail:[],desserts:[],selectClient:"",selectStore:"",selectpame:"",selectpash:"",snackbar:!1,timeout:2e3,subtotal:0,total:0,cambio:0,iva:0,efectivo:0,tarjeta:0,monto:0,referencia:"",textMsg:"",editadoPago:{clsa_fk:0,pash_fk:0,bocu_fk:0,cpam_amount:0,cpam_reference:""},editadoPagoDefault:{clsa_fk:0,pash_fk:0,bocu_fk:0,cpam_amount:0,cpam_reference:""},editado:{clsd_pk:0,clsd_quantity:0,clsd_discountrate:0},editadoSale:{clsa_pk:0,clie_fk:0,pame_fk:0,stor_fk:0,clde_amount:0,clpa_amount_cash:0,clpa_amount_transfer:0,clpa_amount_change:0},editadoPash:{clsa_fk:0,pash_fk:0,cpam_amount:0,cpam_reference:0},enabledStore:!1,dialogcredito:!1,dialogcontado:!1,dialogPago:!1,storeUser:"",minNumberRules:[function(t){return!!t||"Requerido."},function(t){return t>0||"El número debe ser mayor o igual a cero"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,dialogQuestionDeletePago:!1,messageQuestion:"",pagos:[],montototal:0,bocu_pk:0,boxEnabledDetailOrder:!1}},created:function(){this.createsale(),this.getClients(),this.getPaymentShow(),this.getStores(),this.getUsers(),this.getPaymentShapes(),this.obtenerCaja()},methods:{obtenerCaja:function(){var t=this;axios.get("/boxcut").then((function(e){console.log("/boxcut"),null==e.data.data?t.boxEnabledDetailOrder=!0:(t.boxEnabledDetailOrder=!1,t.bocu_pk=e.data.data.bocu_pk)})).catch((function(t){console.log(t)}))},getUsers:function(){var t=this;axios.get("/listUser").then((function(e){t.users=e.data.data,t.users.store_id>0?(t.enabledStore=!0,t.selectStore=t.stores.find((function(e){return e.stor_pk==t.users.store_id}))):t.enabledStore=!1})).catch((function(e){t.errors.push(e)}))},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var i=t<0?"-":"",s=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),n=s.length>3?s.length%3:0;return i+(n?s.substr(0,n)+o:"")+s.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+o)+(e?a+Math.abs(t-s).toFixed(e).slice(2):"")}catch(t){console.log(t)}},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},onQuantityChange:function(t){var e=this;this.editado=Object.assign({},t),axios.post("/client_sale_details/update",this.editado).then((function(t){console.log(e.editado),console.log(t),e.getTotal()})).catch((function(t){e.errors.push(t)}))},onChangeClient:function(){1==this.selectClient.clie_pk?this.getPaymentShow():this.getPayment()},finalizar:function(){this.efectivo=0,this.tarjeta=0,this.getPagos(),""!=this.selectClient&&null!=this.selectClient?""!=this.selectpame&&null!=this.selectpame?this.enabledStore||""!=this.selectStore&&null!=this.selectStore?(this.editadoSale.clsa_pk=this.saleHeader.clsa_pk,this.editadoSale.clie_fk=this.selectClient.clie_pk,this.editadoSale.pame_fk=this.selectpame.pame_pk,this.enabledStore?this.editadoSale.stor_fk=this.users.store_id:this.editadoSale.stor_fk=this.selectStore.stor_pk,1==this.editadoSale.pame_fk?(this.dialogcontado=!0,this.getcambio()):this.dialogcredito=!0):this.normal("Alerta","Debe seleccionar una sucursal","error"):this.normal("Alerta","Debe seleccionar un método de pago","error"):this.normal("Alerta","Debe seleccionar un cliente","error")},finalizarVenta:function(){if(1==this.editadoSale.pame_fk&&!(parseFloat(this.total)-parseFloat(this.montototal)<=0))return void this.normal("Notificación","Los montos de pago deben ser igual al total","success");this.messageQuestion="¿Desea finalizar la Venta?",this.dialogQuestion=!0},guardaFinalizar:function(){var t=this;this.editadoSale.clde_amount=this.total,this.editadoSale.clpa_amount_change=this.cambio,this.clpa_amount_change,this.editadoSale.bocu_fk=this.bocu_pk,axios.post("/clientsales/update",this.editadoSale).then((function(e){if(200==e.data.code){if(1==t.editadoSale.pame_fk){var a=t.$router.resolve({path:"/client/sales/printOrder/"+e.data.data});window.open(a.href,"_blank")}if(2==t.editadoSale.pame_fk){var o=t.$router.resolve({path:"/client/sales/printCredit/"+e.data.data});window.open(o.href,"_blank")}t.normal("Notificación","¡Actualizado correctamente!","success"),t.$router.push("/sales")}else t.normal("Notificación",e.data.message,"error")})).catch((function(e){t.errors.push(e)}))},createsale:function(){var t=this;this.loading=!0,axios.post("/clientsales?clor_pk="+this.clor_pk).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?(t.sales=e.data.data,t.saleHeader=e.data.data.sale,t.desserts=t.sales.sale_details,console.log("this.saleHeader"),console.log(e.data),t.getTotal()):t.normal("Notificación",e.data.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))},abrirPago:function(){this.editadoPago.cpam_amount=0,this.dialogPago=!0},agregarPago:function(){var t=this;this.loading=!0,this.editadoPago.clsa_fk=this.saleHeader.clsa_pk,""!=this.selectpash&&null!=this.selectpash?(this.editadoPago.pash_fk=this.selectpash.pash_pk,this.editadoPago.bocu_fk=this.bocu_pk,console.log(this.editadoPago),axios.post("/client/payment/amounts",this.editadoPago).then((function(e){setTimeout((function(){return t.loading=!1}),500),console.log(e.data),null!=e.data.data?(t.textMsg="¡Actualizado correctamente!",t.normal("Notificación","¡Actualizado correctamente!","success"),t.dialogPago=!1,t.getPagos()):t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))):this.normal("Alerta","Debe seleccionar una forma de pago","error")},getPagos:function(){var t=this;this.loading=!0,axios.get("/client/payment/amounts/"+this.saleHeader.clsa_pk).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?(t.pagos=e.data.data,t.getEfectivo()):t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log("Error al cargar los datos"),console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))},getcambio:function(){this.efectivo-this.total>0?this.cambio=this.efectivo-this.total:this.cambio=0},getTotal:function(){this.subtotal=0,this.subtotal=0,this.descuento=0;for(var t=0;t<this.desserts.length;t++){var e=this.desserts[t].clsd_price*this.desserts[t].clsd_quantity*(1-this.desserts[t].clsd_discountrate/100);this.subtotal=this.subtotal+e}this.total=this.subtotal+this.iva},getEfectivo:function(){this.efectivo=0,this.montototal=0;for(var t=0;t<this.pagos.length;t++)console.log(this.pagos[t]),"Efectivo"==this.pagos[t].pash_name&&(this.efectivo=parseFloat(this.efectivo)+parseFloat(this.pagos[t].cpam_amount)),this.montototal=parseFloat(this.montototal)+parseFloat(this.pagos[t].cpam_amount);this.getcambio()},getClients:function(){var t=this;axios.get("/clientsget").then((function(e){t.clients=e.data.data,t.selectClient=t.clients[0]})).catch((function(t){console.log(t)}))},getPaymentShapes:function(){var t=this;axios.get("/paymentshapesget").then((function(e){t.paymentsShapes=e.data.data})).catch((function(t){console.log(t)}))},getPayment:function(){var t=this;axios.get("/paymentmethodsget").then((function(e){t.payments=e.data.data})).catch((function(t){console.log(t)}))},getPaymentShow:function(){var t=this;axios.get("/paymentmethodsshow/1").then((function(e){console.log(e.data.data),t.payments=e.data.data,t.selectpame=t.payments[0]})).catch((function(t){console.log(t)}))},getStores:function(){var t=this;axios.get("/storeget").then((function(e){t.stores=e.data.data})).catch((function(t){console.log(t)}))},borrar:function(t){this.editado=Object.assign({},t),this.dialogQuestionDelete=!0},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},borrarPago:function(t){this.editadoPago=Object.assign({},t),this.dialogQuestionDeletePago=!0},guardaBorrarPago:function(){var t=this;this.dialogQuestionDeletePago=!1,axios.post("/client/payment/amounts/destroy",this.editadoPago).then((function(e){t.textMsg="¡Eliminado correctamente!",t.normal("Notificación",t.textMsg,"success"),t.getPagos()}))},delete:function(){var t=this;axios.post("/client_sale_details/destroy",this.editado).then((function(e){t.textMsg="¡Eliminado correctamente!",t.normal("Notificación",t.textMsg,"success"),t.createsale()}))},actualizar:function(t){var e=this;this.editado=Object.assign({},t),axios.post("/client_sale_details/update",this.editado).then((function(t){e.textMsg="¡Actualizado correctamente!",e.normal("Notificación",e.textMsg,"success")})).catch((function(t){e.errors.push(t)}))},normal:function(t,e,a){this.notice=new s.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:a})}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(o.b)("auth",["can"]))},c=a(0),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-alert",{attrs:{type:"warning"},model:{value:t.boxEnabledDetailOrder,callback:function(e){t.boxEnabledDetailOrder=e},expression:"boxEnabledDetailOrder"}},[t._v("\r\n            Para realizar una venta, primero debe abrir caja.\r\n        ")]),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestion,callback:function(e){t.dialogQuestion=e},expression:"dialogQuestion"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Información")]),t._v(" "),a("v-card-text",[t._v(t._s(t.messageQuestion)+".")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestion=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaFinalizar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestionDelete,callback:function(e){t.dialogQuestionDelete=e},expression:"dialogQuestionDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Alerta")]),t._v(" "),a("v-card-text",[t._v("¿Está seguro de borrar el registro?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestionDelete=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaBorrar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestionDeletePago,callback:function(e){t.dialogQuestionDeletePago=e},expression:"dialogQuestionDeletePago"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Alerta")]),t._v(" "),a("v-card-text",[t._v("¿Está seguro de borrar el registro?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestionDeletePago=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaBorrarPago}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\r\n                Cerrar\r\n            ")])],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",{staticClass:"subheading font-weight-bold"},[t._v("No. Pedido: "+t._s(t.saleHeader.clor_fk))]),t._v(" "),a("v-divider"),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-combobox",{attrs:{items:t.clients,label:"Cliente","item-text":"clie_name","item-value":"clie_pk",filled:"",chips:"",placeholder:"Seleccionar Cliente"},on:{change:function(e){return t.onChangeClient()}},model:{value:t.selectClient,callback:function(e){t.selectClient=e},expression:"selectClient"}})],1)],1),t._v(" "),a("v-col",{attrs:{cols:"4"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-label",[a("h4",[t._v("Vendedor:")]),t._v(t._s(t.saleHeader.user)+"\r\n                                    ")])],1)],1),t._v(" "),a("v-col",{attrs:{cols:"4"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-label",[a("h4",[t._v("Sucursal:")]),t._v(" "+t._s(t.saleHeader.stor_name)+"\r\n                                    ")])],1)],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-combobox",{attrs:{required:"",items:t.payments,label:"Métodos de pago","item-text":"pame_name","item-value":"pame_pk",filled:"",chips:"",placeholder:"Seleccionar Cliente"},model:{value:t.selectpame,callback:function(e){t.selectpame=e},expression:"selectpame"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card",{attrs:{justify:"end"}},[a("v-btn",{attrs:{disabled:!t.valid,dark:"",color:"success"},on:{click:t.finalizar}},[t._v("FINALIZAR")])],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("ID")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Producto")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Unidad Medida")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Cantidad")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Precio")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Descuento(%)")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Importe")]),t._v(" "),a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[t._l(t.desserts,(function(e){return a("tr",{key:e.prod_name},[a("td",[t._v(t._s(e.prod_identifier))]),t._v(" "),a("td",[t._v(t._s(e.prod_name))]),t._v(" "),a("td",[t._v(t._s(e.meas_name))]),t._v(" "),a("td",[a("v-text-field",{attrs:{label:"",required:""},on:{change:function(a){return t.onQuantityChange(e)}},model:{value:e.clsd_quantity,callback:function(a){t.$set(e,"clsd_quantity",a)},expression:"item.clsd_quantity"}})],1),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(e.clsd_price)))]),t._v(" "),a("td",[t.can("discount")?a("v-text-field",{attrs:{label:"",required:""},on:{change:function(a){return t.onQuantityChange(e)}},model:{value:e.clsd_discountrate,callback:function(a){t.$set(e,"clsd_discountrate",a)},expression:"item.clsd_discountrate"}}):a("span",[t._v("0")])],1),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(e.clsd_quantity*e.clsd_price*(1-e.clsd_discountrate/100))))]),t._v(" "),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.borrar(e)}}},[t._v("mdi-delete")])],1)])})),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Subtotal")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.subtotal)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("I.V.A.")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.iva)))]),t._v(" "),a("td")])],2),t._v(" "),a("tfoot",[a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Total")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.total)))]),t._v(" "),a("td")])])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogcredito,callback:function(e){t.dialogcredito=e},expression:"dialogcredito"}},[a("v-card",[a("v-card-title",[t._v("Crédito:")]),t._v(" "),a("v-card-text",[a("v-row",[a("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.abrirPago()}}},[t._v("Agregar pago")])],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Forma de Pago")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Monto")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Referencia")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",t._l(t.pagos,(function(e){return a("tr",{key:e.pash_name},[a("td",[t._v(t._s(e.pash_name))]),t._v(" "),a("td",[t._v(t._s(e.cpam_amount))]),t._v(" "),a("td",[t._v(t._s(e.cpam_reference))]),t._v(" "),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.borrarPago(e)}}},[t._v("mdi-delete")])],1)])})),0),t._v(" "),a("tfoot",[a("tr",[a("td"),t._v(" "),a("td",[t._v("Total")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.montototal)))]),t._v(" "),a("td")])])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("tr",[a("td",[t._v("Subtotal")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.subtotal)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Total I.V.A.")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.iva)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Total")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.total)))])]),t._v(" "),a("tr",[a("td",[t._v("Total Crédito")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.total-t.efectivo-t.tarjeta)))])]),t._v(" "),a("v-btn",{on:{click:function(e){t.dialogcredito=!t.dialogcredito}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"warning"},on:{click:t.finalizarVenta}},[t._v("Confirmar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"640"},model:{value:t.dialogcontado,callback:function(e){t.dialogcontado=e},expression:"dialogcontado"}},[a("v-card",[a("v-card-title",[t._v("Contado")]),t._v(" "),a("v-card-text",[a("v-row",[a("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.abrirPago()}}},[t._v("Agregar pago")])],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Forma de Pago")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Monto")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Referencia")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",t._l(t.pagos,(function(e){return a("tr",{key:e.pash_name},[a("td",[t._v(t._s(e.pash_name))]),t._v(" "),a("td",[t._v(t._s(e.cpam_amount))]),t._v(" "),a("td",[t._v(t._s(e.cpam_reference))]),t._v(" "),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.borrarPago(e)}}},[t._v("mdi-delete")])],1)])})),0),t._v(" "),a("tfoot",[a("tr",[a("td"),t._v(" "),a("td",[t._v("Total")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.montototal)))]),t._v(" "),a("td")])])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("tr",[a("td",[t._v("Cambio")]),t._v(" "),a("td",[a("span",[t._v("$"+t._s(t.formatMoney(t.cambio))+" ")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Subtotal")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.subtotal)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Total I.V.A.")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.iva)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Total")]),t._v(" "),a("td",[t._v(" $"+t._s(t.formatMoney(t.total)))])]),t._v(" "),a("v-btn",{on:{click:function(e){t.dialogcontado=!t.dialogcontado}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"success"},on:{click:t.finalizarVenta}},[t._v("Confirmar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"640"},model:{value:t.dialogPago,callback:function(e){t.dialogPago=e},expression:"dialogPago"}},[a("v-card",[a("v-card-title",[t._v("Agregar pago")]),t._v(" "),a("v-card-text",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-combobox",{attrs:{required:"",items:t.paymentsShapes,label:"Forma de pago","item-text":"pash_name","item-value":"pash_pk",filled:"",chips:"",placeholder:"Seleccionar una opción"},model:{value:t.selectpash,callback:function(e){t.selectpash=e},expression:"selectpash"}})],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{required:"",label:"Monto: ",rules:t.minNumberRules,prefix:"$",type:"number"},on:{change:function(e){return t.getcambio()}},model:{value:t.editadoPago.cpam_amount,callback:function(e){t.$set(t.editadoPago,"cpam_amount",e)},expression:"editadoPago.cpam_amount"}})],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Referencia: "},model:{value:t.editadoPago.cpam_reference,callback:function(e){t.$set(t.editadoPago,"cpam_reference",e)},expression:"editadoPago.cpam_reference"}})],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-btn",{on:{click:function(e){t.dialogPago=!t.dialogPago}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"primary",disabled:!t.valid},on:{click:t.agregarPago}},[t._v("\r\n                            Agregar\r\n                        ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);