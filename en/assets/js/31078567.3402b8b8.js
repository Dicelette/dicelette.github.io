"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[992],{36848:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=i(86070),n=i(76113);const o={title:"Advice",sidebar_position:5},a=void 0,r={id:"model/conseil",title:"Advice",description:"- Avoid saving all dice in the server template, especially if their number is significant. Even if there is no limit of the number of dice that can be registered, the display of the list and the filter is limited at 25 (limited by discord). It's preferable to specifically save, per player, only the dice they have access to, such as the weapons they use or their skills. For example, it's not necessary for an archer to have access to all combat dice, but only to those related to their bow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/model/conseil.md",sourceDirName:"model",slug:"/model/conseil",permalink:"/en/docs/model/conseil",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/conseil.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Advice",sidebar_position:5},sidebar:"model",previous:{title:"Editing an user refsheet",permalink:"/en/docs/model/edit"}},c={},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Avoid saving all dice in the server template, especially if their number is significant. Even if there is no limit of the number of dice that can be registered, the display of the list and the filter is limited at 25 (limited by discord). It's preferable to specifically save, per player, only the dice they have access to, such as the weapons they use or their skills. For example, it's not necessary for an archer to have access to all combat dice, but only to those related to their bow."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Sheets are not designed to receive temporary bonuses and penalties or equipment, which should instead be used directly in the ",(0,s.jsx)(t.code,{children:"/dbroll"}),' command. The bot does not yet support equipment, and you cannot create "bonus" or "penalty" columns for each statistic. However, it is possible to modify the values of the saved statistics as needed, especially in the case of point distribution after gaining a level.']}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["While the bot aims to be as universal as possible, certain ",(0,s.jsx)(t.a,{href:"./register/limitation",children:"limitations"})," may mean that the bot may not suit your needs, particularly if you use a system based on numerous skills or specific dice. That being said, you are not required to register ALL special dice."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Statistical verification is minimal (checking only numerical values, minimum and maximum if applicable): prior verification by the GM is mandatory. Given that character sheet editing is very flexible (no checks against total points, maximums, etc.), GMs must perform verification. If you have configured logs (with ",(0,s.jsx)(t.code,{children:"/logs"}),"), you will receive a message in case of modifications, along with a list of the changes made."]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},76113:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(30758);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);