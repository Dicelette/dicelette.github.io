"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[370],{8539:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var n=i(3274),s=i(1377);const t={title:"Commands",sidebar_position:4},c=void 0,d={id:"model/commands",title:"Commands",description:"Dice Rolling",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/model/commands.md",sourceDirName:"model",slug:"/model/commands",permalink:"/en/docs/model/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/commands.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Commands",sidebar_position:4},sidebar:"model",previous:{title:"Editing an user refsheet",permalink:"/en/docs/model/edit"},next:{title:"Advice",permalink:"/en/docs/model/conseil"}},a={},o=[{value:"Dice Rolling",id:"dice-rolling",level:2},{value:"DBRoll (<code>/dbroll</code>)",id:"dbroll-dbroll",level:3},{value:"DBD (<code>/dbd</code>)",id:"dbd-dbd",level:3},{value:"Logs",id:"logs",level:2},{value:"Display",id:"display",level:2},{value:"Graph",id:"graph",level:2}];function r(e){const l={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"dice-rolling",children:"Dice Rolling"}),"\n",(0,n.jsxs)(l.p,{children:["Both commands will benefit from an autocomplete feature for statistics (or the dice name for the ",(0,n.jsx)(l.code,{children:"dbd"})," command) as well as for the character name."]}),"\n",(0,n.jsxs)(l.h3,{id:"dbroll-dbroll",children:["DBRoll (",(0,n.jsx)(l.code,{children:"/dbroll"}),")"]}),"\n",(0,n.jsxs)(l.p,{children:["The DBRoll command will have the same effects as the ",(0,n.jsx)(l.code,{children:"/roll"})," command, but it will prompt you for:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"The statistic (mandatory, with autocomplete)"}),"\n",(0,n.jsx)(l.li,{children:"The character name (with autocomplete)"}),"\n",(0,n.jsx)(l.li,{children:"Any modifier to add to the roll (such as advantage, disadvantage, etc.)"}),"\n",(0,n.jsxs)(l.li,{children:["Replacement of the success value (e.g., for a difficult roll): Be sure to specify how the value is compared! (example: ",(0,n.jsx)(l.code,{children:">= 10"}),")"]}),"\n",(0,n.jsx)(l.li,{children:"Any comment on your action"}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.img,{alt:"dbroll_1",src:i(5993).A+"",width:"1284",height:"551"}),"\n",(0,n.jsx)(l.img,{alt:"example",src:i(9737).A+"",width:"1276",height:"71"})]}),"\n",(0,n.jsxs)(l.h3,{id:"dbd-dbd",children:["DBD (",(0,n.jsx)(l.code,{children:"/dbd"}),")"]}),"\n",(0,n.jsxs)(l.p,{children:["The DBD command will have the same effects as the ",(0,n.jsx)(l.code,{children:"/roll"})," command, but it will prompt you for:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"The skill (mandatory, with autocomplete)"}),"\n",(0,n.jsx)(l.li,{children:"The character name (with autocomplete)"}),"\n",(0,n.jsx)(l.li,{children:"Any modifier to add to the roll (such as advantage, disadvantage, etc.)"}),"\n",(0,n.jsx)(l.li,{children:"Any comment on your action."}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{alt:"dbd",src:i(6198).A+"",width:"1262",height:"60"})}),"\n",(0,n.jsx)(l.h2,{id:"logs",children:"Logs"}),"\n",(0,n.jsx)(l.p,{children:'The "logs" command allows choosing a channel in which:'}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Any error will be reported"}),"\n",(0,n.jsx)(l.li,{children:"Any modification made to a character will be logged."}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"display",children:"Display"}),"\n",(0,n.jsx)(l.p,{children:'The "display" command allows viewing the statistics and dice of a character stored in the database. It will prompt you for:'}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"The player (accepts one user per mention)"}),"\n",(0,n.jsx)(l.li,{children:"And/or the character name (with autocomplete)."}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"Using both together allows choosing the character of a specific player (useful in case of duplicate character names, although this is unlikely)."}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{alt:"display",src:i(1537).A+"",width:"712",height:"667"})}),"\n",(0,n.jsx)(l.h2,{id:"graph",children:"Graph"}),"\n",(0,n.jsx)(l.p,{children:'The "graph" command is a feature that allows generating a graph based on a character\'s statistics. It requires:'}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"The player (accepts user mention)"}),"\n",(0,n.jsx)(l.li,{children:"And/or the character's name (with auto-completion)."}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"Using both together allows selecting a specific player's character (useful in case of duplicate character names, although this is unlikely)."}),"\n",(0,n.jsx)(l.p,{children:"Optionally, you can also specify colors with:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"line"}),": for line color (default is ",(0,n.jsx)(l.code,{children:"#0e47b2"}),")."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"background"}),": for background color (default is ",(0,n.jsx)(l.code,{children:"#0e47b2"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["Colors can be in hexadecimal or RGB format. For example, ",(0,n.jsx)(l.code,{children:"#FF0000"})," or ",(0,n.jsx)(l.code,{children:"255,0,0"}),"."]}),"\n",(0,n.jsxs)(l.p,{children:["Finally, it's possible to set a minimum and maximum for the axes with ",(0,n.jsx)(l.code,{children:"min"})," and ",(0,n.jsx)(l.code,{children:"max"}),"."]}),"\n",(0,n.jsx)(l.p,{children:"By default:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"The minimum will be calculated based on the server model (if available)."}),"\n",(0,n.jsxs)(l.li,{children:["The maximum will be determined as follows:","\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"If a maximum is set by the template, it will be used (calculated from the list of maximums)."}),"\n",(0,n.jsx)(l.li,{children:"Otherwise, it will be based on the critical success value."}),"\n",(0,n.jsxs)(l.li,{children:["If neither of the previous options is available, it will be based on the dice value (for example, if ",(0,n.jsx)(l.code,{children:"1d20"}),", the value will be 20)."]}),"\n",(0,n.jsx)(l.li,{children:"Otherwise, it will be automatically calculated based on the user's statistics."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{alt:"graph",src:i(3955).A+"",width:"800",height:"800"})})]})}function h(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},3955:(e,l,i)=>{i.d(l,{A:()=>n});const n=i.p+"assets/images/graph-43616a600fd24d8f70042683aa26693b.jpg"},6198:(e,l,i)=>{i.d(l,{A:()=>n});const n=i.p+"assets/images/dbd_example-5a8da6e3efd8ad7ac9d06f3f0da1c8cf.png"},5993:(e,l,i)=>{i.d(l,{A:()=>n});const n=i.p+"assets/images/dbroll_autocomplete-9867027659bb28e6c5f096bfc3b47f0c.png"},1537:(e,l,i)=>{i.d(l,{A:()=>n});const n=i.p+"assets/images/display_ex-4e1777b5d6490cc9fd3f0dfe647ab46c.png"},9737:(e,l,i)=>{i.d(l,{A:()=>n});const n=i.p+"assets/images/example-80bf2c1d27659d7324926a63cef21828.png"},1377:(e,l,i)=>{i.d(l,{R:()=>c,x:()=>d});var n=i(9474);const s={},t=n.createContext(s);function c(e){const l=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(t.Provider,{value:l},e.children)}}}]);