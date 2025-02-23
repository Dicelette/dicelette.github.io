"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[390],{45040:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"config/threads","title":"Salons des r\xe9sultats","description":"D\xe9sactiver la copie des r\xe9sultats dans les threads ou envoyer dans un salon sp\xe9cifique.","source":"@site/docs/config/threads.md","sourceDirName":"config","slug":"/config/threads","permalink":"/docs/config/threads","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/config/threads.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Salons des r\xe9sultats","description":"D\xe9sactiver la copie des r\xe9sultats dans les threads ou envoyer dans un salon sp\xe9cifique.","sidebar_position":2},"sidebar":"config","previous":{"title":"Configuration g\xe9n\xe9rale","permalink":"/docs/config/"},"next":{"title":"Auto-r\xf4le","permalink":"/docs/config/auto_role"}}');var t=s(74848),l=s(28453);const r={title:"Salons des r\xe9sultats",description:"D\xe9sactiver la copie des r\xe9sultats dans les threads ou envoyer dans un salon sp\xe9cifique.",sidebar_position:2},c=void 0,a={},o=[{value:"Jets invisibles",id:"jets-invisibles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Par d\xe9faut, le bot copiera les r\xe9sultats des d\xe9s dans un thread nomm\xe9s ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"})," depuis le salon o\xf9 le jet a \xe9t\xe9 effectu\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Il est possible de :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"D\xe9sactiver la copie totalement,"}),"\n",(0,t.jsx)(n.li,{children:"Copier les r\xe9sultats dans un salon pr\xe9cis."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Si le jet est effectu\xe9 dans un fil commen\xe7ant par ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"}),", le r\xe9sultat ne sera pas copi\xe9 dans le salon configur\xe9 ou un thread automatique."]})}),"\n",(0,t.jsx)(n.admonition,{type:"usage",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/config result_channel [?disable_thread] (#channel)"})})})}),"\n",(0,t.jsx)(n.p,{children:"Il existe deux options :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"disable_thread"})," : Activez cette option pour envoyer les r\xe9sultats directement dans le salon indiqu\xe9, sans cr\xe9er de thread. Dans ce cas, l'auto-suppression des messages est d\xe9sactiv\xe9e."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"#channel"})," : Si vous mentionnez un salon, les r\xe9sultats seront envoy\xe9s dans un thread de ce salon. Cette option est ignor\xe9e si ",(0,t.jsx)(n.code,{children:"disable_thread"})," est activ\xe9."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si aucun argument n'est utilis\xe9, le comportement correspond \xe0 celui de ",(0,t.jsx)(n.code,{children:"/config result_channel true"})," : les r\xe9sultats seront envoy\xe9s directement dans le salon o\xf9 le jet a \xe9t\xe9 effectu\xe9."]}),"\n",(0,t.jsx)(n.admonition,{type:"example",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:"Envoyer les r\xe9sultats dans un channel sp\xe9cifique"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/config result_channel #channel"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/config result_channel false #channel"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:"D\xe9sactiver la cr\xe9ation automatique/le salon de r\xe9sultat"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/config result_channel true"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/config result_channel true #channel"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/config result_channel"})," (si une configuration pr\xe9c\xe9dente existe)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:"Utiliser la cr\xe9ation de thread automatique"})," : ",(0,t.jsx)(n.code,{children:"/config result_channel false"})," (les r\xe9sultats seront envoy\xe9s dans un thread dont le nom commence par ",(0,t.jsx)(n.code,{children:"\ud83c\udfb2"}),")"]}),"\n"]}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["Si la copie est enti\xe8rement d\xe9sactiv\xe9e, la ",(0,t.jsx)(n.a,{href:"/docs/config/display#d%C3%A9lais-avant-suppression-supprimer_apr%C3%A8s",children:"suppression automatique"})," des r\xe9sultats le sera aussi."]}),"\n",(0,t.jsx)(n.h2,{id:"jets-invisibles",children:"Jets invisibles"}),"\n",(0,t.jsx)(n.admonition,{type:"usage",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/config jet_invisible [?basculer] (#channel)"})})})}),"\n",(0,t.jsxs)(n.p,{children:["Cela active l'option ",(0,t.jsx)(n.code,{children:"cach\xe9"})," pour les commandes ",(0,t.jsx)(n.code,{children:"/gm"})," et ",(0,t.jsx)(n.code,{children:"/roll"})," et permet de cacher le r\xe9sultat aux autres joueurs."]}),"\n",(0,t.jsx)(n.p,{children:"Il y a deux configurations possibles :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si un salon est mentionn\xe9, ce channel sera utilis\xe9e pour la sauvegarde du jet, rempla\xe7ant le channel ",(0,t.jsx)(n.code,{children:"result_channel"})," (si configur\xe9)."]}),"\n",(0,t.jsx)(n.li,{children:"Si aucun salon n'est utilis\xe9, alors aucune sauvegarde du r\xe9sultat ne sera faite."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans les deux cas, le message sera envoy\xe9 comme un message ",(0,t.jsx)(n.a,{href:"https://support.discord.com/hc/fr/articles/1500000580222-Ephemeral-Messages-FAQ",children:(0,t.jsx)(n.strong,{children:"\xe9ph\xe9m\xe8re"})}),", signifiant qu'il n'y aura aucune trace du jet de d\xe9s dans le salon o\xf9 la commande a \xe9t\xe9 effectu\xe9e apr\xe8s un certain temps, et que personne d'autre que le lanceur ne verra le r\xe9sultat."]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);