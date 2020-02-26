import{r as t,c as s,h as i,g as n}from"./p-d91dd0c5.js";const o=class{constructor(i){t(this,i),this.isSVGDownloading=!1,this.hadIconOnce=!1,this.clearToast=s(this,"clearToast",7),this.toggleHeaderSearch=s(this,"toggleHeaderSearch",7)}handleCodeClick(t){const s=this.el.querySelector(".toast-bar__section:first-child"),i=document.createElement("textarea");i.value=`<ion-icon name="${t}"></ion-icon>`,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),this.showCopiedConfirm&&(window.clearTimeout(this.showCopiedConfirm),this.showCopiedConfirm=0),s.classList.add("copied"),this.showCopiedConfirm=window.setTimeout(()=>{s.classList.remove("copied"),this.showCopiedConfirm=0},1500)}componentDidLoad(){this.el.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),this.el.addEventListener("touchend",this.handleTouchEnd.bind(this),!1)}handleTouchStart(t){t.target.classList.contains("toast-bar--inner")&&(t.preventDefault(),this.touchStartY=t.changedTouches[0].screenY)}handleTouchEnd(t){t.target.classList.contains("toast-bar--inner")&&(t.preventDefault(),this.touchEndY=t.changedTouches[0].screenY,this.touchEndY>this.touchStartY&&this.clearToast.emit())}handleSVGDownload(t,s){t.preventDefault(),this.isSVGDownloading=!0,fetch(t.target.href).then(t=>{if(t.ok)return t.text();throw new Error("Unable to fetch icon.")}).then(t=>{this.isSVGDownloading=!1;const i=`data:image/svg+xml,${this.encodeSVG(t)}`,n=document.createElement("a");n.setAttribute("href",i),n.setAttribute("download",`${s}.svg`),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)})}encodeSVG(t){return(t=(t=(t=t.replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g," ")).replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent)}render(){let t,s;if(this.selectedIcon){this.hadIconOnce||(this.hadIconOnce=!0);const i=this.selectedIcon.name.includes("logo-");t=8*`<ion-icon name="${s=i?this.selectedIcon.name:this.selectedIcon.name+this.typeSuffix}"></ion-icon>`.length+32}return i("div",{class:`toast-bar ${this.selectedIcon?"isVisible":""} ${!this.selectedIcon&&this.hadIconOnce?"isHidden":""} ${this.hadIconOnce?"":"preload"}`,onClick:t=>t.stopPropagation()},i("div",{class:"container"},i("div",{class:"toast-bar--inner"},this.selectedIcon&&i("h4",null,s),this.selectedIcon&&i("div",{class:"toast-bar__details"},i("div",{class:"toast-bar__section",style:{maxWidth:t+"px"}},i("div",{class:"toast-bar__section-header"},i("div",null,i("h6",null,"Web component code"),i("span",{class:"confirmation"},i("i",{class:"ion ion-md-checkmark"}),"Copied")),i("stencil-route-link",{url:`/usage#${s}`,onClick:()=>this.toggleHeaderSearch.emit("hide")},"Usage",i("i",{class:"ion ion-ios-arrow-forward"}))),i("code",null,i("span",{class:"hover-highlight",onClick:()=>this.handleCodeClick(s)},"<",i("span",{class:"yellow"},"ion-icon")," ",i("span",{class:"orange"},"name"),"=",i("span",{class:"green"},`"${s}"`),">","</",i("span",{class:"yellow"},"ion-icon"),">"))),i("div",{class:"toast-bar__section"},i("div",{class:"btn-group"},i("div",{class:"btn btn--gray btn--small btn--icon"},i("svg",null,i("use",{xlinkHref:`#${s}`}))),i("a",{class:"btn btn--gray btn--small download-link",href:`https://unpkg.com/ionicons@${this.version}/dist/svg/${s}.svg`,onClick:t=>this.handleSVGDownload(t,s)},this.isSVGDownloading?i("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"loading-animation"},i("path",{d:"M11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11",stroke:"url(#paint0_angular)"}),i("defs",null,i("radialGradient",{id:"paint0_angular",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(7 7) rotate(90) scale(4)"},i("stop",{"stop-color":"#96ABDC","stop-opacity":"0"}),i("stop",{offset:"0.75","stop-color":"#96ABDC"})))):i("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",null,i("rect",{fill:"#586980",x:"0",y:"9",width:"9",height:"2",rx:"1"}),i("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#96abdc"}))),"SVG")))))))}get el(){return n(this)}static get style(){return"toast-bar .toast-bar{position:fixed;padding:12px 0;left:0;bottom:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}toast-bar .toast-bar.isVisible{-webkit-animation-name:slideIn;animation-name:slideIn;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:var(--easeOutExpo);animation-timing-function:var(--easeOutExpo);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:1}\@-webkit-keyframes slideIn{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes slideIn{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}toast-bar .toast-bar.isHidden{-webkit-animation-name:slideOut;animation-name:slideOut;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-timing-function:var(--easeOutExpo);animation-timing-function:var(--easeOutExpo);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}\@-webkit-keyframes slideOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}99%{opacity:1}to{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}\@keyframes slideOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}99%{opacity:1}to{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}toast-bar .toast-bar.preload{opacity:0}toast-bar .toast-bar--inner{background-color:var(--color-shark);height:80px;border-radius:15px;padding:0 20px 0 30px;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 16px 32px 0 rgba(0,0,0,.1),0 8px 16px 0 rgba(0,0,0,.08);box-shadow:0 16px 32px 0 rgba(0,0,0,.1),0 8px 16px 0 rgba(0,0,0,.08)}toast-bar .toast-bar--inner h4{color:#fff;margin:0;white-space:nowrap;margin-right:30px}toast-bar .toast-bar__details{-ms-flex:1 0 auto;flex:1 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}toast-bar .toast-bar__section-header,toast-bar .toast-bar__section-header>div{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}toast-bar .toast-bar__section-header{height:10px;margin-bottom:7px}toast-bar .toast-bar__section-header h6{display:inline-block}toast-bar .toast-bar__section-header a{-webkit-transition:border .3s;transition:border .3s;color:var(--color-melrose);font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border-bottom:1px solid transparent}toast-bar .toast-bar__section-header a:hover{border-bottom-color:var(--color-melrose-dark)}toast-bar .toast-bar__section-header i{margin-left:3px}toast-bar .toast-bar__section:not(:first-child){margin-left:20px}toast-bar .toast-bar__section:first-child{position:relative;max-width:none}toast-bar .toast-bar__details code{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:14px;line-height:14px;height:32px;padding:0 12px;cursor:text;overflow:hidden}\@supports (display:grid){toast-bar .toast-bar__section:not(:first-child){-ms-flex:0;flex:0}toast-bar .toast-bar__section:first-child{-ms-flex:1;flex:1}toast-bar .toast-bar__details code{overflow-x:auto}}toast-bar .toast-bar__details code>span{position:absolute;white-space:nowrap}toast-bar .toast-bar__section .confirmation{font-size:11px;font-family:Eina;font-weight:600;color:#aec6ff;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px);margin-left:12px}toast-bar .toast-bar__section .confirmation svg{color:#aec6ff;width:14px;height:14px;margin-right:4px}toast-bar .toast-bar__section.copied .confirmation{-webkit-animation-name:slideInOut;animation-name:slideInOut;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}\@-webkit-keyframes slideInOut{0%{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}10%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}\@keyframes slideInOut{0%{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}10%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}toast-bar .toast-bar__details code:hover .hover-highlight{background-color:#5882b2}\@media screen and (max-width:768px){toast-bar .toast-bar__section:not(:first-child){display:none}}\@media screen and (max-width:540px){toast-bar .toast-bar--inner{padding:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;height:auto}toast-bar .toast-bar--inner h4{margin:0 0 16px}toast-bar .toast-bar__section{max-width:100%!important}toast-bar .toast-bar__details{-ms-flex:0 0 auto;flex:0 0 auto;width:100%}}"}};export{o as toast_bar};