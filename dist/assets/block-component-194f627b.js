import{u as r,r as t,j as a,b as l}from"./index-11bd9f27.js";import{d as c,_ as m,p as s}from"./prism-ba673faa.js";import{m as d}from"./motion-a854688c.js";const h=()=>{const[p,o]=r(l),[n,i]=t.useState(c`function Rickroll() {
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
    }

    const RickrollBlock = block(Rickroll)`);return t.useEffect(()=>{o(()=>"bg-white")},[]),a(d.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{ease:"easeInAndOut",type:"spring",stiffness:260,damping:20},className:"text-5xl text-center flex justify-center items-center gap-5 leading-normal",children:a(m,{value:n,onValueChange:e=>i(e),highlight:e=>s.highlight(e,s.languages.js),padding:5,className:"font-mono text-2xl","data-line":"1"})})};export{h as default};
