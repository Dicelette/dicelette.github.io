"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[376],{14655:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(13274),l=s(42463);const i={title:"Commande slash"},c=void 0,o={id:"introduction/Usage/slashcommands",title:"Commande slash",description:"Rolling Dice",source:"@site/docs/introduction/Usage/slashcommands.md",sourceDirName:"introduction/Usage",slug:"/introduction/Usage/slashcommands",permalink:"/docs/introduction/Usage/slashcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/Usage/slashcommands.md",tags:[],version:"current",frontMatter:{title:"Commande slash"},sidebar:"introduction",previous:{title:"Envoi de Message",permalink:"/docs/introduction/Usage/message"}},a={},d=[{value:"Rolling Dice",id:"rolling-dice",level:2},{value:"Creating a New Scene",id:"creating-a-new-scene",level:2},{value:"Help",id:"help",level:2},{value:"Logs",id:"logs",level:2},{value:"Changing the Result Channel <code>/result_channel</code>",id:"changing-the-result-channel-result_channel",level:2}];function r(e){const n={code:"code",h2:"h2",img:"img",p:"p",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"rolling-dice",children:"Rolling Dice"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"/roll 1d20"}),' to roll a die. You can also use the "semi-direct" notation by adding a comment: ',(0,t.jsx)(n.code,{children:"/roll 1d20 My comment"}),'. Please note that the "indirect" notation is not available in this mode.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Roll",src:s(6765).A+"",width:"1369",height:"488"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-new-scene",children:"Creating a New Scene"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"/scene <name>"})," to create a new scene. The bot will then create a new thread, prefixed with ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"}),", where it will send the dice logs. This thread will take on the name of the ",(0,t.jsx)(n.code,{children:"scene"}),", and all other threads prefixed with ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"})," will be archived."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Scene",src:s(45469).A+"",width:"1595",height:"517"})}),"\n",(0,t.jsx)(n.h2,{id:"help",children:"Help"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"/help"})," to display the help message."]}),"\n",(0,t.jsx)(n.h2,{id:"logs",children:"Logs"}),"\n",(0,t.jsx)(n.p,{children:"This command allows you to configure a channel to receive all error logs from the bot."}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"/logs <channel>"})," to configure the log channel."]}),"\n",(0,t.jsxs)(n.h2,{id:"changing-the-result-channel-result_channel",children:["Changing the Result Channel ",(0,t.jsx)(n.code,{children:"/result_channel"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/result_channel"})," command allows you to set a channel to receive the results of dice rolls, rather than using a thread each time. The channel ID will then be saved in the database similarly to the ",(0,t.jsx)(n.code,{children:"logs"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["Usage: ",(0,t.jsx)(n.code,{children:"/result_channel <channel>"})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},45469:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/scene-ddd51624fefa6a070d1834384032231d.gif"},6765:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/slash-commands-ecebd48fa903f7f68b540e5b260b96b6.gif"},42463:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(79474);const l={},i=t.createContext(l);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);