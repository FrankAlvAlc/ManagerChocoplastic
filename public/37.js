(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{64:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{menu1:!1,menu2:!1,textMsg:"",alert:!1,valid:!1,select_client:"",select_status:"",start_date:"",end_date:"",data_client:[],data_status:[{name_status:"Mostrar Todo",pk_status:-1},{name_status:"Activos",pk_status:1},{name_status:"Pagados",pk_status:2}]}},created:function(){this.getClients(),this.getUsers()},methods:{getUsers:function(){var t=this;axios.get("/listUser").then((function(e){t.users=e.data.data})).catch((function(e){t.errors.push(e)}))},getClients:function(){var t=this;axios.get("/clientlist").then((function(e){t.data_client=e.data.data})).catch((function(t){console.log(t)}))},GenerarReporte:function(){if(axios,void 0===this.select_status||""==this.select_status||-1==this.select_status.pk_status)var t="";else t=this.select_status.pk_status;if(void 0===this.select_client.clie_pk)var e="";else e=this.select_client.clie_pk;return""!=this.start_date&&""==this.end_date?(this.alert=!0,void(this.textMsg="Seleccionar Fecha Fin")):""!=this.end_date&&""==this.start_date?(this.alert=!0,void(this.textMsg="Seleccionar Fecha Inicio")):void window.open("http://3.217.161.164:777/?pRep=4&pClie_PK="+e+"&pStatus="+t+"&pDateStart="+this.start_date+"&pDateEnd="+this.end_date+"&pUser_PK="+this.users.id,"_blank")},hide_alert:function(t){var e=this;console.log("Hide"),window.setInterval((function(){e.alert=!1}),7e3)}},mounted:function(){alert&&this.hide_alert()}},n=a(0),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-alert",{attrs:{dismissible:"",transition:"fade-transition",type:"info",timeout:"5000"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(t._s(t.textMsg))]),t._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-row",[a("v-col",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-combobox",{attrs:{items:t.data_client,"item-text":"clie_name_identifier","item-value":"clie_pk",filled:"",chips:"",label:"Cliente",placeholder:"Seleccionar Cliente"},model:{value:t.select_client,callback:function(e){t.select_client=e},expression:"select_client"}})],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-combobox",{attrs:{items:t.data_status,"item-text":"name_status","item-value":"pk_status",filled:"",chips:"",label:"Estatus",placeholder:"Seleccionar Estatus"},model:{value:t.select_status,callback:function(e){t.select_status=e},expression:"select_status"}})],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"Fecha Inicio","prepend-icon":"event",readonly:""},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}},s))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),a("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),t._v(" "),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"Fecha Fin","prepend-icon":"event",readonly:""},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},s))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),a("v-date-picker",{attrs:{min:t.start_date},on:{input:function(e){t.menu1=!1}},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1)],1)],1),t._v(" "),a("v-card",{attrs:{justify:"end"}},[a("v-btn",{staticClass:"mr-4",attrs:{color:"success",disabled:!t.valid},on:{click:t.GenerarReporte}},[t._v("Generar")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);