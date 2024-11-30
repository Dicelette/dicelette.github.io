"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[687],{31482:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"introduction/behavior","title":"Comportement","description":"La configuration permet de modifier le comportement du bot. Ce document d\xe9crit le comportement par d\xe9faut.","source":"@site/docs/introduction/behavior.md","sourceDirName":"introduction","slug":"/introduction/behavior","permalink":"/docs/introduction/behavior","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/introduction/behavior.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Comportement","sidebar_position":2},"sidebar":"introduction","previous":{"title":"Introduction","permalink":"/docs/introduction/"},"next":{"title":"Traduction","permalink":"/docs/introduction/traduction"}}');var i=s(86070),r=s(15658);const o={title:"Comportement",sidebar_position:2},l=void 0,a={},c=[{value:"Canaux",id:"canaux",level:2},{value:"Utilisation",id:"utilisation",level:2},{value:"Reaction",id:"reaction",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.a,{href:"/docs/admin/config/",children:"configuration"})," permet de modifier le comportement du bot. Ce document d\xe9crit le comportement par d\xe9faut."]})}),"\n",(0,i.jsxs)(n.p,{children:["Le fonctionnement de ce bot repose sur l'utilisation de fils de discussion. Lors de son premier lancement, il recherchera un fil pr\xe9fix\xe9 par ",(0,i.jsx)(n.code,{children:"\ud83c\udfb2"})," :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si aucun fil n'est trouv\xe9, le bot en cr\xe9era un nouveau et y dirigera tous les logs \xe0 venir."}),"\n",(0,i.jsx)(n.li,{children:"En revanche, s'il existe d\xe9j\xe0 un fil, le bot s\xe9lectionnera le plus r\xe9cent et y enverra les logs."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Remarque",type:"note",children:(0,i.jsx)(n.p,{children:"En cas de d\xe9couverte de plusieurs fils, le bot utilisera le plus r\xe9cent et archivera les autres."})}),"\n",(0,i.jsxs)(n.p,{children:["Les commandes peuvent \xe9galement \xeatre ex\xe9cut\xe9es dans un fil existant. Dans ce cas, le bot y enverra simplement le r\xe9sultat, accessible ensuite dans les canaux dont le nom commence par ",(0,i.jsx)(n.code,{children:"\ud83c\udfb2"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Il est \xe9galement possible de cr\xe9er un nouveau fil en utilisant la commande ",(0,i.jsx)(n.a,{href:"/docs/Usage/roll#cr%C3%A9er-une-nouvelle-sc%C3%A8ne",children:"cr\xe9er une nouvelle sc\xe8ne"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Astuce",type:"tip",children:[(0,i.jsx)(n.p,{children:"Le bot fonctionne \xe9galement dans les forums, mais avec quelques diff\xe9rences :"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Plusieurs logs peuvent coexister simultan\xe9ment (sauf s'ils portent exactement le m\xeame nom)."}),"\n",(0,i.jsxs)(n.li,{children:["Les logs seront automatiquement nomm\xe9s ",(0,i.jsx)(n.code,{children:"\ud83c\udfb2 [nom du sujet]"}),", avec l'ajout automatique du tag ",(0,i.jsx)(n.code,{children:"\ud83e\udea1 Dice Roll"})," (cr\xe9\xe9 s'il n'existe pas)."]}),"\n",(0,i.jsx)(n.li,{children:"Dans ce cas, il s'agit donc d'un message qui sera cr\xe9\xe9 \xe0 la place d'un fil."}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["Il est aussi possible, via la commande ",(0,i.jsx)(n.code,{children:"/result_channel"})," de fixer un salon dans lequel sera envoy\xe9 tous les logs, plut\xf4t que de passer par un thread ou un sujet de forum."]}),"\n",(0,i.jsx)(n.h2,{id:"canaux",children:"Canaux"}),"\n",(0,i.jsxs)(n.p,{children:["Le bot enverra ",(0,i.jsx)(n.strong,{children:"aussi"})," le r\xe9sultat dans le canal o\xf9 la commande a \xe9t\xe9 initialement envoy\xe9e. Ce message :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sera supprim\xe9 apr\xe8s 3 minutes (configurable avec ",(0,i.jsx)(n.code,{children:"/config supprimer_apr\xe8s"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Contiendra un lien vers le message dans le log."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"utilisation",children:"Utilisation"}),"\n",(0,i.jsx)(n.p,{children:"Le bot peut \xeatre :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilis\xe9 avec des commandes slash (voir ",(0,i.jsx)(n.a,{href:"/docs/Usage/roll",children:"commandes"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Mais \xe9galement directement sur le message."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reaction",children:"Reaction"}),"\n",(0,i.jsx)(n.p,{children:"Il existe deux fonctions sur les r\xe9actions :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\ud83d\udce9"})," : Permet de recevoir le message du jet en DM. Dans le cas o\xf9 la sauvegarde des r\xe9sultats est activ\xe9, le message envoy\xe9 sera cette sauvegarde, utile notamment dans le cas o\xf9 vous avez activ\xe9 le lien vers le contexte !"]}),"\n",(0,i.jsx)(n.li,{children:"Lien entre les r\xe9actions : Dans le cas o\xf9 la sauvegarde du jet est activ\xe9e, les r\xe9actions sur le message du jet seront li\xe9es \xe0 la sauvegarde du jet. Tant que le bot a acc\xe8s \xe0 l'\xe9moji, il pourra r\xe9agir avec celui-ci sur le message de sauvegarde pour le lier au message du jet. Supprimer la r\xe9action la supprimera \xe9galement du message du jet."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},15658:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(30758);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);