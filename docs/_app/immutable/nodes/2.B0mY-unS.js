import{j as W,k as y,i as J,a as H,r as z,l as A,o as C,g as X}from"../chunks/disclose-version.9DMtOlMF.js";import{p as Q,c as $,f as w,g as v,s as x,i as o,j as m,h as D}from"../chunks/runtime.BXqK91-7.js";function ee(b,d,i,c,p){const l=[];let n=d;for(let f=0;f<p;++f)l.push(`G1 Z${n.toFixed(3)}`),l.push(...b),n+i<d&&(i=-i),n+i>c&&(i=-i),n+=i;return l}var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z={exports:{}};(function(b,d){(function(i,c){c()})(L,function(){function i(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function c(e,t,u){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){h(a.response,t,u)},a.onerror=function(){console.error("could not download file")},a.send()}function p(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var n=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof L=="object"&&L.global===L?L:void 0,f=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=n.saveAs||(typeof window!="object"||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(e,t,u){var a=n.URL||n.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin===location.origin?l(r):p(r.href)?c(e,t,u):l(r,r.target="_blank")):(r.href=a.createObjectURL(e),setTimeout(function(){a.revokeObjectURL(r.href)},4e4),setTimeout(function(){l(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,u){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(i(e,u),t);else if(p(e))c(e,t,u);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout(function(){l(a)})}}:function(e,t,u,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof e=="string")return c(e,t,u);var r=e.type==="application/octet-stream",R=/constructor/i.test(n.HTMLElement)||n.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||r&&R||f)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var _=g.result;_=k?_:_.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=_:location=_,a=null},g.readAsDataURL(e)}else{var j=n.URL||n.webkitURL,E=j.createObjectURL(e);a?a.location=E:location.href=E,a=null,setTimeout(function(){j.revokeObjectURL(E)},4e4)}});n.saveAs=h.saveAs=h,b.exports=h})})(Z);var te=Z.exports;function ae(b,d,i,c,p,l,n,f){w(d,i(v(c).split(`
`),v(p),v(l),v(n),v(f)).join(`
`))}var oe=(b,d)=>navigator.clipboard.writeText(v(d)),ne=(b,d)=>d(),ie=X('<div><textarea name="" id="" class="result svelte-1h6z5oj"></textarea></div> <div><button>COPY TO CLIPBOARD</button> <button>SAVE AS FILE</button></div>',!0),re=X('<div><div><label for="" class="svelte-1h6z5oj">Path</label></div> <textarea class="path svelte-1h6z5oj" name="" id=""></textarea></div> <div><div><label for="" class="svelte-1h6z5oj">Z-Min</label> <input type="number"></div> <div><label for="" class="svelte-1h6z5oj">Z-Max</label> <input type="number"></div> <div><label for="" class="svelte-1h6z5oj">Z-Inc</label> <input type="number"></div> <div><label for="" class="svelte-1h6z5oj">Repeats</label> <input type="number"></div> <button>GEN</button></div> <!>',!0);function ve(b,d){Q(d,!1);let i=x(30),c=x(33.5),p=x(.025),l=x(700),n=x(""),f=x(`G1 Y-0,3
G1 X55
G1 Y-7
G1 X26`);function h(){const s=new Blob([v(n)],{type:"text/plain;charset=utf-8"});te.saveAs(s,"gcode.txt")}var e=C(b,!0,re),t=D(e),u=m(t),a=o(o(u));z(a);var r=o(o(t)),R=m(r),k=m(R),g=o(o(k));A(g);var j=o(o(R)),E=m(j),_=o(o(E));A(_);var T=o(o(j)),I=m(T),O=o(o(I));A(O);var S=o(o(T)),P=m(S),M=o(o(P));A(M);var Y=o(o(S)),q=o(o(r));y(a,()=>v(f),s=>w(f,s)),y(g,()=>v(i),s=>w(i,s)),y(_,()=>v(c),s=>w(c,s)),y(O,()=>v(p),s=>w(p,s)),y(M,()=>v(l),s=>w(l,s)),Y.__click=[ae,n,ee,f,i,p,c,l],J(q,()=>v(n).length>0,s=>{var F=C(s,!0,ie),G=D(F),U=m(G);z(U);var K=o(o(G)),B=m(K),N=o(o(B));y(U,()=>v(n),V=>w(n,V)),B.__click=[oe,n],N.__click=[ne,h],H(s,F)},null),H(b,e),$()}W(["click"]);export{ve as component};
