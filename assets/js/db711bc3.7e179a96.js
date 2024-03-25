"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[906],{5647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(3274),o=t(1377);const s={sidebar_position:4},r="Traduction",a={id:"introduction/traduction",title:"Traduction",description:"Le bot est enti\xe8rement traduit en fran\xe7ais et en anglais.",source:"@site/docs/introduction/traduction.md",sourceDirName:"introduction",slug:"/introduction/traduction",permalink:"/docs/introduction/traduction",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/traduction.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"introduction",previous:{title:"Introduction",permalink:"/docs/introduction/"},next:{title:"Comportement",permalink:"/docs/introduction/Usage/"}},c={},d=[{value:"Ajouter une langue",id:"ajouter-une-langue",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"traduction",children:"Traduction"}),"\n",(0,i.jsx)(n.p,{children:"Le bot est enti\xe8rement traduit en fran\xe7ais et en anglais.\nLes slash-commands seront automatiquement traduites dans la langue du client utilis\xe9."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Par exemple, un utilisateur dont le client est en fran\xe7ais aura les r\xe9ponses en fran\xe7ais, et un utilisateur dont le client est en anglais aura les r\xe9ponses en anglais."})}),"\n",(0,i.jsx)(n.p,{children:'Mais, pour les message "direct" (c\'est-\xe0-dire les messages qui ne sont pas des slash-commands), le bot ne peut pas savoir quelle langue utiliser. Il utilisera donc la langue du serveur, qui ne peut \xeatre choisie que pour les Serveurs Communautaires.'}),"\n",(0,i.jsx)(n.h3,{id:"ajouter-une-langue",children:"Ajouter une langue"}),"\n",(0,i.jsxs)(n.p,{children:["Pour ajouter une langue, vous devez copier et traduire le fichier ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/locales/en.json",children:(0,i.jsx)(n.code,{children:"en.json"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["Le nom doit suivre le format des ",(0,i.jsx)(n.a,{href:"https://github.com/discordjs/discord-api-types/blob/main/rest/common.ts#L300",children:"locales discord.js"}),".\nPar exemple, ",(0,i.jsx)(n.code,{children:"ChineseCN"})," pour le Chinois (China) et ",(0,i.jsx)(n.code,{children:"ChineseTW"})," pour le Chinois (Taiwan)."]})}),"\n",(0,i.jsxs)(n.p,{children:["Apr\xe8s cela, vous devez ajouter la langue dans le fichier ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/i18next.ts",children:(0,i.jsx)(n.code,{children:"i18next.ts"})}),", tel que :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import NouvelleTraduction from "./locales/nouvelleTraduction.json";\n\nexport const resources = {\n\t// ...\n\tdiscordLocale: { //ie fr, en-US, etc..\n\t\ttranslation: NouvelleTraduction,\n\t},\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1377:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(9474);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);