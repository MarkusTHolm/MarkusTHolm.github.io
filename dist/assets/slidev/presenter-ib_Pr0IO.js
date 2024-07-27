import{g as j,h as G,k as H,l as q}from"../modules/unplugin-icons-DPkF1knX.js";import{d as D,o,c,i as M,A as e,t as N,y as C,D as z,Q as A,N as J,J as Q,ag as K,a4 as O,b as k,e as t,l as s,k as g,h as F,g as U,x as X,F as Y,p as Z,a as ee}from"../modules/vue-DBzS7Ue0.js";import{a as te,u as se,h as oe,c as ne,d as ae,j as re,s as ie,k as le,l as ce,m as ue,n as de,o as _e,_ as pe}from"../index-CDrMje7a.js";import{r as me,u as fe,a as xe,S as ve,_ as he,G as ke,b as ge,c as ye,o as be}from"./useWakeLock-qsfAUnwQ.js";import{b as Ce,c as Se,a as I,S as we}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-G6s0Qgxx.js";import{_ as $e,C as Ne}from"./ClicksSlider-BNKdtW4S.js";import{_ as ze}from"./DrawingControls.vue_vue_type_style_index_0_lang-DhPUhUXj.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-DUVaYP3J.js";import"../modules/shiki-BbOIPA4y.js";import"./context-CTo19kId.js";const Fe=D({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(i){const l=i,{info:r}=Ce(l.no);return(u,m)=>{var f,x;return o(),c($e,{class:M(l.class),note:(f=e(r))==null?void 0:f.note,"note-html":(x=e(r))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),y=i=>(Z("data-v-f0da48d8"),i=i(),ee(),i),Ie={class:"bg-main h-full slidev-presenter"},Be=y(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),De={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Me={key:1,class:"h-full flex justify-center items-center"},Pe=y(()=>t("div",{class:"text-gray-500"}," End of the presentation ",-1)),Ee=[Pe],Re=y(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Te={key:0,class:"grid-section note of-auto"},Le={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ve={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom flex"},je=y(()=>t("div",{"flex-auto":""},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He={class:"progress-bar"},qe=D({__name:"presenter",setup(i){const l=N();me(),fe(l),xe();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:m,hasNext:f,nextRoute:x,slides:P,getPrimaryClicks:E,total:R}=te(),{isDrawing:T}=Se();se({title:`Presenter - ${ie}`}),N(!1);const{timer:L,resetTimer:S}=oe(),V=C(()=>P.value.map(h=>ne(h))),n=C(()=>r.value.current<r.value.total?[m.value,r.value.current+1]:f.value?[x.value,0]:null),v=C(()=>n.value&&V.value[n.value[0].no-1]);z(n,()=>{v.value&&n.value&&(v.value.current=n.value[1])},{immediate:!0});const w=A();return J(()=>{const h=l.value.querySelector("#slide-content"),d=Q(K()),b=O();z(()=>{if(!b.value||T.value||!re.value)return;const a=h.getBoundingClientRect(),_=(d.x-a.left)/a.width*100,p=(d.y-a.top)/a.height*100;if(!(_<0||_>100||p<0||p>100))return{x:_,y:p}},a=>{ae.cursor=a})}),(h,d)=>{var $;const b=j,a=G,_=H,p=q;return o(),k(Y,null,[t("div",Ie,[t("div",{class:M(["grid-container",`layout${e(le)}`])},[t("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[s(I,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(be)},{default:g(()=>[s(ve,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),c(Ne,{key:($=e(m))==null?void 0:$.no,"clicks-context":e(E)(e(m)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),t("div",De,[n.value&&v.value?(o(),c(I,{key:"next"},{default:g(()=>[(o(),c(we,{key:n.value[0].no,"clicks-context":v.value,route:n.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),k("div",Me,Ee)),Re]),w.value&&e(ce)?(o(),k("div",Te,[s(e(w))])):(o(),k("div",Le,[(o(),c(Fe,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:F({fontSize:`${e(ue)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),t("div",Ve,[s(B,{title:"Increase font size",onClick:e(de)},{default:g(()=>[s(b)]),_:1},8,["onClick"]),s(B,{title:"Decrease font size",onClick:e(_e)},{default:g(()=>[s(a)]),_:1},8,["onClick"]),U("v-if",!0)])])),t("div",We,[s(he,{persist:!0}),je,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:d[2]||(d[2]=(...W)=>e(S)&&e(S)(...W))},[s(_,{class:"absolute"}),s(p,{class:"absolute opacity-0"})]),t("div",Ge,X(e(L)),1)]),(o(),c(ze,{key:2}))],2),t("div",He,[t("div",{class:"progress h-3px bg-primary transition-all",style:F({width:`${(e(u)-1)/(e(R)-1)*100+1}%`})},null,4)])]),s(ke),s(ge),s(ye)],64)}}}),tt=pe(qe,[["__scopeId","data-v-f0da48d8"]]);export{tt as default};