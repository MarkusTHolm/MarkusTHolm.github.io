import{d as L,t as N,aA as $,ac as E,y as w,C as I,o as d,b as A,f as o,e as s,i as h,c as K,k as x,l as U,m as B,q as M,s as T,A as q}from"../modules/vue-C2jV4Qir.js";import{r as C,ac as W,ad as H,C as R,ae as D,af as O,_ as j,ag as k}from"../index-BoPNmaNm.js";import{u as S,p as F,f as G}from"./context-Cr1Ba_sh.js";import"../modules/shiki-D75n1TGG.js";function X(e,a){if(!a||a==="all"||a==="*")return C(1,e+1);if(a==="none")return[];const l=[];for(const t of a.split(/[,;]/g))if(!t.includes("-"))l.push(+t);else{const[m,n]=t.split("-",2);l.push(...C(+m,n?+n+1:e+1))}return W(l).filter(t=>t<=e).sort((t,m)=>t-m)}const J=L({__name:"KaTexBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},at:{type:[String,Number],default:"+1"}},setup(e){const a=e,{$clicksContext:l}=S(),t=N(),m=H();return $(()=>{l.unregister(m)}),E(()=>{var f;if(!l||!((f=a.ranges)!=null&&f.length))return;const n=l.calculateSince(a.at,a.ranges.length-1);l.register(m,n);const g=w(()=>n?Math.max(0,l.current-n.start+1):R),v=w(()=>a.finally==="last"?a.ranges.at(-1):a.finally.toString());I(()=>{if(!t.value)return;let u=a.ranges[g.value]??v.value;const b=u==="hide";t.value.classList.toggle(D,b),b&&(u=a.ranges[g.value+1]??v.value);const _=t.value.querySelectorAll(".mtable > [class*=col-align]");if(!_)return;const V=Array.from(_).map(r=>Array.from(r.querySelectorAll(":scope > .vlist-t > .vlist-r > .vlist > span > .mord"))),p=[];for(const r of V)r.forEach((c,i)=>{c&&(Array.isArray(p[i])?p[i].push(c):p[i]=[c])});const z=a.startLine,P=X(p.length+z-1,u);p.forEach((r,c)=>{const i=P.includes(c+z);r.forEach(y=>{y.classList.toggle(O,!0),y.classList.toggle("highlighted",i),y.classList.toggle("dishonored",!i)})})})}),(n,g)=>(d(),A("div",{ref_key:"el",ref:t,class:"slidev-katex-wrapper"},[o(n.$slots,"default")],512))}}),Q={class:"col-header"},Y=L({__name:"two-cols-header",props:{class:{type:String},layoutClass:{type:String}},setup(e){const a=e;return(l,t)=>(d(),A("div",{class:h(["slidev-layout two-cols-header w-full h-full",e.layoutClass])},[s("div",Q,[o(l.$slots,"default",{},void 0,!0)]),s("div",{class:h(["col-left",a.class])},[o(l.$slots,"left",{},void 0,!0)],2),s("div",{class:h(["col-right",a.class])},[o(l.$slots,"right",{},void 0,!0)],2),s("div",{class:h(["col-bottom",a.class])},[o(l.$slots,"bottom",{},void 0,!0)],2)],2))}}),Z=j(Y,[["__scopeId","data-v-27a75e64"]]),ss=s("h1",null,"Optimization problem (single)",-1),as=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("munder",null,[s("mrow",null,[s("mi",null,"max"),s("mo",null,"⁡")]),s("mi",{mathvariant:"bold"},"x")]),s("mspace",{width:"1em"})])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("msub",null,[s("mi",null,"W"),s("mi",null,"f")]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"2")]),s("msup",null,[s("mi",null,"λ"),s("mn",null,"2")]),s("mi",null,"U"),s("msub",null,[s("mi",null,"P"),s("mn",null,"0")])])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})]),s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mtext",null,"s.t."),s("mspace",{width:"1em"})])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mi",{mathvariant:"bold"},"K"),s("mi",{mathvariant:"bold"},"u"),s("mo",null,"="),s("mi",{mathvariant:"bold"},"f"),s("mo",{separator:"true"},",")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})]),s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mspace",{width:"1em"})])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("msub",null,[s("mi",null,"g"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"s"),s("mi",null,"o")])]),s("mo",{stretchy:"false"},"("),s("msubsup",null,[s("mi",{mathvariant:"bold"},"C"),s("mrow",null,[s("mi",null,"U"),s("mi",null,"C")]),s("mi",null,"H")]),s("mo",{stretchy:"false"},")"),s("mo",null,"≤"),s("mn",null,"0"),s("mo",{separator:"true"},",")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})]),s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mspace",{width:"1em"})])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mfrac",null,[s("mi",null,"V"),s("mrow",null,[s("msub",null,[s("mi",null,"V"),s("mn",null,"0")]),s("msup",null,[s("mi",null,"V"),s("mo",null,"∗")])])]),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"≤"),s("mn",null,"0"),s("mo",{separator:"true"},",")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})]),s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mspace",{width:"1em"})])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("msub",null,[s("mi",null,"x"),s("mi",null,"min"),s("mo",null,"⁡")]),s("mo",null,"≤"),s("msup",null,[s("mi",null,"x"),s("mi",null,"e")]),s("mo",null,"≤"),s("msub",null,[s("mi",null,"x"),s("mi",null,"max"),s("mo",null,"⁡")]),s("mspace",{width:"1em"}),s("mi",null,"e"),s("mo",null,"="),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mo",null,"…"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"N"),s("mi",null,"e")]),s("mo",{separator:"true"},",")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})])]),s("annotation",{encoding:"application/x-tex"},"\\begin{align} \\max_{\\mathbf{x}} \\quad & W_f = \\frac{1}{2} \\lambda^2 U P_0 \\\\ \\text{s.t.} \\quad & \\mathbf{K} \\mathbf{u} = \\mathbf{f}, \\\\ \\quad & g_{iso}(\\mathbf{C}^H_{UC}) \\leq 0, \\\\ \\quad & \\frac{V}{V_0 V^\\ast} - 1 \\leq 0, \\\\ \\quad & x_{\\min} \\leq x^e \\leq x_{\\max} \\quad e = 1,\\dots,N_e, \\end{align} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"9.3691em","vertical-align":"-4.4346em"}}),s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.9346em"}},[s("span",{style:{top:"-6.9734em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.4306em"}},[s("span",{style:{top:"-2.4em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathbf mtight"},"x")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},"max")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"1em"}})])]),s("span",{style:{top:"-5.1334em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"s.t.")]),s("span",{class:"mspace",style:{"margin-right":"1em"}})])]),s("span",{style:{top:"-3.5821em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"1em"}})])]),s("span",{style:{top:"-1.5618em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"1em"}})])]),s("span",{style:{top:"0.4142em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"1em"}})])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.4346em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.9346em"}},[s("span",{style:{top:"-6.9734em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"W"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10764em"}},"f")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"λ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-5.1334em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mord mathbf"},"Ku"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathbf",style:{"margin-right":"0.10903em"}},"f"),s("span",{class:"mpunct"},",")])]),s("span",{style:{top:"-3.5821em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mord mathnormal mtight"},"so")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8913em"}},[s("span",{style:{top:"-2.453em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07153em"}},"C")])])]),s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.08125em"}},"H")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.247em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},",")])]),s("span",{style:{top:"-1.5618em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6147em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"∗")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.836em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},",")])]),s("span",{style:{top:"0.4142em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3175em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mop mtight"},[s("span",{class:"mtight"},"m"),s("span",{class:"mtight"},"i"),s("span",{class:"mtight"},"n")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"e")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mop mtight"},[s("span",{class:"mtight"},"m"),s("span",{class:"mtight"},"a"),s("span",{class:"mtight"},"x")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"1em"}}),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"…"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"e")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},",")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.4346em"}},[s("span")])])])])])]),s("span",{class:"tag"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.9346em"}},[s("span",{style:{top:"-6.9734em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"eqn-num"})]),s("span",{style:{top:"-5.1334em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"eqn-num"})]),s("span",{style:{top:"-3.5821em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"eqn-num"})]),s("span",{style:{top:"-1.5618em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"eqn-num"})]),s("span",{style:{top:"0.4142em"}},[s("span",{class:"pstrut",style:{height:"3.3603em"}}),s("span",{class:"eqn-num"})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"4.4346em"}},[s("span")])])])])])])])],-1),ms={__name:"4",setup(e){return F(k),S(),(a,l)=>{const t=J;return d(),K(Z,M(T(q(G)(q(k),3))),{default:x(()=>[ss,U(t,B({},{ranges:[]}),{default:x(()=>[as]),_:1},16)]),_:1},16)}}};export{ms as default};