System.register(["./p-4a4fd3ee.system.js"],(function(e){"use strict";var t,n,o;return{setters:[function(e){t=e.r;n=e.h;o=e.g}],execute:function(){var s=e("icon_list",function(){function e(e){t(this,e);this.selectedIcon="";this.selectedIconType="outline";this.isHeaderSearchVisible=false;this.query=""}e.prototype.escListener=function(e){if(e.code==="Escape"&&this.selectedIcon.length)this.selectedIcon=""};e.prototype.handleBodyClicked=function(){if(this.selectedIcon.length)this.selectedIcon=""};e.prototype.handleClearToast=function(){this.selectedIcon=""};e.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))};e.prototype.checkScroll=function(){var e=this.el.querySelectorAll(".icon-list__header-bar");for(var t=0;t<e.length;t++){var n=e[t];if(n.getBoundingClientRect().top<67){n.classList.add("sticky")}else{n.classList.remove("sticky")}}};e.prototype.filterIcons=function(){var e=this.query.trim().toLowerCase();var t={icon:[],logo:[]};this.data.icons.forEach((function(n){if(e===""||n.tags.some((function(t){return t.indexOf(e)>-1}))){var o=n.name.substr(0,n.name.indexOf("-"));switch(o){case"logo":t["logo"].push({name:n.name});break;default:t["icon"].push({name:n.name});return}}}));return t};e.prototype.handleIconMouseEnter=function(e){e.target.classList.remove("mouseOff");e.target.classList.add("mouseOver")};e.prototype.handleIconMouseLeave=function(e){e.target.classList.remove("mouseOver");e.target.classList.add("mouseOff")};e.prototype.handleIconClick=function(e,t){e.stopPropagation();this.selectedIcon=t};e.prototype.handleToggleClick=function(e,t){e.stopPropagation();this.selectedIconType=t};e.prototype.render=function(){var e=this;var t=this.filterIcons();var o=this.data.icons.find((function(t){return t.name===e.selectedIcon}));var s;switch(this.selectedIconType){case"outline":s="-outline";break;case"sharp":s="-sharp";break;default:s=""}if(!t.icon.length&&!t.logo.length&&this.isHeaderSearchVisible)document.documentElement.scrollTop=0;return n("div",{class:"icon-list"},n("div",{class:"icon-list__search container--small"},n("icon-search",{query:this.query,size:"large",autofocus:"autofocus"})),t.icon.length?n("div",{class:"icon-list__wrapper"},n("div",{class:"icon-list__header-bar"},n("div",{class:"container--small"},n("h4",null,"App icons"),n("ul",{class:"toggle"},n("li",{class:"toggle__item "+(this.selectedIconType==="outline"?"active":""),onClick:function(t){return e.handleToggleClick(t,"outline")}},"Outline"),n("li",{class:"toggle__item "+(this.selectedIconType==="filled"?"active":""),onClick:function(t){return e.handleToggleClick(t,"filled")}},"Filled"),n("li",{class:"toggle__item "+(this.selectedIconType==="sharp"?"active":""),onClick:function(t){return e.handleToggleClick(t,"sharp")}},"Sharp")))),n("div",{class:"container--small"},n("div",{class:"icon-results"},t.icon.map((function(t){return n("span",{class:"icon-results__cell "+(e.selectedIcon===t.name?"active":""),onClick:function(n){return e.handleIconClick(n,t.name)},onMouseEnter:function(t){return e.handleIconMouseEnter(t)},onMouseLeave:function(t){return e.handleIconMouseLeave(t)}},n("svg",null,n("use",{xlinkHref:"#"+(t.name+s)})))}))))):"",t.logo.length?n("div",{class:"icon-list__wrapper"},n("div",{class:"icon-list__header-bar"},n("div",{class:"container--small"},n("h4",null,"Logos"))),n("div",{class:"container--small"},n("div",{class:"icon-results"},t.logo.map((function(t){return n("span",{class:"icon-results__cell "+(e.selectedIcon===t.name?"active":""),onClick:function(n){return e.handleIconClick(n,t.name)},onMouseEnter:function(t){return e.handleIconMouseEnter(t)},onMouseLeave:function(t){return e.handleIconMouseLeave(t)}},n("svg",null,n("use",{xlinkHref:"#"+t.name})))}))))):"",!t.icon.length&&!t.logo.length?n("div",{class:"icon-results--empty container--small"},n("h2",null,'No results for "',this.query,'"'),n("p",null,"Not finding an icon that you want? ",n("a",{href:"https://github.com/ionic-team/ionicons/issues"},"File an issue")," and suggest a new icon.")):"",n("toast-bar",{selectedIcon:o,selectedIconType:this.selectedIconType,typeSuffix:s,version:this.data.version}))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"icon-list .icon-list{margin-bottom:100px}icon-list .icon-list__search+.icon-list__wrapper{padding-top:90px}icon-list .icon-list__header-bar{-webkit-transition:-webkit-box-shadow .6s;transition:-webkit-box-shadow .6s;transition:box-shadow .6s;transition:box-shadow .6s,-webkit-box-shadow .6s;margin-bottom:14px;height:52px;background-color:#fff;-webkit-box-shadow:0;box-shadow:0;z-index:99}icon-list .icon-list__header-bar.sticky{position:-webkit-sticky;position:sticky;top:58px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.06);box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}icon-list .icon-list__header-bar .container--small{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}icon-list .icon-list__header-bar h4{margin-top:21px;margin-bottom:0}icon-list .icon-results{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));grid-auto-rows:minmax(70px,auto);grid-gap:.5em;padding-bottom:60px;margin-left:-20px;margin-right:-20px}icon-list .icon-results .ion,icon-list .icon-results__cell{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}icon-list .icon-results__cell{-webkit-transition:background-color .4s;transition:background-color .4s;cursor:pointer;border-radius:8px;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(236,240,246,.4)}icon-list .icon-results__cell svg{width:32px;height:32px;color:#373737}icon-list .icon-results__cell:not(.active).mouseOver{-webkit-animation-name:shadowIn;animation-name:shadowIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}\@-webkit-keyframes shadowIn{0%{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}}\@keyframes shadowIn{0%{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}}icon-list .icon-results__cell.active,icon-list .icon-results__cell:not(.active).mouseOff{-webkit-animation-name:shadowOut;animation-name:shadowOut;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}icon-list .icon-results__cell.active{-webkit-animation-duration:.3s;animation-duration:.3s}\@-webkit-keyframes shadowOut{0%{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}to{-webkit-box-shadow:0;box-shadow:0}}\@keyframes shadowOut{0%{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}to{-webkit-box-shadow:0;box-shadow:0}}icon-list .icon-results__cell.active{background-color:var(--color-catskill-white);cursor:default}icon-list .icon-results--empty{text-align:center;padding-top:70px}icon-list .icon-results--empty h2{margin-top:0}icon-list .toggle{list-style-type:none;display:-ms-flexbox;display:flex;margin-right:-4px;position:relative;bottom:-3px;margin-top:18px}icon-list .toggle__item{-webkit-transition:opacity .3s,padding-bottom .1s;transition:opacity .3s,padding-bottom .1s;opacity:.5;text-decoration:none;font-size:13px;font-weight:600;color:var(--color-dodger-blue);border-bottom:2px solid transparent}icon-list .toggle__item:not(.active){cursor:pointer}icon-list .toggle__item.active,icon-list .toggle__item:hover{opacity:1}icon-list .toggle__item.active{border-bottom:2px solid var(--color-dodger-blue);padding-bottom:2px}icon-list .toggle__item+.toggle__item{margin-left:20px}icon-list .icon-list__header-bar.sticky .toggle__item{padding-bottom:11px}\@media screen and (max-width:768px){icon-list .icon-results{margin-left:0;margin-right:0}icon-list .icon-list__search+.icon-list__wrapper{padding-top:40px}}\@media screen and (max-width:560px){icon-list .icon-results__cell.active,icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell:not(.active).mouseOver{-webkit-animation-name:none;animation-name:none;-webkit-box-shadow:0;box-shadow:0}}"},enumerable:true,configurable:true});return e}())}}}));