"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[981],{52663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=s(13274),r=s(99128);const t={title:"Enregistrement",sidebar_position:1},d="Enregistrement d'un Mod\xe8le",l={id:"model/register/index",title:"Enregistrement",description:"Pour commencer, vous devez g\xe9n\xe9rer un nouveau mod\xe8le. Utilisez /register suivi du nom du mod\xe8le. Vous pouvez aussi cr\xe9er un mod\xe8le vide en utilisant /g\xe9n\xe9rer ou en utilisant le formulaire disponible ici m\xeame.",source:"@site/docs/model/register/index.md",sourceDirName:"model/register",slug:"/model/register/",permalink:"/docs/model/register/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/register/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Enregistrement",sidebar_position:1},sidebar:"model",next:{title:"R\xe9f\xe9rence de mod\xe8le de serveur",permalink:"/docs/model/register/template"}},c={},o=[{value:"D\xe9s",id:"d\xe9s",level:2},{value:"Statistiques",id:"statistiques",level:2},{value:"Prochaine \xc9tape",id:"prochaine-\xe9tape",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"enregistrement-dun-mod\xe8le",children:"Enregistrement d'un Mod\xe8le"}),"\n",(0,i.jsxs)(n.p,{children:["Pour commencer, vous devez ",(0,i.jsx)(n.strong,{children:"g\xe9n\xe9rer"})," un nouveau mod\xe8le. Utilisez ",(0,i.jsx)(n.code,{children:"/register"})," suivi du nom du mod\xe8le. Vous pouvez aussi cr\xe9er un mod\xe8le vide en utilisant ",(0,i.jsx)(n.code,{children:"/g\xe9n\xe9rer"})," ou en utilisant le formulaire disponible ",(0,i.jsx)(n.a,{href:"/docs/model/register/form",children:"ici m\xeame"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Cette commande vous permet de cr\xe9er un fichier ",(0,i.jsx)(n.code,{children:"JSON"})," avec les param\xe8tres suivants (optionnels) :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nom"})," : Le nom des statistiques, s\xe9par\xe9es par des virgules. Si un nom contient un espace, entourez-le de guillemets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"d\xe9"})," : Le type de d\xe9s \xe0 lancer, qui peut inclure une formule."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"total"})," : Le nombre total de points que les joueurs peuvent r\xe9partir."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"personnage"})," : Rendre obligatoire l'inscription d'un nom de personnage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"succ\xe8s_critique"})," : La valeur consid\xe9r\xe9e comme un succ\xe8s critique."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\xe9chec_critique"})," : La valeur consid\xe9r\xe9e comme un \xe9chec critique."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"comp\xe9tence"})," : Ajouter des champs pour des d\xe9s de comp\xe9tences ou d'attaque."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Consultez les exemples de mod\xe8le dans les fichiers ",(0,i.jsx)(n.code,{children:"template"})," ",(0,i.jsx)(n.a,{href:"https://github.com/Dicelette/discord-dicelette/tree/main/template",children:"ici"})," ou ",(0,i.jsx)(n.a,{href:"register/template",children:"ici"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Remarque",type:"info",children:[(0,i.jsx)(n.p,{children:"Les statistiques et les d\xe9s sont facultatifs :"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sans statistiques, vous ne pourrez pas utiliser la commande ",(0,i.jsx)(n.code,{children:"/dbroll"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Sans d\xe9s, vous ne pourrez pas utiliser ",(0,i.jsx)(n.code,{children:"/dbd"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"d\xe9s",children:"D\xe9s"}),"\n",(0,i.jsx)(n.p,{children:"Il y a deux types de d\xe9s :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le d\xe9 utilis\xe9 avec ",(0,i.jsx)(n.code,{children:"dbroll"})," (le ",(0,i.jsx)(n.strong,{children:"d\xe9 type"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Les d\xe9s enregistr\xe9s pour ",(0,i.jsx)(n.code,{children:"dbd"})," (les ",(0,i.jsx)(n.strong,{children:"d\xe9s sauvegard\xe9s"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Les deux types de d\xe9s suivent la syntaxe de ",(0,i.jsx)(n.a,{href:"https://dice-roller.github.io/documentation/",children:"dice-roller"}),". Vous pouvez utiliser des formules math\xe9matiques complexes avec ",(0,i.jsx)(n.code,{children:"{{"})," et ",(0,i.jsx)(n.code,{children:"}}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Pour viser une statistique, cela est diff\xe9rent selon le type de d\xe9 :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 type, il faut utiliser ",(0,i.jsx)(n.code,{children:"$"}),". Ce symbole sera utilis\xe9 par la valeur de la statistique utilis\xe9e par ",(0,i.jsx)(n.code,{children:"/dbroll"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Pour les d\xe9s enregistr\xe9s, il suffit d'utiliser les noms des statistiques."}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Exemple",type:"tip",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 type : ",(0,i.jsx)(n.code,{children:"1d6>$"})," ou ",(0,i.jsx)(n.code,{children:"1d6+$"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 enregistr\xe9 : ",(0,i.jsx)(n.code,{children:"1d6 > Force"})," ou ",(0,i.jsx)(n.code,{children:"1d6 + Force"})]}),"\n"]}),(0,i.jsx)(n.p,{children:"Pour un d\xe9 bas\xe9 sur une formule :"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 type : ",(0,i.jsx)(n.code,{children:"1d6 + {{ceil($ / 2)}}"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 enregistr\xe9 : ",(0,i.jsx)(n.code,{children:"1d6 + {{ceil(Force / 2)}}"})]}),"\n"]}),(0,i.jsx)(n.p,{children:"Il est \xe9galement possible de comparer avec une formule :"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 type : ",(0,i.jsx)(n.code,{children:"1d6 > {{ceil($ / 2)}}"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pour un d\xe9 enregistr\xe9 : ",(0,i.jsx)(n.code,{children:"1d6 > {{ceil(Force / 2)}}"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"statistiques",children:"Statistiques"}),"\n",(0,i.jsxs)(n.p,{children:["Chaque statistique a un nom, une valeur minimale (",(0,i.jsx)(n.code,{children:"min"}),"), une valeur maximale (",(0,i.jsx)(n.code,{children:"max"}),") et une option de combinaison (",(0,i.jsx)(n.code,{children:"combinaison"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"min"})," et ",(0,i.jsx)(n.code,{children:"max"})," correspondent \xe0 la minimale et/ou maximale que peut prendre cette valeur lors de l'enregistrement."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"combinaison"})," correspond \xe0 une combinaison de plusieurs autres statistiques. L'utilisation de ce champ ne peut coexister avec ",(0,i.jsx)(n.code,{children:"min"})," et ",(0,i.jsx)(n.code,{children:"max"})," et les statistiques combin\xe9es ne seront pas d\xe9compt\xe9es du total de point allou\xe9 dans le champ ",(0,i.jsx)(n.code,{children:"total"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Mod\xe8le vide"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n"charName": false,\n"statistics": {\n  "NOM": {\n    "min": 1,\n    "max": 20,\n    "combinaison": ""\n  },\n  "COMBINAISON": {\n    "combinaison": "NOM*2"\n  },\n},\n"diceType": "",\n"critical": {\n  "failure": 0,\n  "success": 0\n},\n"total": 0,\n"damage": {\n  "NOM": ""\n}\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"prochaine-\xe9tape",children:"Prochaine \xc9tape"}),"\n",(0,i.jsxs)(n.p,{children:["Une fois que le mod\xe8le est pr\xeat, utilisez ",(0,i.jsx)(n.code,{children:"/register <channel> <fichier>"}),". Choisissez :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le canal pour le bouton de cr\xe9ation de fiches."}),"\n",(0,i.jsx)(n.li,{children:"Le fichier modifi\xe9."}),"\n",(0,i.jsxs)(n.li,{children:["(Optionnel) Le canal dans lequel seront post\xe9es les fiches. En cas d'omission, les fiches seront post\xe9es dans un fil nomm\xe9 ",(0,i.jsx)(n.code,{children:"\ud83d\udcdd \u2022 [STATS]"})," (cr\xe9\xe9 \xe0 partir du canal o\xf9 se trouve le bouton de cr\xe9ation des fiches)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"L'embed sera \xe9pingl\xe9 pour faciliter l'acc\xe8s."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"embed",src:s(17273).A+"",width:"862",height:"799"})}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,i.jsx)(n.p,{children:"Vous ne pourrez pas modifier le canal de publication des fiches sans perdre les anciennes fiches car le canal est enregistr\xe9 globalement, et non pas sp\xe9cifiquement pour chaque fiche."})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},17273:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/embed_template-f8f9d6f87ec03772b2e6e6cfc0ca2798.png"},99128:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(79474);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);