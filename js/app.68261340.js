(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/WinePairing/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},5563:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"color flex flex-col justify-between h-screen pt-6 pb-2 px-6 font-hairline"},[n(this.items.activeComponent,{tag:"component"}),n("footer",{staticClass:"text-sm mx-auto"},[e._v(" © Copyright 2020, Adam Partyka ")])],1)])},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"dishPairing",staticClass:"componentCard sm:w-2/3 md:w-1/2"},[n("h1",{staticClass:"text-4xl italic"},[e._v("I wonder what goes well with my wine.")]),n("div",{staticClass:"flex text-md py-4"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedWine,expression:"selectedWine"}],staticClass:"customInput",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedWine=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Pick your wine...")]),e._l(e.items.wines,(function(t){return n("option",{key:t,domProps:{value:e.toSnake(t)}},[e._v(" "+e._s(t)+" ")])}))],2)]),n("button",{staticClass:"p-2 text-xl font-hairline border rounded-md mb-4",on:{click:function(t){return e.dishPairing(e.selectedWine)}}},[e._v(" Get dish pairing ")]),n("h1",{staticClass:"border-t pt-2"},[e._v(e._s(e.dishText))])]),n("div",{staticClass:"flex items-center justify-center py-8"},[n("button",{staticClass:"bg-pink-800 w-20 h-10 font-hairline rounded-lg hover:bg-pink-700 duration-200",on:{click:function(t){e.items.activeComponent="appStart"}}},[e._v(" Go back ")])])])},o=[],c=n("2f62"),l=n("cffa"),u={methods:{dishPairing(e){fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${e}&apiKey=${this.items.apiKey}`).then(e=>e.json()).then(e=>{this.dishText=e.text})},toSnake(e){return e.split(" ").map(e=>e.toLowerCase()).join("_")}},computed:{...Object(c["b"])(["items"])},data(){return{selectedWine:"",dishText:""}},mounted(){const{dishPairing:e}=this.$refs;l["a"].from(e,.7,{translateY:-300})}},d=u,p=(n("64a2"),n("2877")),m=Object(p["a"])(d,r,o,!1,null,null,null),v=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"wineDescription",staticClass:"componentCard sm:w-2/3 md:w-1/2"},[n("h1",{staticClass:"text-4xl italic"},[e._v("Can you tell me more about my wine?")]),n("div",{staticClass:"flex text-md py-4"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedWine,expression:"selectedWine"}],staticClass:"customInput",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedWine=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Pick your wine...")]),e._l(e.items.wines,(function(t){return n("option",{key:t,domProps:{value:e.toSnake(t)}},[e._v(" "+e._s(t)+" ")])}))],2)]),n("button",{staticClass:"p-2 text-xl font-hairline border rounded-md mb-4",on:{click:function(t){return e.wineDescription(e.selectedWine)}}},[e._v(" Get dish pairing ")]),n("h1",{staticClass:"border-t pt-2"},[e._v(e._s(e.wineDesc))])]),n("div",{staticClass:"flex items-center justify-center py-8"},[n("button",{staticClass:"bg-pink-800 w-20 h-10 font-hairline rounded-lg hover:bg-pink-700 duration-200",on:{click:function(t){e.items.activeComponent="appStart"}}},[e._v(" Go back ")])])])},h=[],g={methods:{wineDescription(e){fetch(`https://api.spoonacular.com/food/wine/description?wine=${e}&apiKey=${this.items.apiKey}`).then(e=>e.json()).then(e=>this.wineDesc=e.wineDescription)},toSnake(e){return e.split(" ").map(e=>e.toLowerCase()).join("_")}},computed:{...Object(c["b"])(["items"])},data(){return{selectedWine:"",wineDesc:""}},mounted(){const{wineDescription:e}=this.$refs;l["a"].from(e,.7,{translateY:-300})}},x=g,b=Object(p["a"])(x,f,h,!1,null,null,null),w=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"winePairing",staticClass:"componentCard sm:w-2/3 md:w-1/2"},[n("h1",{staticClass:"text-4xl italic"},[e._v(" What wine goes best with my dish? ")]),n("div",{staticClass:"flex flex-col items-center text-md py-4"},[n("div",{staticClass:"flex items-baseline"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFood,expression:"selectedFood"}],staticClass:"customInput",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedFood=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Pick a dish...")]),e._l(e.items.dishes,(function(t){return n("option",{key:t,domProps:{value:e.toSnake(t)}},[e._v(" "+e._s(t)+" ")])}))],2),n("span",[e._v("or")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFood,expression:"selectedFood"}],staticClass:"customInput",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedFood=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Pick a cuisine...")]),e._l(e.items.cuisines,(function(t){return n("option",{key:t,domProps:{value:e.toSnake(t)}},[e._v(" "+e._s(t)+" ")])}))],2)]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPrice,expression:"maxPrice"}],staticClass:"customInput",attrs:{type:"number",placeholder:"Max Price ($)"},domProps:{value:e.maxPrice},on:{input:function(t){t.target.composing||(e.maxPrice=t.target.value)}}})]),n("button",{staticClass:"p-2 text-xl font-hairline border rounded-md mb-4",on:{click:function(t){return e.winePairing(e.selectedFood,e.maxPrice)}}},[e._v(" Get dish pairing ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searched,expression:"searched"}]},[e.productMatches.length>0?n("div",{staticClass:"flex flex-col"},[n("h1",{staticClass:"border-t py-4 px-4"},[e._v(e._s(e.pairingText))]),n("div",{staticClass:"pt-2 border-t text-sm"},[n("h1",{staticClass:"text-xl italic"},[e._v("Suggested wine")]),n("h2",[e._v(e._s(e.productMatches[0].title))]),n("p",[e._v("Average rating: "+e._s(5*e.productMatches[0].averageRating)+"/5 ★")]),n("p",[e._v(e._s(e.productMatches[0].description))]),n("p",{staticClass:"mb-2"},[e._v("Price: "+e._s(e.productMatches[0].price))]),n("a",{staticClass:"border p-1 rounded-md",attrs:{href:e.productMatches[0].link,target:"_blank"}},[e._v(" Buy it now ")])])]):n("div",[n("h1",{staticClass:"border-t py-4 px-4"},[e._v(e._s(e.pairingText))]),n("h1",{staticClass:"text-xl italic pt-2 border-t"},[e._v(" Unfortunately we don't have any wines matching your criteria. ")])])])]),n("div",{staticClass:"flex items-center justify-center py-8"},[n("button",{staticClass:"bg-pink-800 w-20 h-10 font-hairline rounded-lg hover:bg-pink-700 duration-200",on:{click:function(t){e.items.activeComponent="appStart"}}},[e._v(" Go back ")])])])},_=[],C={methods:{winePairing(e,t){t<0?alert("Max Price needs to be higher than 0."):""===e?alert("Please select a dish or cuisine"):fetch(`https://api.spoonacular.com/food/wine/pairing?food=${e}&maxPrice=${t}&apiKey=${this.items.apiKey}`).then(e=>e.json()).then(e=>{this.pairingText=e.pairingText,this.productMatches=e.productMatches,this.searched=!0})},toSnake(e){return e.split(" ").map(e=>e.toLowerCase()).join("_")}},computed:{...Object(c["b"])(["items"])},data(){return{selectedFood:"",maxPrice:null,pairingText:"",productMatches:{},searched:!1}},mounted(){const{winePairing:e}=this.$refs;l["a"].from(e,.7,{translateY:-300})}},P=C,k=Object(p["a"])(P,y,_,!1,null,null,null),j=k.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"wineRecommendation",staticClass:"componentCard sm:w-2/3 md:w-1/2"},[n("h1",{staticClass:"text-4xl italic"},[e._v("Can you recommend me a specific wine?")]),n("div",{staticClass:"flex flex-col items-center text-md py-4"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedWine,expression:"selectedWine"}],staticClass:"customInput",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedWine=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Pick a wine...")]),e._l(e.items.wines,(function(t){return n("option",{key:t,domProps:{value:e.toSnake(t)}},[e._v(" "+e._s(t)+" ")])}))],2),n("div",{staticClass:"flex sm:flex-row flex-col sm:justify-around justify-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxPrice,expression:"maxPrice"}],staticClass:"customInput",attrs:{type:"text",placeholder:"Max Price ($)"},domProps:{value:e.maxPrice},on:{input:function(t){t.target.composing||(e.maxPrice=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.minRating,expression:"minRating"}],staticClass:"customInput",attrs:{type:"text",placeholder:"Min Rating (1-10)"},domProps:{value:e.minRating},on:{input:function(t){t.target.composing||(e.minRating=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"customInput",attrs:{type:"text",placeholder:"Amount"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})])]),n("button",{staticClass:"p-2 text-xl font-hairline border rounded-md mb-4",on:{click:function(t){return e.wineRecommendation(e.selectedWine,e.maxPrice,e.minRating,e.number)}}},[e._v(" Get wine recommendation ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searched,expression:"searched"}]},[e.productMatches.length>0?n("div",[n("h1",{staticClass:"text-xl italic"},[e._v("Suggested wines")]),e._l(e.productMatches,(function(t,i){return n("div",{key:i,staticClass:"flex flex-col"},[n("div",{staticClass:"pt-2 border-t text-sm"},[n("h2",[e._v(e._s(e.productMatches[i].title))]),n("p",[e._v(" Average rating: "+e._s(5*e.productMatches[0].averageRating)+"/5 ★ ")]),n("p",{staticClass:"border rounded-md p-2"},[e._v(" "+e._s(e.productMatches[i].description)+" ")]),n("p",{staticClass:"mb-2"},[e._v("Price: "+e._s(e.productMatches[i].price))]),n("a",{staticClass:"border p-1 rounded-md",attrs:{href:e.productMatches[0].link,target:"_blank"}},[e._v(" Buy it now ")])])])}))],2):n("div",[n("h1",{staticClass:"text-xl italic pt-2 border-t"},[e._v(" Unfortunately we don't have any wines matching your criteria. ")])])])]),n("div",{staticClass:"flex items-center justify-center py-8"},[n("button",{staticClass:"bg-pink-800 w-20 h-10 font-hairline rounded-lg hover:bg-pink-700 duration-200",on:{click:function(t){e.items.activeComponent="appStart"}}},[e._v(" Go back ")])])])},M=[],W={methods:{wineRecommendation(e,t,n,i){fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=${e}&maxPrice=${t}&minRating=${n/10}&number=${i}&apiKey=${this.items.apiKey}`).then(e=>e.json()).then(e=>{this.productMatches=e.recommendedWines,this.searched=!0})},toSnake(e){return e.split(" ").map(e=>e.toLowerCase()).join("_")}},computed:{...Object(c["b"])(["items"])},data(){return{selectedWine:"",maxPrice:null,minRating:null,number:null,searched:!1,productMatches:{}}},mounted(){const{wineRecommendation:e}=this.$refs;l["a"].from(e,.7,{translateY:-300})}},$=W,O=Object(p["a"])($,S,M,!1,null,null,null),R=O.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cursor-default select-none flex flex-col text-center"},[n("h1",{ref:"header",staticClass:"text-4xl sm:text-5xl md:text-6xl"},[e._v(" Hello, what can I help you with today? ")]),n("div",{staticClass:"flex flex-wrap justify-center"},e._l(e.items.listOfComponents,(function(t,i){return n("div",{key:i,ref:"task",refInFor:!0,staticClass:"w-40 h-40 border py-4 flex flex-col justify-around m-2 rounded-md cursor-pointer",on:{click:function(n){e.currentComponent=t.component,e.swapComponents()},mouseover:function(t){return e.scaleUp(i)},mouseleave:function(t){return e.scaleDown(i)}}},[n("div",{staticClass:"flex justify-center text-4xl"},[n("i",{staticClass:"fas fa-wine-glass-alt px-4"}),n("i",{staticClass:"fas px-4",class:t.icon})]),n("h2",{staticClass:"text-xl"},[e._v(" "+e._s(t.title)+" ")])])})),0)])},G=[],T=n("a5cf"),A={computed:{...Object(c["b"])(["items"])},mounted(){const{header:e,task:t}=this.$refs,n=new T["c"];n.from(e,1,{opacity:0,y:-200}).from(t,1,{opacity:0,scale:.5,stagger:.15,ease:"expo"})},methods:{scaleUp(e){const{task:t}=this.$refs;l["a"].to(t[e],.5,{scale:1.1,backgroundColor:"#ad0958"})},scaleDown(e){const{task:t}=this.$refs;l["a"].to(t[e],.5,{scale:1,backgroundColor:"transparent"})},swapComponents(){const{task:e,header:t}=this.$refs,n=new T["c"];n.to(e,.3,{opacity:0,scale:.5,y:-200,ease:"expo"}).to(t,.3,{opacity:0,y:-200}),setTimeout(()=>{this.items.activeComponent=this.currentComponent},600)}},data(){return{currentComponent:""}}},I=A,N=Object(p["a"])(I,D,G,!1,null,null,null),F=N.exports,K={computed:{...Object(c["b"])(["items"])},components:{appStart:F,appDishPairing:v,appWineDescription:w,appWinePairing:j,appWineRecommendation:R},data(){return{testest:!1}}},B=K,E=(n("034f"),Object(p["a"])(B,a,s,!1,null,null,null)),V=E.exports,z=n("8c4f");i["a"].use(z["a"]);const L=[],U=new z["a"]({mode:"history",base:"/WinePairing/",routes:L});var Y=U;i["a"].use(c["a"]);var J=new c["a"].Store({state:{cuisines:["African","Cajun","Caribbean","Chinese","French","German","Greek","Indian","Italian","Japanese","Korean","Mexican","Southern","Spanish","Thai","Vietnamese"],apiKey:"4b31533d80214ba6bba0dc84f7961415",activeComponent:"appStart",listOfComponents:[{component:"appDishPairing",title:"Dish Pairing",icon:"fa-utensils"},{component:"appWineDescription",title:"Wine description",icon:"fa-info"},{component:"appWinePairing",title:"Wine Pairing",icon:"fa-question"},{component:"appWineRecommendation",title:"Wine Recommendation",icon:"fa-shopping-cart"}],wines:["Agiorgitiko","Albarino","Assyrtiko","Barbera wine","Bordeaux","Cabernet Sauvignon","Cava","Champagne","Chardonnay","Chenin Blanc","Cream Sherry","Dornfelder","Dry Sherry","Frascati","Gamay","Gavi","Gewurztraminer","Grenache","Gruener Veltliner","Malbec","Merlot","Moscato","Moschofilero","Muscadet","Negroamaro","Nero d Avola","Pinot Grigio","Pinot Noir","Pinotage","Port","Primitivo","Red Burgundy","Riesling","Rioja","Sangiovese","Sauvignon Blanc","Shiraz","Sparkling Red Wine","Sparkling Rose","Tempranillo","Trebbiano","Verdejo","Verdicchio","Vermentino","Viognier","White Burgundy","Zinfandel","Zweigelt"],dishes:["Steak","Hamburger","Salad","Pasta","Sushi","Pizza","Beef"]},getters:{items:e=>e},mutations:{},actions:{},modules:{}});n("6672");i["a"].config.productionTip=!1,new i["a"]({router:Y,store:J,render:function(e){return e(V)}}).$mount("#app")},"64a2":function(e,t,n){"use strict";var i=n("5563"),a=n.n(i);a.a},6672:function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.68261340.js.map