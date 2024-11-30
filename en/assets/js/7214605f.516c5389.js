"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[64],{43028:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Usage/model","title":"Character sheet","description":"Attention","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/Usage/model.mdx","sourceDirName":"Usage","slug":"/Usage/model","permalink":"/en/docs/Usage/model","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/Usage/model.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Character sheet","sidebar_position":3},"sidebar":"commands","previous":{"title":"Dice rolling & scenes","permalink":"/en/docs/Usage/roll"},"next":{"title":"Sending message","permalink":"/en/docs/Usage/message"}}');var d=n(86070),a=n(15658);const r={title:"Character sheet",sidebar_position:3},t=void 0,c={},l=[{value:"Dice Rolling",id:"dice-rolling",level:2},{value:"DBRoll (<code>/dbroll</code>)",id:"dbroll-dbroll",level:3},{value:"DBD (<code>/dbd</code>)",id:"dbd-dbd",level:3},{value:"Others",id:"others",level:2},{value:"Display",id:"display",level:3},{value:"Graph (<code>/graph</code>)",id:"graph-graph",level:3},{value:"Edit user (<code>/edit</code>)",id:"edit-user-edit",level:3},{value:"Avatar (<code>/edit avatar</code>)",id:"avatar-edit-avatar",level:4},{value:"Rename (<code>/edit rename</code>)",id:"rename-edit-rename",level:4},{value:"User (<code>/edit user</code>)",id:"user-edit-user",level:4}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:s,Iconify:r}=i;return s||m("Details",!0),r||m("Iconify",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s,{id:"danger",children:[(0,d.jsxs)("summary",{children:[(0,d.jsx)(r,{icon:"solar:danger-bold",height:"26",class:"danger-summary"}),"Attention"]}),(0,d.jsxs)(i.p,{children:["By default, all commands are disabled and must be enabled in the server's configuration panel.\n",(0,d.jsx)(i.img,{src:n(86290).A+"",width:"270",height:"682"}),"\n",(0,d.jsx)(i.img,{src:n(34473).A+"",width:"1068",height:"956"}),"\n",(0,d.jsx)(i.img,{src:n(10272).A+"",width:"687",height:"118"}),"\n",(0,d.jsx)(i.img,{src:n(38303).A+"",width:"717",height:"684"}),"\n",(0,d.jsx)(i.img,{src:n(84502).A+"",width:"616",height:"443"})]})]}),"\n",(0,d.jsx)(i.h2,{id:"dice-rolling",children:"Dice Rolling"}),"\n",(0,d.jsxs)(i.h3,{id:"dbroll-dbroll",children:["DBRoll (",(0,d.jsx)(i.code,{children:"/dbroll"}),")"]}),"\n",(0,d.jsx)(i.admonition,{type:"info",children:(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"dbroll"})," command is used to roll dice for statistics that have been previously recorded, allowing you to avoid remembering the basic characteristics of a character."]})}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/dbroll [statistic] (*character) (comment) (success_threshold) (modifiers)"})})})}),"\n",(0,d.jsx)(i.p,{children:"The command requires specifying:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"The statistic"}),"\n",(0,d.jsx)(i.li,{children:"The character's name"}),"\n",(0,d.jsx)(i.li,{children:"Any modifiers (such as advantage or disadvantage)"}),"\n",(0,d.jsx)(i.li,{children:"Replacement of the success value (e.g., for a difficult roll), with indication of comparison (e.g., >= 10)"}),"\n",(0,d.jsx)(i.li,{children:"Any comments on your action"}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.img,{alt:"dbroll_1",src:n(17045).A+"",width:"1284",height:"551"}),"\n",(0,d.jsx)(i.img,{alt:"example",src:n(65381).A+"",width:"1276",height:"71"})]}),"\n",(0,d.jsxs)(i.h3,{id:"dbd-dbd",children:["DBD (",(0,d.jsx)(i.code,{children:"/dbd"}),")"]}),"\n",(0,d.jsx)(i.admonition,{type:"info",children:(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"dbd"})," command allows rolling a registered die."]})}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/dbd [*dice] (*character) (modifiers) (comment)"})})})}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{alt:"dbd",src:n(57418).A+"",width:"1262",height:"60"})}),"\n",(0,d.jsx)(i.h2,{id:"others",children:"Others"}),"\n",(0,d.jsx)(i.p,{children:"The following three commands accept :"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"(@player)"})," : The player's name"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"(*character)"})," : And/or the character's name"]}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"display",children:"Display"}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/display (@player) (*character)"})})})}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"display"})," command allows you to view the statistics and dice of a character recorded in the database."]}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{alt:"display",src:n(40805).A+"",width:"712",height:"667"})}),"\n",(0,d.jsxs)(i.h3,{id:"graph-graph",children:["Graph (",(0,d.jsx)(i.code,{children:"/graph"}),")"]}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/graph (@player) (*character) (line) (bg) (min) (max)"})})})}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"/graph"}),' command is a "gimmick" feature that generates a graph from a character\'s statistics.\nOptionally, you can also specify colors with:']}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"line"}),": For lines (default, ",(0,d.jsx)(i.code,{children:"#0e47b2"}),")."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"background"}),": For background (default, ",(0,d.jsx)(i.code,{children:"#0e47b2"}),")."]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Colors can be in hexadecimal or RGB. For example, ",(0,d.jsx)(i.code,{children:"#FF0000"})," or ",(0,d.jsx)(i.code,{children:"255,0,0"}),"."]}),"\n",(0,d.jsxs)(i.p,{children:["Finally, you can set a minimum and maximum for the axes with ",(0,d.jsx)(i.code,{children:"min"})," and ",(0,d.jsx)(i.code,{children:"max"}),"."]}),"\n",(0,d.jsx)(i.p,{children:"By default:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"The minimum is calculated according to the server template (if existing)."}),"\n",(0,d.jsxs)(i.li,{children:["The maximum is determined in different ways:","\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"If a maximum is defined by the template, it will be used."}),"\n",(0,d.jsx)(i.li,{children:"Otherwise, it will be based on the critical success value."}),"\n",(0,d.jsxs)(i.li,{children:["If neither of the two previous options is available, it will be based on the die value (for example, if ",(0,d.jsx)(i.code,{children:"1d20"}),", the value will be 20)."]}),"\n",(0,d.jsxs)(i.li,{children:["As a last resort, it will be automatically calculated based on the user's statistics.\n",(0,d.jsx)(i.img,{alt:"graph",src:n(58871).A+"",width:"800",height:"800"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"edit-user-edit",children:["Edit user (",(0,d.jsx)(i.code,{children:"/edit"}),")"]}),"\n",(0,d.jsxs)(i.p,{children:["If the embed doesn't have the ",(0,d.jsx)(i.code,{children:"select"})," button, it will be automatically added by the command."]}),"\n",(0,d.jsxs)(i.h4,{id:"avatar-edit-avatar",children:["Avatar (",(0,d.jsx)(i.code,{children:"/edit avatar"}),")"]}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/edit avatar [url] (@player) (*character)"})})})}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"edit_avatar"})," command lets you modify the image of a character stored in the database.\nThis will change the embedding of the character sheet."]}),"\n",(0,d.jsx)(i.p,{children:"By default, the command will modify the image of the person who used it. Only moderators can modify the image of another player."}),"\n",(0,d.jsx)(i.admonition,{type:"warning",children:(0,d.jsxs)(i.p,{children:["Images stored on Discord cannot be used as their links change regularly. It is therefore mandatory to use external links, for example, by using ",(0,d.jsx)(i.a,{href:"https://imgur.com/",children:"imgur"}),".\n",(0,d.jsx)(i.a,{href:"https://www.bleepingcomputer.com/news/security/discord-will-switch-to-temporary-file-links-to-block-malware-delivery/",children:"See here for more information"}),"."]})}),"\n",(0,d.jsxs)(i.h4,{id:"rename-edit-rename",children:["Rename (",(0,d.jsx)(i.code,{children:"/edit rename"}),")"]}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/edit rename [new_name] (@player) (*character)"})})})}),"\n",(0,d.jsx)(i.p,{children:"Allow to rename a character."}),"\n",(0,d.jsx)(i.admonition,{type:"warning",children:(0,d.jsx)(i.p,{children:"This command doesn't allow duplicate name. You need to use different name for each character."})}),"\n",(0,d.jsxs)(i.h4,{id:"user-edit-user",children:["User (",(0,d.jsx)(i.code,{children:"/edit user"}),")"]}),"\n",(0,d.jsx)(i.admonition,{type:"usage",children:(0,d.jsx)(i.p,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(i.code,{children:"/edit user [@new_user] (@player) (*character)"})})})}),"\n",(0,d.jsx)(i.p,{children:"Move a character from a player to a new user."}),"\n",(0,d.jsx)(i.admonition,{type:"warning",children:(0,d.jsx)(i.p,{children:"It's not a copy! It will delete the character from the previous user!"})}),"\n",(0,d.jsx)(i.p,{children:"The action will be undone in case of duplicate name."})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},58871:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/graph-43616a600fd24d8f70042683aa26693b.jpg"},57418:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/dbd_example-5a8da6e3efd8ad7ac9d06f3f0da1c8cf.png"},17045:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/dbroll_autocomplete-9867027659bb28e6c5f096bfc3b47f0c.png"},40805:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/display_ex-4e1777b5d6490cc9fd3f0dfe647ab46c.png"},65381:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/example-80bf2c1d27659d7324926a63cef21828.png"},86290:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_1-38a675a67c40101f2dad0e02b75c548f.png"},34473:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_2-35d20cee8c9133487b5ba1bc9a299d2e.png"},10272:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_3-25265f2531deb81b82aaf0e39dbc1102.png"},38303:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_4-7366ebe48cfb205bfc68daf5bf327261.png"},84502:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/allow_commands_5-3217b4fb56efe06a6a6a03c57f97f204.png"},15658:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>t});var s=n(30758);const d={},a=s.createContext(d);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);