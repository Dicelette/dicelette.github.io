"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[299],{36030:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"usage/message","title":"Sending message","description":"This bot detects dice notation and sends the result using three methods:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/usage/message.md","sourceDirName":"usage","slug":"/usage/message","permalink":"/en/docs/usage/message","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/usage/message.md","tags":[],"version":"current","frontMatter":{"title":"Sending message"},"sidebar":"commands","previous":{"title":"Game Master Dice","permalink":"/en/docs/usage/mj_dice"}}');var i=n(74848),c=n(28453);const l={title:"Sending message"},d=void 0,r={},o=[];function a(e){const s={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"This bot detects dice notation and sends the result using three methods:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Direct Notation"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Example: ",(0,i.jsx)(s.code,{children:"1d20"})]}),"\n",(0,i.jsxs)(s.li,{children:['The "command" message will be deleted, and the result will be sent in the same channel (and in the log).\n',(0,i.jsx)(s.img,{alt:"Direct",src:n(52520).A+"",width:"692",height:"482"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Indirect Notation"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Example: ",(0,i.jsx)(s.code,{children:"my message content [1d20]"})]}),"\n",(0,i.jsxs)(s.li,{children:["The message will be retained, and only the content within the brackets will be rolled. You will receive a response with the result, and the log will be sent in the thread, including a link to the original message.\n",(0,i.jsx)(s.img,{alt:"Indirect",src:n(72681).A+"",width:"793",height:"482"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Semi-Direct Notation"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Example: ",(0,i.jsx)(s.code,{children:"1d20 My message"})]}),"\n",(0,i.jsxs)(s.li,{children:["The initially found die will be rolled, and the rest of the message will be sent in the log, considered as a comment.\n",(0,i.jsx)(s.img,{alt:"Semi-direct",src:n(69661).A+"",width:"793",height:"482"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["It is also possible to use slashcommands to throw dice, like ",(0,i.jsx)(s.code,{children:"/roll"})," (",(0,i.jsx)(s.a,{href:"/en/docs/usage/#dice-rolling",children:"see here for more information"}),")"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},52520:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/direct-3eb581e8e55c0834aa041fa246ae4781.gif"},72681:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/indirect-c41dc46b2ecf70871d2730ec0b289479.gif"},69661:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/semi-direct-fd2c76b9a7b48513b89e08ed17117973.gif"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var t=n(96540);const i={},c=t.createContext(i);function l(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);