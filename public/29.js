(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{56:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r={data:function(){return{headersdetail:[{text:"ID",value:"prpa_pk",width:"10%"},{text:"Forma de Pago",value:"pash_name"},{text:"Monto pagado",value:"prpa_amount"},{text:"Referencia",value:"prpa_reference"},{text:"Fecha pago",value:"created_at"}],headers:[{text:"ID",value:"prde_pk"},{text:"No. Compra",value:"prpu_identifier"},{text:"Proveedor",value:"prov_name"},{text:"Monto Deuda",value:"prde_amount"},{text:"Monto Pagado",value:"prde_amount_paid"},{text:"Monto Pendiente",value:"prde_amount_outstanding"},{text:"Fecha",value:"created_at"},{text:"Estatus",value:"prde_status_description"},{text:"",value:"action",width:"15%"}],select:0,principal:!1,estado:!0,editado:{prde_fk:0,prpu_identifier:"",prov_fk:0,pash_fk:0,prpa_amount:0,prde_amount:0,prde_amount_paid:0,prde_amount_outstanding:0,prpa_reference:""},defaultItem:{prde_fk:0,prpu_identifier:"",prov_fk:0,pash_fk:0,prpa_amount:0,prde_amount:0,prde_amount_paid:0,prde_amount_outstanding:0,prpa_reference:""},editedIndex:-1,sales:[],detallepagos:[],clientsdebts:[],entities:[],search:"",dialog:!1,dialogdetail:!1,snackbar:!1,timeout:2e3,textMsg:"",valid:!1,validProvider:!1,payments:[],selectpame:"",folioRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=10||"Min 10 caracter"}],nameRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=3||"Min 3 caracteres"}],phoneRules:[function(e){return!!e||"Requerido."},function(e){return e&&10==e.length||"Requiere 10 caracteres"}],numberRules:[function(e){return!!e||"Requerido."},function(e){return e>0||"El número debe ser mayor o igual a cero"}]}},created:function(){this.getClientesPago(),this.getPayment()},methods:{formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var n=e<0?"-":"",r=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),i=r.length>3?r.length%3:0;return n+(i?r.substr(0,i)+o:"")+r.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+o)+(t?a+Math.abs(e-r).toFixed(t).slice(2):"")}catch(e){console.log(e)}},getClientesPago:function(){var e=this;axios.get("/provider/debts").then((function(t){console.log(t.data),e.clientsdebts=t.data.data})).catch((function(e){console.log(e)}))},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1},abonar:function(e){this.dialog=!0,this.editado.prde_fk=e.prde_pk,this.editado.prov_fk=e.prov_pk,this.editado.pash_fk=0,this.editado.prpa_amount=0,this.editado.prpu_identifier=e.prpu_identifier,this.editado.prde_amount=e.prde_amount,this.editado.prde_amount_paid=e.prde_amount_paid,this.editado.prde_amount_outstanding=e.prde_amount_outstanding},getPayment:function(){var e=this;axios.get("/paymentshapesget").then((function(t){e.payments=t.data.data})).catch((function(e){console.log(e)}))},guardar:function(){var e=this;this.editado.pash_fk=this.selectpame.pash_pk,""!=this.selectpame&&null!=this.selectpame?axios.post("/provider/payments",this.editado).then((function(t){if(console.log(t),200==t.data.status.code){var a=e.$router.resolve({path:"/provider/payments/report/"+t.data.data}),o=window.open(a.href,"","height=600,width=400");setTimeout((function(){o.close()}),5e4),e.textMsg="¡Actualizado correctamente!",e.normal("Notificación",t.data.status.message,"success"),e.getClientesPago(),e.cancelar()}else e.normal("Notificación",t.data.status.message,"error")})).catch((function(t){e.errors.push(t)})):this.normal("Notificación","Debe seleccionar una Forma de Pago","error")},detalle:function(e){var t=this;console.log(e),axios.get("/provider/payments/"+e.prde_pk).then((function(e){console.log(e),t.detallepagos=e.data.data,t.dialogdetail=!0})).catch((function(e){console.log(e)}))},cancelardetalle:function(){this.dialogdetail=!1},normal:function(e,t,a){this.notice=new n.a({title:e,description:t,className:"open-normal",closable:!0,duration:3,type:a})}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}}},i=a(0),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",[a("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:e.dialogdetail,callback:function(t){e.dialogdetail=t},expression:"dialogdetail"}},[a("v-card",[a("v-card-title",{staticClass:"cyan white--text"},[a("span",{staticClass:"headline"},[e._v("Detalle de pagos")])]),e._v(" "),a("v-card-text",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headersdetail,items:e.detallepagos,"sort-by":"id"},scopedSlots:e._u([{key:"item.prpa_amount",fn:function(t){var o=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(o.prpa_amount)))])]}}])})],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:e.cancelardetalle}},[e._v("Cancelar")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"cyan white--text"},[a("span",{staticClass:"headline"},[e._v("Agregar pago")])]),e._v(" "),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("h4",[e._v(" Compra:")]),e._v(" "+e._s(e.editado.prpu_identifier)+"\r\n                            ")]),e._v(" "),a("v-col",{attrs:{cols:"6"}},[a("h4",[e._v(" Monto total:")]),e._v(" $"+e._s(e.formatMoney(e.editado.prde_amount))+"\r\n                            ")])],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("h4",[e._v(" Monto pagado:")]),e._v(" $"+e._s(e.formatMoney(e.editado.prde_amount_paid))+"\r\n                            ")]),e._v(" "),a("v-col",{attrs:{cols:"6"}},[a("h4",[e._v(" Monto pendiente:")]),e._v(" $"+e._s(e.formatMoney(e.editado.prde_amount_outstanding))+"\r\n                            ")])],1),e._v(" "),a("v-row",[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-text-field",{attrs:{label:"Monto abonado",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prpa_amount,callback:function(t){e.$set(e.editado,"prpa_amount",t)},expression:"editado.prpa_amount"}})],1)],1),e._v(" "),a("v-row",[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-combobox",{attrs:{required:"",items:e.payments,label:"Forma de pago","item-text":"pash_name","item-value":"pash_pk",filled:"",chips:"",placeholder:"Seleccionar una opción"},model:{value:e.selectpame,callback:function(t){e.selectpame=t},expression:"selectpame"}})],1)],1),e._v(" "),a("v-row",[a("v-card-text",{staticClass:"category d-inline-flex font-weight-light"},[a("v-text-field",{attrs:{label:"Referencia",type:"text"},model:{value:e.editado.prpa_reference,callback:function(t){e.$set(e.editado,"prpa_reference",t)},expression:"editado.prpa_reference"}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:e.cancelar}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{disabled:!e.valid,color:"teal accent-4"},on:{click:e.guardar}},[e._v("Guardar")])],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.clientsdebts,search:e.search,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),e._v(" "),a("v-toolbar",{attrs:{flat:"",color:"indigo"}},[a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),a("v-spacer")],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.prde_amount",fn:function(t){var o=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(o.prde_amount)))])]}},{key:"item.prde_amount_paid",fn:function(t){var o=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(o.prde_amount_paid)))])]}},{key:"item.prde_amount_outstanding",fn:function(t){var o=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(o.prde_amount_outstanding)))])]}},{key:"item.action",fn:function(t){var o=t.item;return["Activo"==o.prde_status_description?a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"cyan",title:"Agregar pago"},on:{click:function(t){return e.abonar(o)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-coin")])],1):e._e(),e._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"cyan",title:"Detalle"},on:{click:function(t){return e.detalle(o)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-parking")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);