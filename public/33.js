(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{60:function(t,e,a){"use strict";a.r(e);var r=a(2),o=a(1),i=a.n(o);function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={data:function(){return{headers:[{text:"Ident",value:"prod_identifier"},{text:"Nombre",value:"prod_name"},{text:"Unidad",value:"meas_fk_input_name"},{text:"Tipo",value:"bulk"},{text:"",value:"action",width:"20%"}],prpo_pk:this.$route.params.id,directa:this.$route.params.directa,prpu_pk:0,valid:!1,validProvider:!1,stores:[],providers:[],desserts:[],products:[],selectProv:"",selectStore:"",payments:[],selectpame:"",search:"",observation:"",snackbar:!1,timeout:2e3,subtotal:0,descuento:0,total:0,iva:0,ieps:0,textMsg:"",editadoHeader:{prpu_pk:0,prov_fk:0,prov_name:"",prpo_fk:0,stor_fk:0,store_name:"",pame_fk:0,pame_name:"",prpu_identifier:"",prpu_type:0,prpu_status:0,created_at:"",updated_at:""},editado:{prpd_pk:0,prpd_quantity:0,prpd_price:0,prpd_discountrate:0,prod_pk:0,prod_identifier:0,prod_name:"",prod_description:"",meas_name:""},defaultItem:{prpd_pk:0,prpd_quantity:0,prpd_price:0,prpd_discountrate:0,prod_pk:0,prod_identifier:0,prod_name:"",prod_description:"",meas_name:""},detail:{prpu_pk:0,pame_fk:0,prov_fk:0,stor_fk:0,prpo_fk:0,prod_fk:0,prpd_pk:0,prpd_quantity:0,prpd_price:0,prpd_discountrate:0,prod_identifier:0,prod_name:"",meas_fk:0,prod_ieps:0,prod_iva:0,syst_ieps:0,syst_iva:0},detailDefault:{prpo_fk:0,prod_fk:0,prpd_pk:0,prpd_quantity:0,prpd_price:0,prpd_discountrate:0,prod_identifier:0,prod_name:"",meas_fk:0,prod_ieps:0,prod_iva:0,syst_ieps:0,syst_iva:0},orderHeader:{prpu_pk:0,prpo_pk:0,prov_fk:0,stor_fk:0,pame_fk:0,prpu_amount:0,prpu_observation:""},users:"",enabledStore:!1,dialogcredito:!1,dialogcontado:!1,dialog:!1,loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:"",dialogAgregar:!1,measurements:[],selectmeas:"",minNumberRules:[function(t){return!!t||"Requerido."},function(t){return t>0||"El número debe ser mayor o igual a cero"}]}},created:function(){this.getStores(),this.getProviders(),this.createCompra(),this.getPayment(),this.getUsers()},methods:{getUsers:function(){var t=this;axios.get("/listUser").then((function(e){t.users=e.data.data,t.users.store_id>0?t.enabledStore=!0:t.enabledStore=!1,console.log("this.enabledStore"),console.log(t.enabledStore)})).catch((function(e){t.errors.push(e)}))},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),s=i.length>3?i.length%3:0;return o+(s?i.substr(0,s)+r:"")+i.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?a+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){console.log(t)}},getStores:function(){var t=this;axios.get("/storeget").then((function(e){t.stores=e.data.data})).catch((function(t){console.log(t)}))},getProviders:function(){var t=this;axios.get("/providers").then((function(e){t.providers=e.data.data})).catch((function(t){console.log(t)}))},getPayment:function(){var t=this;axios.get("/paymentmethodsget").then((function(e){t.payments=e.data.data})).catch((function(t){console.log(t)}))},getMeasurement:function(t){var e=this;axios.get("/product/measurements/"+t).then((function(t){e.measurements=t.data.data;for(var a=0;a<e.measurements.length;a++)e.measurements[a].meas_pk==e.detail.meas_fk&&(e.selectmeas=e.measurements[a])})).catch((function(t){console.log(t)}))},openAgregar:function(t){this.desserts.length>0?this.detail.prpu_pk=this.prpo_pk:this.detail.prpu_pk=0,this.detail.prod_fk=t.prod_pk,this.detail.prpd_quantity=1,this.detail.prpd_price=0,this.detail.prpd_discountrate=0,this.detail.prov_fk=this.selectProv.prov_pk,this.detail.pame_fk=this.selectpame.pame_pk,this.detail.meas_fk=t.meas_fk_input,this.enabledStore?this.detail.stor_fk=this.users.store_id:this.detail.stor_fk=this.selectStore.stor_pk,this.detail.prod_identifier=t.prod_identifier,this.detail.prod_name=t.prod_name,this.getMeasurement(t.prod_pk),this.dialogAgregar=!0},agregar:function(t){var e=this;2!=!this.directa||""!=this.selectProv&&null!=this.selectProv?""!=this.selectpame&&null!=this.selectpame?""!=this.selectmeas&&null!=this.selectmeas?(this.detail.meas_fk=this.selectmeas.meas_pk,axios.post("/provider/purchase/details",this.detail).then((function(t){console.log(e.detail),200==t.data.status.code?(e.textMsg="¡Actualizado correctamente!",e.prpo_pk=t.data.data,e.createCompra(),e.dialogAgregar=!1,e.getTotal()):e.normal("Notificación",t.data.status.message,"error")})).catch((function(t){e.normal("Notificación",response.data.status.message,"error")}))):this.normal("Notificación","Debe seleccionar una unidad de medida","error"):this.normal("Notificación","Debe seleccionar una forma de pago","error"):this.normal("Notificación","Debe seleccionar un proveedor","error")},borrar:function(t){console.log(t),this.editado=Object.assign({},t),this.dialogQuestionDelete=!0},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},delete:function(){var t=this;axios.post("/provider/purchase/details/destroy",this.editado).then((function(e){console.log(e),200==e.data.status.code?(t.textMsg="¡Eliminado correctamente!",t.normal("Notificación",t.textMsg,"success"),t.createCompra()):t.normal("Notificación","Ocurrio un error al eliminar el producto","error")}))},createCompra:function(){var t=this;this.loading=!0,1==this.directa?axios.post("/provider/purchases?prpo_pk="+this.prpo_pk).then((function(e){if(setTimeout((function(){return t.loading=!1}),500),null!=e.data.data){console.log(e.data.data),t.desserts=e.data.data.ProviderPurchaseDetail,t.getTotal(),t.prpu_pk=e.data.data.ProviderPurchase.prpu_pk,t.editadoHeader=e.data.data.ProviderPurchase;var a=0;for(a=0;a<t.providers.length;a++)e.data.data.ProviderPurchase.prov_fk==t.providers[a].prov_pk&&(t.selectProv=t.providers[a]);for(a=0;a<t.stores.length;a++)e.data.data.ProviderPurchase.stor_fk==t.stores[a].stor_pk&&(console.log(a),t.selectStore=t.stores[a])}else t.prpo_pk>0&&t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos11","error")})):axios.get("/provider/purchases/"+this.prpo_pk).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?(console.log("response"),console.log(e),t.desserts=e.data.data.ProviderPurchaseDetail,t.getTotal(),t.prpu_pk=e.data.data.ProviderPurchase.prpu_pk,t.editadoHeader=e.data.data.ProviderPurchase):t.prpo_pk>0&&t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos22","error")}))},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1},buscar:function(){var t=this;this.loading=!0,axios.get("/product/search").then((function(e){setTimeout((function(){return t.loading=!1}),500),t.products=e.data.data,t.dialog=!0,console.log(e.data)})).catch((function(e){t.errors.push(e)}))},onQuantityChange:function(t){var e=this;this.detail.prpd_pk=t.prpd_pk,this.detail.prod_fk=t.prod_pk,this.detail.prpd_quantity=t.prpd_quantity,this.detail.prpd_price=t.prpd_price,this.detail.prpd_discountrate=t.prpd_discountrate,this.detail.prpd_ieps=t.prpd_ieps,this.detail.prpd_iva=t.prpd_iva,axios.post("/provider/purchase/details/update",this.detail).then((function(t){console.log(t),200==t.data.status.code?(e.textMsg="¡Actualizado correctamente!",e.getTotal()):e.normal("Notificación",t.data.status.message,"success")})).catch((function(t){e.errors.push(t)}))},getTotal:function(){this.subtotal=0,this.descuento=0,this.iva=0,this.ieps=0;for(var t=0;t<this.desserts.length;t++){var e=this.desserts[t].prpd_price*this.desserts[t].prpd_quantity,a=e*(1-this.desserts[t].prpd_discountrate/100);this.descuento=this.descuento+e*(this.desserts[t].prpd_discountrate/100),this.subtotal=this.subtotal+a,1==this.desserts[t].prod_iva&&(this.iva=this.iva+a/(1+this.desserts[t].syst_iva/100)*(this.desserts[t].syst_iva/100)),1==this.desserts[t].prod_ieps&&(this.ieps=this.ieps+a*(this.desserts[t].syst_ieps/100))}this.total=this.subtotal+this.ieps,console.log("this.total = "+this.total)},finalizar:function(){this.total<=0?this.normal("Notificación","La orden de compra no puede ser menor o igual a cero","error"):2!=!this.directa||""!=this.selectProv&&null!=this.selectProv?""!=this.selectpame&&null!=this.selectpame?(this.messageQuestion="¿Está seguro de finalizar la compra?",this.dialogQuestion=!0):this.normal("Notificación","Debe seleccionar una forma de pago","error"):this.normal("Notificación","Debe seleccionar un proveedor","error")},guardaFinalizar:function(){var t=this;this.orderHeader.prpu_pk=this.prpu_pk,this.orderHeader.prpo_pk=this.prpo_pk,this.orderHeader.prov_fk=this.selectProv.prov_pk,this.orderHeader.pame_fk=this.selectpame.pame_pk,this.orderHeader.prpu_amount=this.total,this.orderHeader.prpu_observation=this.observation,this.enabledStore?this.orderHeader.stor_fk=this.users.store_id:this.orderHeader.stor_fk=this.selectStore.stor_pk,console.log("this.orderHeader"),console.log(this.orderHeader),axios.post("/provider/purchases/update",this.orderHeader).then((function(e){console.log(e),200==e.data.status.code?(t.textMsg="¡Actualizado correctamente!",t.normal("Notificación","¡Actualizado correctamente!","success"),t.$router.push("/purchaselist")):t.normal("Notificación",e.data.status.code.message,"error")})).catch((function(e){t.errors.push(e)}))},finalizarVenta:function(){var t=this;(console.log(this.total+"-"+(this.efectivo+this.tarjeta)),1!=this.editadoSale.pame_fk||this.total-this.efectivo-this.tarjeta==0)?1==confirm("¿Está seguro de finalizar la compra?")&&(this.editadoSale.clde_amount=this.total,this.editadoSale.clpa_amount_cash=this.efectivo,this.editadoSale.clpa_amount_transfer=this.tarjeta,axios.post("/clientsales/update",this.editadoSale).then((function(e){console.log(e),200==e.data.code?(t.textMsg="¡Actualizado correctamente!",t.normal("Notificación","¡Actualizado correctamente!","success"),t.$router.push("/sales")):t.normal("Notificación",e.data.message,"error")})).catch((function(e){t.errors.push(e)}))):this.normal("Notificación","Los montos de pago deben ser igual al total","error")},actualizar:function(t){var e=this;this.editado=Object.assign({},t),axios.post("/client_sale_details/update",this.editado).then((function(t){e.textMsg="¡Actualizado correctamente!"})).catch((function(t){e.errors.push(t)}))},normal:function(t,e,a){this.notice=new i.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:a})}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(r.b)("auth",["can"]))},c=a(0),l=Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\r\n                Cerrar\r\n            ")])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestion,callback:function(e){t.dialogQuestion=e},expression:"dialogQuestion"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Información")]),t._v(" "),a("v-card-text",[t._v(t._s(t.messageQuestion)+".")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestion=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaFinalizar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestionDelete,callback:function(e){t.dialogQuestionDelete=e},expression:"dialogQuestionDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Alerta")]),t._v(" "),a("v-card-text",[t._v("¿Está seguro de borrar el registro?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestionDelete=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaBorrar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{scrollable:"","max-width":"600"},model:{value:t.dialogAgregar,callback:function(e){t.dialogAgregar=e},expression:"dialogAgregar"}},[a("v-form",{model:{value:t.validProvider,callback:function(e){t.validProvider=e},expression:"validProvider"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"cyan"}},[a("v-toolbar-title",[t._v("Agregar Producto")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialogAgregar=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("v-text-field",{attrs:{label:"ID",disabled:""},model:{value:t.detail.prod_identifier,callback:function(e){t.$set(t.detail,"prod_identifier",e)},expression:"detail.prod_identifier"}}),t._v(" "),a("v-text-field",{attrs:{label:"Nombre",disabled:""},model:{value:t.detail.prod_name,callback:function(e){t.$set(t.detail,"prod_name",e)},expression:"detail.prod_name"}}),t._v(" "),a("v-combobox",{attrs:{required:"",items:t.measurements,label:"Unidad de Medida","item-text":"meas_name","item-value":"meas_pk",filled:"",chips:"",placeholder:"Seleccionar una opción"},model:{value:t.selectmeas,callback:function(e){t.selectmeas=e},expression:"selectmeas"}}),t._v(" "),a("v-text-field",{attrs:{label:"Cantidad",type:"number",rules:t.minNumberRules,autofocus:"",required:""},model:{value:t.detail.prpd_quantity,callback:function(e){t.$set(t.detail,"prpd_quantity",e)},expression:"detail.prpd_quantity"}}),t._v(" "),a("v-text-field",{attrs:{label:"Precio",prefix:"$",type:"number",rules:t.minNumberRules,required:""},model:{value:t.detail.prpd_price,callback:function(e){t.$set(t.detail,"prpd_price",e)},expression:"detail.prpd_price"}}),t._v(" "),a("v-text-field",{attrs:{label:"Descuento(%)",type:"number"},model:{value:t.detail.prpd_discountrate,callback:function(e){t.$set(t.detail,"prpd_discountrate",e)},expression:"detail.prpd_discountrate"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:function(e){t.dialogAgregar=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{disabled:!t.validProvider,color:"teal accent-4"},on:{click:function(e){return t.agregar()}}},[t._v("Guardar")])],1)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"800px",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"cyan"}},[a("v-toolbar-title",[t._v("Buscar producto")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.products,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{autofocus:"","append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.prod_saleprice",fn:function(e){var r=e.item;return[a("v-label",[t._v("$"+t._s(t.formatMoney(r.prod_saleprice)))])]}},{key:"item.bulk",fn:function(e){return[1==e.item.prod_bulk?a("v-chip",{attrs:{color:"green",outlined:""}},[t._v("\r\n                                Granel")]):a("v-chip",{attrs:{color:"red",outlined:""}},[t._v("NA Granel")])]}},{key:"item.action",fn:function(e){var r=e.item;return[a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"green",title:"Agregar producto"},on:{click:function(e){return t.openAgregar(r)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-checkbox-marked-circle")])],1)]}}])})],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[1==t.directa?a("v-label",[a("h3",[t._v("Proveedor:")]),t._v(" "+t._s(t.editadoHeader.prov_name)+"\r\n                                ")]):t._e(),t._v(" "),2==t.directa?a("v-label",[a("h4",[t._v("Sucursal:")]),t._v(" "+t._s(t.users.stor_name)+"\r\n                                ")]):t._e()],1)],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[1==t.directa?a("v-label",[a("h3",[t._v("Sucursal:")]),t._v(" "+t._s(t.editadoHeader.stor_name)+"\r\n                                ")]):t._e(),t._v(" "),2==t.directa?a("v-combobox",{attrs:{required:"",items:t.providers,label:"Proveedor","item-text":"prov_name","item-value":"prov_pk",filled:"",chips:"",placeholder:"Seleccionar una proveedor"},model:{value:t.selectProv,callback:function(e){t.selectProv=e},expression:"selectProv"}}):t._e()],1)],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-combobox",{attrs:{required:"",items:t.payments,label:"Método de pago","item-text":"pame_name","item-value":"pame_pk",filled:"",chips:"",placeholder:"Seleccionar una opción"},model:{value:t.selectpame,callback:function(e){t.selectpame=e},expression:"selectpame"}})],1)],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-text-field",{attrs:{label:"Número de Nota/Factura de Recepción de Ingreso"},model:{value:t.observation,callback:function(e){t.observation=e},expression:"observation"}})],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"blue"},on:{click:t.buscar}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-file-find")]),t._v(" Buscar Producto\r\n                            ")],1),t._v(" "),a("v-btn",{attrs:{dark:"",color:"success",outlined:""},on:{click:t.finalizar}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-checkbox-marked-circle")]),t._v(" Finalizar\r\n                            ")],1)],1)],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("ID")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Producto")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Unidad Medida")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Cantidad")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Precio($)")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Importe")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Descuento(%)")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Descuento($)")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Importe Total")]),t._v(" "),a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[t._l(t.desserts,(function(e){return a("tr",{key:e.prod_name},[a("td",[t._v(t._s(e.prod_identifier))]),t._v(" "),a("td",[t._v(t._s(e.prod_name))]),t._v(" "),a("td",[t._v(t._s(e.meas_name))]),t._v(" "),a("td",[a("v-text-field",{attrs:{label:"",required:""},on:{change:function(a){return t.onQuantityChange(e)}},model:{value:e.prpd_quantity,callback:function(a){t.$set(e,"prpd_quantity",a)},expression:"item.prpd_quantity"}})],1),t._v(" "),a("td",[a("v-text-field",{attrs:{label:"",required:""},on:{change:function(a){return t.onQuantityChange(e)}},model:{value:e.prpd_price,callback:function(a){t.$set(e,"prpd_price",a)},expression:"item.prpd_price"}})],1),t._v(" "),a("td",[t._v(t._s(t.formatMoney(e.prpd_quantity*e.prpd_price)))]),t._v(" "),a("td",[t.can("discount")?a("v-text-field",{attrs:{label:"",required:""},on:{change:function(a){return t.onQuantityChange(e)}},model:{value:e.prpd_discountrate,callback:function(a){t.$set(e,"prpd_discountrate",a)},expression:"item.prpd_discountrate"}}):a("span",[t._v("0")])],1),t._v(" "),a("td",[t._v(t._s(t.formatMoney(e.prpd_quantity*e.prpd_price*(e.prpd_discountrate/100))))]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(e.prpd_quantity*e.prpd_price*(1-e.prpd_discountrate/100))))]),t._v(" "),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.borrar(e)}}},[t._v("mdi-delete")])],1)])})),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Subtotal")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.subtotal)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Descuento")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.descuento)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("I.V.A.")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.iva)))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("IEPS")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.ieps)))]),t._v(" "),a("td")])],2),t._v(" "),a("tfoot",[a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Total")]),t._v(" "),a("td",[t._v("$"+t._s(t.formatMoney(t.total)))]),t._v(" "),a("td")])])]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);