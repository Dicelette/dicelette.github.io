"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[43],{55305:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(86070),a=t(15658);const s={title:"Editing an user sheet",sidebar_position:3},d=void 0,r={id:"admin/edit",title:"Editing an user sheet",description:"Once the user is validated, their character sheet will be automatically published in a thread or in the chosen channel. All character sheets will follow this format:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/admin/edit.md",sourceDirName:"admin",slug:"/admin/edit",permalink:"/en/docs/admin/edit",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/admin/edit.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Editing an user sheet",sidebar_position:3},sidebar:"model",previous:{title:"Registering an user",permalink:"/en/docs/admin/user"},next:{title:"Game Master Dice",permalink:"/en/docs/admin/mj_dice"}},l={},c=[{value:"Edit user data",id:"edit-user-data",level:2},{value:"Editing the avatar image",id:"editing-the-avatar-image",level:3},{value:"Rename a character",id:"rename-a-character",level:3},{value:"Move to another user",id:"move-to-another-user",level:3},{value:"Editing Statistics",id:"editing-statistics",level:2},{value:"Editing Dice",id:"editing-dice",level:2},{value:"Adding a new dice",id:"adding-a-new-dice",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Once the user is validated, their character sheet will be automatically published in a thread or in the chosen channel. All character sheets will follow this format:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"user embed",src:t(4579).A+"",width:"698",height:"718"})}),"\n",(0,n.jsx)(i.p,{children:"Only the template and the user will always be present, unless no die type and no critical success/failure have been recorded in the template."}),"\n",(0,n.jsx)(i.p,{children:"If all information is saved, you will have access to three buttons:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Edit user data : avatar (embed thumbnail), character name or move to another user,"}),"\n",(0,n.jsx)(i.li,{children:"Edit Statistics"}),"\n",(0,n.jsx)(i.li,{children:"Edit Saved Dice (which allows saving multiple new dice, but shh...)"}),"\n",(0,n.jsx)(i.li,{children:"Add a New Die."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"edit-user-data",children:"Edit user data"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{src:t(32464).A+"",width:"589",height:"259"}),"\nEach tree commands will open a modal to edit the corresponding data."]}),"\n",(0,n.jsx)(i.p,{children:"If you are using a old version of the bot, you will have to use the following commands:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/en/docs/Usage/model#edit-avatar-edit_avatar",children:(0,n.jsx)(i.code,{children:"/edit avatar"})})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/en/docs/Usage/model#rename",children:(0,n.jsx)(i.code,{children:"/edit rename"})})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/en/docs/Usage/model#user",children:(0,n.jsx)(i.code,{children:"/edit user"})})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"To add the new button."}),"\n",(0,n.jsx)(i.h3,{id:"editing-the-avatar-image",children:"Editing the avatar image"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"edit image",src:t(60573).A+"",width:"434",height:"279"})}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["Images stored on Discord cannot be used as their links change regularly. It is therefore mandatory to use external links, for example, by using ",(0,n.jsx)(i.a,{href:"https://imgur.com/",children:"imgur"}),".\n",(0,n.jsx)(i.a,{href:"https://www.bleepingcomputer.com/news/security/discord-will-switch-to-temporary-file-links-to-block-malware-delivery/",children:"See here for more information"}),"."]})}),"\n",(0,n.jsx)(i.h3,{id:"rename-a-character",children:"Rename a character"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"rename",src:t(50059).A+"",width:"452",height:"287"})}),"\n",(0,n.jsx)(i.p,{children:"As the command, it doesn't allow duplicate character name. Each character must have different name, or error will be throw."}),"\n",(0,n.jsx)(i.h3,{id:"move-to-another-user",children:"Move to another user"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"move",src:t(24258).A+"",width:"443",height:"288"})}),"\n",(0,n.jsxs)(i.p,{children:["It will ",(0,n.jsx)(i.strong,{children:"move"})," the character to another user, deleting the one on the old user. An error will be throw in case of duplicate, and action will be undone."]}),"\n",(0,n.jsx)(i.h2,{id:"editing-statistics",children:"Editing Statistics"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"edit stats",src:t(87087).A+"",width:"488",height:"375"})}),"\n",(0,n.jsx)(i.p,{children:"The modal will be pre-filled with a list as follows:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-md",children:"- NAME: value\n- NAME: value\n- NAME: COMBINATION\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"It is imperative to keep this list as is so that the bot can correctly read the statistics."})}),"\n",(0,n.jsxs)(i.p,{children:["You can remove values by using ",(0,n.jsx)(i.code,{children:"X"})," or leaving it blank, like this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-md",children:"- NAME: X\n"})}),"\n",(0,n.jsx)(i.p,{children:'If statistics have been removed from the template, they will be automatically removed from the list. Additionally, they will be automatically added back when added to the template, with a default value of "0".'}),"\n",(0,n.jsx)(i.p,{children:"It is possible to modify combinations."}),"\n",(0,n.jsx)(i.p,{children:"Finally, values will not be checked against the total initially recorded in the template. Game masters must therefore verify the values during editing."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"If statistics are edited and logs are enabled, a modification message will be sent to the channel configured in the logs."})}),"\n",(0,n.jsx)(i.h2,{id:"editing-dice",children:"Editing Dice"}),"\n",(0,n.jsx)(i.p,{children:"Just like with statistics, the modal will be pre-filled with a list as follows:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-md",children:"- NAME: dice\n"})}),"\n",(0,n.jsx)(i.p,{children:"Just like during recording, dice will be evaluated to verify their validity. Additionally, you can add as many dice as you like!"}),"\n",(0,n.jsx)(i.p,{children:'As with statistics, it is essential to adhere to the list and its syntax. You can delete fields by replacing the value with "X" or "0".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"edit dice",src:t(53977).A+"",width:"505",height:"395"})}),"\n",(0,n.jsx)(i.h2,{id:"adding-a-new-dice",children:"Adding a new dice"}),"\n",(0,n.jsx)(i.p,{children:"Adding a die works exactly like when recording a character."})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},53977:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/dice-3aea41231646f7a3e2710f7e8c93ea95.png"},24258:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/move-44e634520aa3eadbca3402353112b7fa.png"},50059:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/rename-a409325ddbe384cec283e9e0b9226bed.png"},32464:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/user-3447afce0e3a846e5fddf02f20684e26.png"},60573:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/image-0a5634ec6ab46eb72c7cb8d6c97920a7.png"},87087:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/stats-dbc5392e601d21f61ff5eec5b4acf788.png"},4579:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/user_embed-22d399fbfa939912e10ff0b58240c833.png"},15658:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>r});var n=t(30758);const a={},s=n.createContext(a);function d(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);