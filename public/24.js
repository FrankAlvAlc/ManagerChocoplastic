(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{51:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s={data:function(){var e;return{headersVar:[{text:"Unidad de medida",value:"meas_fk_output_name"},{text:"Precio",value:"prod_saleprice"},{text:"Factor de conversión",value:"prod_fact_convert"},{text:"Tipo",value:"bulk"},{text:"",value:"action"}],headers:[{text:"Ident",value:"prod_identifier"},{text:"Nombre",value:"prod_name"},{text:"Categoria",value:"prca_name"},{text:"Unidad Entrada",value:"meas_fk_input_name"},{text:"Unidad Salida",value:"meas_fk_output_name"},{text:"Precio Actual",value:"prod_actualprice"},{text:"Precio Eventual",value:"prod_eventualprice"},{text:"Precio Preferencial",value:"prod_preferentialprice"},{text:"Precio Menudeo",value:"prod_saleprice"},{text:"Precio Mayoreo",value:"prod_listprice"},{text:"Compra Mínima",value:"prod_minimumpurchase"},{text:"Cantidad por Paquete",value:"prod_packingquantity"},{text:"Tipo",value:"bulk"},{text:"Estatus",value:"status"},{text:"",value:"action"}],select:0,selectCat:0,selectMeasIn:0,selectMeas:0,selectMeasOut:0,principal:!1,estado:!0,estadoIVA:!0,estadoIEPS:!0,estadoGranel:!0,estadoGranelVar:!0,imageUrl:"",editadoVar:{prod_pk:0,meas_fk_output:0,prod_saleprice:0,prod_listprice:0,prod_fact_convert:0,prod_bulk:0},defaultItemVar:{prod_pk:0,meas_fk_output:0,prod_saleprice:0,prod_listprice:0,prod_fact_convert:0,prod_bulk:0},editado:{prod_pk:0,prca_fk:0,prca_name:"",meas_fk_input:0,meas_fk_input_name:"",prod_description:"",meas_fk_output:0,meas_fk_output_name:"",prod_identifier:"",prod_name:"",prod_actualprice:0,prod_eventualprice:0,prod_preferentialprice:0,prod_saleprice:0,prod_listprice:0,prod_bulk:0,prod_iva:0,prod_ieps:0,prod_packingquantity:0,prod_minimumpurchase:0,prod_status:0,is_mod:!1,imageUrl:this.imageUrl},prod_pk:0,defaultItem:(e={prod_pk:0,prca_fk:0,prca_name:"",meas_fk_input:0,meas_fk_input_name:"",prod_description:"",meas_fk_output:0,meas_fk_output_name:"",prod_identifier:"",prod_name:""},o(e,"prod_name",""),o(e,"prod_actualprice",0),o(e,"prod_eventualprice",0),o(e,"prod_preferentialprice",0),o(e,"prod_saleprice",0),o(e,"prod_listprice",0),o(e,"prod_bulk",0),o(e,"prod_iva",0),o(e,"prod_ieps",0),o(e,"prod_packingquantity",0),o(e,"prod_minimumpurchase",0),o(e,"prod_status",0),o(e,"is_mod",!1),o(e,"imageUrl",this.imageUrl),e),editedIndex:-1,products:[],categories:[],measurements:[],search:"",dialog:!1,dialogAddVar:!1,snackbar:!1,timeout:2e3,textMsg:"",valid:!1,validVar:!1,validProvider:!1,dialogSuccess:!1,dialogVar:!1,variations:[],folioRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=10||"Min 10 caracter"}],nameRules:[function(e){return!!e||"Requerido."},function(e){return e&&e.length>=3||"Min 3 caracteres"}],phoneRules:[function(e){return!!e||"Requerido."},function(e){return e&&10==e.length||"Requiere 10 caracteres"}],numberRules:[function(e){return!!e||"Requerido."},function(e){return e>0||"El número debe ser mayor a cero"}],rulesImage:[function(e){return!!e||"Archivo requerido"},function(e){return!e||e.size<2e6||"La imagen tiene que ser menor a 2 MB!"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,dialogQuestionDeleteVar:!1,messageQuestion:""}},created:function(){this.getProducts(),this.getCategories(),this.getMeasurements()},methods:{formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var i=e<0?"-":"",o=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),s=o.length>3?o.length%3:0;return i+(s?o.substr(0,s)+r:"")+o.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+r)+(t?a+Math.abs(e-o).toFixed(t).slice(2):"")}catch(e){console.log(e)}},getProducts:function(){var e=this;this.loading=!0,axios.get("/productList").then((function(t){setTimeout((function(){return e.loading=!1}),500),null!=t.data.data?e.products=t.data.data:e.normal("Notificación",t.data.status.message,"error")})).catch((function(t){console.log(t),e.normal("Notificación","Error al cargar los datos","error")}))},getCategories:function(){var e=this;axios.get("/categories").then((function(t){e.categories=t.data.data})).catch((function(e){console.log(e)}))},getMeasurements:function(){var e=this;axios.get("/measurements").then((function(t){e.measurements=t.data.data})).catch((function(e){console.log(e)}))},variacion:function(e){var t=this;this.editedIndex=this.products.indexOf(e),this.editado=Object.assign({},e),this.editadoVar.prod_pk=this.editado.prod_pk,this.dialogVar=!0,this.loading=!0,axios.get("/products/derived/"+e.prod_pk).then((function(e){setTimeout((function(){return t.loading=!1}),500),null!=e.data.data?(t.variations=e.data.data,console.log("this.variations"),console.log(t.variations)):t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1},edita:function(e){this.editedIndex=this.products.indexOf(e),this.editado=Object.assign({},e),this.estado=this.editado.prod_status,this.estadoGranel=this.editado.prod_bulk,this.estadoIVA=this.editado.prod_iva,this.estadoIEPS=this.editado.prod_ieps,this.selectCat=this.editado.prca_fk,this.selectMeasIn=this.editado.meas_fk_input,this.selectMeasOut=this.editado.meas_fk_output,this.imageUrl=this.editado.prod_image,this.dialog=!0},guardar:function(){1==this.estado?this.editado.prod_status=1:this.editado.prod_status=0,1==this.estadoGranel?this.editado.prod_bulk=1:this.editado.prod_bulk=0,1==this.estadoIVA?this.editado.prod_iva=1:this.editado.prod_iva=0,1==this.estadoIEPS?this.editado.prod_ieps=1:this.editado.prod_ieps=0,this.editado.prca_fk=this.selectCat,this.editado.meas_fk_input=this.selectMeasIn,this.editado.meas_fk_output=this.selectMeasOut,console.log(this.editado),this.editedIndex>-1?this.editar():this.alta(),this.cancelar()},alta:function(){var e=this;axios.post("/product/add",this.editado).then((function(t){console.log(t.data),200==t.data.status.code?(e.dialogSuccess=!1,e.textMsg=t.data.status.message,e.normal("Notificación",e.textMsg,"success"),e.getProducts()):e.normal("Notificación",t.data.status.technicaldetail.errorInfo[2],"error")})).catch((function(t){e.errors.push(t)}))},editar:function(){var e=this;axios.put("/product/update",this.editado).then((function(t){console.log(t),200==t.data.code?(e.dialogSuccess=!1,e.textMsg="¡Actualización Exitosa!",e.normal("Notificación",e.textMsg,"success"),e.getProducts()):e.normal("Notificación",t.data.message,"error")})).catch((function(t){e.errors.push(t)}))},borrar:function(e){this.products.indexOf(e);this.editado=Object.assign({},e),this.dialogQuestionDelete=!0},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},delete:function(){var e=this;axios.put("/product/delete",this.editado).then((function(t){console.log(t),e.textMsg="¡Eliminado correctamente!",e.normal("Notificación",e.textMsg,"success"),e.getProducts()}))},onPickFileProduct:function(){this.$refs.fileInput.click()},onFilePickedProduct:function(e){var t=this,a=e.target.files,r=(a[0].name,new FileReader);r.addEventListener("load",(function(){t.imageUrl=r.result,t.editado.imageUrl=r.result,t.editado.is_mod=!0,console.log(t.editado)})),r.readAsDataURL(a[0]),this.image=a[0]},OpenDialogAddVar:function(){this.dialogAddVar=!0,this.selectMeas=-1},guardaAddVar:function(){this.editadoVar.meas_fk_output=this.selectMeas,1==this.estadoGranelVar?this.editadoVar.prod_bulk=1:this.editadoVar.prod_bulk=0,this.editedIndexVar>-1?this.editarAddVar():this.guardarAddVar(),this.cancelarAddVar()},guardarAddVar:function(){var e=this;this.editadoVar.prod_pk=this.editado.prod_pk,console.log(this.editadoVar),axios.post("products/derived",this.editadoVar).then((function(t){console.log(t.data),200==t.data.status.code?(e.dialogSuccess=!1,e.textMsg=t.data.status.message,e.normal("Notificación",e.textMsg,"success"),console.log(e.editado),e.getvariacion(e.editado.prod_pk)):e.normal("Notificación",t.data.status.technicaldetail.errorInfo[2],"error")})).catch((function(e){console.log(e)}))},editaVar:function(e){this.editedIndexVar=this.variations.indexOf(e),this.editadoVar.prod_pk=e.prod_pk,this.editadoVar.meas_fk_output=e.meas_fk_output,this.editadoVar.prod_saleprice=e.prod_saleprice,this.editadoVar.prod_listprice=e.prod_listprice,this.editadoVar.prod_fact_convert=e.prod_fact_convert,this.estadoGranelVar=e.prod_bulk,this.selectMeas=e.meas_fk_output,this.dialogAddVar=!0},editarAddVar:function(){var e=this;console.log("editar"),console.log(this.editadoVar),axios.post("/products/derived/update",this.editadoVar).then((function(t){console.log(t),200==t.data.status.code?(e.dialogSuccess=!1,e.textMsg="¡Actualización Exitosa!",e.normal("Notificación",e.textMsg,"success"),e.getvariacion(e.editado.prod_pk)):e.normal("Notificación",t.data.message,"error")})).catch((function(t){e.errors.push(t)}))},cancelarAddVar:function(){this.dialogAddVar=!1,this.editadoVar=Object.assign({},this.defaultItemVar),this.editedIndexVar=-1},getvariacion:function(e){var t=this;this.loading=!0,axios.get("/products/derived/"+e).then((function(e){t.loading=!1,console.log("response"),console.log(e),null!=e.data.data?t.variations=e.data.data:t.normal("Notificación",e.data.status.message,"error")})).catch((function(e){console.log(e),t.normal("Notificación","Error al cargar los datos","error")}))},borrarVar:function(e){this.variations.indexOf(e);this.editadoVar=Object.assign({},e),this.dialogQuestionDeleteVar=!0},guardaBorrarVar:function(){this.deleteVar(),this.dialogQuestionDeleteVar=!1},deleteVar:function(){var e=this;axios.post("/products/derived/destroy",this.editadoVar).then((function(t){console.log(t),e.textMsg="¡Eliminado correctamente!",e.normal("Notificación",e.textMsg,"success"),e.getvariacion(e.editado.prod_pk)}))},normal:function(e,t,a){this.notice=new i.a({title:e,description:t,className:"open-normal",closable:!0,duration:3,type:a})}},watch:{dialogSuccess:function(e){var t=this;e&&setTimeout((function(){return t.dialogSuccess=!1}),4e3)}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}}},n=a(0),d=Object(n.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",[a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-text",[e._v("\r\n                    Cargando\r\n                    "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialogQuestionDelete,callback:function(t){e.dialogQuestionDelete=t},expression:"dialogQuestionDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Alerta")]),e._v(" "),a("v-card-text",[e._v("¿Está seguro de borrar el registro?")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialogQuestionDelete=!1}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.guardaBorrar}},[e._v("Continuar")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialogQuestionDeleteVar,callback:function(t){e.dialogQuestionDeleteVar=t},expression:"dialogQuestionDeleteVar"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Alerta")]),e._v(" "),a("v-card-text",[e._v("¿Está seguro de borrar el registro?")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialogQuestionDeleteVar=!1}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.guardaBorrarVar}},[e._v("Continuar")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"640","overlay-color":"white",persistent:""},model:{value:e.dialogSuccess,callback:function(t){e.dialogSuccess=t},expression:"dialogSuccess"}},[a("v-card",{attrs:{color:"primary"}},[a("v-alert",{attrs:{color:"success",border:"left","colored-border":"",icon:"mdi-checkbox-marked-circle",prominent:""}},[e._v("\r\n                    "+e._s(e.textMsg)+"\r\n                ")])],1)],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"cyan white--text"},[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),a("v-form",{model:{value:e.validProvider,callback:function(t){e.validProvider=t},expression:"validProvider"}},[a("v-card-text",[a("v-text-field",{attrs:{label:"Nombre",maxlength:"300",rules:e.nameRules,required:""},model:{value:e.editado.prod_name,callback:function(t){e.$set(e.editado,"prod_name",t)},expression:"editado.prod_name"}}),e._v(" "),a("v-textarea",{attrs:{label:"Descripción",maxlength:"5000",rules:e.nameRules,required:""},model:{value:e.editado.prod_description,callback:function(t){e.$set(e.editado,"prod_description",t)},expression:"editado.prod_description"}}),e._v(" "),a("v-text-field",{attrs:{label:"Identificador",maxlength:"300",rules:e.nameRules,required:""},model:{value:e.editado.prod_identifier,callback:function(t){e.$set(e.editado,"prod_identifier",t)},expression:"editado.prod_identifier"}}),e._v(" "),a("v-select",{attrs:{items:e.categories,label:"Selecione una categoría","single-line":"","item-text":"prca_name","item-value":"prca_pk","persistent-hint":""},model:{value:e.selectCat,callback:function(t){e.selectCat=t},expression:"selectCat"}}),e._v(" "),a("v-select",{attrs:{items:e.measurements,label:"Selecione una Unidad Entrada","single-line":"","item-text":"meas_name","item-value":"meas_pk","persistent-hint":""},model:{value:e.selectMeasIn,callback:function(t){e.selectMeasIn=t},expression:"selectMeasIn"}}),e._v(" "),a("v-select",{attrs:{items:e.measurements,label:"Selecione una Unidad Salida","single-line":"","item-text":"meas_name","item-value":"meas_pk","persistent-hint":""},model:{value:e.selectMeasOut,callback:function(t){e.selectMeasOut=t},expression:"selectMeasOut"}}),e._v(" "),a("v-text-field",{attrs:{label:"Precio Actual",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_actualprice,callback:function(t){e.$set(e.editado,"prod_actualprice",t)},expression:"editado.prod_actualprice"}}),e._v(" "),a("v-text-field",{attrs:{label:"Precio Eventual",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_eventualprice,callback:function(t){e.$set(e.editado,"prod_eventualprice",t)},expression:"editado.prod_eventualprice"}}),e._v(" "),a("v-text-field",{attrs:{label:"Precio Preferencial",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_preferentialprice,callback:function(t){e.$set(e.editado,"prod_preferentialprice",t)},expression:"editado.prod_preferentialprice"}}),e._v(" "),a("v-text-field",{attrs:{label:"Precio Menudeo",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_saleprice,callback:function(t){e.$set(e.editado,"prod_saleprice",t)},expression:"editado.prod_saleprice"}}),e._v(" "),a("v-text-field",{attrs:{label:"Precio Mayoreo",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_listprice,callback:function(t){e.$set(e.editado,"prod_listprice",t)},expression:"editado.prod_listprice"}}),e._v(" "),a("v-text-field",{attrs:{label:"Compra Mínima",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_minimumpurchase,callback:function(t){e.$set(e.editado,"prod_minimumpurchase",t)},expression:"editado.prod_minimumpurchase"}}),e._v(" "),a("v-text-field",{attrs:{label:"Cantidad por paquete",type:"number",rules:e.numberRules,required:""},model:{value:e.editado.prod_packingquantity,callback:function(t){e.$set(e.editado,"prod_packingquantity",t)},expression:"editado.prod_packingquantity"}}),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("span",[e._v("Venta a Granel")]),e._v(" "),a("v-switch",{model:{value:e.estadoGranel,callback:function(t){e.estadoGranel=t},expression:"estadoGranel"}})],1),e._v(" "),a("v-col",{attrs:{cols:"6"}},[a("span",[e._v("Activo/Inactivo")]),e._v(" "),a("v-switch",{model:{value:e.estado,callback:function(t){e.estado=t},expression:"estado"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("span",[e._v("IVA")]),e._v(" "),a("v-switch",{model:{value:e.estadoIVA,callback:function(t){e.estadoIVA=t},expression:"estadoIVA"}})],1),e._v(" "),a("v-col",{attrs:{cols:"6"}},[a("span",[e._v("IEPS")]),e._v(" "),a("v-switch",{model:{value:e.estadoIEPS,callback:function(t){e.estadoIEPS=t},expression:"estadoIEPS"}})],1)],1),e._v(" "),a("v-card-text",[a("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:e.onPickFileProduct}},[e._v("Subir imagen")]),e._v(" "),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg",required:"",rules:e.rulesImage},on:{change:e.onFilePickedProduct}})],1),e._v(" "),a("v-layout",[a("img",{attrs:{src:this.imageUrl,height:"150"}})])],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:e.cancelar}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{disabled:!e.validProvider,color:"teal accent-4"},on:{click:e.guardar}},[e._v("Guardar")])],1)],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.dialogAddVar,callback:function(t){e.dialogAddVar=t},expression:"dialogAddVar"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("Variaciones")])],1),e._v(" "),a("v-form",{model:{value:e.validVar,callback:function(t){e.validVar=t},expression:"validVar"}},[a("v-card-text",[a("span",[e._v("Unidad de medida")]),e._v(" "),a("v-select",{attrs:{items:e.measurements,label:"Selecione una Unidad de Salida","single-line":"","item-text":"meas_name","item-value":"meas_pk","persistent-hint":""},model:{value:e.selectMeas,callback:function(t){e.selectMeas=t},expression:"selectMeas"}}),e._v(" "),a("v-text-field",{attrs:{label:"Precio",prefix:"$",type:"number",rules:e.numberRules,required:""},model:{value:e.editadoVar.prod_saleprice,callback:function(t){e.$set(e.editadoVar,"prod_saleprice",t)},expression:"editadoVar.prod_saleprice"}}),e._v(" "),a("v-text-field",{attrs:{label:"Factor de conversión",prefix:"",type:"number",rules:e.numberRules,required:""},model:{value:e.editadoVar.prod_fact_convert,callback:function(t){e.$set(e.editadoVar,"prod_fact_convert",t)},expression:"editadoVar.prod_fact_convert"}}),e._v(" "),a("span",[e._v("Venta a Granel")]),e._v(" "),a("v-switch",{model:{value:e.estadoGranelVar,callback:function(t){e.estadoGranelVar=t},expression:"estadoGranelVar"}})],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:e.cancelarAddVar}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{staticClass:"ma-2 white--text",attrs:{disabled:!e.validVar,color:"teal accent-4"},on:{click:e.guardaAddVar}},[e._v("Guardar")])],1)],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"1024px",persistent:""},model:{value:e.dialogVar,callback:function(t){e.dialogVar=t},expression:"dialogVar"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""}},[e._v("Variaciones")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialogVar=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",[a("v-btn",{staticClass:"ma-2",attrs:{dark:"",color:"green"},on:{click:e.OpenDialogAddVar}},[e._v("Nuevo")]),e._v(" "),a("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headersVar,items:e.variations},scopedSlots:e._u([{key:"item.prod_listprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_listprice)))])]}},{key:"item.prod_saleprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_saleprice)))])]}},{key:"item.bulk",fn:function(t){return[1==t.item.prod_bulk?a("v-chip",{attrs:{color:"green",outlined:""}},[e._v("\r\n                                Granel")]):a("v-chip",{attrs:{color:"red",outlined:""}},[e._v("NA Granel")])]}},{key:"item.action",fn:function(t){var r=t.item;return[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"cyan",title:"Editar"},on:{click:function(t){return e.editaVar(r)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-pencil")])],1),e._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(t){return e.borrarVar(r)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-delete")])],1)]}}])})],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.products,search:e.search,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),e._v(" "),a("v-toolbar",{attrs:{flat:"",color:"indigo"},scopedSlots:e._u([{key:"extension",fn:function(){return[a("v-btn",{attrs:{fab:"",color:"cyan accent-2",bottom:"",left:"",absolute:""},on:{click:function(t){e.dialog=!e.dialog}}},[a("v-icon",[e._v("mdi-plus")])],1)]},proxy:!0}])},[e._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),a("v-spacer")],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{autofocus:"","append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.prod_actualprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_actualprice)))])]}},{key:"item.prod_eventualprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_eventualprice)))])]}},{key:"item.prod_preferentialprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_preferentialprice)))])]}},{key:"item.prod_saleprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_saleprice)))])]}},{key:"item.prod_listprice",fn:function(t){var r=t.item;return[a("v-label",[e._v("$"+e._s(e.formatMoney(r.prod_listprice)))])]}},{key:"item.status",fn:function(t){return[1==t.item.prod_status?a("v-chip",{attrs:{color:"green",dark:""}},[e._v(" Activo ")]):a("v-chip",{attrs:{color:"red",dark:""}},[e._v("Inactivo")])]}},{key:"item.bulk",fn:function(t){return[1==t.item.prod_bulk?a("v-chip",{attrs:{color:"green",outlined:""}},[e._v("\r\n                                Granel")]):a("v-chip",{attrs:{color:"red",outlined:""}},[e._v("NA Granel")])]}},{key:"item.action",fn:function(t){var r=t.item;return[a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"grey",dark:"",icon:""}},"v-btn",i,!1),r),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),a("v-list",[a("v-list-item",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"cyan",title:"Editar producto"},on:{click:function(t){return e.edita(r)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-pencil")])],1),e._v(" "),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"orange",title:"Variaciones"},on:{click:function(t){return e.variacion(r)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-scale")])],1),e._v(" "),a("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(t){return e.borrar(r)}}},[a("v-icon",{attrs:{dark:""}},[e._v("mdi-delete")])],1)],1)],1)],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);