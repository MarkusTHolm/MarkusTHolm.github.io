import{d as u,y as p,o as i,b as _,e as c,f as m,h as f,c as v,k as $,q as g,s as h,A as n}from"./modules/vue-DBzS7Ue0.js";import{u as l,f as x}from"./slidev/context-B08TzZuj.js";import"./index-DULTqrlS.js";import"./modules/shiki-BbOIPA4y.js";const k="/assets/Slide1-CMqUDPsc.png";function a(e){return e.startsWith("/")?"/"+e.slice(1):e}function y(e,o=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${a(e)})`:`url("${a(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const C={class:"my-auto w-full"},b=u({__name:"cover",props:{background:{default:""}},setup(e){l();const o=e,s=p(()=>y(o.background,!0));return(t,r)=>(i(),_("div",{class:"slidev-layout cover",style:f(s.value)},[c("div",C,[m(t.$slots,"default")])],4))}}),B=c("img",{src:k,style:{position:"fixed",top:"0px",right:"0px",width:"5000px"}},null,-1),P={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:t,$clicks:r,$page:S,$renderContext:w,$frontmatter:d}=l();return t.setup(),(z,q)=>(i(),v(b,g(h(n(x)(n(d),0))),{default:$(()=>[B]),_:1},16))}},E=P;export{E as default};