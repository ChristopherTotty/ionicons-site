import{r as t,c as o,h as i,H as a}from"./p-7ed6835f.js";import"./p-9367f088.js";import{B as s}from"./p-4f42142d.js";const e=class{constructor(i){t(this,i),this.open=!1,this.visible=!1,this.OPEN_DELAY=500,this.CLOSE_DELAY=500,this.close=()=>{this.visible=!1,this.hideBackdrop(),setTimeout(()=>{this.open=!1},this.CLOSE_DELAY)},this.openBackdrop=()=>{const t=document.createElement("div");t.className="modal__backdrop",document.body.appendChild(t),this.initBackdrop(t),this.backdropEl=t,requestAnimationFrame(()=>{t.classList.add("in")})},this.hideBackdrop=()=>{this.backdropEl&&(this.backdropEl.classList.add("out"),setTimeout(()=>{var t;document.body.removeChild(this.backdropEl),this.backdropEl=null,this.modalClose&&this.modalClose(),null===(t=this.onModalClose)||void 0===t||t.emit()},this.CLOSE_DELAY))},this.checkBackdrop=()=>{},this.initBackdrop=t=>{t.addEventListener("click",()=>{this.close()})},this.onModalClose=o(this,"modalClose",7)}componentDidLoad(){this.checkBackdrop()}handleKeyUp(t){this.open&&"Escape"===t.key&&this.close()}openChanged(){this.open&&!this.backdropEl?this.openBackdrop():!this.open&&this.backdropEl&&this.hideBackdrop(),requestAnimationFrame(()=>{this.visible=this.open})}render(){return i(a,{style:{display:this.open?"block":"none"}},i("div",{class:"modal__wrap"+(this.visible?" in":"")},i("div",{class:"modal__content"},i(s,{class:"modal__close-button",onClick:this.close},i("ion-icon",{name:"close"})),i("div",{class:"modal__body"},i("slot",null)))))}static get watchers(){return{open:["openChanged"]}}};e.style=":root{--modal-z-index:1100;--modal-backdrop-z-index:1090;--modal-width:768px;--modal-padding:48px;--modal-border-radius:24px}site-modal{display:block;pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:var(--modal-z-index)}.modal__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--modal-backdrop-z-index);-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;background-color:#000;opacity:0}.modal__backdrop.in{opacity:0.5}.modal__backdrop.out{opacity:0}.modal__wrap{-webkit-transition:-webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);-webkit-transform:translateY(-120%);transform:translateY(-120%)}.modal__wrap.in{-webkit-transform:translate(0%);transform:translate(0%)}.modal__content{pointer-events:auto;max-width:var(--modal-width);margin:76px auto;background:white;position:relative;border-radius:var(--modal-border-radius)}.modal__content .modal__close-button{position:absolute;top:-10px;right:-10px;background:#fff;color:var(--c-carbon-90);padding:0;text-align:center;border:0;border-radius:100%;height:30px;width:30px;-webkit-box-shadow:var(--elevation-2);box-shadow:var(--elevation-2);outline:0}.modal__content .modal__close-button ion-icon{vertical-align:middle;margin-top:-3px}.modal__body{padding:var(--modal-padding);max-height:calc(100vh - 76px);overflow:auto}.modal__body h1,.modal__body h2,.modal__body h3,.modal__body h4,.modal__body h5{margin-top:0}";export{e as site_modal}