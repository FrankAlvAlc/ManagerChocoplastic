(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{58:function(t,e,a){"use strict";a.r(e);var r=a(1),o=a.n(r),s={data:function(){return{headers:[{text:"No. ID",value:"prpo_identifier"},{text:"Proveedor",value:"prov_name"},{text:"Sucursal",value:"stor_name"},{text:"Fecha",value:"created_at"},{text:"Estatus",value:"status"},{text:"",value:"action",width:"20%"}],select:0,principal:!1,estado:!0,editado:{clor_pk:0,clor_name:"",clor_status:0},defaultItem:{clor_pk:0,clor_name:"",clor_status:0},editedIndex:-1,sales:[],ordenescompra:[],entities:[],search:"",dialog:!1,snackbar:!1,loadingDialog:!1,timeout:2e3,textMsg:"",valid:!1,validProvider:!1,folioRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=10||"Min 10 caracter"}],nameRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=3||"Min 3 caracteres"}],phoneRules:[function(t){return!!t||"Requerido."},function(t){return t&&10==t.length||"Requiere 10 caracteres"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:""}},created:function(){this.getCategories()},methods:{getCategories:function(){var t=this;this.loading=!0,axios.get("/provider/purchase/orders").then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?t.ordenescompra=e.data.data:t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1},ventas:function(t){this.editedIndex=this.categories.indexOf(t),this.editado=Object.assign({},t),this.createsale(t.clor_pk)},createsale:function(t){var e=this;this.loadingDialog=!0,axios.post("/clientsales?clor_pk="+t).then((function(t){setTimeout((function(){return e.loadingDialog=!1}),1e3),null!=t.data.data?(e.sales=t.data,console.log(t.data)):e.normal("Notificación",t.data.status.message,"error")})).catch((function(t){console.log(t),e.normal("Notificación","Error al cargar los datos","error")}))},borrar:function(t){this.editado=Object.assign({},t),this.dialogQuestionDelete=!0},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},delete:function(){var t=this;axios.post("/provider/purchase/orders/destroy",this.editado).then((function(e){console.log(e),200==e.data.status.code?(t.textMsg="¡Eliminado correctamente!",t.normal("Notificación",t.textMsg,"success"),t.getCategories()):t.normal("Notificación","Ocurrio un error al eliminar el producto","error")}))},normal:function(t,e,a){this.notice=new o.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:a})}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}}},n=a(0),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestionDelete,callback:function(e){t.dialogQuestionDelete=e},expression:"dialogQuestionDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Alerta")]),t._v(" "),a("v-card-text",[t._v("¿Está seguro de borrar el registro?")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestionDelete=!1}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaBorrar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loadingDialog,callback:function(e){t.loadingDialog=e},expression:"loadingDialog"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\r\n                Cerrar\r\n            ")])],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.ordenescompra,search:t.search,"sort-by":"id",loading:t.loading,"loading-text":"Cargando... Espere un momento."},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),t._v(" "),a("v-toolbar",{attrs:{flat:"",color:"indigo"},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-btn",{attrs:{fab:"",color:"cyan accent-2",bottom:"",left:"",absolute:"",href:"/purchaseorder/0"}},[a("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}])},[t._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{autofocus:"","append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.status",fn:function(e){var r=e.item;return[0==r.prpo_status?a("v-chip",{attrs:{color:"red",dark:""}},[t._v(" "+t._s(r.prpo_status_description)+" ")]):t._e(),t._v(" "),1==r.prpo_status?a("v-chip",{attrs:{color:"orange",dark:""}},[t._v(" "+t._s(r.prpo_status_description)+" ")]):t._e(),t._v(" "),2==r.prpo_status?a("v-chip",{attrs:{color:"green",dark:""}},[t._v(" "+t._s(r.prpo_status_description)+" ")]):t._e(),t._v(" "),3==r.prpo_status?a("v-chip",{attrs:{color:"blue",dark:""}},[t._v(" "+t._s(r.prpo_status_description)+" ")]):t._e()]}},{key:"item.action",fn:function(e){var r=e.item;return[1==r.prpo_status?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"pink",href:"/purchaseorder/"+r.prpo_pk}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-shuffle")])],1):t._e(),t._v(" "),2==r.prpo_status?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"orange",href:"/purchases/"+r.prpo_pk+"/1",title:"Convertir en compra"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-cloud-check")])],1):t._e(),t._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"purple",href:"/orderdetail/"+r.prpo_pk,title:"Detalle de la orden"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-eye")])],1),t._v(" "),1==r.prpo_status?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"error",title:"Eliminar"},on:{click:function(e){return t.borrar(r)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-delete")])],1):t._e()]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);