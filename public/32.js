(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{59:function(e,t,a){"use strict";a.r(t);var r={data:function(){return{headers:[{text:"Compra",value:"clsa_identifier",width:"10%"},{text:"Cliente",value:"clie_name"},{text:"Sucursal",value:"stor_name"},{text:"Observación",value:"clre_observation"},{text:"Fecha",value:"created_at"},{text:"Estatus",value:"status"},{text:"",value:"action",width:"20%"}],select:0,principal:!1,estado:!0,editedIndex:-1,sales:[],search:"",dialog:!1,snackbar:!1,timeout:2e3,textMsg:"",folioRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=10||"Min 10 caracter"}],nameRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=3||"Min 3 caracteres"}],phoneRules:[function(e){return!!e||"Requerido."},function(e){return e&&10==e.length||"Requiere 10 caracteres"}]}},created:function(){this.getSales()},methods:{getSales:function(){console.log("response.data")}}},n=a(0),s=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",[a("v-snackbar",{attrs:{color:"#000000",timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                "+e._s(e.textMsg)+"\n                "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n                    Cerrar\n                ")])],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.sales,search:e.search,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),e._v(" "),a("v-toolbar",{attrs:{flat:"",color:"indigo"}},[a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),a("v-spacer")],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.status",fn:function(t){var r=t.item;return["Pendiente"==r.clsa_status?a("v-chip",{attrs:{color:"gray",dark:""}},[e._v("  "+e._s(r.clre_status_description)+"  ")]):a("v-chip",{attrs:{color:"green",dark:""}},[e._v(e._s(r.clre_status_description))])]}},{key:"item.action",fn:function(t){var r=t.item;return["Pendiente"==r.clsa_status?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"pink",href:"/clientsreturn/"+r.clsa_pk}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-arrow-left-bold-circle")])],1):e._e()]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);