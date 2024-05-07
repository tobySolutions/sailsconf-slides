import{u as c,r as s,j as n,a as p,b as d}from"./index-11bd9f27.js";import{d as l,_ as r,p as t}from"./prism-ba673faa.js";import{m}from"./motion-a854688c.js";const y=[()=>{const[u,i]=c(d),[o,g]=s.useState(l`function Rickroll() {
      if (Math.random() > 0.5) {
        return (
          <p>Unless you're <b>Angular.js</b></p>
        );
      }
      return (
        <div>
          <img src="/rickroll.gif" />
          Never gonna give you up
        </div>
      );
    }`);return s.useEffect(()=>{i(()=>"bg-white")},[]),n(m.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{ease:"easeInAndOut",type:"spring",stiffness:260,damping:20},className:"text-5xl text-center flex flex-col justify-center items-center gap-5 leading-normal",children:n(r,{value:o,onValueChange:a=>g(a),highlight:a=>t.highlight(a,t.languages.js),padding:5,className:"font-mono text-2xl","data-line":"1"})})},()=>{const[u,i]=c(d),[o,g]=s.useState(l`<div>
        <img src="/rickroll.gif" />
        Never gonna give you up
      </div>`),[a,h]=s.useState(l`<p>Unless you're <b>Angular.js</b></p>`);return s.useEffect(()=>{i(()=>"bg-white")},[]),p(m.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{ease:"easeInAndOut",type:"spring",stiffness:260,damping:20},className:"text-5xl text-center flex justify-center items-center gap-5 leading-normal",children:[n(r,{value:o,onValueChange:e=>setCode(e),highlight:e=>t.highlight(e,t.languages.js),padding:5,className:"font-mono text-2xl","data-line":"1"}),n("p",{children:"🔜"}),n(r,{value:a,onValueChange:e=>setCode(e),highlight:e=>t.highlight(e,t.languages.js),padding:5,className:"font-mono text-2xl","data-line":"1"})]})}];export{y as default};
