(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{35:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a(1),i=a.n(n);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o={data:function(){return{headers:[{text:"Venta",value:"clsa_identifier"},{text:"Pedido",value:"clor_identifier"},{text:"Cliente",value:"clie_name"},{text:"Sucursal",value:"stor_name"},{text:"Método Pago",value:"pame_name"},{text:"Fecha",value:"created_at"},{text:"Estatus",value:"status"},{text:"",value:"action"}],menu2:!1,select:0,selectClient:"",selectpame:"",payments:[],clients:[],paymentsShapes:[],principal:!1,estado:!0,editedIndex:-1,data_order:[],search:"",dialog:!1,snackbar:!1,timeout:2e3,idUserStore:0,textMsg:"",menu1:!1,stores:[],SelectSucursal:"",enabledStore:!1,loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:"",data_filter:{stor_pk:0,clor_status:-1,start_date:"",end_date:"",clie_pk:0,pame_pk:0},boxEnabled:!1,select_status:"",start_date:"",end_date:"",data_status:[{name_status:"Mostrar Todo",pk_status:-1},{name_status:"Pendiente",pk_status:0},{name_status:"En Proceso de Pago",pk_status:2},{name_status:"Pagado",pk_status:3}]}},created:function(){this.getStores(),this.getUsers(),this.obtenerCaja(),this.getClients(),this.getPayment()},methods:{getPayment:function(){var t=this;axios.get("/paymentmethodsget").then((function(e){t.payments=e.data.data})).catch((function(t){console.log(t)}))},getClients:function(){var t=this;axios.get("/clientsget").then((function(e){t.clients=e.data.data})).catch((function(t){console.log(t)}))},getStores:function(){var t=this;axios.get("/storeget").then((function(e){t.stores=e.data.data})).catch((function(t){console.log(t)}))},getUsers:function(){var t=this;axios.get("/listUser").then((function(e){t.users=e.data.data,t.users.store_id>0?(t.enabledStore=!0,t.SelectSucursal=t.stores.find((function(e){return e.stor_pk==t.users.store_id}))):t.enabledStore=!1})).catch((function(e){t.errors.push(e)}))},obtenerCaja:function(){var t=this;axios.get("/boxcut").then((function(e){null==e.data.data?t.boxEnabled=!0:t.boxEnabled=!1,console.log("boxEnabled --\x3e"+t.boxEnabled)})).catch((function(t){console.log(t)}))},getSaleFilterClear:function(){this.start_date="",this.end_date=""},getSaleFilter:function(){var t=this;if(""==this.SelectSucursal)return this.normal("Sucursal","Seleccionar Sucursal","warning"),!1;if(null==this.select_status||void 0===this.select_status||""==this.select_status||-1==this.select_status.pk_status)var e=-1;else e=this.select_status.pk_status;if(null==this.selectClient||void 0===this.selectClient||""==this.selectClient||-1==this.selectClient.clie_pk)var a=-1;else a=this.selectClient.clie_pk;if(null==this.selectpame||void 0===this.selectpame||""==this.selectpame||-1==this.selectpame.pame_pk)var s=-1;else s=this.selectpame.pame_pk;return this.data_filter.stor_pk=this.SelectSucursal.stor_pk,this.data_filter.clor_status=e,this.data_filter.start_date=this.start_date,this.data_filter.end_date=this.end_date,this.data_filter.clie_pk=a,this.data_filter.pame_pk=s,""!=this.start_date&&""==this.end_date?(this.normal("Fecha Fin","Seleccionar Fecha Fin","warning"),!1):""!=this.end_date&&""==this.start_date?(this.normal("Fecha Inicio","Seleccionar Fecha Inicio","warning"),!1):(console.log("data_filter.stor_pk: "+this.data_filter.stor_pk+"_____ data_filter.clor_status: "+this.data_filter.clor_status+"_____ data_filter.start_date: "+this.data_filter.start_date+"_____ data_filter.end_date: "+this.data_filter.end_date+"_____ data_filter.clie_pk: "+this.data_filter.clie_pk+"_____ data_filter.pame_pk: "+this.data_filter.pame_pk),this.loading=!0,void axios.post("/clientsales/filtered",this.data_filter).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?t.data_order=e.data.data:(t.normal("Notificación",e.data.status.message,"error"),console.log("Detalle: "+e.data.status.technicaldetail))})).catch((function(e){t.normal("Notificación",e,"error")})))},printTicket:function(t){var e=window.open(t,"Imprimir orden","height=400,width=600");return setTimeout((function(){e.print()}),1e3),setTimeout((function(){e.close()}),5e4),!0},normal:function(t,e,a){this.notice=new i.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:a})}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.b)("auth",["can"]))},c=a(0),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-alert",{attrs:{type:"warning"},model:{value:t.boxEnabled,callback:function(e){t.boxEnabled=e},expression:"boxEnabled"}},[t._v("\n      Para realizar una venta, primero debe abrir caja.\n    ")]),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\n          Cargando\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.textMsg)+"\n      "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Cerrar ")])],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.data_order,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),t._v(" "),a("v-toolbar",{attrs:{flat:"",color:"indigo"}},[a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-combobox",{attrs:{required:"",items:t.stores,label:"Sucursal",disabled:t.enabledStore,"item-text":"stor_name","item-value":"stor_pk",filled:"",chips:"",placeholder:"Seleccionar una sucursal"},model:{value:t.SelectSucursal,callback:function(e){t.SelectSucursal=e},expression:"SelectSucursal"}})],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-combobox",{attrs:{items:t.data_status,"item-text":"name_status","item-value":"pk_status",filled:"",chips:"",label:"Estatus",placeholder:"Seleccionar Estatus"},model:{value:t.select_status,callback:function(e){t.select_status=e},expression:"select_status"}})],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-combobox",{attrs:{items:t.clients,label:"Cliente","item-text":"clie_name","item-value":"clie_pk",filled:"",chips:"",placeholder:"Seleccionar Cliente"},model:{value:t.selectClient,callback:function(e){t.selectClient=e},expression:"selectClient"}})],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-combobox",{attrs:{items:t.payments,label:"Métodos de pago","item-text":"pame_name","item-value":"pame_pk",filled:"",chips:"",placeholder:"Seleccionar Método Pago"},model:{value:t.selectpame,callback:function(e){t.selectpame=e},expression:"selectpame"}})],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"Fecha Inicio","prepend-icon":"event",readonly:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},s))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),a("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),t._v(" "),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"Fecha Fin","prepend-icon":"event",readonly:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},s))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),a("v-date-picker",{attrs:{min:t.start_date},on:{input:function(e){t.menu1=!1}},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:t.getSaleFilter}},[t._v("Buscar")])],1),t._v(" "),a("v-col",[a("v-btn",{staticClass:"mr-4",attrs:{color:"blue"},on:{click:t.getSaleFilterClear}},[t._v("Limpiar")])],1)],1)],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{autofocus:"","append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item",fn:function(e){return[a("tr",[a("td",{staticStyle:{"font-weight":"600 !important"}},[t._v("\n                  "+t._s(e.item.clsa_identifier)+"\n                ")]),t._v(" "),a("td",[t._v(t._s(e.item.clor_identifier))]),t._v(" "),a("td",[t._v(t._s(e.item.clie_name))]),t._v(" "),a("td",[t._v(t._s(e.item.stor_name))]),t._v(" "),a("td",[t._v(t._s(e.item.pame_name))]),t._v(" "),a("td",[t._v(t._s(e.item.created_at))]),t._v(" "),a("td",[0==e.item.clsa_status?a("v-chip",{attrs:{color:"red",dark:""}},[t._v("\n                    Pendiente")]):t._e(),t._v(" "),2==e.item.clsa_status?a("v-chip",{attrs:{color:"blue",dark:""}},[t._v("\n                    En Proceso de Pago")]):t._e(),t._v(" "),3==e.item.clsa_status?a("v-chip",{attrs:{color:"green",dark:""}},[t._v("Pagado")]):t._e()],1),t._v(" "),a("td",["Pendiente"!=e.item.clsa_status_description&&0==e.item.cantreturn&&t.can("clientreturn")?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"pink",href:"/clientsreturn/"+e.item.clsa_pk,title:"Devolución"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-bold-circle")])],1):t._e(),t._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"purple",title:"Detalle de venta",href:"/salesdetail/"+e.item.clsa_pk}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-eye")])],1),t._v(" "),"Pendiente"!=e.item.clsa_status_description?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"orange",title:"Imprimir ticket"},on:{click:function(a){return t.printTicket("/client/sales/printOrder/"+e.item.clsa_pk)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-printer")])],1):t._e(),t._v(" "),"Pendiente"==e.item.clsa_status_description&&1!=t.boxEnabled?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"cyan",title:"Continuar venta",href:"/detaiorder/"+e.item.clor_pk}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-cash-register")])],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);