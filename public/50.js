(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{77:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{headers:[{text:"Compra",value:"prpu_identifier"},{text:"Proveedor",value:"prov_name"},{text:"Sucursal",value:"stor_name"},{text:"Observación",value:"prre_observation"},{text:"Motivo de Devolución",value:"remo_description"},{text:"Fecha",value:"created_at"},{text:"Estatus",value:"status"},{text:"",value:"action"}],select:0,principal:!1,estado:!0,editedIndex:-1,sales:[],search:"",dialog:!1,snackbar:!1,timeout:2e3,textMsg:"",folioRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=10||"Min 10 caracter"}],nameRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=3||"Min 3 caracteres"}],phoneRules:[function(e){return!!e||"Requerido."},function(e){return e&&10==e.length||"Requiere 10 caracteres"}]}},created:function(){this.getSales()},methods:{getSales:function(){var e=this;axios.get("/provider/returns").then((function(t){console.log(t.data),e.sales=t.data.data})).catch((function(e){console.log(e)}))}}},n=r(0),s=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",[r("v-snackbar",{attrs:{color:"#000000",timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                "+e._s(e.textMsg)+"\n                "),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n                    Cerrar\n                ")])],1),e._v(" "),r("v-row",[r("v-col",[r("v-card",[r("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.sales,search:e.search,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),e._v(" "),r("v-toolbar",{attrs:{flat:"",color:"indigo"}},[r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.status",fn:function(t){var a=t.item;return["Pendiente"==a.prre_status_description?r("v-chip",{attrs:{color:"red",dark:""}},[e._v("  "+e._s(a.prre_status_description)+"  ")]):r("v-chip",{attrs:{color:"green",dark:""}},[e._v(e._s(a.prre_status_description))])]}},{key:"item.action",fn:function(t){var a=t.item;return["Pendiente"==a.clre_status_description?r("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"pink",href:"/providersreturn/"+a.prpu_pk,title:"Devolución"}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-arrow-left-bold-circle")])],1):e._e(),e._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"purple",title:"Detalle de devolución",href:"/providersreturndetail/"+a.prre_pk}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-eye")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);