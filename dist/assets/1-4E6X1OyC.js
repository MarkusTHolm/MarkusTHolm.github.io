import{_ as b}from"./slidev/Pagination.vue_vue_type_script_setup_true_lang-BKoLoCFA.js";import{d as A,o,b as n,x as h,y as d,e as a,f as U,F as p,ad as x,l as v,g as c,h as D,c as T,k as C,q as P,s as M,A as k,a6 as N}from"./modules/vue-C2jV4Qir.js";import{u as _,p as z,f as F}from"./slidev/context-Cr1Ba_sh.js";import{a9 as g}from"./index-BoPNmaNm.js";import"./modules/shiki-D75n1TGG.js";const L={key:0},O=["href"],V=A({__name:"TextWithOptionalLink",props:{link:{},text:{}},setup(e){return _(),(t,l)=>t.link?(o(),n("a",{key:1,href:t.link,rel:"noreferrer",target:"_blank"},h(t.text),9,O)):(o(),n("span",L,h(t.text),1))}});function y(e){const t="/";return e.startsWith("/")?t.endsWith("/")?t+e.slice(1):t+e:e}function W(e,t=!1){const l=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),i={background:l?e:void 0,backgroundImage:l?void 0:e?t?`linear-gradient(#0009, #0009), url(${y(e)})`:`url("${y(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return i.background||delete i.background,i}const w={class:"my-auto w-full"},I={key:0,class:"absolute bottom-12 flex"},R={key:0},E={key:0},q={key:1},H={key:1},K={key:1,class:"absolute bottom-0 font-extralight mb-1 mr-2 right-0 text-xs"},j=A({__name:"cover",props:{coverAuthor:{},coverAuthorUrl:{},coverBackgroundUrl:{},coverBackgroundSource:{},coverBackgroundSourceUrl:{},coverDate:{default:new Date().toLocaleDateString()}},setup(e){_();const{coverAuthor:t,coverAuthorUrl:l,coverBackgroundUrl:i}=e,s=d(()=>f(t)),$=d(()=>f(l)),S=d(()=>W(i,!0)),f=r=>Array.isArray(r)?r:r?[r]:[];return(r,Z)=>{const m=V;return o(),n("div",{class:"slidev-layout cover",style:D(S.value)},[a("div",w,[U(r.$slots,"default"),s.value.length||r.coverDate?(o(),n("div",I,[s.value.length?(o(),n("p",R,[(o(!0),n(p,null,x(s.value,(B,u)=>(o(),n(p,null,[v(m,{link:$.value[u],text:B},null,8,["link","text"]),u<s.value.length-2?(o(),n("span",E,", ")):c("v-if",!0),u===s.value.length-2?(o(),n("span",q," and ")):c("v-if",!0)],64))),256))])):c("v-if",!0),r.coverDate?(o(),n("p",H,h(s.value.length?`, ${r.coverDate}`:r.coverDate),1)):c("v-if",!0)])):c("v-if",!0),r.coverBackgroundSource?(o(),n("div",K,[v(m,{link:r.coverBackgroundSourceUrl,text:r.coverBackgroundSource},null,8,["link","text"])])):c("v-if",!0)])],4)}}}),G=a("head",null,[a("link",{rel:"stylesheet",href:"styles.css"})],-1),J=a("h2",null," Maximizing Failure Resistance of Periodic and Aperiodic Architected Materials ",-1),Q=a("h4",null,[a("u",null," Markus Tandrup Holm "),N(", Konstantinos Poulios, Niels Aage and Ole Sigmund ")],-1),X=a("h5",null," Department of Civil and Mechanical Engineering, Solid Mechanics, Technical University of Denmark",-1),Y=a("p",null," ICTAM 2024 ",-1),se={__name:"1",setup(e){return z(g),_(),(t,l)=>{const i=b;return o(),T(j,P(M(k(F)(k(g),0))),{default:C(()=>[G,J,Q,X,Y,v(i,{classNames:"text-gray-300"})]),_:1},16)}}};export{se as default};
