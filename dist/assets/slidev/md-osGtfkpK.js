import{d as S,z as i,t as g,O as w,am as N,E as z,o as v,b as T,f as B,e as m,h as M,c as R,k as x,l as V,q as A,s as E,B as P}from"../modules/vue-BRcEHDMA.js";import{u as f,f as L}from"./context-BlCp8oQD.js";import{a as O,aa as q}from"../index-yFmvH5fj.js";import"../modules/shiki-B5vHhcwf.js";const D=["poster","controls"],I=S({__name:"SlidevVideo",props:{autoplay:{type:[Boolean,String]},autoreset:{},poster:{},printPoster:{},timestamp:{},printTimestamp:{},controls:{type:Boolean}},setup(t){const e=t,a=i(()=>e.printPoster??e.poster),o=i(()=>e.printTimestamp??e.timestamp??0),{$slidev:n,$renderContext:_,$route:p}=f(),{isPrintMode:d}=O(),u=i(()=>d.value||!["slide","presenter"].includes(_.value)),s=g(),c=g(!1);w(()=>{if(u.value)return;const l=+(e.timestamp??0);s.value.currentTime=l;const r=i(()=>!!p&&p.no===(n==null?void 0:n.nav.currentSlideNo)),y=i(()=>{var k,h;return!!s.value&&(((h=(k=q.get(s.value))==null?void 0:k.isShown)==null?void 0:h.value)??!0)}),$=N(r,y);z($,()=>{$.value?(e.autoplay===!0||e.autoplay==="once"&&!c.value)&&s.value.play():(s.value.pause(),(e.autoreset==="click"||e.autoreset==="slide"&&!r.value)&&(s.value.currentTime=l))},{immediate:!0})});function b(l){const r=l.target;u.value&&(!a.value||e.printTimestamp)&&(r.currentTime=o.value==="last"?r.duration:+o.value)}return(l,r)=>(v(),T("video",{ref_key:"video",ref:s,poster:u.value?a.value:e.poster,controls:!u.value&&e.controls,onPlay:r[0]||(r[0]=y=>c.value=!0),onLoadedmetadata:b},[B(l.$slots,"default")],40,D))}}),U="/assets/SaveTheDate-BX2mTNuP.mp4";function C(t){return t.startsWith("/")?"/"+t.slice(1):t}function W(t,e=!1){const a=t&&["#","rgb","hsl"].some(n=>t.indexOf(n)===0),o={background:a?t:void 0,color:t&&!a?"white":void 0,backgroundImage:a?void 0:t?e?`linear-gradient(#0005, #0008), url(${C(t)})`:`url("${C(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const X={class:"my-auto w-full"},j=S({__name:"cover",props:{background:{default:""}},setup(t){f();const e=t,a=i(()=>W(e.background,!0));return(o,n)=>(v(),T("div",{class:"slidev-layout cover",style:M(a.value)},[m("div",X,[B(o.$slots,"default")])],4))}}),F={style:{position:"relative",top:"-70px",left:"50px",display:"table"}},G={__name:"slides.md__slidev_1",setup(t){const{$slidev:e,$nav:a,$clicksContext:o,$clicks:n,$page:_,$renderContext:p,$frontmatter:d}=f();return o.setup(),(u,s)=>{const c=I;return v(),R(j,A(E(P(L)(P(d),0))),{default:x(()=>[m("figure",F,[V(c,{muted:"",autoreset:"click",autoplay:"",style:{position:"relative",top:"60px",left:"-55px",width:"2500px"}},{default:x(()=>s[0]||(s[0]=[m("source",{src:U,type:"video/mp4"},null,-1)])),_:1})])]),_:1},16)}}},Y=G;export{Y as default};
