"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[536],{536:(e,t,r)=>{r.r(t),r.d(t,{Route:()=>b});var s=r(614),a=r(359),n=r(3),l=r(490),i=r(554),c=r(892),x=r(43),m=r(665),o=r(437),d=r(425);const p={name:"",phone:"",surname:""},h=()=>{const[e,t]=(0,x.useState)(p),r=(0,o.Z)(),s=m.z.object({name:m.z.string().min(1,{message:"Name is required"}),surname:m.z.string().min(1,{message:"Surname is required"}),phone:m.z.string().regex(/^\+?\d[\d\s-]{8,14}$/,{message:"Invalid phone number"})}).required(),a=(0,n.wA)();return{onSubmit:e=>{e.preventDefault(),t(p);const n=e.target,l=n.elements.namedItem("name"),i=n.elements.namedItem("surname"),x=n.elements.namedItem("phone"),m=l.value.trim(),o=i.value.trim(),h=x.value.trim(),u=(r=>{try{return s.parse(r),!0}catch(e){const s={name:"",surname:"",phone:""};return e.issues.forEach((e=>{const t=e.path[0],r=e.message;s[t]=r})),t(s),!1}})({name:m,surname:o,phone:h});if(!u)return;const f={name:m,surname:o,phone:h};console.log(f),localStorage.removeItem("cart"),a((0,c.sX)()),r({to:d.W.thanks})},errors:e}};var u=r(579);const f=()=>{const{onSubmit:e,errors:t}=h();return(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:(0,a.QP)("mb-[16px] font-bold","text-[2rem] leading-[1.4]","tablet:text-[2.2rem]"),children:"Create your order"}),(0,u.jsxs)("form",{className:"flex flex-col gap-[16px]",id:"cart-form",onSubmit:e,children:[(0,u.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name"}),(0,u.jsx)("input",{placeholder:"Name",type:"text",id:"name",className:"border-[1px] border-light-01 px-[8px] py-[4px]"}),t.name&&(0,u.jsx)("p",{children:t.name})]}),(0,u.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,u.jsx)("label",{htmlFor:"surname",children:"Surname"}),(0,u.jsx)("input",{placeholder:"Surname",type:"text",id:"surname",className:"border-[1px] border-light-01 px-[8px] py-[4px]"}),t.surname&&(0,u.jsx)("p",{children:t.surname})]}),(0,u.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,u.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,u.jsx)("input",{placeholder:"Phone",type:"number",id:"phone",className:"border-[1px] border-light-01 px-[8px] py-[4px]"}),t.phone&&(0,u.jsx)("p",{children:t.phone})]}),(0,u.jsx)("button",{type:"submit",className:"w-full bg-dark-01 px-[8px] py-[12px] text-white hover:shadow-left-shadow-black-button ease-linear transition-all",children:"Create order"})]})]})},g=()=>{const e=(0,n.d4)((e=>e.cart.cart)),t=(0,n.d4)((e=>e.products.currency)),r=(0,n.wA)(),s=t=>{const{id:s}=t.target,a=e.map((e=>e._id!==s?e:{...e,quantity:e.quantity+1}));localStorage.setItem("cart",JSON.stringify(a)),r((0,c.Om)({type:"plus",id:s}))},x=t=>{const{id:s}=t.target;r((0,c.Om)({type:"minus",id:s}));const a=e.map((e=>e._id!==s?e:{...e,quantity:e.quantity-1})).filter((e=>(null===e||void 0===e?void 0:e.quantity)>0));e.map((e=>e._id)).includes(s)||localStorage.setItem("cart",JSON.stringify(e.filter((e=>e._id!==s)))),localStorage.setItem("cart",JSON.stringify(a))};return(0,u.jsx)(i.w,{children:(0,u.jsxs)(l.m,{children:[(0,u.jsx)("h2",{className:(0,a.QP)("mb-[20px] font-bold","text-[3.4rem] leading-[1.2]","tablet:text-[4.6rem]"),children:"Cart"}),e.length>0?(0,u.jsxs)("div",{className:"flex gap-[28px] flex-col tablet-vertical:flex-row",children:[(0,u.jsxs)("div",{className:"flex flex-col gap-[20px] grow",children:[(0,u.jsx)("ul",{className:"flex flex-col gap-[20px]",children:e.map((e=>(0,u.jsxs)("li",{className:"bg-light-04 px-[16px] py-[20px] flex justify-between",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:e.title}),(0,u.jsxs)("span",{children:[e.price," ",e.currency]})]}),(0,u.jsxs)("div",{className:"flex gap-[12px] items-center",children:[(0,u.jsx)("button",{className:"w-[48px] h-[48px] text-white font-bold bg-light-01 flex justify-center items-center hover:bg-white hover:text-dark-01 ease-linear transition-all",onClick:x,id:e._id,children:"-"}),(0,u.jsx)("span",{className:"text-default-text font-bold text-center",children:e.quantity}),(0,u.jsx)("button",{className:"w-[48px] h-[48px] text-white font-bold bg-light-01 flex justify-center items-center hover:bg-white hover:text-dark-01 ease-linear transition-all",onClick:s,id:e._id,children:"+"})]})]},e._id)))}),e.length>0&&(0,u.jsxs)("p",{className:(0,a.QP)("text-[2rem] leading-[1.4]","tablet:text-[2.2rem]"),children:["Total:"," ",e.reduce(((e,t)=>e+=t.quantity*t.price),0)," ",t]})]}),(0,u.jsx)(f,{})]}):(0,u.jsx)("div",{className:"flex justify-center items-center h-[300px]",children:(0,u.jsx)("p",{className:(0,a.QP)("text-[2rem] leading-[1.4]","tablet:text-[2.2rem]"),children:"No items in your cart"})})]})})},b=(0,s.uV)("/cart")({component:function(){return(0,u.jsx)("main",{children:(0,u.jsx)(g,{})})}})},554:(e,t,r)=>{r.d(t,{w:()=>n});var s=r(359),a=r(579);const n=e=>(0,a.jsx)("section",{className:(0,s.QP)("tablet:py-[100px] py-[36px] flex flex-col",e.className),children:e.children})}}]);
//# sourceMappingURL=536.b5c97611.chunk.js.map