(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{52:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{headers:[{text:"Inden",value:"prov_identifier",width:"10%"},{text:"Nombre",value:"prov_name"},{text:"Monto Deuda",value:"prde_amount_outstanding"},{text:"RFC",value:"prov_rfc"},{text:"Teléfono",value:"prov_phone"},{text:"Email",value:"prov_email"},{text:"Dirección",value:"prov_addres"},{text:"CP",value:"prov_cp"},{text:"Ciudad",value:"prov_city"},{text:"Estado",value:"feen_name"},{text:"Estatus",value:"status"},{text:"",value:"action",width:"20%"}],select:0,phoneNumber:"",editadoProveedor:{prov_pk:0,feen_fk:0,prov_identifier:"",prov_name:"",prov_rfc:"",prov_phone:"",prov_email:"",prov_addres:"",prov_cp:"",prov_city:"",prov_status:0},defaultItem:{prov_pk:0,feen_fk:0,prov_identifier:"",prov_name:"",prov_rfc:"",prov_phone:"",prov_email:"",prov_addres:"",prov_cp:"",prov_city:"",prov_status:0},editedIndex:-1,proveedores:[],entities:[],search:"",dialog:!1,snackbar:!1,timeout:2e3,textMsg:"",valid:!1,validProvider:!1,estado:!0,folioRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=10||"Min 10 caracter"}],nameRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=3||"Min 3 caracteres"}],phoneRules:[function(e){return!!e||"Requerido."},function(e){return e&&10==e.length||"Requiere 10 caracteres"}],RFCRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=12&&e.length<=13||"Ingrese un RFC valido"}],CPRules:[function(e){return!!e||"Código postal requerido."},function(e){return e&&5==e.length||"Ingrese un Código Postal valido "}],emailRules:[function(e){return!!e||"Correo electrónico requerido"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Ingrese un correo válido"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:""}},created:function(){this.getProviders(),this.getEntities()},methods:{isNumber:function(e){console.log("key "+e.key+" ("+e.keyCode+")");var t=(e=e||window.event).which?e.which:e.keyCode;if(t>47&&t<58||t>95&&t<106||8==t)return console.log(t+"--\x3e true"),!0;console.log(t+"--\x3e"),e.preventDefault()},getProviders:function(){var e=this;this.loading=!0,axios.get("/providerlist").then((function(t){setTimeout((function(){return e.loading=!1}),500),null!=t.data.data?e.proveedores=t.data.data:e.normal("Notificación",t.data.status.message,"error")})).catch((function(t){console.log(t),e.normal("Notificación","Error al cargar los datos","error")}))},getEntities:function(){var e=this;axios.get("/entitieslist").then((function(t){console.log(t.data),e.entities=t.data.data})).catch((function(e){console.log(e)}))},cancelar:function(){this.dialog=!1,this.editadoProveedor=Object.assign({},this.defaultItem),this.editedIndex=-1},edita:function(e){this.editedIndex=this.proveedores.indexOf(e),this.editadoProveedor=Object.assign({},e),this.select=this.editadoProveedor.feen_fk,this.estado=this.editadoProveedor.prov_status,this.dialog=!0},guardar:function(){this.editadoProveedor.feen_fk=this.select,1==this.estado?this.editadoProveedor.prov_status=1:this.editadoProveedor.prov_status=0,this.editedIndex>-1?this.editar():this.alta(),this.cancelar()},alta:function(){var e=this;axios.post("/providers/add",this.editadoProveedor).then((function(t){e.snackbar=!0,e.textMsg="¡Alta exitosa!",e.getProviders()}))},editar:function(){var e=this;axios.put("/providers/update",this.editadoProveedor).then((function(t){e.snackbar=!0,e.textMsg="¡Actualización Exitosa!",e.getProviders()}))},borrar:function(e){this.proveedores.indexOf(e);this.editadoProveedor=Object.assign({},e),this.dialogQuestionDelete=!0},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},delete:function(){var e=this;axios.put("/providers/delete",this.editadoProveedor).then((function(t){e.textMsg="¡Eliminado correctamente!",e.normal("Notificación",e.textMsg,"success"),e.getProviders()}))},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var a=e<0?"-":"",i=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),n=i.length>3?i.length%3:0;return a+(n?i.substr(0,n)+r:"")+i.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+r)+(t?o+Math.abs(e-i).toFixed(t).slice(2):"")}catch(e){console.log(e)}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}}},a=o(0),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-container",[o("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[o("v-card",{attrs:{color:"white"}},[o("v-card-text",[e._v("\n          Cargando\n          "),o("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialogQuestionDelete,callback:function(t){e.dialogQuestionDelete=t},expression:"dialogQuestionDelete"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[e._v("Alerta")]),e._v(" "),o("v-card-text",[e._v("¿Está seguro de borrar el registro?")]),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialogQuestionDelete=!1}}},[e._v("Cancelar")]),e._v(" "),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.guardaBorrar}},[e._v("Continuar")])],1)],1)],1),e._v(" "),o("v-snackbar",{attrs:{color:"#000000",timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.textMsg)+"\n      "),o("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Cerrar")])],1),e._v(" "),o("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"cyan white--text"},[o("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),o("v-form",{model:{value:e.validProvider,callback:function(t){e.validProvider=t},expression:"validProvider"}},[o("v-card-text",[o("v-text-field",{attrs:{label:"Nombre",maxlength:"300",rules:e.nameRules,required:""},model:{value:e.editadoProveedor.prov_name,callback:function(t){e.$set(e.editadoProveedor,"prov_name",t)},expression:"editadoProveedor.prov_name"}}),e._v(" "),o("v-text-field",{attrs:{label:"Identificar",maxlength:"300",rules:e.nameRules,required:""},model:{value:e.editadoProveedor.prov_identifier,callback:function(t){e.$set(e.editadoProveedor,"prov_identifier",t)},expression:"editadoProveedor.prov_identifier"}}),e._v(" "),o("v-text-field",{attrs:{label:"RFC",maxlength:"15",rules:e.RFCRules,required:""},model:{value:e.editadoProveedor.prov_rfc,callback:function(t){e.$set(e.editadoProveedor,"prov_rfc",t)},expression:"editadoProveedor.prov_rfc"}}),e._v(" "),o("v-text-field",{attrs:{label:"Teléfono",maxlength:"10",rules:e.phoneRules,required:""},on:{keydown:e.isNumber},model:{value:e.editadoProveedor.prov_phone,callback:function(t){e.$set(e.editadoProveedor,"prov_phone",t)},expression:"editadoProveedor.prov_phone"}}),e._v(" "),o("v-text-field",{attrs:{label:"Correo Electrónico",maxlength:"50",type:"email",rules:e.emailRules,required:""},model:{value:e.editadoProveedor.prov_email,callback:function(t){e.$set(e.editadoProveedor,"prov_email",t)},expression:"editadoProveedor.prov_email"}}),e._v(" "),o("v-text-field",{attrs:{label:"Dirección",maxlength:"1000",rules:e.nameRules,required:""},model:{value:e.editadoProveedor.prov_addres,callback:function(t){e.$set(e.editadoProveedor,"prov_addres",t)},expression:"editadoProveedor.prov_addres"}}),e._v(" "),o("v-text-field",{attrs:{label:"C.P.",maxlength:"5",rules:e.nameRules,required:""},model:{value:e.editadoProveedor.prov_cp,callback:function(t){e.$set(e.editadoProveedor,"prov_cp",t)},expression:"editadoProveedor.prov_cp"}}),e._v(" "),o("v-text-field",{attrs:{label:"Ciudad",maxlength:"300",rules:e.nameRules,required:""},model:{value:e.editadoProveedor.prov_city,callback:function(t){e.$set(e.editadoProveedor,"prov_city",t)},expression:"editadoProveedor.prov_city"}}),e._v(" "),o("span",[e._v("Activo/Inactivo")]),e._v(" "),o("v-switch",{model:{value:e.estado,callback:function(t){e.estado=t},expression:"estado"}}),e._v(" "),o("v-select",{attrs:{items:e.entities,label:"Selecione un estado","single-line":"","item-text":"feen_name","item-value":"feen_pk","persistent-hint":""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:e.cancelar}},[e._v("Cancelar")]),e._v(" "),o("v-btn",{staticClass:"ma-2 white--text",attrs:{disabled:!e.validProvider,color:"teal accent-4"},on:{click:e.guardar}},[e._v("Guardar")])],1)],1)],1)],1),e._v(" "),o("v-row",[o("v-col",[o("v-card",[o("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.proveedores,search:e.search,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),e._v(" "),o("v-toolbar",{attrs:{flat:"",color:"indigo"},scopedSlots:e._u([{key:"extension",fn:function(){return[o("v-btn",{attrs:{fab:"",color:"cyan accent-2",bottom:"",left:"",absolute:""},on:{click:function(t){e.dialog=!e.dialog}}},[o("v-icon",[e._v("mdi-plus")])],1)]},proxy:!0}])},[e._v(" "),o("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),o("v-spacer")],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"12"}},[o("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.prde_amount_outstanding",fn:function(t){var r=t.item;return[o("v-label",[e._v("$"+e._s(e.formatMoney(r.prde_amount_outstanding)))])]}},{key:"item.status",fn:function(t){return[1==t.item.prov_status?o("v-chip",{attrs:{color:"green",dark:""}},[e._v("Activo")]):o("v-chip",{attrs:{color:"red",dark:""}},[e._v("Inactivo")])]}},{key:"item.action",fn:function(t){var r=t.item;return[o("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"cyan"},on:{click:function(t){return e.edita(r)}}},[o("v-icon",{attrs:{dark:""}},[e._v("mdi-pencil")])],1),e._v(" "),o("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(t){return e.borrar(r)}}},[o("v-icon",{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);