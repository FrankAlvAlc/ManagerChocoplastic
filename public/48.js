(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{75:function(t,e,a){"use strict";a.r(e);var r,i=a(1),o=a.n(i);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var n={data:function(){var t;return s(t={headers:[{text:"Ident",value:"prod_identifier"},{text:"Nombre Producto",value:"prod_name"},{text:"Unidad Salida",value:"meas_fk_input_name"},{text:"Tipo",value:"bulk"},{text:"",value:"action",width:"20%"}],prtr_pk:this.$route.params.id,directa:this.$route.params.directa,prtr_observation:"",prpu_pk:0,valid:!1,stores:[],providers:[],desserts:[],products:[],selectProv:"",selectStore:"",payments:[],selectpame:"",search:"",snackbar:!1,timeout:2e3,subtotal:0,total:0,iva:0,textMsg:"",editadoHeader:{prpu_pk:0,prov_fk:0,prov_name:"",prpo_fk:0,stor_fk:0,store_name:"",pame_fk:0,pame_name:"",prpu_identifier:"",prpu_type:0,prpu_status:0,created_at:"",updated_at:""},editado:{prtd_pk:0,prtd_quantity:0,prtd_price:0,prtd_discountrate:0,prod_pk:0,prod_identifier:0,prod_name:"",prod_description:"",meas_name:""},defaultItem:{prtd_pk:0,prtd_quantity:0,prtd_price:0,prtd_discountrate:0,prod_pk:0,prod_identifier:0,prod_name:"",prod_description:"",meas_name:""},detail:{prpu_pk:0,prtr_fk:0,pame_fk:0,prov_fk:0,stor_fk:0,prpo_fk:0,prod_fk:0,prtd_pk:0,prtd_quantity:0,prtd_price:0,prtd_discountrate:0},detailDefault:{prpo_fk:0,prod_fk:0,prtd_pk:0,prtd_quantity:0,prtd_price:0,prtd_discountrate:0},orderHeader:{prpu_pk:0,prtr_pk:0,prov_fk:0,stor_fk_input:0,pame_fk:0,prpu_amount:0,prtr_observation:""},enabledStore:!1,dialogcredito:!1,dialogcontado:!1,dialog:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:"",minNumberRules:[function(t){return!!t||"Requerido."},function(t){return t>0||"El número debe ser mayor o igual a cero"}],loading:!1},"dialogQuestion",!1),s(t,"dialogQuestionDelete",!1),s(t,"messageQuestion",""),t},created:function(){this.createCompra()},methods:(r={getUsers:function(){var t=this;axios.get("/users").then((function(e){t.users=e.data.data,t.users.store_id>0?(t.enabledStore=!0,t.selectStore=t.stores.find((function(e){return e.stor_pk==t.users.store_id}))):t.enabledStore=!1})).catch((function(e){t.errors.push(e)}))},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var i=t<0?"-":"",o=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),s=o.length>3?o.length%3:0;return i+(s?o.substr(0,s)+r:"")+o.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?a+Math.abs(t-o).toFixed(e).slice(2):"")}catch(t){console.log(t)}},getStores:function(){var t=this;axios.get("/storeget").then((function(e){t.stores=e.data.data})).catch((function(t){console.log(t)}))},getProviders:function(){var t=this;axios.get("/providerlist").then((function(e){t.providers=e.data.data})).catch((function(t){console.log(t)}))},getPayment:function(){var t=this;axios.get("/paymentmethodsget").then((function(e){t.payments=e.data.data})).catch((function(t){console.log(t)}))},agregar:function(t){var e=this;this.desserts.length>0?this.detail.prtr_fk=this.prtr_pk:this.detail.prtr_fk=0,this.detail.prod_fk=t.prod_pk,this.detail.prtd_quantity=1,this.detail.prtd_price=0,this.detail.prtd_discountrate=0,this.detail.prov_fk=this.selectProv.prov_pk,this.detail.stor_fk=this.selectStore.stor_pk,this.detail.pame_fk=this.selectpame.pame_pk,axios.post("/product/transfer/details",this.detail).then((function(t){console.log(t),200==t.data.status.code?(e.textMsg="¡Actualizado correctamente!",e.prtr_pk=t.data.data,e.createCompra(),e.dialog=!1):e.normal("Notificación",t.data.message,"error")})).catch((function(t){e.errors.push(t)}))},borrar:function(t){console.log(t),this.editado=Object.assign({},t),this.dialogQuestionDelete=!0},createCompra:function(){var t=this;this.loading=!0,axios.get("/product/transfers/"+this.prtr_pk).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?(console.log(e),t.desserts=e.data.data.ProductTransferDetails,t.prtr_pk=e.data.data.ProductTransfers.prtr_pk,t.editadoHeader=e.data.data.ProductTransfers):t.prtr_pk>0&&t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1},buscar:function(){var t=this;this.loading=!0,axios.get("/product/search").then((function(e){setTimeout((function(){return t.loading=!1}),500),t.products=e.data.data,t.dialog=!0})).catch((function(e){setTimeout((function(){return t.loading=!1}),500),t.normal("Notificación","Error al cargar los datos","error")}))},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},delete:function(){var t=this;axios.post("/product/transfer/details/destroy",this.editado).then((function(e){console.log(e),200==e.data.status.code?(t.textMsg="¡Eliminado correctamente!",t.normal("Notificación",t.textMsg,"success"),t.createCompra()):t.normal("Notificación","Ocurrio un error al eliminar el producto","error")}))}},s(r,"createCompra",(function(){var t=this;this.loading=!0,axios.get("/product/transfers/"+this.prtr_pk).then((function(e){setTimeout((function(){return t.loading=!1}),2e3),null!=e.data.data?(console.log(e),t.desserts=e.data.data.ProductTransferDetails,t.prtr_pk=e.data.data.ProductTransfers.prtr_pk,t.editadoHeader=e.data.data.ProductTransfers):t.prtr_pk>0&&t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))})),s(r,"cancelar",(function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1})),s(r,"buscar",(function(){var t=this;axios.get("/product/search").then((function(e){t.products=e.data.data,t.dialog=!0,console.log(e.data)})).catch((function(e){t.errors.push(e)}))})),s(r,"onQuantityChange",(function(t){var e=this;this.detail.prtd_pk=t.prtd_pk,this.detail.prod_fk=t.prod_pk,this.detail.prtd_quantity=t.prtd_quantity,this.detail.prtd_price=t.prtd_price,this.detail.prtd_discountrate=t.prtd_discountrate,axios.post("/product/transfer/details/update",this.detail).then((function(t){console.log(t),200==t.data.status.code?e.textMsg="¡Actualizado correctamente!":e.normal("Notificación",t.data.status.message,"success")})).catch((function(t){e.errors.push(t)}))})),s(r,"getTotal",(function(){this.subtotal=0;for(var t=0;t<this.desserts.length;t++)this.subtotal=this.subtotal+this.desserts[t].prtd_price*this.desserts[t].prtd_quantity*(1-this.desserts[t].prtd_discountrate/100),console.log(this.subtotal);this.total=this.subtotal+this.iva})),s(r,"finalizar",(function(){this.messageQuestion="¿Está seguro de finalizar el traspaso?",this.dialogQuestion=!0})),s(r,"guardaFinalizar",(function(){var t=this;this.orderHeader.prtr_pk=this.prtr_pk,this.orderHeader.stor_fk_input=this.selectStore.stor_pk,this.orderHeader.prtr_observation=this.prtr_observation,console.log(this.orderHeader),axios.post("/product/transfers/update/finalize",this.orderHeader).then((function(e){console.log(e);var a=e.data.status.message;if(200==e.data.status.code){t.normal("Notificación",a,"success");var r=t.$router.resolve({path:"/product/transfers/printTraspaso/"+e.data.data});window.open(r.href,"_blank"),t.$router.push("/transferlist")}else t.normal("Notificación",a,"error"),console.log(e.data.status.technicaldetail)})).catch((function(e){t.errors.push(e)}))})),s(r,"normal",(function(t,e,a){this.notice=new o.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:a})})),r)},d=a(0),c=Object(d.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Cerrar")])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestion,callback:function(e){t.dialogQuestion=e},expression:"dialogQuestion"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Información")]),t._v(" "),a("v-card-text",[t._v(t._s(t.messageQuestion)+".")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestion=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaFinalizar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestionDelete,callback:function(e){t.dialogQuestionDelete=e},expression:"dialogQuestionDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Alerta")]),t._v(" "),a("v-card-text",[t._v("¿Está seguro de borrar el registro?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestionDelete=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaBorrar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"cyan white--text"},[a("span",{staticClass:"headline"},[t._v("Buscar Productos")])]),t._v(" "),a("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.products,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.bulk",fn:function(e){return[1==e.item.prod_bulk?a("v-chip",{attrs:{color:"green",outlined:""}},[t._v("Granel")]):a("v-chip",{attrs:{color:"red",outlined:""}},[t._v("NA Granel")])]}},{key:"item.action",fn:function(e){var r=e.item;return[a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"green",title:"Agregar producto"},on:{click:function(e){return t.agregar(r)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-checkbox-marked-circle")])],1)]}}])})],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[t._v("SUCURSAL DE SALIDA")]),t._v(" "),a("v-list-item-title",[t._v(t._s(t.editadoHeader.stor_name_output))])],1)],1)],1)],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[t._v("SUCURSAL DE ENTRADA")]),t._v(" "),a("v-list-item-title",[t._v(t._s(t.editadoHeader.stor_name_input))])],1)],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[t._v("OBSERVACIONES")]),t._v(" "),a("v-list-item-title",[t._v(t._s(t.editadoHeader.prtr_observation))])],1)],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"blue"},on:{click:t.buscar}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-file-find")]),t._v("Buscar Producto\r\n                            ")],1),t._v(" "),a("v-btn",{attrs:{dark:"",color:"success",outlined:""},on:{click:t.finalizar}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-checkbox-marked-circle")]),t._v("Finalizar\r\n                            ")],1)],1)],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("ID")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Producto")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("Unidad Medida Salida")]),t._v(" "),a("th",{staticClass:"text-left",staticStyle:{width:"200px"}},[t._v("Cantidad a traspasar")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",t._l(t.desserts,(function(e){return a("tr",{key:e.prod_name},[a("td",[t._v(t._s(e.prod_identifier))]),t._v(" "),a("td",[t._v(t._s(e.prod_name))]),t._v(" "),a("td",[t._v(t._s(e.meas_name))]),t._v(" "),a("td",[a("v-text-field",{attrs:{label:"",required:""},on:{change:function(a){return t.onQuantityChange(e)}},model:{value:e.prtd_quantity,callback:function(a){t.$set(e,"prtd_quantity",a)},expression:"item.prtd_quantity"}})],1),t._v(" "),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.borrar(e)}}},[t._v("mdi-delete")])],1)])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);