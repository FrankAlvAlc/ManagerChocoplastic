(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{76:function(e,t,n){"use strict";n.r(t);var a={data:function(){return{menu1:!1,menu2:!1,textMsg:"",alert:!1,valid:!1,select_provider:"",start_date:"",end_date:"",data_client:[]}},created:function(){this.getProviders(),this.getUsers()},methods:{getUsers:function(){var e=this;axios.get("/listUser").then((function(t){e.users=t.data.data})).catch((function(t){e.errors.push(t)}))},getProviders:function(){var e=this;axios.get("/providerlist").then((function(t){e.data_client=t.data.data})).catch((function(e){console.log(e)}))},GenerarReporte:function(){if(axios,null==this.select_provider)var e="";else if(void 0===this.select_provider.prov_pk)e="";else e=this.select_provider.prov_pk;return""!=this.start_date&&""==this.end_date?(this.alert=!0,void(this.textMsg="Seleccionar Fecha Fin")):""!=this.end_date&&""==this.start_date?(this.alert=!0,void(this.textMsg="Seleccionar Fecha Inicio")):void window.open("http://3.217.161.164:777/?pRep=8&pProv_PK="+e+"&pDateStart="+this.start_date+"&pDateEnd="+this.end_date+"&pUser_PK="+this.users.id,"_blank")},hide_alert:function(e){var t=this;console.log("Hide"),window.setInterval((function(){t.alert=!1}),7e3)}},mounted:function(){alert&&this.hide_alert()}},i=n(0),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-alert",{attrs:{dismissible:"",transition:"fade-transition",type:"info",timeout:"5000"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(e._s(e.textMsg))]),e._v(" "),n("v-row",[n("v-col",[n("v-card",[n("v-row",[n("v-col",[n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[n("v-combobox",{attrs:{items:e.data_client,"item-text":"prov_name_identifier","item-value":"prov_pk",filled:"",chips:"",label:"Proveedor",placeholder:"Seleccionar Proveedor"},model:{value:e.select_provider,callback:function(t){e.select_provider=t},expression:"select_provider"}})],1)],1)],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Fecha Inicio","prepend-icon":"event",readonly:""},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}},a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{on:{input:function(t){e.menu2=!1}},model:{value:e.start_date,callback:function(t){e.start_date=t},expression:"start_date"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Fecha Fin","prepend-icon":"event",readonly:""},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}},a))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),n("v-date-picker",{attrs:{min:e.start_date},on:{input:function(t){e.menu1=!1}},model:{value:e.end_date,callback:function(t){e.end_date=t},expression:"end_date"}})],1)],1)],1)],1),e._v(" "),n("v-card",{attrs:{justify:"end"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"success",disabled:!e.valid},on:{click:e.GenerarReporte}},[e._v("Generar")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);