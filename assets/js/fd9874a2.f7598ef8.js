"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[854],{7729:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(3274),n=t(1377);const r={title:"Modifier une fiche",sidebar_position:3},o="Modification des statistiques",d={id:"model/edit",title:"Modifier une fiche",description:"Une fois que l'utilisateur est valid\xe9, sa fiche sera automatiquement publi\xe9e dans un thread. Toutes les fiches seront affich\xe9es dans ce thread et suivront ce format :",source:"@site/docs/model/edit.md",sourceDirName:"model",slug:"/model/edit",permalink:"/docs/model/edit",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/edit.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Modifier une fiche",sidebar_position:3},sidebar:"model",previous:{title:"Enregistrer un utilisateur",permalink:"/docs/model/user"},next:{title:"Commandes",permalink:"/docs/model/commands"}},a={},l=[];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Une fois que l'utilisateur est valid\xe9, sa fiche sera automatiquement publi\xe9e dans un thread. Toutes les fiches seront affich\xe9es dans ce thread et suivront ce format :\n",(0,i.jsx)(s.img,{alt:"user embed",src:t(619).A+"",width:"913",height:"804"})]}),"\n",(0,i.jsx)(s.p,{children:"Seuls le mod\xe8le et l'utilisateur seront toujours pr\xe9sents (\xe0 moins qu'aucun d\xe9-type et aucun succ\xe8s/\xe9chec critique n'aient \xe9t\xe9 enregistr\xe9s dans le mod\xe8le)."}),"\n",(0,i.jsx)(s.p,{children:"Si toutes les informations sont enregistr\xe9es, vous aurez acc\xe8s \xe0 trois boutons :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Modifier les statistiques"}),"\n",(0,i.jsx)(s.li,{children:"Modifier les d\xe9s enregistr\xe9s (qui permet d'enregistrer plusieurs nouveaux d\xe9s, mais shh...)"}),"\n",(0,i.jsx)(s.li,{children:"Ajouter un nouveau d\xe9."}),"\n"]}),"\n",(0,i.jsx)(s.h1,{id:"modification-des-statistiques",children:"Modification des statistiques"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"edit stats",src:t(4328).A+"",width:"488",height:"375"})}),"\n",(0,i.jsx)(s.p,{children:"Le modal sera pr\xe9-rempli par une liste comme suit :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"- NOM : valeur\n- NOM : valeur\n- NOM : COMBINAISON\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"Il est imp\xe9ratif de conserver cette liste telle quelle pour que le bot puisse lire correctement les statistiques."})}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez supprimer les valeurs en utilisant ",(0,i.jsx)(s.code,{children:"X"})," ou en laissant vide, comme ceci :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"- NOM : X\n"})}),"\n",(0,i.jsx)(s.p,{children:'Si des statistiques ont \xe9t\xe9 supprim\xe9es du mod\xe8le, elles seront automatiquement retir\xe9es de la liste. De plus, elles seront automatiquement ajout\xe9es d\xe8s leur ajout au mod\xe8le, avec une valeur par d\xe9faut de "0".'}),"\n",(0,i.jsx)(s.p,{children:"Il est possible de modifier les combinaisons."}),"\n",(0,i.jsx)(s.p,{children:"Enfin, les valeurs ne seront pas v\xe9rifi\xe9es par rapport au total enregistr\xe9 initialement dans le mod\xe8le. Les ma\xeetres de jeu doivent donc v\xe9rifier les valeurs lors de l'\xe9dition."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Si les statistiques sont modifi\xe9es et que les logs sont activ\xe9s, un message de modification sera envoy\xe9 dans le canal configur\xe9 dans les logs."})}),"\n",(0,i.jsx)(s.h1,{id:"modification-des-d\xe9s",children:"Modification des d\xe9s"}),"\n",(0,i.jsx)(s.p,{children:"Tout comme pour les statistiques, le modal sera pr\xe9-rempli par une liste comme suit :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"- NOM : d\xe9s\n"})}),"\n",(0,i.jsx)(s.p,{children:"Tout comme lors de l'enregistrement, les d\xe9s seront \xe9valu\xe9s pour v\xe9rifier leur validit\xe9. De plus, vous pouvez ajouter autant de d\xe9s que vous le souhaitez !"}),"\n",(0,i.jsx)(s.p,{children:'Comme pour les statistiques, il est essentiel de respecter la liste et sa syntaxe. Vous pouvez supprimer des champs en rempla\xe7ant la valeur par "X" ou "0".'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"edit dice",src:t(168).A+"",width:"505",height:"395"})}),"\n",(0,i.jsx)(s.h1,{id:"ajout-dun-nouveau-d\xe9",children:"Ajout d'un nouveau d\xe9"}),"\n",(0,i.jsx)(s.p,{children:"L'ajout d'un d\xe9 fonctionne exactement comme lors de l'enregistrement d'un personnage."})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},168:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/edit_dice-3aea41231646f7a3e2710f7e8c93ea95.png"},4328:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/edit_stats-dbc5392e601d21f61ff5eec5b4acf788.png"},619:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/user_embed-420dd9cda70288b585d3b05097c12239.png"},1377:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var i=t(9474);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);