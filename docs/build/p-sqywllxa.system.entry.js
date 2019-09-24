var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n["throw"](e))}catch(e){a(e)}}function c(e){e.done?r(e.value):i(e.value).then(o,s)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-4a4fd3ee.system.js","./p-a4def2c6.system.js"],(function(e){"use strict";var t,r,n,i,a,o;return{setters:[function(e){t=e.r;r=e.c;n=e.h;i=e.g;a=e.d},function(e){o=e.A}],execute:function(){var s=e("header_bar",function(){function e(e){t(this,e);this.isSticky=false;this.query="";this.isSearchVisible=false;this.toggleHeaderSearch=r(this,"toggleHeaderSearch",7)}e.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))};e.prototype.handleResize=function(){var e=this;requestAnimationFrame((function(){if(window.innerWidth>768){var t=e.el.querySelector("nav");t.style.display="";e.el.classList.remove("show-mobile-menu");document.body.classList.remove("no-scroll");e.isMobileMenuShown=false}}))};e.prototype.checkScroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=e>30};e.prototype.showNav=function(){if(this.isMobileMenuShown)return;this.isMobileMenuShown=true;var e=this.el.querySelector("nav");e.style.display="flex";setTimeout((function(){e.classList.add("show-mobile-menu");document.body.classList.add("no-scroll")}),1)};e.prototype.hideNav=function(){if(!this.isMobileMenuShown)return;this.isMobileMenuShown=false;var e=this.el.querySelector("nav");e.classList.remove("show-mobile-menu");setTimeout((function(){e.style.display="none";document.body.classList.remove("no-scroll")}),300)};e.prototype.render=function(){var e=this;return n("header",{class:(this.isSearchVisible?"visible-search":"")+" "+(this.isSticky?"overlay":"")},n("div",{class:"container"},n("div",{class:"logo"},n("stencil-route-link",{url:"/",exact:true},n("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{id:"icon","fill-rule":"nonzero"},n("circle",{id:"circle",fill:"#EAEEF5",cx:"16",cy:"16",r:"16"}),n("circle",{id:"circle_copy",fill:"#B4C1D8",cx:"16",cy:"16",r:"11"}),n("circle",{id:"circle_copy_2",fill:"#647AA1",cx:"16",cy:"16",r:"6"}),n("circle",{id:"circle_copy_3",fill:"#647AA1",cx:"23.5",cy:"8.5",r:"2"})))),"Ionicons"),n("span",{class:"version"},this.version)),n("icon-search",{query:this.query,size:"small"}),n("nav",null,n("stencil-route-link",{class:"nav__item",url:"/",exact:true,onClick:this.hideNav.bind(this)},"Icons"),n("stencil-route-link",{class:"nav__item",url:"/usage",onClick:function(){e.toggleHeaderSearch.emit("hide");e.hideNav()}},"Usage"),n("a",{class:"nav__item",href:"https://github.com/ionic-team/ionicons"},"GitHub",n("svg",{width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{transform:"translate(0,1)"},n("rect",{id:"bg",fill:"#e3e8f1",x:"0",y:"2",width:"9",height:"9",rx:"1.5"}),n("path",{d:"M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z",id:"arrow",fill:"#A4AEC3"})))),n("span",{class:"close",onClick:this.hideNav.bind(this)},n("i",{class:"ion ion-md-close"}))),n("a",{class:"btn sm-hide download-link",href:"/ionicons.designerpack.zip",download:"ionicons-"+this.version+".designerpack.zip"},n("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",null,n("rect",{id:"bg",fill:"#BAC3D1",x:"0",y:"9",width:"9",height:"2",rx:"1"}),n("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#94A0B8"}))),"Designer pack"),n("span",{class:"more",onClick:this.showNav.bind(this)},n("i",{class:"ion ion-md-more"}))))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"header-bar header{-webkit-transition:border .6s;transition:border .6s;position:fixed;width:100%;top:0;left:0;right:0;background:#fff;z-index:999;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0,0,0,.05)}header-bar .container,header-bar .logo,header-bar .logo a,header-bar nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}header-bar .logo,header-bar nav{-ms-flex:0 0 auto;flex:0 0 auto}header-bar nav{-ms-flex-align:baseline;align-items:baseline}header-bar icon-search{-webkit-transition:opacity .5s;transition:opacity .5s;-ms-flex:1;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .container{-ms-flex-pack:justify;justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{-webkit-transition:color .3s;transition:color .3s;color:var(--color-pale-sky)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item svg #arrow{-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}header-bar .nav__item:hover svg #arrow{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{-webkit-transform:translateY(1px);transform:translateY(1px)}header-bar .more{padding:0 8px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer}header-bar .more,header-bar nav span.close{font-size:28px;display:none}\@media screen and (max-width:992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}\@media screen and (max-width:768px){header-bar .btn.sm-hide{display:none}header-bar .close,header-bar .more{cursor:pointer}header-bar .more{display:block}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:0;margin-top:30px}header-bar nav{-webkit-transition:opacity .3s;transition:opacity .3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg,#363e49,#1c1e21);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(8px);transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:hsla(0,0%,100%,.9)}header-bar .nav__item .link-active{color:hsla(0,0%,100%,.3)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:hsla(0,0%,100%,.9)}header-bar .nav__item svg #bg{opacity:.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{-webkit-transform:translateY(0);transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}\@media screen and (max-width:520px){header-bar .version{display:none}}"},enumerable:true,configurable:true});return e}());var c=e("icon_search",function(){function e(e){t(this,e);this.query="";this.size="small";this.autofocus="none";this.showClearCtrl=false;this.hasSearched=r(this,"hasSearched",7)}e.prototype.watchQuery=function(){this.showClearCtrl=this.query.length>0?true:false};e.prototype.searchListener=function(e){if(e.keyCode===27){this.handleClear();return}var t=e.target.value;this.hasSearched.emit(t)};e.prototype.handleClear=function(){this.hasSearched.emit("")};e.prototype.componentWillLoad=function(){this.watchQuery()};e.prototype.render=function(){return n("div",{class:"search-input search-input--"+this.size},n("i",{class:"search-input__icon"},n("svg",null,n("use",{xlinkHref:"#search-outline"}))),n("input",{type:"text",placeholder:"Search icons...",value:this.query,autofocus:this.autofocus==="autofocus"?"autofocus":""}),n("i",{class:{"search-input__clear":true,"search-input__clear--active":this.showClearCtrl},onClick:this.handleClear.bind(this)},n("svg",null,n("use",{xlinkHref:"#close-outline"}))))};Object.defineProperty(e,"watchers",{get:function(){return{query:["watchQuery"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"icon-search .search-input{position:relative}icon-search .search-input input{width:100%;font-weight:400;font-family:Eina;font-size:16px;border:0;outline:0;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;-webkit-appearance:none;vertical-align:middle}icon-search .search-input__clear{-webkit-transition:background .3s,opacity .3s;transition:background .3s,opacity .3s;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:16px;width:22px;height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;color:var(--color-pale-sky);opacity:0;background-color:var(--color-catskill-white);border-radius:100px}icon-search .search-input__clear svg{width:16px;height:16px}icon-search .search-input__clear--active{opacity:.8}icon-search .search-input__clear--active:hover{opacity:1;background-color:#e3e9f3}icon-search .search-input--small .search-input__clear{width:18px;height:18px;background-color:#e3e9f3;right:12px}icon-search .search-input--small .search-input__clear svg{width:14px;height:14px}icon-search .search-input--small .search-input__clear--active:hover{background-color:#dce3f0}icon-search .search-input__icon svg{color:var(--color-heather);position:absolute;height:20px;width:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:16px}icon-search .search-input--small .search-input__icon svg{width:16px;height:16px;left:8px}icon-search .search-input--small input{font-size:13px;line-height:18px;padding:10px;padding-left:30px;padding-right:30px;background-color:#f6f7f9;height:39px;text-indent:0}icon-search .search-input--large input{-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s,-webkit-box-shadow .3s;font-size:16px;line-height:22px;padding:20px;padding-left:50px;padding-right:50px;background-color:#fff;-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}icon-search .search-input--large input:focus{-webkit-box-shadow:0 6px 12px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 6px 12px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}icon-search .search-input--large:before{font-size:22px;left:20px}icon-search .search-input input::-webkit-input-placeholder{color:var(--color-heather)}icon-search .search-input input::-moz-placeholder{color:var(--color-heather)}icon-search .search-input input:-ms-input-placeholder{color:var(--color-heather)}icon-search .search-input input::-ms-input-placeholder{color:var(--color-heather)}icon-search .search-input input::placeholder{color:var(--color-heather)}"},enumerable:true,configurable:true});return e}());var u=e("ionicons_site",function(){function e(e){t(this,e);this.data={version:undefined,icons:[]};this.query="";this.isHeaderSearchVisible=false}e.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))};e.prototype.searchHandler=function(e){this.query=e.detail};e.prototype.toggleHandler=function(e){this.isHeaderSearchVisible=e.detail==="show"?true:false};e.prototype.componentWillLoad=function(){return this.loadData()};e.prototype.loadData=function(){return __awaiter(this,void 0,void 0,(function(){function e(e){r.icons.forEach((function(t){if(t.name.includes("logo-"))return;if(t.name.includes(e)){var r=t.name.replace(e,"");var i=n.findIndex((function(e){return e.name===r}));if(i<0)return;n[i].icons.push(t.name)}}))}var t,r,n;return __generator(this,(function(i){switch(i.label){case 0:return[4,fetch("/ionicons.json")];case 1:t=i.sent();return[4,t.json()];case 2:r=i.sent();this.data=r;n=[];r.icons.forEach((function(e){if(!e.name.includes("-outline")&&!e.name.includes("-sharp")&&!n.find((function(t){return t.name===e.name}))){n.push({name:e.name,icons:[e.name],tags:e.tags})}}));e("-outline");e("-sharp");this.data.icons=n;return[2]}}))}))};e.prototype.checkScroll=function(){var e=document.querySelector("header .search-input");var t=document.querySelector("icon-list .search-input");if(!t||!e){return}var r=e.querySelector("input");var n=t.querySelector("input");if(t.getBoundingClientRect().top<t.scrollHeight/2){if(this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=true;if(n===document.activeElement)r.focus()}else{if(!this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=false;if(r===document.activeElement)n.focus()}};e.prototype.render=function(){return[n("header-bar",{version:this.data.version,query:this.query,isSearchVisible:this.isHeaderSearchVisible}),n("stencil-router",null,n("stencil-router-scroll-top",null,n("stencil-route-switch",{scrollTopOffset:0},n("stencil-route",{url:"/",component:"landing-page",exact:true,componentProps:{query:this.query,data:this.data}}),n("stencil-route",{url:"/usage",component:"usage-page",componentProps:{data:this.data}}),n("stencil-route",{component:"notfound-page"}))))]};Object.defineProperty(e,"style",{get:function(){return"stencil-router>div{height:100%}"},enumerable:true,configurable:true});return e}());var l="/";var h="./";var f=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");var v=function(e,t){var r=[];var n=0;var i=0;var a="";var o=t&&t.delimiter||l;var s=t&&t.delimiters||h;var c=false;var u;while((u=f.exec(e))!==null){var v=u[0];var y=u[1];var m=u.index;a+=e.slice(i,m);i=m+v.length;if(y){a+=y[1];c=true;continue}var g="";var b=e[i];var w=u[2];var x=u[3];var O=u[4];var S=u[5];if(!c&&a.length){var L=a.length-1;if(s.indexOf(a[L])>-1){g=a[L];a=a.slice(0,L)}}if(a){r.push(a);a="";c=false}var _=g!==""&&b!==undefined&&b!==g;var T=S==="+"||S==="*";var k=S==="?"||S==="*";var P=g||o;var E=x||O;r.push({name:w||n++,prefix:g,delimiter:P,optional:k,repeat:T,partial:_,pattern:E?d(E):"[^"+p(P)+"]+?"})}if(a||i<e.length){r.push(a+e.substr(i))}return r};var p=function(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")};var d=function(e){return e.replace(/([=!:$\/()])/g,"\\$1")};var y=function(e){return e&&e.sensitive?"":"i"};var m=function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r){for(var n=0;n<r.length;n++){t.push({name:n,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,pattern:null})}}return e};var g=function(e,t,r){var n=[];for(var i=0;i<e.length;i++){n.push(x(e[i],t,r).source)}return new RegExp("(?:"+n.join("|")+")",y(r))};var b=function(e,t,r){return w(v(e,r),t,r)};var w=function(e,t,r){r=r||{};var n=r.strict;var i=r.end!==false;var a=p(r.delimiter||l);var o=r.delimiters||h;var s=[].concat(r.endsWith||[]).map(p).concat("$").join("|");var c="";var u=false;for(var f=0;f<e.length;f++){var v=e[f];if(typeof v==="string"){c+=p(v);u=f===e.length-1&&o.indexOf(v[v.length-1])>-1}else{var d=p(v.prefix||"");var m=v.repeat?"(?:"+v.pattern+")(?:"+d+"(?:"+v.pattern+"))*":v.pattern;if(t)t.push(v);if(v.optional){if(v.partial){c+=d+"("+m+")?"}else{c+="(?:"+d+"("+m+"))?"}}else{c+=d+"("+m+")"}}}if(i){if(!n)c+="(?:"+a+")?";c+=s==="$"?"$":"(?="+s+")"}else{if(!n)c+="(?:"+a+"(?="+s+"))?";if(!u)c+="(?="+a+"|"+s+")"}return new RegExp("^"+c,y(r))};var x=function(e,t,r){if(e instanceof RegExp){return m(e,t)}if(Array.isArray(e)){return g(e,t,r)}return b(e,t,r)};var O=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)};var S=function(e,t){return O(e,t)?e.substr(t.length):e};var L=function(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e};var _=function(e){return e.charAt(0)==="/"?e:"/"+e};var T=function(e){return e.charAt(0)==="/"?e.substr(1):e};var k=function(e){var t=e||"/";var r="";var n="";var i=t.indexOf("#");if(i!==-1){n=t.substr(i);t=t.substr(0,i)}var a=t.indexOf("?");if(a!==-1){r=t.substr(a);t=t.substr(0,a)}return{pathname:t,search:r==="?"?"":r,hash:n==="#"?"":n,query:{},key:""}};var P=function(e){var t=e.pathname,r=e.search,n=e.hash;var i=t||"/";if(r&&r!=="?"){i+=r.charAt(0)==="?"?r:"?"+r}if(n&&n!=="#"){i+=n.charAt(0)==="#"?n:"#"+n}return i};var E=function(e){if(!e){return{}}return(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce((function(e,t){var r=t.split("="),n=r[0],i=r[1];e[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"";return e}),{})};var A=function(e){return e.charAt(0)==="/"};var C=function(e){return Math.random().toString(36).substr(2,e)};var j=function(e,t){for(var r=t,n=r+1,i=e.length;n<i;r+=1,n+=1){e[r]=e[n]}e.pop()};var H=function(e,t){if(t===void 0){t=""}var r=t&&t.split("/")||[];var n;var i=0;var a=e&&e.split("/")||[];var o=e&&A(e);var s=t&&A(t);var c=o||s;if(e&&A(e)){r=a}else if(a.length){r.pop();r=r.concat(a)}if(!r.length){return"/"}if(r.length){var u=r[r.length-1];n=u==="."||u===".."||u===""}else{n=false}for(var l=r.length;l>=0;l--){var h=r[l];if(h==="."){j(r,l)}else if(h===".."){j(r,l);i++}else if(i){j(r,l);i--}}if(!c){for(;i--;i){r.unshift("..")}}if(c&&r[0]!==""&&(!r[0]||!A(r[0]))){r.unshift("")}var f=r.join("/");if(n&&f.substr(-1)!=="/"){f+="/"}return f};var q=function(e,t){if(e===t){return true}if(e==null||t==null){return false}if(Array.isArray(e)){return Array.isArray(t)&&e.length===t.length&&e.every((function(e,r){return q(e,t[r])}))}var r=typeof e;var n=typeof t;if(r!==n){return false}if(r==="object"){var i=e.valueOf();var a=t.valueOf();if(i!==e||a!==t){return q(i,a)}var o=Object.keys(e);var s=Object.keys(t);if(o.length!==s.length){return false}return o.every((function(r){return q(e[r],t[r])}))}return false};var R=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&q(e.state,t.state)};var M=function(e,t,r,n){var i;if(typeof e==="string"){i=k(e);if(t!==undefined){i.state=t}}else{i=Object.assign({pathname:""},e);if(i.search&&i.search.charAt(0)!=="?"){i.search="?"+i.search}if(i.hash&&i.hash.charAt(0)!=="#"){i.hash="#"+i.hash}if(t!==undefined&&i.state===undefined){i.state=t}}try{i.pathname=decodeURI(i.pathname)}catch(e){if(e instanceof URIError){throw new URIError('Pathname "'+i.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw e}}i.key=r;if(n){if(!i.pathname){i.pathname=n.pathname}else if(i.pathname.charAt(0)!=="/"){i.pathname=H(i.pathname,n.pathname)}}else{if(!i.pathname){i.pathname="/"}}i.query=E(i.search||"");return i};var U=0;var I={};var V=1e4;var D=function(e,t){var r=""+t.end+t.strict;var n=I[r]||(I[r]={});var i=JSON.stringify(e);if(n[i]){return n[i]}var a=[];var o=x(e,a,t);var s={re:o,keys:a};if(U<V){n[i]=s;U+=1}return s};var N=function(e,t){if(t===void 0){t={}}if(typeof t==="string"){t={path:t}}var r=t.path,n=r===void 0?"/":r,i=t.exact,a=i===void 0?false:i,o=t.strict,s=o===void 0?false:o;var c=D(n,{end:a,strict:s}),u=c.re,l=c.keys;var h=u.exec(e);if(!h){return null}var f=h[0],v=h.slice(1);var p=e===f;if(a&&!p){return null}return{path:n,url:n==="/"&&f===""?"/":f,isExact:p,params:l.reduce((function(e,t,r){e[t.name]=v[r];return e}),{})}};var B=function(e,t){if(e==null&&t==null){return true}if(t==null){return false}return e&&t&&e.path===t.path&&e.url===t.url&&q(e.params,t.params)};var z=e("stencil_route",function(){function e(e){t(this,e);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}e.prototype.computeMatch=function(e){var t=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!e||t){return}this.previousMatch=this.match;return this.match=N(e.pathname,{path:this.url,exact:this.exact,strict:true})};e.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e={};if(this.history&&this.history.location.hash){e={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){e={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(e)}else if(this.match&&!B(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(e)}return[2]}))}))};e.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.render=function(){if(!this.match||!this.history){return null}var e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},e,{component:this.component}))}if(this.component){var t=this.component;return n(t,Object.assign({},e))}};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return e}());o.injectProps(z,["location","history","historyType","routeViewsUpdated"]);var Y=function(e,t,r){return r(e.confirm(t))};var W=function(e){return e.metaKey||e.altKey||e.ctrlKey||e.shiftKey};var $=function(e){var t=e.navigator.userAgent;if((t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1){return false}return e.history&&"pushState"in e.history};var F=function(e){return e.userAgent.indexOf("Trident")===-1};var Q=function(e){return e.userAgent.indexOf("Firefox")===-1};var X=function(e,t){return t.state===undefined&&e.userAgent.indexOf("CriOS")===-1};var K=function(e,t){var r=e[t];var n="__storage_test__";try{r.setItem(n,n);r.removeItem(n);return true}catch(e){return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==="QuotaExceededError"||e.name==="NS_ERROR_DOM_QUOTA_REACHED")&&r.length!==0}};var J=function(e,t){if(e.charAt(0)=="/"&&t.charAt(t.length-1)=="/"){return t.slice(0,t.length-1)+e}return t+e};var G=e("stencil_route_link",function(){function e(e){t(this,e);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}e.prototype.componentWillLoad=function(){this.computeMatch()};e.prototype.computeMatch=function(){if(this.location){this.match=N(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};e.prototype.handleClick=function(e){if(W(e)||!this.history||!this.url||!this.root){return}e.preventDefault();return this.history.push(J(this.url,this.root))};e.prototype.render=function(){var e;var t={class:(e={},e[this.activeClass]=this.match!==null,e),onClick:this.handleClick.bind(this)};if(this.anchorClass){t.class[this.anchorClass]=true}if(this.custom==="a"){t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return n(this.custom,Object.assign({},t),n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return e}());o.injectProps(G,["history","location","root"]);var Z=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var ee=function(e,t,r){return N(e,{path:t,exact:r,strict:true})};var te=function(e){return e.tagName==="STENCIL-ROUTE"};var re=e("stencil_route_switch",function(){function e(e){t(this,e);this.group=Z();this.subscribers=[];this.queue=a(this,"queue")}e.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};e.prototype.regenerateSubscribers=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;var n=this;return __generator(this,(function(i){if(e==null){return[2]}t=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(te).map((function(r,n){var i=ee(e.pathname,r.url,r.exact);if(i&&t===-1){t=n}return{el:r,match:i}}));if(t===-1){return[2]}if(this.activeIndex===t){this.subscribers[t].el.match=this.subscribers[t].match;return[2]}this.activeIndex=t;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(e){n.queue.write((function(){n.subscribers.forEach((function(e,t){e.el.componentUpdated=undefined;if(t===n.activeIndex){return e.el.style.display=""}if(n.scrollTopOffset){e.el.scrollTopOffset=n.scrollTopOffset}e.el.group=n.group;e.el.match=null;e.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},e))}};return[2]}))}))};e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return e}());o.injectProps(re,["location","routeViewsUpdated"]);var ne=function(e){var t=[];for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}if(!e){console.warn.apply(console,t)}};var ie=function(){var e;var t=[];var r=function(t){ne(e==null,"A history supports only one prompt at a time");e=t;return function(){if(e===t){e=null}}};var n=function(t,r,n,i){if(e!=null){var a=typeof e==="function"?e(t,r):e;if(typeof a==="string"){if(typeof n==="function"){n(a,i)}else{ne(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(a!==false)}}else{i(true)}};var i=function(e){var r=true;var n=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}if(r){e.apply(void 0,t)}};t.push(n);return function(){r=false;t=t.filter((function(e){return e!==n}))}};var a=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}t.forEach((function(t){return t.apply(void 0,e)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:a}};var ae=function(e,t){if(t===void 0){t="scrollPositions"}var r=new Map;var n=function(t,n){r.set(t,n);if(K(e,"sessionStorage")){var i=[];r.forEach((function(e,t){i.push([t,e])}));e.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(e){return r.get(e)};var a=function(e){return r.has(e)};var o=function(t){n(t,[e.scrollX,e.scrollY])};if(K(e,"sessionStorage")){var s=e.sessionStorage.getItem(t);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in e.history){history.scrollRestoration="manual"}return{set:n,get:i,has:a,capture:o}};var oe="popstate";var se="hashchange";var ce=function(e,t){if(t===void 0){t={}}var r=false;var n=e.history;var i=e.location;var a=e.navigator;var o=$(e);var s=!F(a);var c=ae(e);var u=t.forceRefresh!=null?t.forceRefresh:false;var l=t.getUserConfirmation!=null?t.getUserConfirmation:Y;var h=t.keyLength!=null?t.keyLength:6;var f=t.basename?L(_(t.basename)):"";var v=function(){try{return e.history.state||{}}catch(e){return{}}};var p=function(e){e=e||{};var t=e.key,r=e.state;var n=i.pathname,a=i.search,o=i.hash;var s=n+a+o;ne(!f||O(s,f),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+f+'".');if(f){s=S(s,f)}return M(s,r,t||C(h))};var d=ie();var y=function(e){c.capture(N.location.key);Object.assign(N,e);N.location.scrollPosition=c.get(N.location.key);N.length=n.length;d.notifyListeners(N.location,N.action)};var m=function(e){if(!X(a,e)){b(p(e.state))}};var g=function(){b(p(v()))};var b=function(e){if(r){r=false;y()}else{var t="POP";d.confirmTransitionTo(e,t,l,(function(r){if(r){y({action:t,location:e})}else{w(e)}}))}};var w=function(e){var t=N.location;var n=T.indexOf(t.key);var i=T.indexOf(e.key);if(n===-1){n=0}if(i===-1){i=0}var a=n-i;if(a){r=true;q(a)}};var x=p(v());var T=[x.key];var k=0;var E=false;var A=function(e){return f+P(e)};var j=function(e,t){ne(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var a=M(e,t,C(h),N.location);d.confirmTransitionTo(a,r,l,(function(e){if(!e){return}var t=A(a);var s=a.key,c=a.state;if(o){n.pushState({key:s,state:c},"",t);if(u){i.href=t}else{var l=T.indexOf(N.location.key);var h=T.slice(0,l===-1?0:l+1);h.push(a.key);T=h;y({action:r,location:a})}}else{ne(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=t}}))};var H=function(e,t){ne(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var a=M(e,t,C(h),N.location);d.confirmTransitionTo(a,r,l,(function(e){if(!e){return}var t=A(a);var s=a.key,c=a.state;if(o){n.replaceState({key:s,state:c},"",t);if(u){i.replace(t)}else{var l=T.indexOf(N.location.key);if(l!==-1){T[l]=a.key}y({action:r,location:a})}}else{ne(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(t)}}))};var q=function(e){n.go(e)};var R=function(){return q(-1)};var U=function(){return q(1)};var I=function(t){k+=t;if(k===1){e.addEventListener(oe,m);if(s){e.addEventListener(se,g)}}else if(k===0){e.removeEventListener(oe,m);if(s){e.removeEventListener(se,g)}}};var V=function(e){if(e===void 0){e=""}var t=d.setPrompt(e);if(!E){I(1);E=true}return function(){if(E){E=false;I(-1)}return t()}};var D=function(e){var t=d.appendListener(e);I(1);return function(){I(-1);t()}};var N={length:n.length,action:"POP",location:x,createHref:A,push:j,replace:H,go:q,goBack:R,goForward:U,block:V,listen:D,win:e};return N};var ue="hashchange";var le={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+T(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:T,decodePath:_},slash:{encodePath:_,decodePath:_}};var he=function(e,t){if(t===void 0){t={}}var r=false;var n=null;var i=0;var a=false;var o=e.location;var s=e.history;var c=Q(e.navigator);var u=t.keyLength!=null?t.keyLength:6;var l=t.getUserConfirmation,h=l===void 0?Y:l,f=t.hashType,v=f===void 0?"slash":f;var p=t.basename?L(_(t.basename)):"";var d=le[v],y=d.encodePath,m=d.decodePath;var g=function(){var e=o.href;var t=e.indexOf("#");return t===-1?"":e.substring(t+1)};var b=function(e){return o.hash=e};var w=function(e){var t=o.href.indexOf("#");o.replace(o.href.slice(0,t>=0?t:0)+"#"+e)};var x=function(){var e=m(g());ne(!p||O(e,p),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+e+'" to begin with "'+p+'".');if(p){e=S(e,p)}return M(e,undefined,C(u))};var T=ie();var k=function(e){Object.assign(K,e);K.length=s.length;T.notifyListeners(K.location,K.action)};var E=function(){var e=g();var t=y(e);if(e!==t){w(t)}else{var i=x();var a=K.location;if(!r&&R(a,i)){return}if(n===P(i)){return}n=null;A(i)}};var A=function(e){if(r){r=false;k()}else{var t="POP";T.confirmTransitionTo(e,t,h,(function(r){if(r){k({action:t,location:e})}else{j(e)}}))}};var j=function(e){var t=K.location;var n=I.lastIndexOf(P(t));var i=I.lastIndexOf(P(e));if(n===-1){n=0}if(i===-1){i=0}var a=n-i;if(a){r=true;B(a)}};var H=g();var q=y(H);if(H!==q){w(q)}var U=x();var I=[P(U)];var V=function(e){return"#"+y(p+P(e))};var D=function(e,t){ne(t===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=M(e,undefined,C(u),K.location);T.confirmTransitionTo(i,r,h,(function(e){if(!e){return}var t=P(i);var a=y(p+t);var o=g()!==a;if(o){n=t;b(a);var s=I.lastIndexOf(P(K.location));var c=I.slice(0,s===-1?0:s+1);c.push(t);I=c;k({action:r,location:i})}else{ne(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");k()}}))};var N=function(e,t){ne(t===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=M(e,undefined,C(u),K.location);T.confirmTransitionTo(i,r,h,(function(e){if(!e){return}var t=P(i);var a=y(p+t);var o=g()!==a;if(o){n=t;w(a)}var s=I.indexOf(P(K.location));if(s!==-1){I[s]=t}k({action:r,location:i})}))};var B=function(e){ne(c,"Hash history go(n) causes a full page reload in this browser");s.go(e)};var z=function(){return B(-1)};var W=function(){return B(1)};var $=function(e,t){i+=t;if(i===1){e.addEventListener(ue,E)}else if(i===0){e.removeEventListener(ue,E)}};var F=function(t){if(t===void 0){t=""}var r=T.setPrompt(t);if(!a){$(e,1);a=true}return function(){if(a){a=false;$(e,-1)}return r()}};var X=function(t){var r=T.appendListener(t);$(e,1);return function(){$(e,-1);r()}};var K={length:s.length,action:"POP",location:U,createHref:V,push:D,replace:N,go:B,goBack:z,goForward:W,block:F,listen:X,win:e};return K};var fe=function(e,t){var r=e.pathname.indexOf(t)==0?"/"+e.pathname.slice(t.length):e.pathname;return Object.assign({},e,{pathname:r})};var ve={browser:ce,hash:he};var pe=e("stencil_router",function(){function e(e){var r=this;t(this,e);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(e){if(e===void 0){e={}}if(r.history&&e.scrollToId&&r.historyType==="browser"){var t=r.history.win.document.getElementById(e.scrollToId);if(t){return t.scrollIntoView()}}r.scrollTo(e.scrollTopOffset||r.scrollTopOffset)};this.isServer=a(this,"isServer");this.queue=a(this,"queue")}e.prototype.componentWillLoad=function(){var e=this;this.history=ve[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(t){t=fe(t,e.root);e.location=t}));this.location=fe(this.history.location,this.root)};e.prototype.scrollTo=function(e){var t=this.history;if(e==null||this.isServer||!t){return}if(t.action==="POP"&&Array.isArray(t.location.scrollPosition)){return this.queue.write((function(){if(t&&t.location&&Array.isArray(t.location.scrollPosition)){t.win.scrollTo(t.location.scrollPosition[0],t.location.scrollPosition[1])}}))}return this.queue.write((function(){t.win.scrollTo(0,e)}))};e.prototype.render=function(){if(!this.location||!this.history){return}var e={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return n(o.Provider,{state:e},n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});return e}())}}}));