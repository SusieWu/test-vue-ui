(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["terminalList"],{"34e4":function(e,t,a){var n=a("24fb");t=n(!0),t.push([e.i,"[data-v-ff53fa9e]:export{menuBg:#304156;menuText:#bfcbd9;menuActiveText:#409eff}.message[data-v-ff53fa9e]{margin-bottom:10px;margin-left:5px}","",{version:3,sources:["D:/01.workspace/10.test/cicd/test-vue-ui/src/components/downloadToEmail/D:/01.workspace/10.test/cicd/test-vue-ui/src/components/downloadToEmail/D:/01.workspace/10.test/cicd/test-vue-ui/src/components/downloadToEmail/index.vue"],names:[],mappings:"AA6BA,yBACE,cAbM,CAcN,gBAbQ,CAcR,sBAbc,CA2HhB,0BACE,kBAAA,CACA,eAAA",file:"index.vue",sourcesContent:['/* Variables */\r\n\r\n// Base color\r\n$blue:#324157;\r\n$light-blue:#3A71A8;\r\n$red:#C03639;\r\n$pink: #E65D6E;\r\n$green: #30B08F;\r\n$tiffany: #4AB7BD;\r\n$yellow:#FEC171;\r\n$panGreen: #30B08F;\r\n\r\n// Sidebar\r\n$sideBarWidth: 210px;\r\n$subMenuBg:#1f2d3d;\r\n$subMenuHover:#001528;\r\n$subMenuActiveText:#f4f4f5;\r\n$menuBg:#304156;\r\n$menuText:#bfcbd9;\r\n$menuActiveText:#409EFF; // Also see settings.sidebarTextTheme\r\n\r\n// Login page\r\n$lightGray: #eee;\r\n$darkGray:#889aa4;\r\n$loginBg: #2d3a4b;\r\n$loginCursorColor: #fff;\r\n\r\n// The :export directive is the magic sauce for webpack\r\n// https://mattferderer.com/use-sass-variables-in-typescript-and-javascript\r\n:export {\r\n  menuBg: $menuBg;\r\n  menuText: $menuText;\r\n  menuActiveText: $menuActiveText;\r\n}\r\n/* Mixins */\r\n@mixin clearfix {\r\n  &:after {\r\n    content: "";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.message {\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n}\r\n']}]),e.exports=t},7581:function(e,t,a){var n=a("24fb");t=n(!0),t.push([e.i,"[data-v-2521fad5]:export{menuBg:#304156;menuText:#bfcbd9;menuActiveText:#409eff}.com-search[data-v-2521fad5]{display:inline;margin-left:10px}","",{version:3,sources:["D:/01.workspace/10.test/cicd/test-vue-ui/src/components/D:/01.workspace/10.test/cicd/test-vue-ui/src/components/D:/01.workspace/10.test/cicd/test-vue-ui/src/components/comSearch.vue"],names:[],mappings:"AA6BA,yBACE,cAbM,CAcN,gBAbQ,CAcR,sBAbc,CAuDhB,6BACE,cAAA,CACA,gBAAA",file:"comSearch.vue",sourcesContent:['/* Variables */\r\n\r\n// Base color\r\n$blue:#324157;\r\n$light-blue:#3A71A8;\r\n$red:#C03639;\r\n$pink: #E65D6E;\r\n$green: #30B08F;\r\n$tiffany: #4AB7BD;\r\n$yellow:#FEC171;\r\n$panGreen: #30B08F;\r\n\r\n// Sidebar\r\n$sideBarWidth: 210px;\r\n$subMenuBg:#1f2d3d;\r\n$subMenuHover:#001528;\r\n$subMenuActiveText:#f4f4f5;\r\n$menuBg:#304156;\r\n$menuText:#bfcbd9;\r\n$menuActiveText:#409EFF; // Also see settings.sidebarTextTheme\r\n\r\n// Login page\r\n$lightGray: #eee;\r\n$darkGray:#889aa4;\r\n$loginBg: #2d3a4b;\r\n$loginCursorColor: #fff;\r\n\r\n// The :export directive is the magic sauce for webpack\r\n// https://mattferderer.com/use-sass-variables-in-typescript-and-javascript\r\n:export {\r\n  menuBg: $menuBg;\r\n  menuText: $menuText;\r\n  menuActiveText: $menuActiveText;\r\n}\r\n/* Mixins */\r\n@mixin clearfix {\r\n  &:after {\r\n    content: "";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n}\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.com-search {\r\n  display: inline;\r\n  margin-left: 10px;\r\n}\r\n']}]),e.exports=t},8109:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"terminal-page"},[a("el-card",{staticClass:"card-panel"},[a("el-form",{attrs:{inline:!0,model:e.querys,"label-position":"right","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("business.terminal.id")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeTerminalId")},model:{value:e.querys.terminalId,callback:function(t){e.$set(e.querys,"terminalId",t)},expression:"querys.terminalId"}})],1),a("el-form-item",{attrs:{label:"VIN"}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeVin")},model:{value:e.querys.vin,callback:function(t){e.$set(e.querys,"vin",t)},expression:"querys.vin"}})],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.bindCar")}},[a("el-select",{attrs:{placeholder:e.$t("business.terminal.selectBindCar")},model:{value:e.querys.reStatus,callback:function(t){e.$set(e.querys,"reStatus",t)},expression:"querys.reStatus"}},e._l(e.carsOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.simCard")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeSimCard")},model:{value:e.querys.simNo,callback:function(t){e.$set(e.querys,"simNo",t)},expression:"querys.simNo"}})],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.deviceTagId")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeDeviceTagId")},model:{value:e.querys.devLabelId,callback:function(t){e.$set(e.querys,"devLabelId",t)},expression:"querys.devLabelId"}})],1),a("com-search",[[a("span",{attrs:{slot:"item"},slot:"item"},[a("el-form-item",{attrs:{label:e.$t("business.terminal.associatedChassisNumber")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeAssociatedChassisNumber")},model:{value:e.querys.reChassis,callback:function(t){e.$set(e.querys,"reChassis",t)},expression:"querys.reChassis"}})],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.associatedCarNumber")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeAssociatedCarNumber")},model:{value:e.querys.reVehicleNum,callback:function(t){e.$set(e.querys,"reVehicleNum",t)},expression:"querys.reVehicleNum"}})],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.associatedDealer")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.placeAssociatedDealer")},model:{value:e.querys.reAgent,callback:function(t){e.$set(e.querys,"reAgent",t)},expression:"querys.reAgent"}})],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.terminalType")}},[a("el-select",{attrs:{placeholder:e.$t("business.terminal.typeRule")},model:{value:e.querys.type,callback:function(t){e.$set(e.querys,"type",t)},expression:"querys.type"}},[a("el-option",{attrs:{value:"",label:e.$t("common.unlimited")}}),a("el-option",{attrs:{value:"0",label:"FK"+e.$t("common.ctrl")}})],1)],1),a("el-form-item",{attrs:{label:e.$t("basicInfo.isSuooprtLock")}},[a("el-select",{attrs:{placeholder:e.$t("common.placeSelect")},model:{value:e.querys.lockCarSupport,callback:function(t){e.$set(e.querys,"lockCarSupport",t)},expression:"querys.lockCarSupport"}},[a("el-option",{attrs:{value:"",label:e.$t("common.unlimited")}}),a("el-option",{attrs:{value:"1",label:e.$t("common.yes")}}),a("el-option",{attrs:{value:"0",label:e.$t("common.no")}})],1)],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.terminalModel")}},[a("el-select",{attrs:{placeholder:e.$t("business.terminal.selectTerminalModel")},model:{value:e.querys.tmId,callback:function(t){e.$set(e.querys,"tmId",t)},expression:"querys.tmId"}},[a("el-option",{attrs:{value:"",label:e.$t("common.unlimited")}}),e._l(e.terminalModels,(function(e,t){return a("el-option",{key:t,attrs:{value:e.tmId,label:e.tmName}})}))],2)],1),a("el-form-item",{attrs:{label:e.$t("business.terminal.wifiFactoryCtrl")}},[a("el-select",{attrs:{placeholder:e.$t("business.terminal.selectWifiFactoryCtrl")},model:{value:e.querys.wifiFactorySwitch,callback:function(t){e.$set(e.querys,"wifiFactorySwitch",t)},expression:"querys.wifiFactorySwitch"}},[a("el-option",{attrs:{value:"",label:e.$t("common.unlimited")}}),a("el-option",{attrs:{value:"1",label:e.$t("common.open")}}),a("el-option",{attrs:{value:"0",label:e.$t("common.close")}}),a("el-option",{attrs:{value:"-2",label:e.$t("common.unknown")}}),a("el-option",{attrs:{value:"2",label:"/"}})],1)],1)],1)]],2),a("br"),a("el-form-item",{attrs:{label:" "}},[a("el-button",{staticStyle:{width:"117px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v(e._s(e.$t("common.search")))])],1),a("el-form-item",[e.hasPerm(20014)?a("el-button",{staticStyle:{width:"117px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$router.push({name:"terminalAddAndEdit",params:{type:"add"}})}}},[e._v(e._s(e.$t("common.add")))]):e._e()],1),a("el-form-item",[e.hasPerm(20034)?a("el-button",{staticStyle:{width:"117px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.importDialogVisible=!0}}},[e._v(e._s(e.$t("business.terminal.importTerminal")))]):e._e()],1),a("el-form-item",[a("el-button",{staticStyle:{width:"117px"},attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.clear}},[e._v(e._s(e.$t("common.clear")))])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"t-table",staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:e.tableData}},[a("el-table-column",{attrs:{type:"index",label:e.$t("common.serialNumber"),width:"80"}}),a("el-table-column",{attrs:{prop:"terminalId",label:e.$t("business.terminal.id"),width:"110"}}),a("el-table-column",{attrs:{prop:"simNo",label:e.$t("business.terminal.terminalSimCard"),width:"110"}}),a("el-table-column",{attrs:{prop:"typeName",label:e.$t("business.terminal.terminalType"),width:"110"}}),a("el-table-column",{attrs:{prop:"modelName",label:e.$t("business.terminal.terminalModel"),width:"130"}}),a("el-table-column",{attrs:{prop:"wifiFactorySwitch",label:e.$t("business.terminal.wifiFactoryCtrl"),width:"110"}}),a("el-table-column",{attrs:{prop:"protocolName",label:e.$t("business.terminal.protocolType"),width:"220"}}),a("el-table-column",{attrs:{prop:"reAgentName",label:e.$t("business.terminal.ownedDealer"),width:"280"}}),a("el-table-column",{attrs:{prop:"vehicleId",label:e.$t("business.terminal.ownedCar"),width:"110"}}),a("el-table-column",{attrs:{prop:"devLabelId",label:e.$t("business.terminal.deviceTagId"),width:"320"}}),a("el-table-column",{attrs:{prop:"simMatch",label:e.$t("business.terminal.drawingNumber"),width:"150"}}),a("el-table-column",{attrs:{prop:"mcuVer",label:"mcuVer",width:"320"}}),a("el-table-column",{attrs:{prop:"appVer",label:"appVer",width:"220"}}),a("el-table-column",{attrs:{prop:"lockCarSupport",label:e.$t("basicInfo.isSuooprtLock"),width:"110"}}),a("el-table-column",{attrs:{prop:"createUser",label:e.$t("carGroup.creater"),width:"110"}}),a("el-table-column",{attrs:{prop:"createTime",label:e.$t("carGroup.createStartTime"),width:"160"}}),a("el-table-column",{attrs:{prop:"remark",label:e.$t("common.remark"),width:"150"}}),a("el-table-column",{attrs:{fixed:"right",label:e.$t("carGroup.operation"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPerm(20015)?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.$router.push({name:"terminalAddAndEdit",params:{id:t.row.id}})}}},[e._v(" "+e._s(e.$t("carGroup.edit"))+" ")]):e._e(),e.hasPerm(20044)?a("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"small"},on:{click:e.handleDel}},[e._v(e._s(e.$t("common.del")))]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.querys.page_number,limit:e.querys.page_size},on:{"update:page":function(t){return e.$set(e.querys,"page_number",t)},"update:limit":function(t){return e.$set(e.querys,"page_size",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.$t("business.terminal.importMore"),visible:e.importDialogVisible},on:{"update:visible":function(t){e.importDialogVisible=t}}},[a("div",[e._v(e._s(e.$t("business.terminal.selectTemp"))+"（"),a("a",{staticStyle:{color:"#990000"},attrs:{href:e.tempDownloadUrl,download:""}},[e._v(e._s(e.$t("business.terminal.clickDownload")))]),e._v("）,"+e._s(e.$t("business.terminal.tipsText")))]),a("aj-upload",{attrs:{tips:e.uploadTips},on:{"update:tips":function(t){e.uploadTips=t},success:e.handleUploadSuccess}}),a("el-button",{attrs:{slot:"footer",type:"primary"},on:{click:function(t){e.importDialogVisible=!1}},slot:"footer"},[e._v(e._s(e.$t("common.confirm")))])],1)],1)},l=[],s=a("de35"),r=a("6407"),i=a("b654"),o=a("da9c"),c={name:"TerminalManage",components:{comSearch:s["a"],pagination:r["a"],ajUpload:i["a"]},data:function(){return{tempDownloadUrl:"../../../../assets/terminalimport.xlsx",carsOptions:[{label:this.$t("common.unlimited"),value:-1},{label:this.$t("business.terminal.unBindCar"),value:0},{label:this.$t("business.terminal.bindCar"),value:1}],terminalModels:[],querys:{page_number:1,page_size:10},loading:!1,total:0,tableData:[],importDialogVisible:!1,uploadTips:[]}},mounted:function(){this.getListTerModel(),this.getList()},methods:{getListTerModel:function(){var e=this;Object(o["K"])().then((function(t){e.terminalModels=t.data.list}))},getList:function(){var e=this;this.loading=!0,Object(o["hb"])(this.querys).then((function(t){console.log(t),e.tableData=t.data.list,e.total=t.data.total,e.loading=!1}))},clear:function(){this.querys={page_number:1,page_size:10}},handleDel:function(){this.$confirm(this.$t("common.confirmDel"),this.$t("common.notice"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then((function(){})).catch((function(){}))},handleUploadSuccess:function(e){var t=this;Object(o["J"])({filePath:e.fullPath}).then((function(){t.getList(),t.uploadTips.push({text:t.$t("business.terminal.importantSuccess"),type:"success"})})).catch((function(e){console.log("失败"),t.uploadTips.push({text:e.message,type:"error"})}))}}},m=c,u=a("2877"),d=Object(u["a"])(m,n,l,!1,null,"64f8901c",null);t["default"]=d.exports},9973:function(e,t,a){var n=a("34e4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=a("499e").default;l("0822d91c",n,!0,{sourceMap:!0,shadowMode:!1})},"9d41":function(e,t,a){"use strict";var n=a("9973"),l=a.n(n);l.a},ba0f:function(e,t,a){var n=a("7581");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=a("499e").default;l("90f64e32",n,!0,{sourceMap:!0,shadowMode:!1})},d512:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.$t("export.desc"),visible:e.visible,width:"30%"},on:{"update:visible":function(t){e.visible=t}}},[a("div",{staticClass:"message"},[a("span",{domProps:{innerHTML:e._s(e.message)}})]),e.showbtn?a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{prop:"email",label:e.$t("export.email")}},[a("el-input",{attrs:{type:"email",clearable:"",placeholder:e.$t("export.input")},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1):e._e(),e.showbtn?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.commit}},[e._v(e._s(e.$t("common.submit")))])],1):e._e()],1)],1)},l=[],s={name:"downloadToEmail",props:{show:{type:Boolean,default:!1},showbtn:{type:Boolean,default:!0},message:{type:String,required:!1},fn:{type:Function,required:!0}},data:function(){return{isCommit:!1,email:"",visible:!1,loading:!1,form:{email:""},rules:{email:[{required:!0,message:"请输入邮箱账号",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]}}},watch:{show:function(){this.visible=this.show}},mounted:function(){this.visible=this.show},methods:{commit:function(){var e=this,t=this;this.$refs["form"].validate((function(a){if(!a)return console.log("error submit!!"),!1;e.loading=!0,t.commitFn()}))},commitFn:function(){this.$emit("email",this.form.email),this.fn(this.form.email),this.loading=!1}}},r=s,i=(a("9d41"),a("2877")),o=Object(i["a"])(r,n,l,!1,null,"ff53fa9e",null);t["a"]=o.exports},de35:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"com-search"},[a("el-form-item",[a("el-button",{attrs:{type:"text",icon:e.getIcon},on:{click:e.toggleShow}},[e._v(e._s(e.$t("common.advancedSearch")))])],1),e.isShow?a("el-card",{staticClass:"card-panel"},[e._t("item")],2):e._e()],1)},l=[],s=a("d4ec"),r=a("bee2"),i=a("262e"),o=a("2caf"),c=a("9ab4"),m=a("60a3"),u=function(e){Object(i["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.isShow=!1,e}return Object(r["a"])(a,[{key:"toggleShow",value:function(){this.isShow=!this.isShow}},{key:"getIcon",get:function(){var e=this.isShow?"el-icon-caret-bottom":"el-icon-caret-top";return"computed "+e}}]),a}(m["e"]);u=Object(c["a"])([m["a"]],u);var d=u,p=d,b=(a("ee49"),a("2877")),f=Object(b["a"])(p,n,l,!1,null,"2521fad5",null);t["a"]=f.exports},ee49:function(e,t,a){"use strict";var n=a("ba0f"),l=a.n(n);l.a},fb34:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dealer-management-page"},[a("el-card",{staticClass:"card-panel"},[a("el-form",{attrs:{inline:!0,model:e.form,"label-position":"right","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("business.terminal.dealerName")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.terminal.selectDealerName")},model:{value:e.form.tname,callback:function(t){e.$set(e.form,"tname",t)},expression:"form.tname"}})],1),a("el-form-item",{attrs:{label:e.$t("business.dealer.dealerNo")}},[a("el-input",{staticClass:"search-item",attrs:{placeholder:e.$t("business.dealer.selectDealerNo")},model:{value:e.form.dealerCode,callback:function(t){e.$set(e.form,"dealerCode",t)},expression:"form.dealerCode"}})],1),a("SelectTable",{key:1,attrs:{label:e.$t("business.dealer.area"),placeholder:e.$t("business.dealer.selectAreaDealer"),"table-title":e.$t("business.dealer.area"),prop:"name","search-name":"districtName","column-list":e.columnList,"table-list":e.tableList,total:e.total},on:{search:e.getDealer,obj:e.getSelectDealer},model:{value:e.form.viewpname,callback:function(t){e.$set(e.form,"viewpname",t)},expression:"form.viewpname"}}),a("el-form-item",{attrs:{label:e.$t("business.dealer.isStrategy")}},[a("el-select",{model:{value:e.form.reStatus,callback:function(t){e.$set(e.form,"reStatus",t)},expression:"form.reStatus"}},[a("el-option",{attrs:{value:"",label:e.$t("common.unlimited")}}),a("el-option",{attrs:{value:"1",label:e.$t("common.yes")}}),a("el-option",{attrs:{value:"0",label:e.$t("common.no")}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v(e._s(e.$t("common.search")))])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.clear}},[e._v(e._s(e.$t("common.clear")))])],1),a("el-form-item",[e.hasPerm(20017)?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push({name:"dealerAddAndEdit"})}}},[e._v(e._s(e.$t("common.add")))]):e._e()],1),a("el-form-item",[e.hasPerm(20035)?a("el-button",{attrs:{type:"primary"},on:{click:e.exportAll}},[e._v(e._s(e.$t("business.dealer.exportAll")))]):e._e()],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"t-table",staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:e.tableData}},[a("el-table-column",{attrs:{type:"index",label:e.$t("common.serialNumber"),width:"80"}}),a("el-table-column",{attrs:{prop:"syncSignStatus",label:e.$t("business.dealer.syncTags"),width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(200===t.row.syncSignStatus?e.$t("common.success"):e.$t("common.fail")))])]}}])}),a("el-table-column",{attrs:{prop:"tname",label:e.$t("business.terminal.dealerName"),width:"280"}}),a("el-table-column",{attrs:{prop:"dealerCode",label:e.$t("business.dealer.ZhongjuCarNo"),width:"100"}}),a("el-table-column",{attrs:{prop:"dealerQkCode",label:e.$t("business.dealer.lightCarNo"),width:"100"}}),a("el-table-column",{attrs:{prop:"pname",label:e.$t("business.terminal.area"),width:"120"}}),a("el-table-column",{attrs:{prop:"companyAddress",label:e.$t("business.dealer.dealerAddress"),width:"280"}}),a("el-table-column",{attrs:{prop:"lng",label:e.$t("common.lng"),width:"100"}}),a("el-table-column",{attrs:{prop:"lat",label:e.$t("common.lat"),width:"100"}}),a("el-table-column",{attrs:{prop:"enableRadius",label:e.$t("business.dealer.activeRadius")+"(KM)",width:"120"}}),a("el-table-column",{attrs:{prop:"lockRadius",label:e.$t("business.dealer.lockRadius")+"(KM)",width:"120"}}),a("el-table-column",{attrs:{prop:"companyLinkman",label:e.$t("business.dealer.contactPerson"),width:"100"}}),a("el-table-column",{attrs:{prop:"companyLinktel",label:e.$t("business.dealer.contactPhone"),width:"150"}}),a("el-table-column",{attrs:{prop:"tAccountName",label:e.$t("business.dealer.createPerson"),width:"100"}}),a("el-table-column",{attrs:{prop:"tDate",label:e.$t("business.dealer.createTime"),width:"160"}}),a("el-table-column",{attrs:{fixed:"right",label:e.$t("common.operate"),width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPerm(20018)?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.$router.push({name:"dealerAddAndEdit",params:{id:t.row.id}})}}},[e._v(e._s(e.$t("common.edit")))]):e._e(),e.hasPerm(20045)?a("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleDel(t.row)}}},[e._v(e._s(e.$t("common.del")))]):e._e(),a("el-switch",{staticStyle:{"margin-left":"10px"},attrs:{"active-value":1,"inactive-value":"0"},on:{change:function(a){return e.toggleDelaerStatus(t.row)}},model:{value:t.row.isAble,callback:function(a){e.$set(t.row,"isAble",a)},expression:"scope.row.isAble"}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.form.page_number,limit:e.form.page_size},on:{"update:page":function(t){return e.$set(e.form,"page_number",t)},"update:limit":function(t){return e.$set(e.form,"page_size",t)},pagination:e.getList}}),a("ExportToEmail",{attrs:{show:e.showExportModal,message:e.emailTipsContent,fn:e.downloadFn}}),a("el-dialog",{attrs:{title:e.$t("common.notice"),visible:e.exportSuccessModal,width:"30%"},on:{"update:visible":function(t){e.exportSuccessModal=t}}},[a("div",{domProps:{innerHTML:e._s(e.exportSuccessTips)}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.exportSuccessModal=!1}}},[e._v(e._s(e.$t("common.confirm")))])],1)])],1)},l=[],s=(a("4160"),a("159b"),a("5530")),r=(a("96cf"),a("1da1")),i=a("da9c"),o=a("bee6"),c=a("6407"),m=a("d512"),u={name:"DealerManagement",components:{SelectTable:o["a"],pagination:c["a"],ExportToEmail:m["a"]},data:function(){return{form:{page_number:1,page_size:10},carsOptions:[],tableList:[],columnList:[],total:0,loading:!1,tableData:[],showExportModal:!1,emailTipsContent:"",exportSuccessModal:!1,exportSuccessTips:""}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(i["fb"])(e.form);case 3:a=t.sent,e.tableData=a.data.list,e.total=a.data.total,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},getSelectDealer:function(e){this.form.pId=e.id},getDealer:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.columnList=[{title:t.$t("common.serialNumber"),type:"index"},{title:t.$t("business.terminal.area"),prop:"districtName"},{title:t.$t("business.dealer.topSaleArea"),prop:"pdistrictName"},{title:t.$t("business.dealer.contactPerson"),prop:"linkMan"}],a.next=3,Object(i["bb"])(Object(s["a"])(Object(s["a"])({},e),{},{type:0}));case 3:n=a.sent,n.data.list.forEach((function(e){e.value=e.districtName})),t.tableList=n.data.list,t.total=n.data.total;case 7:case"end":return a.stop()}}),a)})))()},handleDel:function(e){var t=this;this.$confirm(this.$t("common.confirmDel"),this.$t("common.notice"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then((function(){Object(i["p"])({tid:e.id,dealerCode:e.dealerCode}).then((function(){t.$message.success(t.$t("common.del")+t.$t("common.success")),t.getList()}))})).catch((function(){}))},toggleDelaerStatus:function(e){var t=this;console.log(e),Object(i["v"])({state:e.isAble,tId:e.id}).then((function(){t.$message.success(1===e.isAble?t.$t("business.dealer.dealerIsActive"):t.$t("business.dealer.dealerIsInActive")),t.getList()}))},exportAll:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;Object(i["y"])({email:"string"===typeof t?t:void 0}).then((function(t){670205===t.resultCode?(e.showExportModal=!0,e.emailTipsContent=t.message):200===t.resultCode&&(e.showExportModal=!1,e.exportSuccessModal=!0,e.exportSuccessTips=t.message)}))},downloadFn:function(e){console.log("downloadFn"),this.exportAll(e)},clear:function(){this.form={page_number:1,page_size:10}}}},d=u,p=a("2877"),b=Object(p["a"])(d,n,l,!1,null,"7f475ab4",null);t["default"]=b.exports}}]);
//# sourceMappingURL=terminalList.50dfa155.js.map