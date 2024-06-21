"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[9],{78223:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=i(86070),s=i(25710);const l={title:"Model registering",sidebar_position:1},c=void 0,d={id:"admin/model/index",title:"Model registering",description:"First, you need to generate a new template. To do this, use the command /register, followed by the name of the template. More over, you can generate a server template with the following command: /generate.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/admin/model/index.md",sourceDirName:"admin/model",slug:"/admin/model/",permalink:"/en/docs/admin/model/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/admin/model/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Model registering",sidebar_position:1},sidebar:"model",next:{title:"Model generator",permalink:"/en/docs/admin/model/form"}},a={},o=[{value:"Dice",id:"dice",level:2},{value:"Statistics",id:"statistics",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function r(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["First, you need to ",(0,n.jsx)(t.strong,{children:"generate"})," a new template. To do this, use the command ",(0,n.jsx)(t.code,{children:"/register"}),", followed by the name of the template. More over, you can generate a server template with the following command: ",(0,n.jsx)(t.code,{children:"/generate"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This command will allow you to create a new ",(0,n.jsx)(t.code,{children:"JSON"})," file, with the following (optional) parameters:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"name"}),": The name of the statistics, separated by commas. If a name contains a space, enclose it in quotation marks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"dice"}),": The type of dice to be rolled, which may include a formula."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"total"}),": The total number of points that players can distribute."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"character"}),": Make it compulsory to enter a character name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"critical_success"}),": The value considered a critical success."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"critical_failure"}),": The value considered a critical failure."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"skill"}),": Add fields for skill or attack dice."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For template examples, you can consult the ",(0,n.jsx)(t.code,{children:"template"})," files ",(0,n.jsx)(t.a,{href:"https://github.com/Dicelette/discord-dicelette/tree/main/template",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Statistics and dice are optional:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The absence of statistics will prevent the use of the ",(0,n.jsx)(t.code,{children:"/dbroll"})," command, and you will not be able to save statistics on the sheets. If you save statistics after creating users, you will need to recreate the sheets."]}),"\n",(0,n.jsxs)(t.li,{children:["The absence of dice (either in templates or sheets) will prevent the use of ",(0,n.jsx)(t.code,{children:"/dbd"}),"."]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"dice",children:"Dice"}),"\n",(0,n.jsx)(t.p,{children:"There are two types of dice:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The die that will be rolled by the ",(0,n.jsx)(t.code,{children:"dbroll"})," command, which we will call ",(0,n.jsx)(t.strong,{children:"die type"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The dice saved for the ",(0,n.jsx)(t.code,{children:"dbd"})," command, which we will call ",(0,n.jsx)(t.strong,{children:"saved dice"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Both types of dice must follow the syntax of the ",(0,n.jsx)(t.a,{href:"https://dice-roller.github.io/documentation/",children:"dice-roller API"}),", and can support various mathematical formulas."]}),"\n",(0,n.jsxs)(t.p,{children:["In both cases, you can use the syntax ",(0,n.jsx)(t.code,{children:"{{"})," and ",(0,n.jsx)(t.code,{children:"}}"})," to write complex mathematical formulas, such as ",(0,n.jsx)(t.code,{children:"ceil"}),", ",(0,n.jsx)(t.code,{children:"floor"}),", ",(0,n.jsx)(t.code,{children:"round"}),', etc. However, if you want to "target" a statistic, the syntax will be different depending on what you are using:']}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Die types target only the syntax used in the ",(0,n.jsx)(t.code,{children:"dbroll"})," command. The sign to indicate a statistic is ",(0,n.jsx)(t.code,{children:"$"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Saved dice target the syntax used in the ",(0,n.jsx)(t.code,{children:"dbd"})," command. Since you have access to all statistics, you can target them directly with their name."]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{title:"Example",type:"tip",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For a die type: ",(0,n.jsx)(t.code,{children:"1d6>$"})," or ",(0,n.jsx)(t.code,{children:"1d6+$"})]}),"\n",(0,n.jsxs)(t.li,{children:["For a saved die: ",(0,n.jsx)(t.code,{children:"1d6 > Strength"})," or ",(0,n.jsx)(t.code,{children:"1d6 + Strength"})]}),"\n"]}),(0,n.jsx)(t.p,{children:"For a die based on a formula:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For a die type: ",(0,n.jsx)(t.code,{children:"1d6 + {{ceil($ / 2)}}"})]}),"\n",(0,n.jsxs)(t.li,{children:["For a saved die: ",(0,n.jsx)(t.code,{children:"1d6 + {{ceil(Strength / 2)}}"})]}),"\n"]}),(0,n.jsx)(t.p,{children:"It is also possible to compare with a formula:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For a die type: ",(0,n.jsx)(t.code,{children:"1d6 > {{ceil($ / 2)}}"})]}),"\n",(0,n.jsxs)(t.li,{children:["For a saved die: ",(0,n.jsx)(t.code,{children:"1d6 > {{ceil(Strength / 2)}}"})]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"statistics",children:"Statistics"}),"\n",(0,n.jsx)(t.p,{children:"Statistics are based on a name, but you will notice that after generating the file, each statistic will have three fields:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"min"}),": The minimum value the statistic can have."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"max"}),": The maximum value the statistic can have."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"combination"}),": If the statistic is a combination of several other statistics, you can indicate it here. For example, if the ",(0,n.jsx)(t.code,{children:"Dodge"})," statistic is the sum of ",(0,n.jsx)(t.code,{children:"Strength"})," and ",(0,n.jsx)(t.code,{children:"Dexterity"}),", you can indicate it here. Using a combination automatically cancels out the ",(0,n.jsx)(t.code,{children:"min"})," and ",(0,n.jsx)(t.code,{children:"max"})," values. Additionally, combined statistics will not be calculated in the total sum."]}),"\n"]}),"\n",(0,n.jsxs)(l,{children:[(0,n.jsx)("summary",{children:"Empty Template"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n"charName": false,\n"statistics": {\n  "NAME": {\n    "min": 1,\n    "max": 20,\n    "combination": ""\n  },\n  "COMBINATION": {\n    "combination": "NAME*2"\n  },\n},\n"diceType": "",\n"critical": {\n  "failure": 0,\n  "success": 0\n},\n"total": 0,\n"damage": {\n  "NAME": ""\n}\n}\n'})})]}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,n.jsxs)(t.p,{children:["Once the template is ready, use ",(0,n.jsx)(t.code,{children:"/register [#channel] [file] (#user_chan) (#private_character)"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"#channel"})," is the channel where the template will be sent. It will then be used for sheet creation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"file"})," is the previously created ",(0,n.jsx)(t.code,{children:"JSON"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"#user_chan"})," is the channel where the sheets will be published."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"#private_character"})," works similarly to ",(0,n.jsx)(t.code,{children:"#user_chan"}),", but the sheets published in this channel will only be visible to the user who registered the sheet or to those who have access to this channel (as well as people with the ",(0,n.jsx)(t.code,{children:"MANAGE ROLES"})," permission). If this channel is not defined, the private sheet function will be disabled.\nThe embed will be pinned for easy access."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[":::Warning About private sheet\nIf the sheet is not marked as private but is published in a channel that users do not normally have access to, they will still be able to see the sheet with the ",(0,n.jsx)(t.code,{children:"/display"})," and ",(0,n.jsx)(t.code,{children:"/graph"})," commands.\n:::"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"embed",src:i(46853).A+"",width:"631",height:"758"})}),"\n",(0,n.jsx)(t.admonition,{title:"About default channel",type:"warning",children:(0,n.jsxs)(t.p,{children:["You need to re-register the template if you want to change the default channel for private and public sheet. But, saved user doesn't needs to be re-registered as the channel & messageID are saved in the database.\nIf you need to move all the sheets to another channel, you need to use the ",(0,n.jsx)(t.a,{href:"/en/docs/admin/config/import_export",children:(0,n.jsx)(t.code,{children:"/export"})})," command."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},46853:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/embed_template-837eb1323903e1347a681fef05c31cdb.png"},25710:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>d});var n=i(30758);const s={},l=n.createContext(s);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);