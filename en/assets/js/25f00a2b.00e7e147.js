"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[427],{53318:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"sheet/advice","title":"Limitation & Advice","description":"Limitations","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/sheet/advice.md","sourceDirName":"sheet","slug":"/sheet/advice","permalink":"/en/docs/sheet/advice","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/sheet/advice.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Limitation & Advice","sidebar_position":5},"sidebar":"model","previous":{"title":"Import & Export","permalink":"/en/docs/sheet/import_export"}}');var n=t(74848),o=t(28453);const a={title:"Limitation & Advice",sidebar_position:5},r=void 0,c={},l=[{value:"Limitations",id:"limitations",level:2},{value:"Advice",id:"advice",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(i.p,{children:"Here are the limitations to consider when registering and editing models and sheets:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A maximum of 25 statistics and dice are supported (because of the embed fields limitation)."}),"\n",(0,n.jsx)(i.li,{children:"It is not possible to modify statistics if they do not exist in the original model."}),"\n",(0,n.jsxs)(i.li,{children:["Sometimes, it is necessary to manually update sheets if the model is modified. Additionally, in some cases, sheets must be entirely re-registered. If you want to modify the locations of sheets and private sheets, you will need to do ",(0,n.jsx)(i.code,{children:"/export"})," then ",(0,n.jsx)(i.code,{children:"/import"})," to update them. For more information, ",(0,n.jsx)(i.a,{href:"/en/docs/sheet/import_export",children:"consult the documentation"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"When editing a sheet, statistics are not checked against the total or a maximum. Moreover, it is impossible to control the number of points spent per statistic in systems where spending 1 point in a statistic is not equivalent to 1 statistic point."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"advice",children:"Advice"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Avoid saving all dice in the server template, especially if their number is significant. In fact, you can have only 25 registered dice in total per user. It's preferable to specifically save, per player, only the dice they have access to, such as the weapons they use or their skills. For example, it's not necessary for an archer to have access to all combat dice, but only to those related to their bow."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Sheets are not designed to receive temporary bonuses and penalties or equipment, which should instead be used directly in the ",(0,n.jsx)(i.code,{children:"/dbroll"}),' command. The bot does not yet support equipment, and you cannot create "bonus" or "penalty" columns for each statistic. However, it is possible to modify the values of the saved statistics as needed, especially in the case of point distribution after gaining a level.']}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"While the bot aims to be as universal as possible, certain limitations may mean that the bot may not suit your needs, particularly if you use a system based on numerous skills or specific dice. That being said, you are not required to register ALL special dice."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Statistical verification is minimal (checking only numerical values, minimum and maximum if applicable): prior verification by the GM is mandatory. Given that character sheet editing is very flexible (no checks against total points, maximums, etc.), GMs must perform verification. If you have configured logs (with ",(0,n.jsx)(i.code,{children:"/logs"}),"), you will receive a message in case of modifications, along with a list of the changes made. ",(0,n.jsx)(i.a,{href:"/en/docs/config/logs#edits-logs-and-errors-config-logs",children:"See here for more information about journalization"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var s=t(96540);const n={},o=s.createContext(n);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);