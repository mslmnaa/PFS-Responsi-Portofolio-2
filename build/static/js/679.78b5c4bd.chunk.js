"use strict";(self.webpackChunkportofolio_responsi_3=self.webpackChunkportofolio_responsi_3||[]).push([[679],{8679:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var r=a(5043);let s={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=c(i,t?t.replace(/([^,])+/g,(e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},m=(e,t,a,r,s)=>{let o=u(e),m=d[o]||(d[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!d[m]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=i.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[m]=c(s?{["@keyframes "+m]:t}:t,a?"":"."+m)}let p=a&&d.g?d.g:null;return a&&(d.g=d[m]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[m],t,r,p),m};function p(e){let t=this||{},a=e.call?e(t.p):e;return m(a.unshift?a.raw?((e,t,a)=>e.reduce(((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==o?"":o)}),""))(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,o(t.target),t.g,t.o,t.k)}p.bind({g:1});let g,f,h,y=p.bind({k:1});function b(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:f&&f()},n),a.o=/ *go\d+/.test(l),n.className=p.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),h&&c[0]&&h(n),g(c,n)}return t?t(s):s}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,v=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),j=new Map,N=e=>{if(j.has(e))return;let t=setTimeout((()=>{j.delete(e),z({type:4,toastId:e})}),1e3);j.set(e,t)},E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=j.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?E(e,{type:1,toast:a}):E(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?N(r):e.toasts.forEach((e=>{N(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+s})))}}},$=[],k={toasts:[],pausedAt:void 0},z=e=>{k=E(k,e),$.forEach((e=>{e(k)}))},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=e=>(t,a)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",a=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||v()}}(t,e,a);return z({type:2,toast:r}),r.id},O=(e,t)=>M("blank")(e,t);O.error=M("error"),O.success=M("success"),O.loading=M("loading"),O.custom=M("custom"),O.dismiss=e=>{z({type:3,toastId:e})},O.remove=e=>z({type:4,toastId:e}),O.promise=(e,t,a)=>{let r=O.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(O.success(x(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{O.error(x(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var A=(e,t)=>{z({type:1,toast:{id:e,height:t}})},D=()=>{z({type:5,time:Date.now()})},I=e=>{let{toasts:t,pausedAt:a}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,r.useState)(k);(0,r.useEffect)((()=>($.push(a),()=>{let e=$.indexOf(a);e>-1&&$.splice(e,1)})),[t]);let s=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||C[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:s}}(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>O.dismiss(t.id)),a);t.visible&&O.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let s=(0,r.useCallback)((()=>{a&&z({type:6,time:Date.now()})}),[a]),o=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),n=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<n&&e.visible)).length;return i.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+s),0)}),[t]);return{toasts:t,handlers:{updateHeight:A,startPause:D,endPause:s,calculateOffset:o}}},S=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,P=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${P} 1s linear infinite;
`,_=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=b("div")`
  position: absolute;
`,R=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=e=>{let{toast:t}=e,{icon:a,type:s,iconTheme:o}=t;return void 0!==a?"string"==typeof a?r.createElement(V,null,a):a:"blank"===s?null:r.createElement(R,null,r.createElement(q,{...o}),"loading"!==s&&r.createElement(B,null,"error"===s?r.createElement(L,{...o}):r.createElement(H,{...o})))},Z=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,K=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=r.memo((e=>{let{toast:t,position:a,style:s,children:o}=e,i=t.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(a),J(a)];return{animation:t?`${y(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||a||"top-center",t.visible):{opacity:0},n=r.createElement(G,{toast:t}),l=r.createElement(Q,{...t.ariaProps},x(t.message,t));return r.createElement(K,{className:t.className,style:{...i,...s,...t.style}},"function"==typeof o?o({icon:n,message:l}):r.createElement(r.Fragment,null,n,l))}));!function(e,t,a,r){c.p=t,g=e,f=a,h=r}(r.createElement);var X=e=>{let{id:t,className:a,style:s,onHeightUpdate:o,children:i}=e,n=r.useCallback((e=>{if(e){let a=()=>{let a=e.getBoundingClientRect().height;o(t,a)};a(),new MutationObserver(a).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return r.createElement("div",{ref:n,className:a,style:s},i)},ee=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,te=e=>{let{reverseOrder:t,position:a="top-center",toastOptions:s,gutter:o,children:i,containerStyle:n,containerClassName:l}=e,{toasts:c,handlers:d}=I(s);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let s=e.position||a,n=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...s}})(s,d.calculateOffset(e,{reverseOrder:t,gutter:o,defaultPosition:a}));return r.createElement(X,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?ee:"",style:n},"custom"===e.type?x(e.message,e):i?i(e):r.createElement(W,{toast:e,position:s}))})))},ae=O,re=a(579);const se=function(e){let{isDarkMode:t}=e;const[a,s]=(0,r.useState)({name:"",email:"",message:""}),[o,i]=(0,r.useState)({show:!1,type:"",message:""}),[n,l]=(0,r.useState)(!1),c=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=()=>{if("#contact"===window.location.hash){var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),l(!0);const t=setTimeout((()=>{l(!0)}),100);return()=>clearTimeout(t)}};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}}),[]),(0,r.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting?l(!0):l(!1)}),{threshold:.1});return c.current&&e.observe(c.current),()=>{c.current&&e.unobserve(c.current)}}),[]);const d=(e,t)=>{i({show:!0,type:e,message:t}),setTimeout((()=>{i({show:!1,type:"",message:""})}),3e3)};return(0,re.jsxs)("section",{ref:c,id:"contact",className:`min-h-screen py-20 mt-0 ${t?"bg-gray-800 text-white":"bg-gray-100 text-gray-900"} \n      ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} \n      transition-all duration-700 ease-out`,children:[(0,re.jsx)(te,{position:"top-right",reverseOrder:!1}),(0,re.jsxs)("div",{className:"container mx-auto ",children:[(0,re.jsx)("h2",{className:`text-3xl font-bold text-center mb-4 \n          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}\n          transition-all duration-700 delay-200 ease-out`,children:"Get in Touch"}),(0,re.jsx)("p",{className:`text-center text-lg mb-8 \n          ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}\n          transition-all duration-700 delay-300 ease-out`,children:"Feel free to drop a message."}),o.show&&(0,re.jsx)("div",{className:"max-w-2xl mx-auto mb-4 p-4 rounded-lg "+("success"===o.type?"bg-green-100 border border-green-400 text-green-700":"bg-red-100 border border-red-400 text-red-700"),role:"alert",children:(0,re.jsxs)("div",{className:"flex",children:[(0,re.jsx)("div",{className:"py-1",children:(0,re.jsx)("svg",{className:`fill-current h-6 w-6 ${"success"===o.type?"text-green-500":"text-red-500"} mr-4`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:"success"===o.type?(0,re.jsx)("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}):(0,re.jsx)("path",{d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"})})}),(0,re.jsxs)("div",{children:[(0,re.jsx)("p",{className:"font-bold",children:"success"===o.type?"Success!":"Error!"}),(0,re.jsx)("p",{className:"text-sm",children:o.message})]})]})}),(0,re.jsx)("div",{className:`max-w-2xl mx-auto p-6 rounded-lg shadow-md ${t?"bg-gray-700 text-white":"bg-white text-gray-900"} ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}\n          transition-all duration-700 delay-500 ease-out`,children:(0,re.jsxs)("form",{onSubmit:e=>(e.preventDefault(),a.name.trim()?a.email.trim()?a.message.trim()?(s({name:"",email:"",message:""}),ae.success("Your message has been sent!"),void d("success","Your message has been sent successfully!")):(ae.error("Message is required!"),void d("danger","Message is required!")):(ae.error("Email is required!"),void d("danger","Email is required!")):(ae.error("Name is required!"),void d("danger","Name is required!"))),children:[(0,re.jsxs)("div",{className:"mb-4",children:[(0,re.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium mb-1 "+(t?"text-gray-300":"text-gray-700"),children:"Name"}),(0,re.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",value:a.name,onChange:e=>s({...a,name:e.target.value}),className:"w-full p-2 border rounded-lg focus:outline-none focus:ring "+(t?"bg-gray-800 border-gray-600 text-white focus:ring-blue-500":"bg-white border-gray-300 text-gray-900 focus:ring-blue-500")})]}),(0,re.jsxs)("div",{className:"mb-4",children:[(0,re.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-1 "+(t?"text-gray-300":"text-gray-700"),children:"Email"}),(0,re.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",value:a.email,onChange:e=>s({...a,email:e.target.value}),className:"w-full p-2 border rounded-lg focus:outline-none focus:ring "+(t?"bg-gray-800 border-gray-600 text-white focus:ring-blue-500":"bg-white border-gray-300 text-gray-900 focus:ring-blue-500")})]}),(0,re.jsxs)("div",{className:"mb-4",children:[(0,re.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium mb-1 "+(t?"text-gray-300":"text-gray-700"),children:"Message"}),(0,re.jsx)("textarea",{id:"message",name:"message",placeholder:"Your Message",rows:"5",value:a.message,onChange:e=>s({...a,message:e.target.value}),className:"w-full p-2 border rounded-lg focus:outline-none focus:ring "+(t?"bg-gray-800 border-gray-600 text-white focus:ring-blue-500":"bg-white border-gray-300 text-gray-900 focus:ring-blue-500")})]}),(0,re.jsx)("button",{type:"submit",className:"w-full py-2 px-4 rounded-lg hover:bg-blue-600 transition-all bg-blue-500 text-white",children:"Send Message"})]})})]})]})}}}]);
//# sourceMappingURL=679.78b5c4bd.chunk.js.map