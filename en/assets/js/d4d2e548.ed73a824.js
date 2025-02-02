"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[443],{1929:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"config/display","title":"Display results","description":"Diverses options allows to personalize the display of the dice\'s results, whether in the save section or in the channel where the throw was made.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/config/display.md","sourceDirName":"config","slug":"/config/display","permalink":"/en/docs/config/display","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/config/display.md","tags":[],"version":"current","frontMatter":{"title":"Display results"}}');var s=n(74848),i=n(28453);const d={title:"Display results"},c=void 0,l={},f=[{value:"Timestamp: <code>timestamp</code>",id:"timestamp-timestamp",level:2},{value:"Time before deletion: <code>delete_after</code>",id:"time-before-deletion-delete_after",level:2},{value:"Context and backup links",id:"context-and-backup-links",level:2},{value:"[Save] Link to the dice&#39;s context: <code>context</code>",id:"save-link-to-the-dices-context-context",level:3},{value:"[Dice throw] Link to the saved dice: <code>save_link</code>",id:"dice-throw-link-to-the-saved-dice-save_link",level:3}];function r(A){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Diverses options allows to personalize the display of the dice's results, whether in the save section or in the channel where the throw was made."}),"\n",(0,s.jsxs)(e.h2,{id:"timestamp-timestamp",children:["Timestamp: ",(0,s.jsx)(e.code,{children:"timestamp"})]}),"\n",(0,s.jsx)(e.admonition,{type:"usage",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"/config timestamp [?toggle]"})})})}),"\n",(0,s.jsxs)(e.p,{children:["If the option is set to ",(0,s.jsx)(e.strong,{children:"true"}),", the timestamp will be displayed in the dice results."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:n(58311).A+"",width:"1357",height:"56"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"The timestamp automatically adapts to the user's time zone."})}),"\n",(0,s.jsxs)(e.h2,{id:"time-before-deletion-delete_after",children:["Time before deletion: ",(0,s.jsx)(e.code,{children:"delete_after"})]}),"\n",(0,s.jsx)(e.admonition,{type:"usage",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"/config delete_after [time]"})})})}),"\n",(0,s.jsxs)(e.p,{children:["By default, dice roll result messages are deleted after ",(0,s.jsx)(e.strong,{children:"3"})," minutes. This command allows you to change the delay (up to 60 minutes) before messages are deleted."]}),"\n",(0,s.jsxs)(e.p,{children:["If the value is set to ",(0,s.jsx)(e.strong,{children:"0"}),", messages will no longer be deleted."]}),"\n",(0,s.jsxs)(e.p,{children:["This option is disabled if ",(0,s.jsx)(e.code,{children:"/config disable_threads"})," is enabled."]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"This command allow to have both the result log in a dedicated channel (or in threads) while keeping the result in the main channel for the players to see."})}),"\n",(0,s.jsx)(e.h2,{id:"context-and-backup-links",children:"Context and backup links"}),"\n",(0,s.jsxs)(e.h3,{id:"save-link-to-the-dices-context-context",children:["[Save] Link to the dice's context: ",(0,s.jsx)(e.code,{children:"context"})]}),"\n",(0,s.jsx)(e.admonition,{type:"usage",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"/config context [?toggle]"})})})}),"\n",(0,s.jsx)(e.p,{children:"Adds a link to the context of the die in the die save."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"If auto-delete is enabled, the link created will return to the previous die message."}),"\n",(0,s.jsx)(e.li,{children:"If auto-delete is disabled, the link will refer to the die's message directly."}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"If the context message is deleted, the link will no longer work."})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Link to context",src:n(86574).A+"",width:"510",height:"97"})}),"\n",(0,s.jsxs)(e.h3,{id:"dice-throw-link-to-the-saved-dice-save_link",children:["[Dice throw] Link to the saved dice: ",(0,s.jsx)(e.code,{children:"save_link"})]}),"\n",(0,s.jsx)(e.admonition,{type:"usage",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"/config save_link [?toggle]"})})})}),"\n",(0,s.jsx)(e.p,{children:"Adds a link to the die backup in the die result message."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Link to backup",src:n(92370).A+"",width:"892",height:"165"})})]})}function o(A={}){const{wrapper:e}={...(0,i.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(r,{...A})}):r(A)}},92370:(A,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/backup_link-c408bbfc045fd7d78e82552d780bd6e1.png"},86574:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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"},58311:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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"},28453:(A,e,n)=>{n.d(e,{R:()=>d,x:()=>c});var t=n(96540);const s={},i=t.createContext(s);function d(A){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function c(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:d(A.components),t.createElement(i.Provider,{value:e},A.children)}}}]);