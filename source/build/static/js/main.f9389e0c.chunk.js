(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,a,t){e.exports=t(284)},140:function(e,a,t){},160:function(e,a,t){},284:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(9),l=t.n(c),i=(t(138),t(140),t(39)),o=t(115),s=t(116),m=t(129),d=t(117),h=t(130),u=t(288),p=t(289),g=t(291),k=t(290),f=t(292),b=t(286),v=t(287),C=t(283),y=t(88),E=t.n(y),S=(t(160),u.a.Item),P=p.a.Option,T=g.a.Group,w=k.a.TextArea;f.a.config({placement:"topRight"});var x=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(d.a)(a).call(this))).allColors=[{name:"Dark Heather",background:"url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/DH-swatch._V533395604_.png)"},{name:"Heather Grey",background:"url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/HG-swatch._V533395604_.png)"},{name:"Heather Blue",background:"url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/HB-swatch._V533395604_.png)"},{name:"Black",background:"#000"},{name:"Navy",background:"#15232b"},{name:"Silver",background:"#cfd1d1"},{name:"Royal",background:"#1c4086"},{name:"Brown",background:"#31261d"},{name:"Slate",background:"#818189"},{name:"Red",background:"#b71111"},{name:"Asphalt",background:"#3f3e3c"},{name:"Grass",background:"#5e9444"},{name:"Olive",background:"#4a4f26"},{name:"Kelly Green",background:"#006136"},{name:"Baby Blue",background:"#8fb8db"},{name:"White",background:"#f5f5f5"},{name:"Lemon",background:"#f0e87b"},{name:"Cranberry",background:"#6e0a25"},{name:"Pink",background:"#f8a3bc"},{name:"Orange",background:"#ff5c39"},{name:"Purple",background:"#514689"}],e.fiveColors=[{name:"Heather Grey",background:"url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/HG-swatch._V533395604_.png)"},{name:"Dark Heather",background:"url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/DH-swatch._V533395604_.png)"},{name:"Black",background:"#000"},{name:"Navy",background:"#15232b"},{name:"Royal",background:"#1c4086"}],e.dimsFront=[{width:4500,height:5400},{width:4500,height:5400},{width:4500,height:5400},{width:4500,height:5400},{width:4500,height:4050},{width:485,height:485}],e.dimsBack=[{width:4500,height:5400},{width:4500,height:5400},{width:4500,height:5400},{width:4500,height:5400},{width:4500,height:5400}],e.availValues=[[12.87,14.99,18.16,19.99],[14.87,19.99,20.14,24.99],[18.99,24.99,25.39,32.99],[28.46,35.99,34.04,39.99],[32.48,39.99,38.49,46.99],[11.72,14.99,11.72,14.99]],e.getValidate=function(){var a=1,t=1,n=1,r=e.state,c=r.fitType,l=r.checkedColors,i=r.listPrice;0===c.length&&(a=!1),(0===l.length||l.length>5)&&(t=!1);var o=e.state,s=o.productType,m=o.front,d=o.back,h=parseFloat(i),u=m&&d?e.availValues[s-"1"][2]:e.availValues[s-"1"][0];return(!h||h<u||h>80)&&(n=!1),e.setState({validTypes:a,validColor:t,validPrice:n}),!a||!t||!n},e.getError=function(e){return f.a.error({message:e})||!0},e.saveData=function(e,a){var t=document.createElement("a");document.body.appendChild(t),t.style="display: none";var n=JSON.stringify(e),r=new Blob([n],{type:"octet/stream"}),c=window.URL.createObjectURL(r);t.href=c,t.download=a,t.click(),window.URL.revokeObjectURL(c)},e.handleClickSave=function(){if(e.setState({isSubmit:!0}),!e.getValidate()){var a=e.state,t=a.front,n=a.back,r=a.description;if(t||n||!e.getError("Please upload at least 1 artwork.")){var c=r.split("\n");if((c[0]&&!(c[0].length>50)||!e.getError("Please write your product's brand (50 chracters maximum)"))&&(c[1]&&!(c[1].length>60)||!e.getError("Please write your product's title (60 chracters maximum)"))&&!(c[2]&&c[2].length>256&&e.getError("Feature key 1's maximum characters is 256! (current is "+c[2].length+")"))&&!(c[3]&&c[3].length>256&&e.getError("Feature key 2's maximum characters is 256! (current is "+c[3].length+")"))&&!(c[4]&&(c[4].length<75||c[4].length>2e3)&&e.getError("Product description's characters must be between 75 and 2000 (current is "+c[4].length+")"))){var l=Object(i.a)({},e.state),o=l.frontName||l.backName;o=o.replace(".png","");var s="";"1"===l.productType&&(s="Standard-T-Shirt"),"2"===l.productType&&(s="Premium-T-Shirt"),"3"===l.productType&&(s="Long-sleeve-T-Shirt"),"4"===l.productType&&(s="Sweatshirt"),"5"===l.productType&&(s="Pullover-Hoodie"),"6"===l.productType&&(s="Pop-Sockets"),o="".concat(s,"-").concat(o,".json");var m={productType:l.productType,marketplace:l.marketplace,front:l.frontName,back:l.backName,fitType:l.fitType,checkedColors:l.checkedColors,listPrice:l.listPrice,description:l.description};e.saveData(m,o)}}}},e.handleClickCopy=function(){var a=Object(i.a)({},e.state),t={productType:a.productType,marketplace:a.marketplace,backgrounds:a.backgrounds,fitType:a.fitType,checkedColors:a.checkedColors,listPrice:a.listPrice,description:a.description};localStorage.setItem("data",JSON.stringify(t)),window.open("./")},e.handleClickLoadTemplate=function(){E.a.get("/template").then(function(a){f.a.success({message:"Template has been loaded!"});var t=a.data;e.setState(Object(i.a)({},t))})},e.handleClickSaveTemplate=function(){var a=Object(i.a)({},e.state),t={productType:a.productType,marketplace:a.marketplace,backgrounds:a.backgrounds,fitType:a.fitType,checkedColors:a.checkedColors,listPrice:a.listPrice,description:a.description};E.a.post("/template",t).then(function(e){f.a.success({message:"Template has been saved!"})})},e.handleChangeProductType=function(a){var t=function(){return e.setState({backgrounds:[{index:-1,value:"#f8f8f8"}],checkedColors:[]})},n=function(){return e.setState({front:"",frontName:""})},r=function(){return e.setState({back:"",backName:""})},c=function(){return e.setState({fitType:["Men","Women"]})},l=e.state.productType;"1"===a?e.setState({listPrice:"19.99"}):"2"===a?e.setState({listPrice:"21.99"}):"3"===a?e.setState({listPrice:"27.99"}):"4"===a?e.setState({listPrice:"35.99"}):"5"===a?e.setState({listPrice:"40.99"}):"6"===a&&e.setState({listPrice:"14.99"}),"1"!==l&&"2"!==l||("3"!==a&&"4"!==a||t(),"5"===a&&(t(),n()),"6"===a&&(t(),n())),"3"!==l&&"4"!==l||("1"!==a&&"2"!==a||c(),"5"===a&&n(),"6"===a&&(t(),n())),"5"===l&&("1"!==a&&"2"!==a||(n(),c()),"3"!==a&&"4"!==a||n(),"6"===a&&(t(),n())),"6"===l&&("1"!==a&&"2"!==a||(n(),r(),c()),"3"!==a&&"4"!==a||(n(),r()),"5"===a&&(n(),r())),e.setState({productType:a,marketplace:"Amazon.com",pricePrefix:"$",validTypes:!0,validColor:!0,validPrice:!0,isSubmit:!1})},e.handleChangeMarketplace=function(a){e.setState({marketplace:a}),"Amazon.com"===a?(e.setState({listPrice:"19.99"}),e.setState({pricePrefix:"$"})):"Amazon.co.uk"===a?(e.setState({listPrice:"17.99"}),e.setState({pricePrefix:"\xa3"})):"Amazon.de"===a&&(e.setState({listPrice:"18.99"}),e.setState({pricePrefix:"\u20ac"}))},e.handleChangeFitType=function(a){e.setState({fitType:a},function(){return e.getValidate()})},e.handleChangeColor=function(a){a.length<=5&&e.setState({checkedColors:a},function(){return e.getValidate()})},e.handleChangeColorChecked=function(a,t){var n=e.state,r=n.productType,c=n.checkedColors,l=n.backgrounds,i="1"===r||"2"===r?e.allColors:e.fiveColors;if(a)c.length<5&&l.push({index:t,value:i[t].background});else{var o=l.findIndex(function(e){return e.index===t});l.splice(o,1)}e.setState({backgrounds:l})},e.handleChangeListPrice=function(a){var t=a.target.value;(/^[0-9]{1,}\.?[0-9]{0,2}$/.test(t)||""===t)&&e.setState({listPrice:t},function(){return e.getValidate()})},e.handleKeyDown=function(a){"ArrowUp"===a.key?e.handleChangeListPriceUp():"ArrowDown"===a.key&&e.handleChangeListPriceDown()},e.handleChangeListPriceUp=function(){var a=(parseFloat(e.state.listPrice)+1).toFixed(2);e.setState({listPrice:a},function(){return e.getValidate()})},e.handleChangeListPriceDown=function(){var a=(parseFloat(e.state.listPrice)-1).toFixed(2);e.setState({listPrice:a},function(){return e.getValidate()})},e.handleChangeDescription=function(a){var t=a.target.value;e.setState({description:t})},e.onFindChanged=function(a){var t=a.target.value;e.setState({find:t})},e.onReplaceChanged=function(a){var t=a.target.value;e.setState({replace:t})},e.handleFindAndReplace=function(){var a=e.state,t=a.description,n=a.find,r=a.replace;t=t.replace(new RegExp(n,"gi"),r),e.setState({description:t})},e.checkFileType=function(e){-1===e.type.indexOf("/png")&&f.a.error({message:"Your file has incorrect extension. Please upload PNG files only."})},e.checkFileDimesion=function(e,a){var t=e.width===a.width&&e.height===a.height;return t||f.a.error({message:"Please upload a file matching the artwork dimensions."}),t},e.handleChangeFront=function(a){var t=a.target.files[0];if(t){e.checkFileType(t);var n=e.checkFileDimesion,r=e.dimsFront[e.state.productType-"1"],c=new Image;c.onload=function(){var a,l;n(this,r)&&(a=c.src,l=t.name,e.setState({front:a,frontName:l}))},c.src=URL.createObjectURL(t),a.target.value=null}else e.setState({front:""})},e.handleChangeBack=function(a){var t=a.target.files[0];if(t){e.checkFileType(t);var n=e.checkFileDimesion,r=e.dimsBack[e.state.productType-"1"],c=new Image;c.onload=function(){var a,l;n(this,r)&&(a=c.src,l=t.name,e.setState({back:a,backName:l}))},c.src=URL.createObjectURL(t),a.target.value=null}else e.setState({back:""})},e.state={productType:"1",marketplace:"Amazon.com",backgrounds:[{index:-1,value:"#f8f8f8"}],front:"",frontName:"",back:"",backName:"",fitType:["Men","Women"],checkedColors:[],pricePrefix:"$",listPrice:"19.99",description:"",validTypes:!0,validColor:!0,validPrice:!0,isSubmit:!1,find:"",replace:""},e.inputFront=r.a.createRef(),e.inputBack=r.a.createRef(),e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("data");if(e){var a=JSON.parse(e);this.setState(Object(i.a)({},a))}localStorage.removeItem("data")}},{key:"render",value:function(){var e=this,a=this.state,t=a.backgrounds,n=a.front,c=a.frontName,l=a.back,i=a.backName,o=this.state,s=o.checkedColors,m=o.pricePrefix,d=o.listPrice,h=o.description,f=this.state,y=f.productType,E=f.marketplace,x=f.fitType,N=this.state,O=N.find,F=N.replace,R="1"===y||"2"===y?this.allColors:this.fiveColors,L=t.slice().pop().value,A="";A="".concat(n&&l?this.availValues[y-"1"][2]:this.availValues[y-"1"][0]," - 80.00");var D=this.state,B=D.validTypes,z=D.validColor,V=D.validPrice,H=D.isSubmit;return!B&&H&&(B="invalid"),!z&&H&&(z="invalid"),!V&&H&&(V="invalid"),r.a.createElement(b.a,{className:"merch-form"},r.a.createElement(v.a,{xl:16,md:20,sm:24},r.a.createElement(u.a,null,r.a.createElement(b.a,{gutter:16},r.a.createElement(v.a,{sm:12},r.a.createElement(S,{label:"CHOOSE PRODUCT TYPE"},r.a.createElement(p.a,{value:y,onChange:this.handleChangeProductType},r.a.createElement(P,{value:"1"},"Standard T-Shirt"),r.a.createElement(P,{value:"2"},"Premium T-Shirt"),r.a.createElement(P,{value:"3"},"Long Sleeve T-Shirt"),r.a.createElement(P,{value:"4"},"Sweatshirt"),r.a.createElement(P,{value:"5"},"Pullover Hoodie"),r.a.createElement(P,{value:"6"},"PopSockets")))),r.a.createElement(v.a,{sm:12},"1"===y?r.a.createElement(S,{label:"CHOOSE MARKETPLACE"},r.a.createElement(p.a,{value:E,onChange:this.handleChangeMarketplace},r.a.createElement(P,{value:"Amazon.com"},"Amazon.com"),r.a.createElement(P,{value:"Amazon.co.uk"},"Amazon.co.uk"),r.a.createElement(P,{value:"Amazon.de"},"Amazon.de"))):r.a.createElement(S,{label:"CHOOSE MARKETPLACE",className:"input-readonly"},r.a.createElement(k.a,{addonBefore:"Amazon.com"})))),r.a.createElement(b.a,{gutter:16},r.a.createElement(v.a,{md:12},r.a.createElement(S,{label:"Front: ".concat(c),extra:"".concat(this.dimsFront[y-"1"].width," x ").concat(this.dimsFront[y-"1"].height)}),r.a.createElement(C.a,{onClick:function(){return e.inputFront.current.click()},type:"primary"},"Choose"),r.a.createElement(C.a,{onClick:function(){return e.setState({front:"",frontName:""})},style:{marginLeft:16}},"Clear"),r.a.createElement("input",{ref:this.inputFront,type:"file",accept:"image/png",onChange:this.handleChangeFront,style:{display:"none"}}),r.a.createElement("div",{className:"front-background",style:{background:L}},r.a.createElement("img",{alt:"",height:"250",src:n}))),y<"6"&&r.a.createElement(v.a,{md:12},r.a.createElement(S,{label:"Back: ".concat(i),extra:"".concat(this.dimsBack[y-"1"].width," x ").concat(this.dimsBack[y-"1"].height)}),r.a.createElement(C.a,{onClick:function(){return e.inputBack.current.click()},type:"primary"},"Choose"),r.a.createElement(C.a,{onClick:function(){return e.setState({back:"",backName:""})},style:{marginLeft:16}},"Clear"),r.a.createElement("input",{ref:this.inputBack,type:"file",accept:"image/png",onChange:this.handleChangeBack,style:{display:"none"}}),r.a.createElement("div",{className:"front-background",style:{background:L}},r.a.createElement("img",{alt:"",height:"250",src:l})))),("1"===y||"2"===y)&&r.a.createElement(S,{label:"CHOOSE FIT TYPE",extra:"Check at least 1 type you want to publish",className:"checkbox-type ".concat(B)},r.a.createElement(T,{value:x,onChange:this.handleChangeFitType},r.a.createElement(g.a,{value:"Men"},"Men"),r.a.createElement(g.a,{value:"Women"},"Women"),r.a.createElement(g.a,{value:"Youth"},"Youth"))),"6"!==y&&r.a.createElement(S,{label:"PICK UP TO 5 COLORS",extra:"Check between 1 and 5 colors",className:"checkbox-color ".concat(z)},r.a.createElement(T,{className:"color-menu",value:s,onChange:this.handleChangeColor},R.map(function(a,t){return r.a.createElement(g.a,{key:t,value:a.name,onChange:function(a){return e.handleChangeColorChecked(a.target.checked,t)}},r.a.createElement("span",{className:"color-item",title:a.name,style:{background:a.background,border:s.includes(a.name)?"3px solid orange":"1px solid silver"}}))}))),r.a.createElement(b.a,null,r.a.createElement(v.a,{style:{width:120}},r.a.createElement(S,{label:"LIST PRICE",extra:A,className:"input-number ".concat(V)},r.a.createElement(k.a,{prefix:m,value:d,onChange:this.handleChangeListPrice,onKeyDown:this.handleKeyDown,addonAfter:r.a.createElement("div",{className:"input-number-buttons"},r.a.createElement("span",{onClick:this.handleChangeListPriceUp},"\u02c4"),r.a.createElement("div",null),r.a.createElement("span",{onClick:this.handleChangeListPriceDown},"\u02c5"))})))),r.a.createElement(S,{label:"PRODUCT'S DESCRIPTION",className:"input-label"},r.a.createElement(b.a,null,r.a.createElement(v.a,{span:"3"},r.a.createElement(b.a,null,r.a.createElement(v.a,{className:"col-label"},"Brand"),r.a.createElement(v.a,{className:"col-label"},"Title"),r.a.createElement(v.a,{className:"col-label"},"Feature 1"),r.a.createElement(v.a,{className:"col-label"},"Feature 2"),r.a.createElement(v.a,{className:"col-label"},"Description"))),r.a.createElement(v.a,{span:"21"},r.a.createElement(w,{accessKey:"q",value:h,autosize:{minRows:6,maxRows:10},onChange:this.handleChangeDescription}),r.a.createElement(b.a,{gutter:16,className:"row-replace"},r.a.createElement(v.a,{sm:10},r.a.createElement(k.a,{placeholder:"Find",value:O,onChange:this.onFindChanged})),r.a.createElement(v.a,{sm:10},r.a.createElement(k.a,{placeholder:"Replace",value:F,onChange:this.onReplaceChanged})),r.a.createElement(v.a,{style:{textAlign:"right"}},r.a.createElement(C.a,{type:"primary",onClick:this.handleFindAndReplace},"Replace")))))),r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(C.a,{onClick:this.handleClickSaveTemplate,style:{marginRight:16}},"Save"),r.a.createElement(C.a,{type:"danger",onClick:this.handleClickLoadTemplate,style:{marginRight:48}},"Load"),r.a.createElement(C.a,{onClick:this.handleClickCopy,style:{marginRight:16}},"Copy"),r.a.createElement(C.a,{type:"danger",onClick:this.handleClickSave},"Save")))))}}]),a}(n.Component),N=u.a.create()(x);l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[133,2,1]]]);
//# sourceMappingURL=main.f9389e0c.chunk.js.map