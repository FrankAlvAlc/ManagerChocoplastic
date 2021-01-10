(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{44:function(t,e,a){"use strict";a.r(e);var r=a(1),s=a.n(r),n={data:function(){return{headers:[{text:"ID",value:"prod_identifier",width:"10%"},{text:"Producto",value:"prod_name"},{text:"Unidad Medida Salida",value:"meas_name"},{text:"Categoria",value:"prca_name"},{text:"Sucursal",value:"stor_name"},{text:"Stock",value:"prin_stock"}],select:0,principal:!1,estado:!0,editedIndex:-1,sales:[],sales0:[],search:"",dialog:!1,snackbar:!1,timeout:2e3,idUserStore:0,textMsg:"",menu1:!1,stores:[],SelectSucursal:"",enabledStore:!1,folioRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=10||"Min 10 caracter"}],nameRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=3||"Min 3 caracteres"}],phoneRules:[function(t){return!!t||"Requerido."},function(t){return t&&10==t.length||"Requiere 10 caracteres"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:""}},created:function(){this.getStores(),this.getUsers()},methods:{getStores:function(){var t=this;axios.get("/storeget").then((function(e){t.stores=e.data.data})).catch((function(t){console.log(t)}))},getUsers:function(){var t=this;axios.get("/listUser").then((function(e){t.users=e.data.data,t.users.store_id>0?(t.enabledStore=!0,t.SelectSucursal=t.stores.find((function(e){return e.stor_pk==t.users.store_id}))):t.enabledStore=!1})).catch((function(e){t.errors.push(e)}))},getSales:function(){var t=this;this.loading=!0,axios.get("/product/inventories").then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?t.sales=e.data.data:(t.normal("Notificación",e.data.status.message,"error"),console.log("Detalle: "+e.data.status.technicaldetail))})).catch((function(e){console.log("Detalle: "+response.data.status.technicaldetail),t.normal("Notificación","Error al cargar los datos","error")}))},getInventarioSucursal:function(){var t=this;if(console.log(this.SelectSucursal.stor_pk),""==this.SelectSucursal)return this.normal("Sucursal","Seleccionar Sucursal","warning"),!1;this.loading=!0,axios.get("/product/inventories/"+this.SelectSucursal.stor_pk).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?t.sales=e.data.data:(t.normal("Notificación",e.data.status.message,"error"),console.log("Detalle: "+e.data.status.technicaldetail))})).catch((function(e){console.log("Detalle: "+response.data.status.technicaldetail),t.normal("Notificación","Error al cargar los datos","error")}))},normal:function(t,e,a){this.notice=new s.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:a})}}},o=a(0),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\r\n                Cerrar\r\n            ")])],1),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.sales,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),t._v(" "),a("v-toolbar",{attrs:{flat:"",color:"indigo"}},[a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{autofocus:"","append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-combobox",{attrs:{required:"",items:t.stores,label:"Sucursal",disabled:t.enabledStore,"item-text":"stor_name","item-value":"stor_pk",filled:"",chips:"",placeholder:"Seleccionar una sucursal"},model:{value:t.SelectSucursal,callback:function(e){t.SelectSucursal=e},expression:"SelectSucursal"}})],1),t._v(" "),a("v-col",{attrs:{cols:"4",sm:"4"}},[a("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:t.getInventarioSucursal}},[t._v("Buscar")])],1)],1)],1)]},proxy:!0},{key:"item",fn:function(e){return[a("tr",[a("td",{staticStyle:{"font-size":"18px !important","font-weight":"600 !important"}},[t._v(t._s(e.item.prod_identifier))]),t._v(" "),a("td",[t._v(t._s(e.item.prod_name))]),t._v(" "),a("td",[t._v(t._s(e.item.meas_name))]),t._v(" "),a("td",[t._v(t._s(e.item.prca_name))]),t._v(" "),a("td",[t._v(t._s(e.item.stor_name))]),t._v(" "),a("td",[t._v(t._s(e.item.prin_stock))])])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);