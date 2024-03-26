"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[981],{9767:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=n(3274),r=n(1377);const t={title:"Enregistrement",sidebar_position:1},d="D\xe9s",l={id:"model/register/index",title:"Enregistrement",description:"Tout d'abord, vous devez g\xe9n\xe9rer un nouveau mod\xe8le. Pour ce faire, utilisez la commande /register, suivie du nom du mod\xe8le. Par exemple, pour cr\xe9er un mod\xe8le de fiche de personnage, vous pouvez utiliser la commande suivante : /g\xe9n\xe9rer.",source:"@site/docs/model/register/index.md",sourceDirName:"model/register",slug:"/model/register/",permalink:"/docs/model/register/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/register/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Enregistrement",sidebar_position:1},sidebar:"model",next:{title:"R\xe9f\xe9rence de mod\xe8le de serveur",permalink:"/docs/model/register/template"}},o={},c=[{value:"Et ensuite ?",id:"et-ensuite-",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Tout d'abord, vous devez ",(0,i.jsx)(s.strong,{children:"g\xe9n\xe9rer"})," un nouveau mod\xe8le. Pour ce faire, utilisez la commande ",(0,i.jsx)(s.code,{children:"/register"}),", suivie du nom du mod\xe8le. Par exemple, pour cr\xe9er un mod\xe8le de fiche de personnage, vous pouvez utiliser la commande suivante : ",(0,i.jsx)(s.code,{children:"/g\xe9n\xe9rer"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Cette commande vous permettra de cr\xe9er un nouveau fichier ",(0,i.jsx)(s.code,{children:"JSON"}),", avec les param\xe8tres (facultatifs) suivants :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"nom"})," : Le nom des statistiques \xe0 s\xe9parer par un espace ou une virgule. Si l'une des statistiques contient un espace, vous devez l'entourer de guillemets. Par exemple : ",(0,i.jsx)(s.code,{children:'"Logique d\'intelligence", Force, Dext\xe9rit\xe9'}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"d\xe9"})," : Le type de d\xe9s \xe0 lancer, qui peut contenir une formule (cf. ",(0,i.jsx)(s.a,{href:"#d%C3%A9s",children:"#d\xe9s"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"total"})," : Si, lors de la cr\xe9ation, vos joueurs ont un nombre de points \xe0 r\xe9partir. Malheureusement, il n'est pas possible de poser des conditions \xe0 ce total (par exemple, en fonction de l'\xe2ge du personnage, il n'aura que 60 points, tandis qu'un personnage plus \xe2g\xe9 en aura 70). Dans ces cas-l\xe0, il vaut mieux choisir la valeur la plus \xe9lev\xe9e et v\xe9rifier manuellement."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"personnage"})," : Vous pouvez rendre l'inscription d'un nom de personnage obligatoire avec cette option."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"succ\xe8s_critique"})," : En d\xe9 naturel, si un d\xe9 tombe sur cette valeur, il est consid\xe9r\xe9 comme un succ\xe8s critique."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"\xe9chec_critique"})," : En d\xe9 naturel, si un d\xe9 tombe sur cette valeur, il est consid\xe9r\xe9 comme un \xe9chec critique."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"comp\xe9tence"})," : Permet de d\xe9finir (lorsque le mod\xe8le sera \xe9dit\xe9 avant l'enregistrement) l'ajout de champs pour des d\xe9s de comp\xe9tences (ou d'attaque). Comme pour le nom, vous devez s\xe9parer les valeurs par une virgule."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Pour des exemples de mod\xe8le, vous pouvez consulter les fichiers ",(0,i.jsx)(s.code,{children:"template"})," ",(0,i.jsx)(s.a,{href:"https://github.com/Dicelette/discord-dicelette/tree/main/template",children:"ici"})," ou ",(0,i.jsx)(s.a,{href:"register/template",children:"ici"}),"."]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"Les statistiques et les d\xe9s sont facultatifs :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["L'absence de statistiques emp\xeachera l'utilisation de la commande ",(0,i.jsx)(s.code,{children:"/dbroll"}),", et vous ne pourrez pas enregistrer de statistiques sur les fiches. Si vous enregistrez les statistiques apr\xe8s avoir cr\xe9\xe9 des utilisateurs, vous devrez recr\xe9er les fiches."]}),"\n",(0,i.jsxs)(s.li,{children:["L'absence de d\xe9s (que ce soit dans les mod\xe8les ou les fiches) emp\xeachera l'utilisation de ",(0,i.jsx)(s.code,{children:"/dbd"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(s.h1,{id:"d\xe9s",children:"D\xe9s"}),"\n",(0,i.jsx)(s.p,{children:"Il existe deux types de d\xe9s :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Le d\xe9 qui sera lanc\xe9 par la commande ",(0,i.jsx)(s.code,{children:"dbroll"}),", que nous appellerons ",(0,i.jsx)(s.strong,{children:"d\xe9 type"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Les d\xe9s enregistr\xe9s pour la commande ",(0,i.jsx)(s.code,{children:"dbd"}),", que nous nommerons ",(0,i.jsx)(s.strong,{children:"d\xe9s enregistr\xe9s"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Les deux types de d\xe9s doivent respecter la syntaxe de l'API de ",(0,i.jsx)(s.a,{href:"https://dice-roller.github.io/documentation/",children:"dice-roller"}),", et peuvent supporter diff\xe9rentes formules math\xe9matiques."]}),"\n",(0,i.jsxs)(s.p,{children:["Dans les deux cas, vous pouvez utiliser la syntaxe ",(0,i.jsx)(s.code,{children:"{{"})," et ",(0,i.jsx)(s.code,{children:"}}"})," pour \xe9crire des formules math\xe9matiques complexes, telles que ",(0,i.jsx)(s.code,{children:"ceil"}),", ",(0,i.jsx)(s.code,{children:"floor"}),", ",(0,i.jsx)(s.code,{children:"round"}),', etc. Cependant, si vous souhaitez "viser" une statistique, la syntaxe sera diff\xe9rente en fonction de ce que vous utilisez :']}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Les d\xe9s types visent uniquement la syntaxe utilis\xe9e dans la commande ",(0,i.jsx)(s.code,{children:"dbroll"}),". Le signe pour indiquer une statistique est ",(0,i.jsx)(s.code,{children:"$"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Les d\xe9s enregistr\xe9s visent la syntaxe utilis\xe9e dans la commande ",(0,i.jsx)(s.code,{children:"dbd"}),". Puisque vous avez acc\xe8s \xe0 toutes les statistiques, vous pouvez les viser directement avec leur nom."]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{title:"Exemple",type:"tip",children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Pour un d\xe9 type : ",(0,i.jsx)(s.code,{children:"1d6>$"})," ou ",(0,i.jsx)(s.code,{children:"1d6+$"})]}),"\n",(0,i.jsxs)(s.li,{children:["Pour un d\xe9 enregistr\xe9 : ",(0,i.jsx)(s.code,{children:"1d6 > Force"})," ou ",(0,i.jsx)(s.code,{children:"1d6 + Force"})]}),"\n"]}),(0,i.jsx)(s.p,{children:"Pour un d\xe9 bas\xe9 sur une formule :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Pour un d\xe9 type : ",(0,i.jsx)(s.code,{children:"1d6 + {{ceil($ / 2)}}"})]}),"\n",(0,i.jsxs)(s.li,{children:["Pour un d\xe9 enregistr\xe9 : ",(0,i.jsx)(s.code,{children:"1d6 + {{ceil(Force / 2)}}"})]}),"\n"]}),(0,i.jsx)(s.p,{children:"Il est \xe9galement possible de comparer avec une formule :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Pour un d\xe9 type : ",(0,i.jsx)(s.code,{children:"1d6 > {{ceil($ / 2)}}"})]}),"\n",(0,i.jsxs)(s.li,{children:["Pour un d\xe9 enregistr\xe9 : ",(0,i.jsx)(s.code,{children:"1d6 > {{ceil(Force / 2)}}"})]}),"\n"]})]}),"\n",(0,i.jsx)(s.h1,{id:"statistiques",children:"Statistiques"}),"\n",(0,i.jsx)(s.p,{children:"Les statistiques sont bas\xe9es sur un nom, mais vous remarquerez qu'apr\xe8s avoir g\xe9n\xe9r\xe9 le fichier, chaque statistique aura trois champs :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"min"})," : La valeur minimale que la statistique peut avoir."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"max"})," : La valeur maximale que la statistique peut avoir."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"combinaison"})," : Si la statistique est une combinaison de plusieurs autres statistiques, vous pouvez l'indiquer ici. Par exemple, si la statistique ",(0,i.jsx)(s.code,{children:"Esquive"})," est la somme de ",(0,i.jsx)(s.code,{children:"Force"})," et ",(0,i.jsx)(s.code,{children:"Dext\xe9rit\xe9"}),", vous pouvez l'indiquer ici. L'utilisation d'une combinaison annule automatiquement les valeurs ",(0,i.jsx)(s.code,{children:"min"})," et ",(0,i.jsx)(s.code,{children:"max"}),". De plus, les statistiques combin\xe9es ne seront pas calcul\xe9es dans la somme du total."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Mod\xe8le vide"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n"charName": false,\n"statistics": {\n  "NOM": {\n    "min": 1,\n    "max": 20,\n    "combinaison": ""\n  },\n  "COMBINAISON": {\n    "combinaison": "NOM*2"\n  },\n},\n"diceType": "",\n"critical": {\n  "failure": 0,\n  "success": 0\n},\n"total": 0,\n"damage": {\n  "NOM": ""\n}\n}\n'})})]}),"\n",(0,i.jsx)(s.h2,{id:"et-ensuite-",children:"Et ensuite ?"}),"\n",(0,i.jsxs)(s.p,{children:["Une fois que le mod\xe8le a \xe9t\xe9 cr\xe9\xe9 et que vous en \xeates satisfait\xb7e, vous pouvez utiliser la commande ",(0,i.jsx)(s.code,{children:"/register <channel> <fichier>"}),". Vous devez choisir :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Le canal qui servira \xe0 la fois pour la cr\xe9ation de nouveaux personnages et o\xf9 leur fiche sera repost\xe9e (dans un thread nomm\xe9 ",(0,i.jsx)(s.code,{children:"\ud83d\udcdd \u2022 [STATS]"}),")."]}),"\n",(0,i.jsx)(s.li,{children:"Le fichier que vous venez de cr\xe9er et d'\xe9diter."}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"Si vous voulez autoriser vos joueurs \xe0 modifier leur propre fiche, vous pouvez choisir un canal auquel ils ont acc\xe8s. Sinon, il suffit de choisir un canal priv\xe9."})}),"\n",(0,i.jsx)(s.p,{children:"Pour des raisons pratiques, l'embed sera \xe9pingl\xe9."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"embed",src:n(7273).A+"",width:"862",height:"799"})})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7273:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/embed_template-f8f9d6f87ec03772b2e6e6cfc0ca2798.png"},1377:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var i=n(9474);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);