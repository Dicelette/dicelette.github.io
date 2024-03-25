"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[995],{697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(3274),r=t(1377);const s={sidebar_position:2,title:"R\xe9f\xe9rence de mod\xe8le de serveur"},o="DND-like",c={id:"model/register/template",title:"R\xe9f\xe9rence de mod\xe8le de serveur",description:"",source:"@site/docs/model/register/template.md",sourceDirName:"model/register",slug:"/model/register/template",permalink:"/docs/model/register/template",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/register/template.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"R\xe9f\xe9rence de mod\xe8le de serveur"},sidebar:"model",previous:{title:"Enregistrement",permalink:"/docs/model/register/"},next:{title:"Enregistrer un utilisateur",permalink:"/docs/model/register/user"}},l={},d=[];function a(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dnd-like",children:"DND-like"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "charName": false,\n  "statistics": {\n    "Force": {\n      "min": 1\n    },\n    "Dext\xe9rit\xe9": {\n      "min": 1\n    },\n    "Constitution": {\n      "min": 1\n    },\n    "Intelligence": {\n      "min": 1\n    },\n    "Sagesse": {\n      "min": 1\n    },\n    "Charisme": {\n      "min": 1\n    }\n  },\n  "diceType": "1d20+{{ceil(($-10)/2)}}>20",\n  "critical": {\n    "failure": 1,\n    "success": 20\n  },\n  "total": 27\n}\n'})}),"\n",(0,i.jsx)(n.h1,{id:"simple-syst\xe8me",children:"Simple syst\xe8me"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "charName": true,\n  "statistics": {\n    "Force": {\n      "min": 3\n    },\n    "Endurance": {\n      "min": 3\n    },\n    "Agilit\xe9": {\n      "min": 3\n    },\n    "Constitution": {\n      "min": 3\n    },\n    "\xc9ducation": {\n      "min": 3\n    },\n    "Intelligence": {\n      "min": 3\n    },\n    "Charisme": {\n      "min": 3\n    },\n    "Pouvoir": {\n      "min": 3\n    },\n    "PV": {\n      "combinaison": "endurance*2+force"\n    }\n  },\n  "diceType": "1d20+$>20",\n  "critical": {\n    "failure": 1,\n    "success": 20\n  },\n  "total": 88\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1377:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(9474);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);