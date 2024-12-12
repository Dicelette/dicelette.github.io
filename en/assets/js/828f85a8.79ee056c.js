"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[9],{25089:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"admin/model/index","title":"Model registering","description":"First, you need to generate a new template. To do this, use the command /register, followed by the name of the template. More over, you can generate a server template with the following command: /generate.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/admin/model/index.md","sourceDirName":"admin/model","slug":"/admin/model/","permalink":"/en/docs/admin/model/","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/admin/model/index.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Model registering","sidebar_position":2},"sidebar":"model","previous":{"title":"Import/Export data","permalink":"/en/docs/admin/config/import_export"},"next":{"title":"Model generator","permalink":"/en/docs/admin/model/form"}}');var n=t(86070),l=t(4214);const c={title:"Model registering",sidebar_position:2},a=void 0,r={},d=[{value:"Dice",id:"dice",level:2},{value:"Statistics",id:"statistics",level:2},{value:"Criticals",id:"criticals",level:2},{value:"Basic Critical",id:"basic-critical",level:3},{value:"Custom Critical",id:"custom-critical",level:3},{value:"Skill Dice and Custom Criticals",id:"skill-dice-and-custom-criticals",level:4},{value:"What&#39;s Next?",id:"whats-next",level:2}];function o(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["First, you need to ",(0,n.jsx)(i.strong,{children:"generate"})," a new template. To do this, use the command ",(0,n.jsx)(i.code,{children:"/register"}),", followed by the name of the template. More over, you can generate a server template with the following command: ",(0,n.jsx)(i.code,{children:"/generate"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["This command will allow you to create a new ",(0,n.jsx)(i.code,{children:"JSON"})," file, with the following (optional) parameters:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"name"}),": The name of the statistics, separated by commas. If a name contains a space, enclose it in quotation marks."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"dice"}),": The type of dice to be rolled, which may include a formula."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"total"}),": The total number of points that players can distribute."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"character"}),": Make it compulsory to enter a character name."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"critical_success"}),": The value considered a critical success."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"critical_failure"}),": The value considered a critical failure."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"skill"}),": Add fields for skill or attack dice."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["For template examples, you can consult the ",(0,n.jsx)(i.code,{children:"template"})," files ",(0,n.jsx)(i.a,{href:"https://github.com/Dicelette/discord-dicelette/tree/main/template",children:"here"}),"."]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsx)(i.p,{children:"Statistics and dice are optional:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The absence of statistics will prevent the use of the ",(0,n.jsx)(i.code,{children:"/dbroll"})," command, and you will not be able to save statistics on the sheets. If you save statistics after creating users, you will need to recreate the sheets."]}),"\n",(0,n.jsxs)(i.li,{children:["The absence of dice (either in templates or sheets) will prevent the use of ",(0,n.jsx)(i.code,{children:"/dbd"}),"."]}),"\n"]})]}),"\n",(0,n.jsx)(i.h2,{id:"dice",children:"Dice"}),"\n",(0,n.jsx)(i.p,{children:"There are two types of dice:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The die that will be rolled by the ",(0,n.jsx)(i.code,{children:"dbroll"})," command, which we will call ",(0,n.jsx)(i.strong,{children:"die type"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["The dice saved for the ",(0,n.jsx)(i.code,{children:"dbd"})," command, which we will call ",(0,n.jsx)(i.strong,{children:"saved dice"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Both types of dice must follow the syntax of the ",(0,n.jsx)(i.a,{href:"https://dice-roller.github.io/documentation/",children:"dice-roller API"}),", and can support various mathematical formulas."]}),"\n",(0,n.jsxs)(i.p,{children:["In both cases, you can use the syntax ",(0,n.jsx)(i.code,{children:"{{"})," and ",(0,n.jsx)(i.code,{children:"}}"})," to write complex mathematical formulas, such as ",(0,n.jsx)(i.code,{children:"ceil"}),", ",(0,n.jsx)(i.code,{children:"floor"}),", ",(0,n.jsx)(i.code,{children:"round"}),', etc. However, if you want to "target" a statistic, the syntax will be different depending on what you are using:']}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Die types target only the syntax used in the ",(0,n.jsx)(i.code,{children:"dbroll"})," command. The sign to indicate a statistic is ",(0,n.jsx)(i.code,{children:"$"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Saved dice target the syntax used in the ",(0,n.jsx)(i.code,{children:"dbd"})," command. Since you have access to all statistics, you can target them directly with their name."]}),"\n"]}),"\n",(0,n.jsxs)(i.admonition,{title:"Example",type:"tip",children:[(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["For a die type: ",(0,n.jsx)(i.code,{children:"1d6>$"})," or ",(0,n.jsx)(i.code,{children:"1d6+$"})]}),"\n",(0,n.jsxs)(i.li,{children:["For a saved die: ",(0,n.jsx)(i.code,{children:"1d6 > Strength"})," or ",(0,n.jsx)(i.code,{children:"1d6 + Strength"})]}),"\n"]}),(0,n.jsx)(i.p,{children:"For a die based on a formula:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["For a die type: ",(0,n.jsx)(i.code,{children:"1d6 + {{ceil($ / 2)}}"})]}),"\n",(0,n.jsxs)(i.li,{children:["For a saved die: ",(0,n.jsx)(i.code,{children:"1d6 + {{ceil(Strength / 2)}}"})]}),"\n"]}),(0,n.jsx)(i.p,{children:"It is also possible to compare with a formula:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["For a die type: ",(0,n.jsx)(i.code,{children:"1d6 > {{ceil($ / 2)}}"})]}),"\n",(0,n.jsxs)(i.li,{children:["For a saved die: ",(0,n.jsx)(i.code,{children:"1d6 > {{ceil(Strength / 2)}}"})]}),"\n"]})]}),"\n",(0,n.jsx)(i.h2,{id:"statistics",children:"Statistics"}),"\n",(0,n.jsx)(i.p,{children:"Statistics are based on a name, but you will notice that after generating the file, each statistic will have three fields:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"min"}),": The minimum value the statistic can have."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"max"}),": The maximum value the statistic can have."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"combination"}),": If the statistic is a combination of several other statistics, you can indicate it here. For example, if the ",(0,n.jsx)(i.code,{children:"Dodge"})," statistic is the sum of ",(0,n.jsx)(i.code,{children:"Strength"})," and ",(0,n.jsx)(i.code,{children:"Dexterity"}),", you can indicate it here. Using a combination automatically cancels out the ",(0,n.jsx)(i.code,{children:"min"})," and ",(0,n.jsx)(i.code,{children:"max"})," values. Additionally, combined statistics will not be calculated in the total sum."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"criticals",children:"Criticals"}),"\n",(0,n.jsx)(i.p,{children:"It is possible to define:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Basic Critical"}),", which are tied to natural dice rolls and can be configured as critical successes or critical failures."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Custom Critical"}),", which can apply to natural dice rolls or total results."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["In both cases, by default, critical are only active with the ",(0,n.jsx)(i.code,{children:"/dbroll"})," command and allow a special message to be displayed depending on the result."]}),"\n",(0,n.jsx)(i.h3,{id:"basic-critical",children:"Basic Critical"}),"\n",(0,n.jsxs)(i.p,{children:["These can only be tied to an equality with the natural die roll. The value is configurable, but the displayed message is not.",(0,n.jsx)(i.br,{}),"\n","Thus, in the case where:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["You achieve a critical success value, the displayed message will be: ",(0,n.jsx)(i.code,{children:"Critical Success"})]}),"\n",(0,n.jsxs)(i.li,{children:["Similarly, for a critical failure, the displayed message will be: ",(0,n.jsx)(i.code,{children:"Critical Failure"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The messages can be overridden by ",(0,n.jsx)(i.strong,{children:"Custom Critical"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"custom-critical",children:"Custom Critical"}),"\n",(0,n.jsxs)(i.p,{children:["Custom critical allow you to define a value for which a personalized message will be displayed. Unlike basic criticals, custom criticals can compare against either a total ",(0,n.jsx)(i.strong,{children:"or"})," a natural die roll, and they support formulas.",(0,n.jsx)(i.br,{}),"\n","You can create up to 22 custom critical in total."]}),"\n",(0,n.jsxs)(i.p,{children:["This enables, for example, critical linked to a statistic value using ",(0,n.jsx)(i.code,{children:"$"}),", as in comparisons with dice types."]}),"\n",(0,n.jsxs)(i.admonition,{title:"[Call of Cthulhu]",type:"example",children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Reference"}),": ",(0,n.jsx)(i.a,{href:"https://cthulhuwiki.chaosium.com/rules/combat.html",children:"Call of Cthulhu RPG Wiki"}),(0,n.jsx)(i.br,{}),"\n","In the case of Call of Cthulhu, success is based on the value of a statistic. The die type would then be ",(0,n.jsx)(i.code,{children:"1D100<=$"}),".",(0,n.jsx)(i.br,{}),"\n","Custom critical could be defined as:"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:'"Hard success"'}),": ",(0,n.jsx)(i.code,{children:"<=round($/2)"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:'"Extreme success"'}),": ",(0,n.jsx)(i.code,{children:"<=round($/5)"})]}),"\n"]})]}),"\n",(0,n.jsx)(i.h4,{id:"skill-dice-and-custom-criticals",children:"Skill Dice and Custom Criticals"}),"\n",(0,n.jsx)(i.p,{children:"Only dice with a comparator will be affected by custom criticals."}),"\n",(0,n.jsxs)(i.p,{children:["If a custom critical uses the ",(0,n.jsx)(i.code,{children:"$"})," symbol, the value to be used must be found in the ",(0,n.jsx)(i.strong,{children:"name"})," of the skill die, enclosed in parentheses."]}),"\n",(0,n.jsx)(i.admonition,{type:"example",children:(0,n.jsxs)(i.p,{children:["For a custom critical with the value ",(0,n.jsx)(i.code,{children:"<=$"}),", if the skill die is named ",(0,n.jsx)(i.code,{children:"Animal Instinct (Strength)"}),", then the ",(0,n.jsx)(i.code,{children:"$"})," will be replaced by the statistical value of Strength, if it exists.",(0,n.jsx)(i.br,{}),"\n","If the name is not found, the comparison will not be applied, and the die will be rolled normally."]})}),"\n",(0,n.jsx)(i.p,{children:"Additionally, it is possible to combine multiple statistics, as well as formulas or dice rolls, within the name of the die."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"If the name itself contains a dice roll, it will not appear in the result but will instead be displayed in the die's comment, replacing the formula."})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Empty Template"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:' {\n  "$schema": "https://raw.githubusercontent.com/Dicelette/discord-dicelette/main/template/schema.json",\n  "charName": false,\n  "statistics": {\n  \t"name": {\n  \t\t"min": 1,\n  \t\t"max": 20\n  \t},\n  \t"combinaison": {\n  \t\t"combinaison": "2d6"\n  \t}\n  },\n  "diceType": "1d20",\n  "critical": {\n  \t"failure": 1,\n  \t"success": 20\n  },\n  "total": 80,\n  "customCritical": {\n  \t"name": {\n  \t\t"sign": "=",\n  \t\t"value": "15",\n  \t\t"onNaturalDice": true,\n  \t\t"affectSkill": true\n          }\n      }\n  }\n'})})]}),"\n",(0,n.jsx)(i.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,n.jsxs)(i.p,{children:["Once the template is ready, use ",(0,n.jsx)(i.code,{children:"/register [#channel] [file] (#user_chan) (#private_character)"}),"."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"#channel"})," is the channel where the template will be sent. It will then be used for sheet creation."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"file"})," is the previously created ",(0,n.jsx)(i.code,{children:"JSON"})," file."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"#user_chan"})," is the channel where the sheets will be published.",(0,n.jsx)(i.sup,{children:(0,n.jsx)(i.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"#private_character"})," works similarly to ",(0,n.jsx)(i.code,{children:"#user_chan"}),", but the sheets published in this channel will only be visible to the user who registered the sheet or to those who have access to this channel (as well as people with the ",(0,n.jsx)(i.code,{children:"MANAGE ROLES"})," permission). If this channel is not defined, the private sheet function will be disabled."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"?wipe"})," : Delete all character sheet in the database, if any."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"?update"})," : Update all character sheet in the database with the new template.\nThe embed will be pinned for easy access."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[":::Warning About private sheet\nIf the sheet is not marked as private but is published in a channel that users do not normally have access to, they will still be able to see the sheet with the ",(0,n.jsx)(i.code,{children:"/display"})," and ",(0,n.jsx)(i.code,{children:"/graph"})," commands.\n:::"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"embed",src:t(27743).A+"",width:"631",height:"758"})}),"\n",(0,n.jsx)(i.admonition,{title:"About default channel",type:"warning",children:(0,n.jsxs)(i.p,{children:["You need to re-register the template if you want to change the default channel for private and public sheet. But, saved user doesn't needs to be re-registered as the channel & messageID are saved in the database.\nIf you need to move all the sheets to another channel, you need to use the ",(0,n.jsx)(i.a,{href:"/en/docs/admin/config/import_export",children:(0,n.jsx)(i.code,{children:"/export"})})," command."]})}),"\n","\n",(0,n.jsxs)(i.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(i.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(i.p,{children:["It is possible to use a forum, which will automatically create a post for the character. The player (and administrators) will be mentioned in the post. ",(0,n.jsx)(i.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},27743:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/embed_template-837eb1323903e1347a681fef05c31cdb.png"},4214:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>a});var s=t(30758);const n={},l=s.createContext(n);function c(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);