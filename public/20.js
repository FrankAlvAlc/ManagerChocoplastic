(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{47:function(t,e,r){"use strict";r.r(e);var a=r(2);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o={data:function(){return{headers:[{text:"ID",value:"prtr_pk",width:"10%"},{text:"Identificador",value:"prtr_identifier",width:"10%"},{text:"Sucursal Salida",value:"stor_name_output"},{text:"Sucursal Entrada",value:"stor_name_input"},{text:"Observación",value:"prtr_observation"},{text:"Fecha",value:"created_at"},{text:"Estatus",value:"status"},{text:"",value:"action",width:"20%"}],select:0,principal:!1,estado:!0,editedIndex:-1,sales:[],sales0:[],search:"",dialog:!1,snackbar:!1,timeout:2e3,idUserStore:0,textMsg:"",folioRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=10||"Min 10 caracter"}],nameRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=3||"Min 3 caracteres"}],phoneRules:[function(t){return!!t||"Requerido."},function(t){return t&&10==t.length||"Requiere 10 caracteres"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:""}},created:function(){this.getSales()},methods:{getSales:function(){var t=this;this.loading=!0,axios.get("/product/mytransfers").then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?(t.sales=e.data.data,console.log(t.sales)):t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(a.b)("auth",["can"]))},i=r(0),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",[r("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-card",{attrs:{color:"white"}},[r("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),r("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\r\n                Cerrar\r\n            ")])],1),t._v(" "),r("v-row",[r("v-col",[r("v-card",[r("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.sales,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),t._v(" "),t.can("transferdetail")?r("v-toolbar",{attrs:{flat:"",color:"indigo"},scopedSlots:t._u([{key:"extension",fn:function(){return[r("v-btn",{attrs:{fab:"",color:"cyan accent-2",bottom:"",left:"",absolute:"",href:"/transferdetail/0"}},[r("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}],null,!1,3082782267)},[t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer")],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.status",fn:function(e){var a=e.item;return["Pendiente"==a.prtr_status_description?r("v-chip",{attrs:{color:"gray",dark:""}},[t._v(" "+t._s(a.prtr_status_description)+" ")]):t._e(),t._v(" "),"Solicitado"==a.prtr_status_description?r("v-chip",{attrs:{color:"orange",dark:""}},[t._v(" "+t._s(a.prtr_status_description)+" ")]):t._e(),t._v(" "),"Finalizado"==a.prtr_status_description?r("v-chip",{attrs:{color:"green",dark:""}},[t._v(" "+t._s(a.prtr_status_description)+" ")]):t._e()]}},{key:"item.action",fn:function(e){var a=e.item;return["Pendiente"==a.prtr_status_description?r("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"pink",href:"/transferdetail/"+a.prtr_pk,title:"Continuar"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-swap-horizontal")])],1):t._e(),t._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"purple",title:"Detalle de Traspaso",href:"/transferdetailview/"+a.prtr_pk}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-eye")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);