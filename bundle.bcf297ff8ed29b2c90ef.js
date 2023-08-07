(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background-color: blanchedalmond;\n}\n.container {\n    display: block;\n    width: 100%;\n    height: 500px;\n    border: 1px solid #cccccc50;\n    background-color: white;\n    margin: auto;\n    margin-top: 100px;\n    position: relative;\n}\n\n.sprite {\n    position: absolute;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    background-color: red;\n    display: block;\n}\n\n@keyframes jump {\n    0% {\n        margin-bottom: 0;\n    }\n\n    50% {\n        margin-bottom: 50px;\n    }\n\n    100% {\n        margin-bottom: 0;\n    }\n}\n\n.jump-animation {\n    animation: jump 0.4s infinite linear;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},a=[],c=0;c<e.length;c++){var s=e[c],d=i.base?s[0]+i.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,i);i.byIndex=c,n.splice(c,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var c=t(r[a]);n[c].references--}for(var s=i(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),r=t(569),a=t.n(r),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector("body"),h=document.querySelector(".sprite"),b=new class{enabled=!1;focused=!1;ACTION_ACTIVATED="input-controller:action-activated";ACTION_DEACTIVATED="input-controller:action-deactivated";constructor(e,n){this.actionsToBind=e,this.target=n}bindActions(e){this.actionsToBind=e}enableAction(e){this.actionsToBind[e].enabled=!0}disableAction(e){this.actionsToBind[e].enabled=!1}attach(e,n=!1){const t=new Event(this.ACTION_ACTIVATED),i=new Event(this.ACTION_DEACTIVATED);n||(e.addEventListener("keydown",(n=>{for(let i in this.actionsToBind)this.actionsToBind[i].keys.includes(n.keyCode)&&1!=this.actionsToBind[i].active&&(this.actionsToBind[i].active=!0,e.dispatchEvent(t))})),e.addEventListener("keyup",(n=>{e.dispatchEvent(i);for(let e in this.actionsToBind)this.actionsToBind[e].keys.includes(n.keyCode)&&(this.actionsToBind[e].active=!1)})))}detach(e){const n=e.cloneNode(!0);e.replaceWith(n)}isActionActive(e){return!!this.actionsToBind[e].enabled&&!!this.actionsToBind[e].active}isKeyPressed(e){return!!Object.values(this.actionsToBind).find((n=>n.keys.includes(e)&&n.active))}}({left:{keys:[37,65],enabled:!0},right:{keys:[39,68],enabled:!0},jump:{keys:[32],enabled:!0}},m);let y;b.focused=!0,b.enabled=!0,b.attach(m);let T=0,A=5,g="right";function E(){"right"===g?T+=A:T-=A,h.style.transform=`translateX(${T}px)`,y=requestAnimationFrame(E)}function x(){y||E()}function C(){cancelAnimationFrame(y),y=null}function k(e){"right"!==e&&"left"!==e||(g=e)}m.addEventListener(b.ACTION_ACTIVATED,(()=>{b.isActionActive("left")&&b.actionsToBind.left.enabled&&(k("left"),x()),b.isActionActive("right")&&b.actionsToBind.right.enabled&&(k("right"),x()),b.isActionActive("jump")&&b.actionsToBind.jump.enabled&&b.isKeyPressed(32)&&h.classList.add("jump-animation")})),m.addEventListener(b.ACTION_DEACTIVATED,(()=>{b.isActionActive("left")&&b.actionsToBind.left.enabled&&C(),b.isActionActive("right")&&b.actionsToBind.right.enabled&&C(),b.isActionActive("jump")&&b.actionsToBind.jump.enabled&&h.classList.remove("jump-animation")})),document.querySelector(".detach").addEventListener("click",(()=>b.detach(m))),document.querySelector(".attach").addEventListener("click",(()=>b.attach(m))),document.querySelector(".disableJump").addEventListener("click",(()=>b.disableAction("jump"))),document.querySelector(".enableJump").addEventListener("click",(()=>b.enableAction("jump")))})()})();