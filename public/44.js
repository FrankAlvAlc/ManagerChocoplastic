(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{70:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{user:{}}},beforeMount:function(){var t=this;axios.get("/auth/user").then((function(e){return t.user=e.data}))}},l=s(0),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md8:""}},[s("v-card",[s("v-card-title",{attrs:{color:"green"}},[s("h3",{staticClass:"title font-weight-light"},[t._v("Edit Profile\n          "),s("h5",{staticClass:"subtitle"},[t._v("Complete your profile")])])]),t._v(" "),s("v-card-text",[s("v-form",[s("v-container",{attrs:{"py-0":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{attrs:{label:"Company (disabled)",disabled:""}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"User Name"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"Email Address"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"First Name"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"Last Name"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md12:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"Adress"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"City"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"Country"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-text-field",{staticClass:"purple-input",attrs:{label:"Postal Code",type:"number"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{staticClass:"purple-input",attrs:{label:"About Me",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"","text-xs-right":""}},[s("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{color:"success"}},[t._v("\n                  Update Profile\n                ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"v-card-profile"},[s("v-card-title",[s("v-avatar",{staticClass:"mx-auto d-block",attrs:{slot:"offset",size:"130"},slot:"offset"},[s("img",{attrs:{src:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"}})])],1),t._v(" "),s("v-card-text",{staticClass:"text-xs-center"},[s("h6",{staticClass:"category text-gray font-weight-thin mb-3"},[t._v(t._s(t.user.email))]),t._v(" "),s("h4",{staticClass:"card-title font-weight-light"},[t._v(t._s(t.user.name))]),t._v(" "),s("p",{staticClass:"card-description font-weight-light"},[t._v("Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);