"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[613],{9071:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=n(3274),l=n(5618);const d={title:"Commands",sidebar_position:4},c=void 0,a={id:"model/commands",title:"Commands",description:"Attention",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/model/commands.mdx",sourceDirName:"model",slug:"/model/commands",permalink:"/en/docs/model/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/commands.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Commands",sidebar_position:4},sidebar:"model",previous:{title:"Editing an user refsheet",permalink:"/en/docs/model/edit"},next:{title:"Advice",permalink:"/en/docs/model/conseil"}},t={},o=[{value:"Dice Rolling",id:"dice-rolling",level:2},{value:"DBRoll (<code>/dbroll</code>)",id:"dbroll-dbroll",level:3},{value:"DBD (<code>/dbd</code>)",id:"dbd-dbd",level:3},{value:"Logs",id:"logs",level:2},{value:"Display",id:"display",level:2},{value:"Graph (<code>/graph</code>)",id:"graph-graph",level:2}];function r(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components},{Details:d,Iconify:c}=i;return d||m("Details",!0),c||m("Iconify",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d,{id:"danger",children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)(c,{icon:"solar:danger-bold",height:"26",class:"danger-summary"}),"Attention"]}),(0,s.jsxs)(i.p,{children:["By default, all commands are disabled and must be enabled in the server's configuration panel.\n",(0,s.jsx)(i.img,{src:n(3745).A+"",width:"270",height:"682"}),(0,s.jsx)(i.img,{src:n(4901).A+"",width:"1068",height:"956"}),"\n",(0,s.jsx)(i.img,{src:n(1036).A+"",width:"687",height:"118"}),(0,s.jsx)(i.img,{src:n(995).A+"",width:"717",height:"684"}),"\n",(0,s.jsx)(i.img,{src:n(234).A+"",width:"616",height:"443"})]})]}),"\n",(0,s.jsx)(i.h2,{id:"dice-rolling",children:"Dice Rolling"}),"\n",(0,s.jsx)(i.p,{children:"Two commands are available for rolling dice, with auto-completion functionality to simplify input for statistics, character names, and dice names."}),"\n",(0,s.jsxs)(i.h3,{id:"dbroll-dbroll",children:["DBRoll (",(0,s.jsx)(i.code,{children:"/dbroll"}),")"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"dbroll"})," command is used to roll dice for previously registered statistics, avoiding the need to remember a character's basic attributes."]})}),"\n",(0,s.jsx)(i.p,{children:"The command requires specifying:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The statistic"}),"\n",(0,s.jsx)(i.li,{children:"The character's name"}),"\n",(0,s.jsx)(i.li,{children:"Any modifiers (such as advantage or disadvantage)"}),"\n",(0,s.jsx)(i.li,{children:"Replacing the success value (e.g., for a difficult roll), with indication of the comparison (example: >= 10)"}),"\n",(0,s.jsx)(i.li,{children:"Any comment on your action"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"dbroll_1",src:n(5993).A+"",width:"1284",height:"551"}),"\n",(0,s.jsx)(i.img,{alt:"example",src:n(9737).A+"",width:"1276",height:"71"})]}),"\n",(0,s.jsxs)(i.h3,{id:"dbd-dbd",children:["DBD (",(0,s.jsx)(i.code,{children:"/dbd"}),")"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"dbd"})," command allows rolling a saved die."]})}),"\n",(0,s.jsx)(i.p,{children:"This command requires:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The skill"}),"\n",(0,s.jsx)(i.li,{children:"The character's name"}),"\n",(0,s.jsx)(i.li,{children:"Any modifiers"}),"\n",(0,s.jsx)(i.li,{children:"Any comment on your action"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"dbd",src:n(6198).A+"",width:"1262",height:"60"})}),"\n",(0,s.jsx)(i.h2,{id:"logs",children:"Logs"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"logs"})," command allows configuring a channel to:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Report all errors,"}),"\n",(0,s.jsx)(i.li,{children:"Record any modifications made to a character."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"display",children:"Display"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"display"})," command allows viewing the statistics and dice of a character saved in the database. It will ask for:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The player"}),"\n",(0,s.jsx)(i.li,{children:"And/or the character's name"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Combining both allows selecting a specific player's character (which can be useful in case of duplicate character names, although this is unlikely)."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"display",src:n(1537).A+"",width:"712",height:"667"})}),"\n",(0,s.jsxs)(i.h2,{id:"graph-graph",children:["Graph (",(0,s.jsx)(i.code,{children:"/graph"}),")"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"/graph"}),' command is a "gimmick" feature that generates a graph from a character\'s statistics. It requires:']}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The player's name"}),"\n",(0,s.jsx)(i.li,{children:"And/or the character's name."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"As before, you can combine both options to select a specific character from a player."}),"\n",(0,s.jsx)(i.p,{children:"Optionally, you can also specify colors with:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line"}),": For lines (default is ",(0,s.jsx)(i.code,{children:"#0e47b2"}),")."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"background"}),": For the background (default is ",(0,s.jsx)(i.code,{children:"#0e47b2"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Colors can be in hexadecimal or RGB. For example, ",(0,s.jsx)(i.code,{children:"#FF0000"})," or ",(0,s.jsx)(i.code,{children:"255,0,0"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Finally, you can define a minimum and maximum for the axes with ",(0,s.jsx)(i.code,{children:"min"})," and ",(0,s.jsx)(i.code,{children:"max"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"By default:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The minimum is calculated according to the server template (if existing)."}),"\n",(0,s.jsxs)(i.li,{children:["The maximum is determined differently:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"If a maximum is defined by the template, it will be used."}),"\n",(0,s.jsx)(i.li,{children:"Otherwise, it will be based on the critical success value."}),"\n",(0,s.jsxs)(i.li,{children:["If neither of the above options is available, it will be based on the die value (e.g., if ",(0,s.jsx)(i.code,{children:"1d20"}),", the value will be 20)."]}),"\n",(0,s.jsx)(i.li,{children:"As a last resort, it will be automatically calculated based on the user's statistics."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"graph",src:n(3955).A+"",width:"800",height:"800"})})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3955:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/graph-43616a600fd24d8f70042683aa26693b.jpg"},6198:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/dbd_example-5a8da6e3efd8ad7ac9d06f3f0da1c8cf.png"},5993:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/dbroll_autocomplete-9867027659bb28e6c5f096bfc3b47f0c.png"},1537:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/display_ex-4e1777b5d6490cc9fd3f0dfe647ab46c.png"},9737:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/example-80bf2c1d27659d7324926a63cef21828.png"},3745:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_1-38a675a67c40101f2dad0e02b75c548f.png"},4901:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_2-35d20cee8c9133487b5ba1bc9a299d2e.png"},1036:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_3-25265f2531deb81b82aaf0e39dbc1102.png"},995:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_4-7366ebe48cfb205bfc68daf5bf327261.png"},234:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_5-3217b4fb56efe06a6a6a03c57f97f204.png"},5618:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>a});var s=n(9474);const l={},d=s.createContext(l);function c(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);