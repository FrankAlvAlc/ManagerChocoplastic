(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{75:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{menu1:!1,menu2:!1,textMsg:"",alert:!1,valid:!1,select_product:"",data_product:[]}},created:function(){this.getProducts(),this.getUsers()},methods:{getUsers:function(){var t=this;axios.get("/listUser").then((function(e){t.users=e.data.data})).catch((function(e){t.errors.push(e)}))},getProducts:function(){var t=this;axios.get("/productList").then((function(e){t.data_product=e.data.data})).catch((function(t){console.log(t)}))},GenerarReporte:function(){if(axios,void 0===this.select_product.prod_pk)var t="";else t=this.select_product.prod_pk;window.open("http://3.217.161.164:777/?pRep=18&pProd_PK="+t+"&pUser_PK="+this.users.id,"_blank")},hide_alert:function(t){var e=this;console.log("Hide"),window.setInterval((function(){e.alert=!1}),7e3)}},mounted:function(){alert&&this.hide_alert()}},a=o(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-alert",{attrs:{dismissible:"",transition:"fade-transition",type:"info",timeout:"5000"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(t._s(t.textMsg))]),t._v(" "),o("v-row",[o("v-col",[o("v-card",[o("v-row",[o("v-col",[o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[o("v-combobox",{attrs:{items:t.data_product,"item-text":"prod_name_identifier","item-value":"prod_pk",filled:"",chips:"",label:"Producto",placeholder:"Seleccionar Producto"},model:{value:t.select_product,callback:function(e){t.select_product=e},expression:"select_product"}})],1)],1)],1)],1)],1),t._v(" "),o("v-card",{attrs:{justify:"end"}},[o("v-btn",{staticClass:"mr-4",attrs:{color:"success",disabled:!t.valid},on:{click:t.GenerarReporte}},[t._v("Generar")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);