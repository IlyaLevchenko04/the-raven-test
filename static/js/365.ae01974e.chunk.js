"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[365],{365:(e,t,s)=>{s.r(t),s.d(t,{Route:()=>f});var r=s(614),l=s(359),a=s(490),c=s(554),n=s(579);const i=()=>(0,n.jsx)(c.w,{className:"bg-blue-01",children:(0,n.jsxs)(a.m,{className:"text-center",children:[(0,n.jsx)("h1",{className:(0,l.QP)("font-bold text-center mb-[12px]","text-[44px] leading-[1.2]","tablet:text-[54px]"),children:"Welcome to our store!"}),(0,n.jsx)("p",{children:"Check out our products."})]})});var o=s(43),d=s(3),x=s(182);const p="https://biostool.in.ua/wp-content/uploads/t-shirt-with-logo-1.jpg",m="https://moodle.com/wp-content/uploads/2021/06/22087-11.jpg";var u=s(892);const h=e=>{let{item:t}=e;const{onBuyClick:s}=(e=>{const t=(0,d.wA)(),s=(0,d.d4)((e=>e.cart.cart));return{onBuyClick:r=>{const{id:l}=r.target;s.map((e=>e._id)).includes(l)||(localStorage.setItem("cart",JSON.stringify([...s,{...e,quantity:1}])),t((0,u.bE)({...e,quantity:1})))},cart:s}})(t);return(0,n.jsxs)("li",{className:"flex flex-col gap-[16px] bg-light-04 p-[16px]",children:[(0,n.jsx)("img",{"aria-hidden":!0,className:" tablet-vertical:h-[600px] w-full",src:t.mainPhoto===p?m:t.mainPhoto,alt:""}),(0,n.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,n.jsx)("h3",{className:(0,l.QP)("font-semi-bold","text-[2.4rem] leading-[1.4]","tablet:text-[3rem]"),children:t.title}),(0,n.jsx)("p",{children:t.description}),(0,n.jsxs)("span",{className:"font-bold mx-auto",children:[t.price," ",t.currency]})]}),(0,n.jsx)("button",{className:"bg-brand hover:bg-orange-02 w-full tablet-vertical:w-[184px] text-white py-[12px] px-[8px] mx-auto ease-linear transition-all",id:t._id,onClick:s,children:"Buy"})]},t._id)};var b=s(437),g=s(425);const j=()=>{const e=(0,b.Z)(),t=(0,d.d4)((e=>e.products.items)),s=(0,d.d4)((e=>e.products.currency)),r=(0,d.d4)((e=>e.products.isLoading)),i=(0,d.d4)((e=>e.products.error.message)),p=(0,d.wA)();return(0,o.useEffect)((()=>{p((0,x.j)({limit:"6",page:"1",currency:s,filter:"DESC_PRICE"}))}),[p,s,t.length]),i&&e({to:g.W.serverError}),(0,n.jsx)(c.w,{children:(0,n.jsxs)(a.m,{children:[(0,n.jsx)("h2",{className:(0,l.QP)("mb-[20px] font-bold","text-[3.4rem] leading-[1.2]","tablet:text-[4.6rem]"),children:"Tranding"}),r?(0,n.jsx)("div",{className:"flex justify-center items-center h-fit",children:(0,n.jsx)("div",{className:"w-16 h-16 border-4 border-brand border-dashed rounded-full animate-spin"})}):(0,n.jsx)("ul",{className:"grid gap-[16px] tablet-vertical:grid-cols-2",children:t.map((e=>(0,n.jsx)(h,{item:e},e._id)))})]})})},f=(0,r.uV)("/")({component:function(){return(0,n.jsxs)("main",{children:[(0,n.jsx)(i,{}),(0,n.jsx)(j,{})]})}})},554:(e,t,s)=>{s.d(t,{w:()=>a});var r=s(359),l=s(579);const a=e=>(0,l.jsx)("section",{className:(0,r.QP)("tablet:py-[100px] py-[36px] flex flex-col",e.className),children:e.children})}}]);
//# sourceMappingURL=365.ae01974e.chunk.js.map