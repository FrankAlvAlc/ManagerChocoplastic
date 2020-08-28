(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{43:function(t,e,r){"use strict";r.r(e);var a=r(1),o=r.n(a),n={data:function(){return{headers:[{text:"Ident",value:"prod_identifier"},{text:"Nombre",value:"prod_name"},{text:"Categoria",value:"prca_name"},{text:"Precio Menudeo",value:"prod_saleprice"},{text:"Sucursal",value:"stor_name"},{text:"Tipo",value:"bulk"},{text:"",value:"action",width:"10%"}],select:0,selectCat:0,selectMeasIn:0,selectMeasOut:0,principal:!1,estado:!0,estadoGranel:!0,imageUrl:"",editado:{prod_fk:0,stor_fk:0,prfr_pk:0},defaultItem:{prod_fk:0,stor_fk:0,prfr_pk:0},editedIndex:-1,categories:[],measurements:[],stores:[],store:"",frequents:[],products:[],product:"",search:"",dialog:!1,snackbar:!1,timeout:2e3,textMsg:"",valid:!1,validProvider:!1,folioRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=10||"Min 10 caracter"}],nameRules:[function(t){return!!t||"Requerido."},function(t){return t&&t.length>=3||"Min 3 caracteres"}],phoneRules:[function(t){return!!t||"Requerido."},function(t){return t&&10==t.length||"Requiere 10 caracteres"}],numberRules:[function(t){return!!t||"Requerido."},function(t){return t>0||"El número debe ser mayor a cero"}],rulesImage:[function(t){return!!t||"Archivo requerido"},function(t){return!t||t.size<2e6||"La imagen tiene que ser menor a 2 MB!"}],loading:!1,dialogQuestion:!1,dialogQuestionDelete:!1,messageQuestion:""}},created:function(){this.getFrequents(),this.getStores(),this.getProducts()},methods:{formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",n=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),i=n.length>3?n.length%3:0;return o+(i?n.substr(0,i)+a:"")+n.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+a)+(e?r+Math.abs(t-n).toFixed(e).slice(2):"")}catch(t){console.log(t)}},getFrequents:function(){var t=this;axios.get("/product/frequents").then((function(e){console.log(e.data),t.frequents=e.data.data})).catch((function(t){console.log(t)}))},getStores:function(){var t=this;axios.get("/storeget").then((function(e){t.stores=e.data.data})).catch((function(t){console.log(t)}))},getProducts:function(){var t=this;this.loading=!0,axios.get("/productList").then((function(e){setTimeout((function(){return t.loading=!1}),2e3),null!=e.data.data?t.products=e.data.data:t.normal("Notificación","Ocurrio un error al cargar los datos.","error")})).catch((function(t){console.log(t)}))},cancelar:function(){this.dialog=!1,this.editado=Object.assign({},this.defaultItem),this.editedIndex=-1,this.store="",this.product=""},guardar:function(){var t=this;console.log(this.product),console.log(this.store),this.editado.prod_fk=this.product.prod_pk,this.editado.stor_fk=this.store,axios.post("/product/frequents",this.editado).then((function(e){console.log(e.data),200==e.data.status.code?(t.snackbar=!0,t.textMsg=e.data.status.message,t.cancelar(),t.getFrequents()):t.normal("Notificación","Ocurrio un error al guardar. Contacte a su administrador.","error")})).catch((function(t){console.log(t)}))},borrar:function(t){this.products.indexOf(t);this.editado=Object.assign({},t),this.dialogQuestionDelete=!0},guardaBorrar:function(){this.delete(),this.dialogQuestionDelete=!1},delete:function(){var t=this;axios.put("/product/delete",this.editado).then((function(e){t.textMsg="¡Eliminado correctamente!",t.normal("Notificación",t.textMsg,"success"),t.getFrequents()}))},normal:function(t,e,r){this.notice=new o.a({title:t,description:e,className:"open-normal",closable:!0,duration:3,type:r})}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}}},i=r(0),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",[r("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-card",{attrs:{color:"white"}},[r("v-card-text",[t._v("\r\n                    Cargando\r\n                    "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"green"}})],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogQuestionDelete,callback:function(e){t.dialogQuestionDelete=e},expression:"dialogQuestionDelete"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Alerta")]),t._v(" "),r("v-card-text",[t._v("¿Está seguro de borrar el registro?")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogQuestionDelete=!1}}},[t._v("Cancelar")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.guardaBorrar}},[t._v("Continuar")])],1)],1)],1),t._v(" "),r("v-snackbar",{attrs:{color:"#000000",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\r\n            "+t._s(t.textMsg)+"\r\n            "),r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\r\n                Cerrar\r\n            ")])],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"cyan white--text"},[r("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),r("v-form",{model:{value:t.validProvider,callback:function(e){t.validProvider=e},expression:"validProvider"}},[r("v-card-text",[r("v-select",{attrs:{items:t.stores,"item-text":"stor_name","item-value":"stor_pk",filled:"",chips:"",label:"Sucursal",placeholder:"Selecciona sucursal"},model:{value:t.store,callback:function(e){t.store=e},expression:"store"}}),t._v(" "),r("v-combobox",{attrs:{items:t.products,"item-text":"prod_name","item-value":"prod_pk",filled:"",chips:"",label:"Producto",placeholder:"Selecciona producto"},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:t.cancelar}},[t._v("Cancelar")]),t._v(" "),r("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"teal accent-4"},on:{click:t.guardar}},[t._v("Guardar")])],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-card",[r("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.frequents,search:t.search,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}}),t._v(" "),r("v-toolbar",{attrs:{flat:"",color:"indigo"},scopedSlots:t._u([{key:"extension",fn:function(){return[r("v-btn",{attrs:{fab:"",color:"cyan accent-2",bottom:"",left:"",absolute:""},on:{click:function(e){t.dialog=!t.dialog}}},[r("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}])},[t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.bulk",fn:function(e){return[1==e.item.prod_bulk?r("v-chip",{attrs:{color:"green",outlined:""}},[t._v("\r\n                                Granel")]):r("v-chip",{attrs:{color:"red",outlined:""}},[t._v("NA Granel")])]}},{key:"item.action",fn:function(e){var a=e.item;return[r("v-btn",{staticClass:"mr-2",attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(e){return t.borrar(a)}}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-delete")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);