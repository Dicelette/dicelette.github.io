"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[679],{26716:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(13274),i=s(42463);const l={title:"Comportement"},r=void 0,o={id:"introduction/Usage/index",title:"Comportement",description:"Le fonctionnement de ce bot repose sur l'utilisation de fils de discussion. Lors de son premier lancement, il recherchera un fil pr\xe9fix\xe9 par \ud83c\udfb2 :",source:"@site/docs/introduction/Usage/index.md",sourceDirName:"introduction/Usage",slug:"/introduction/Usage/",permalink:"/docs/introduction/Usage/",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/introduction/Usage/index.md",tags:[],version:"current",frontMatter:{title:"Comportement"},sidebar:"introduction",previous:{title:"Traduction",permalink:"/docs/introduction/traduction"},next:{title:"Envoi de Message",permalink:"/docs/introduction/Usage/message"}},a={},c=[{value:"Canaux",id:"canaux",level:2},{value:"Utilisation",id:"utilisation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Le fonctionnement de ce bot repose sur l'utilisation de fils de discussion. Lors de son premier lancement, il recherchera un fil pr\xe9fix\xe9 par ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si aucun fil n'est trouv\xe9, le bot en cr\xe9era un nouveau et y dirigera tous les logs \xe0 venir."}),"\n",(0,t.jsx)(n.li,{children:"En revanche, s'il existe d\xe9j\xe0 un fil, le bot s\xe9lectionnera le plus r\xe9cent et y enverra les logs."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Remarque",type:"note",children:(0,t.jsx)(n.p,{children:"En cas de d\xe9couverte de plusieurs fils, le bot utilisera le plus r\xe9cent et archivera les autres."})}),"\n",(0,t.jsxs)(n.p,{children:["Les commandes peuvent \xe9galement \xeatre ex\xe9cut\xe9es dans un fil existant. Dans ce cas, le bot y enverra simplement le r\xe9sultat, accessible ensuite dans les canaux dont le nom commence par ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Il est \xe9galement possible de cr\xe9er un nouveau fil en utilisant la commande ",(0,t.jsx)(n.a,{href:"./slashcommands.md#cr%C3%A9er-une-nouvelle-sc%C3%A8ne",children:"cr\xe9er une nouvelle sc\xe8ne"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Astuce",type:"tip",children:[(0,t.jsx)(n.p,{children:"Le bot fonctionne \xe9galement dans les forums, mais avec quelques diff\xe9rences :"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Plusieurs logs peuvent coexister simultan\xe9ment (sauf s'ils portent exactement le m\xeame nom)."}),"\n",(0,t.jsxs)(n.li,{children:["Les logs seront automatiquement nomm\xe9s ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2 [nom du sujet]"}),", avec l'ajout automatique du tag ",(0,t.jsx)(n.code,{children:"\ud83e\udea1 Dice Roll"})," (cr\xe9\xe9 s'il n'existe pas)."]}),"\n",(0,t.jsx)(n.li,{children:"Dans ce cas, il s'agit donc d'un message qui sera cr\xe9\xe9 \xe0 la place d'un fil."}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Il est aussi possible, via la commande ",(0,t.jsx)(n.code,{children:"/result_channel"})," de fixer un channel dans lequel sera envoy\xe9 tous les logs, plut\xf4t que de passer par un thread ou un sujet de forum."]}),"\n",(0,t.jsx)(n.h2,{id:"canaux",children:"Canaux"}),"\n",(0,t.jsxs)(n.p,{children:["Le bot enverra ",(0,t.jsx)(n.strong,{children:"aussi"})," le r\xe9sultat dans le canal o\xf9 la commande a \xe9t\xe9 initialement envoy\xe9e. Ce message :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sera supprim\xe9 apr\xe8s 3 minutes."}),"\n",(0,t.jsx)(n.li,{children:"Contiendra un lien vers le message dans le log."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"utilisation",children:"Utilisation"}),"\n",(0,t.jsx)(n.p,{children:"Le bot peut \xeatre :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Utilis\xe9 avec des commandes slash (voir ",(0,t.jsx)(n.a,{href:"./slashcommands",children:"Slashcommands"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"Mais \xe9galement directement sur le message."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},42463:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(79474);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);