import{d as I,y as x,t as D,D as T,n as V,ac as z,C as F,o as k,b as _,i as v,e as u,x as b,l as P,A as R,F as B,g as q,ad as K,aa as j,ab as U,h as E,p as X,a as G}from"../modules/vue-Csk32_s6.js";import{C as N,q as J,r as O,_ as Q}from"../index-DJDc6_M8.js";import{m as W}from"../modules/unplugin-icons-jBVglFOa.js";const Y=["innerHTML"],Z=["textContent"],ee=["textContent"],L="slidev-note-fade",y="slidev-note-click-mark",me=I({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(f,{emit:p}){const t=f,h=p,m=x(()=>{var n;return t.clicksContext!=null&&((n=t.noteHtml)==null?void 0:n.includes("slidev-note-click-mark"))}),l=D(null);function w(){var $,A;if(!l.value||!m.value)return;const n=Array.from(l.value.querySelectorAll(`.${y}`)),c=new Map,d=new Map;let a=0;for(const r of n){const s=Number(r.dataset.clicks);c.set(r,s);let o=r,e=r.parentElement;for(;e&&o!==l.value;)d.has(e)||d.set(e,[[null,a]]),d.get(e).push([o,s]),o=e,e=e.parentElement;a=s}const C=new Map;for(const[r,s]of d){let o=!1,e=0;for(const i of Array.from(r.childNodes)){let S=!1;for(;i===(($=s[e+1])==null?void 0:$[0]);)S=!0,e++;if(S)continue;let M=i;if(i.nodeType===3){if(!((A=i.textContent)!=null&&A.trim()))continue;M=document.createElement("span"),M.textContent=i.textContent,r.insertBefore(M,i),i.remove()}o||(o=e===0),C.set(M,s[e][1])}o||(s[0][1]=-1)}return r=>{const s=t.highlight;for(const[o,e]of d)o.classList.toggle(L,s&&!e.some(([i,S])=>S===r));for(const[o,e]of C)o.classList.toggle(L,s&&e!==r);for(const[o,e]of c)o.classList.remove(L),o.classList.toggle(`${y}-past`,s&&e<r),o.classList.toggle(`${y}-active`,s&&e===r),o.classList.toggle(`${y}-next`,s&&e===r+1),o.classList.toggle(`${y}-future`,s&&e>r+1),o.ondblclick=s?i=>{h("markerDblclick",i,e),!i.defaultPrevented&&(t.clicksContext.current=e,i.stopPropagation(),i.stopImmediatePropagation())}:null,o.onclick=s?i=>{h("markerClick",i,e)}:null,!s&&t.autoScroll&&e===r&&o.scrollIntoView({block:"center",behavior:"smooth"})}}const g=D();return T(()=>[t.noteHtml,t.highlight],()=>{V(()=>{g.value=w()})},{immediate:!0}),z(()=>{w()}),F(()=>{var c,d;const n=((c=t.clicksContext)==null?void 0:c.current)??N;(d=g.value)==null||d.call(g,n)}),(n,c)=>n.noteHtml?(k(),_("div",{key:0,ref_key:"noteDisplay",ref:l,class:v(["prose overflow-auto outline-none slidev-note",[t.class,m.value?"slidev-note-with-clicks":""]]),innerHTML:n.noteHtml},null,10,Y)):n.note?(k(),_("div",{key:1,class:v(["prose overflow-auto outline-none slidev-note",t.class])},[u("p",{textContent:b(n.note)},null,8,Z)],2)):(k(),_("div",{key:2,class:v(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[u("p",{textContent:b(t.placeholder||"No notes.")},null,8,ee)],2))}}),H=f=>(X("data-v-ea6add4f"),f=f(),G(),f),te=["title"],oe={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},se=H(()=>u("div",{"flex-auto":""},null,-1)),ne={"text-primary":""},le=H(()=>u("span",{op25:""},"/",-1)),ae={op50:""},re={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},ie=["min","max"],ce=I({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(f){const p=f,t=x(()=>p.clicksContext.total),h=x(()=>J(0,p.clicksContext.clicksStart,t.value)),m=x(()=>t.value-h.value+1),l=x({get(){return p.clicksContext.current>t.value?-1:p.clicksContext.current},set(n){p.clicksContext.current=n}}),w=x(()=>O(h.value,t.value+1));function g(){p.readonly||(l.value<0||l.value>t.value)&&(l.value=0)}return(n,c)=>{const d=W;return k(),_("div",{class:v(["flex gap-1 items-center select-none",m.value&&p.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${m.value}`},[u("div",oe,[P(d,{"text-sm":"",op50:""}),se,l.value>=0&&l.value!==R(N)&&n.active?(k(),_(B,{key:0},[u("span",ne,b(l.value),1),le],64)):q("v-if",!0),u("span",ae,b(t.value),1)]),u("div",re,[(k(!0),_(B,null,K(w.value,a=>(k(),_("div",{key:a,border:"y main","of-hidden":"",relative:"",class:v([a===0?"rounded-l border-l":"",a===t.value?"rounded-r border-r":""]),style:E({width:m.value>0?`${1/m.value*100}%`:"100%"})},[u("div",{absolute:"","inset-0":"",class:v(a<=l.value?"bg-primary op15":"")},null,2),u("div",{class:v([+a==+l.value?"text-primary font-bold op100 border-primary":"op30 border-main",a===0?"rounded-l":"",a===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},b(a),3)],6))),128)),j(u("input",{"onUpdate:modelValue":c[0]||(c[0]=a=>l.value=a),class:v(["range",n.readonly?"pointer-events-none":""]),type:"range",min:h.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:E({"--thumb-width":`${1/(m.value+1)*100}%`}),onMousedown:g,onFocus:c[1]||(c[1]=a=>{var C;return(C=a.currentTarget)==null?void 0:C.blur()})},null,46,ie),[[U,l.value]])])],10,te)}}}),ve=Q(ce,[["__scopeId","data-v-ea6add4f"]]);export{ve as C,me as _};
