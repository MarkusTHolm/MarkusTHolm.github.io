const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-C70zi6ed.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Dhk_QJV0.js","assets/modules/unplugin-icons-Bpc2-LqC.js","assets/modules/vue-NwlJlkHw.js","assets/modules/shiki-BQUq1_PL.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DJkGm6JZ.js","assets/index-CidP_7rs.js","assets/index-BL2l3P3s.css","assets/slidev/context-DMFv2KyV.js","assets/DrawingPreview-eFkihJlH.css","assets/slidev/useWakeLock-Bfh-KcWG.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-fLudVpAC.js","assets/useWakeLock-H454Y214.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,o,c as u,B as e,b as f,e as l,f as N,i as C,g as i,ai as R,z as E,k as h,aj as $,aa as B,R as y,l as m,F as M,x as D,v as W,h as A,t as H}from"../modules/vue-NwlJlkHw.js";import{v as k,a as P,w as I,x as b,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as j}from"../index-CidP_7rs.js";import{b as F,G,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-Bfh-KcWG.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DJkGm6JZ.js";import{n as oe}from"../modules/unplugin-icons-Bpc2-LqC.js";import"../modules/shiki-BQUq1_PL.js";import"./IconButton.vue_vue_type_script_setup_true_lang-fLudVpAC.js";import"./context-DMFv2KyV.js";const se="/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:r}){const a=p,n=z(a,"modelValue",r);function d(){n.value=!1}return(_,s)=>(o(),u(R,null,[e(n)?(o(),f("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):i("v-if",!0)],1024))}}),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),B("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:r}){const n=z(p,"modelValue",r),d=E(()=>typeof k.info=="string");return(_,s)=>(o(),u(ne,{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=c=>$(n)?n.value=c:null),class:"px-6 py-4"},{default:h(()=>[l("div",le,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ie)):i("v-if",!0),re])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(p){const{isEmbedded:r}=P(),a=!k.drawings.presenterOnly&&!r.value,t=y();a&&I(()=>import("./DrawingControls-C70zi6ed.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>t.value=_.default);const n=y(),d=y();return(_,s)=>(o(),f(M,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):i("v-if",!0),m(F),m(G),n.value?(o(),u(e(n),{key:1})):i("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(k).info?(o(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),m(K)],64))}}),ce=v({__name:"PrintStyle",setup(p){function r(a,{slots:t}){if(t.default)return W("style",t.default())}return(a,t)=>(o(),u(r,null,{default:h(()=>[B(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),me={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(p){return(r,a)=>{const t=oe;return e(V).cursor?(o(),f("div",me,[m(t,{class:"absolute stroke-white dark:stroke-black",style:A({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),_e=l("div",{id:"twoslash-container"},null,-1),we=v({__name:"play",setup(p){const{next:r,prev:a,isPrintMode:t}=P(),{isDrawing:n}=ee(),d=H();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}X(d),Y(),q();const s=E(()=>O.value||S.value),c=y();return(g,x)=>(o(),f(M,null,[e(t)?(o(),u(ce,{key:0})):i("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:h(()=>[m(J,{"render-context":"slide"}),m(pe)]),controls:h(()=>[e(t)?i("v-if",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(n)?"pointer-events-none":""]])},[m(Q,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),u(de,{key:1})),_e],64))}});export{we as default};
