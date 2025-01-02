"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[950],{68029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"dev/traduction","title":"Translation","description":"The bot is fully available in French and English. Slash commands will be automatically translated into the language of the client being used.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/dev/traduction.md","sourceDirName":"dev","slug":"/dev/traduction","permalink":"/en/docs/dev/traduction","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/dev/traduction.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Translation"},"sidebar":"TOS","next":{"title":"Terms of Service","permalink":"/en/docs/dev/TOS/"}}');var i=t(74848),o=t(28453);const a={sidebar_position:3,title:"Translation"},r=void 0,c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The bot is fully available in French and English. Slash commands will be automatically translated into the language of the client being used."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"For example, a user whose client is in French will receive responses in French, while a user whose client is in English will receive responses in English."})}),"\n",(0,i.jsx)(n.p,{children:'However, for "direct" messages (i.e., messages that are not slash commands), the bot cannot determine which language to use. Therefore, it will use the server\'s language, which can only be selected for Community Servers.'}),"\n",(0,i.jsxs)(n.p,{children:["To add a new language, you need to copy and translate the ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/locales/en.json",children:(0,i.jsx)(n.code,{children:"en.json"})})," file."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["The name must follow the format of ",(0,i.jsx)(n.a,{href:"https://github.com/discordjs/discord-api-types/blob/main/rest/common.ts#L300",children:"discord.js locales"}),". For example, ",(0,i.jsx)(n.code,{children:"ChineseCN"})," for Chinese (China) and ",(0,i.jsx)(n.code,{children:"ChineseTW"})," for Chinese (Taiwan)."]})}),"\n",(0,i.jsxs)(n.p,{children:["Next, you need to add the language to the ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/blob/main/src/localizations/i18next.ts",children:(0,i.jsx)(n.code,{children:"i18next.ts"})})," file as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import NewTranslation from "./locales/newTranslation.json";\n\nexport const resources = {\n\t// ...\n\tdiscordLocale: { // e.g. fr, en-US, etc.\n\t\ttranslation: NewTranslation,\n\t},\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);