import{d as C,y as s,t as f,ac as P,al as S,D as h,o as g,b as B,f as M}from"../modules/vue-C8Xe5Ac-.js";import{u as x}from"./context-jJoOXnsr.js";import{a as $,ak as w}from"../index-DjlutT7u.js";const A=["poster","controls"],b=C({__name:"SlidevVideo",props:{autoplay:{type:[Boolean,String]},autoreset:{},poster:{},printPoster:{},timestamp:{},printTimestamp:{},controls:{type:Boolean}},setup(y){const e=y,l=s(()=>e.printPoster??e.poster),u=s(()=>e.printTimestamp??e.timestamp??0),{$slidev:r,$renderContext:k,$route:i}=x(),{isPrintMode:T}=$(),n=s(()=>T.value||!["slide","presenter"].includes(k.value)),o=f(),p=f(!1);P(()=>{if(n.value)return;const a=+(e.timestamp??0);o.value.currentTime=a;const t=s(()=>!!i&&i.no===(r==null?void 0:r.nav.currentSlideNo)),c=s(()=>{var d,v;return!!o.value&&(((v=(d=w.get(o.value))==null?void 0:d.isShown)==null?void 0:v.value)??!0)}),m=S(t,c);h(m,()=>{m.value?(e.autoplay===!0||e.autoplay==="once"&&!p.value)&&o.value.play():(o.value.pause(),(e.autoreset==="click"||e.autoreset==="slide"&&!t.value)&&(o.value.currentTime=a))},{immediate:!0})});function _(a){const t=a.target;n.value&&(!l.value||e.printTimestamp)&&(t.currentTime=u.value==="last"?t.duration:+u.value)}return(a,t)=>(g(),B("video",{ref_key:"video",ref:o,poster:n.value?l.value:e.poster,controls:!n.value&&e.controls,onPlay:t[0]||(t[0]=c=>p.value=!0),onLoadedmetadata:_},[M(a.$slots,"default")],40,A))}});export{b as _};
