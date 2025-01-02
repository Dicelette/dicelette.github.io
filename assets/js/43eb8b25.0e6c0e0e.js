"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[144],{53392:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"config/logs","title":"Journalisation","description":"Journalisation des modifications et des erreurs : /config logs","source":"@site/docs/config/logs.md","sourceDirName":"config","slug":"/config/logs","permalink":"/docs/config/logs","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/config/logs.md","tags":[],"version":"current","frontMatter":{"title":"Journalisation"}}');var i=n(74848),t=n(28453);const l={title:"Journalisation"},o=void 0,a={},c=[{value:"Journalisation des modifications et des erreurs : <code>/config logs</code>",id:"journalisation-des-modifications-et-des-erreurs--config-logs",level:2},{value:"Sauvegarde des r\xe9sultats: <code>result_channel</code>",id:"sauvegarde-des-r\xe9sultats-result_channel",level:2},{value:"D\xe9sactiver l&#39;auto-cr\xe9ation des threads: <code>d\xe9sactiver_threads</code>",id:"d\xe9sactiver-lauto-cr\xe9ation-des-threads-d\xe9sactiver_threads",level:2},{value:"Jets invisibles: <code>jet_invisible</code>",id:"jets-invisibles-jet_invisible",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h2,{id:"journalisation-des-modifications-et-des-erreurs--config-logs",children:["Journalisation des modifications et des erreurs : ",(0,i.jsx)(s.code,{children:"/config logs"})]}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/config logs (#channel)"})})})}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.code,{children:"logs"})," offre la possibilit\xe9 de d'enregister un salon afin de :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Rapporter toutes les erreurs,"}),"\n",(0,i.jsx)(s.li,{children:"Enregistrer toute modification apport\xe9e \xe0 un personnage."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Renvoyer la commande sans l'argument ",(0,i.jsx)(s.code,{children:"#channel"})," permet de supprimer l'envoi des logs."]}),"\n",(0,i.jsxs)(s.h2,{id:"sauvegarde-des-r\xe9sultats-result_channel",children:["Sauvegarde des r\xe9sultats: ",(0,i.jsx)(s.code,{children:"result_channel"})]}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/config result_channel (#channel)"})})})}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.code,{children:"/config result_channel"})," permet de d\xe9finir un canal pour recevoir les r\xe9sultats des jets de d\xe9s, plut\xf4t que d'utiliser un fil de discussion \xe0 chaque fois. L'ID du canal sera alors enregistr\xe9 dans la base de donn\xe9es de la m\xeame mani\xe8re que la commande ",(0,i.jsx)(s.code,{children:"logs"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Renvoyer la commande sans l'argument \"salon\" permet de supprimer le canal de r\xe9sultats \xe0 l'instar de la commande ",(0,i.jsx)(s.code,{children:"logs"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"d\xe9sactiver-lauto-cr\xe9ation-des-threads-d\xe9sactiver_threads",children:["D\xe9sactiver l'auto-cr\xe9ation des threads: ",(0,i.jsx)(s.code,{children:"d\xe9sactiver_threads"})]}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/config d\xe9sactiver_threads [?basculer]"})})})}),"\n",(0,i.jsxs)(s.p,{children:["Si l'option est sur ",(0,i.jsx)(s.strong,{children:"true"}),", d\xe9sactive la cr\xe9ation, par d\xe9faut, des threads pour les jets de d\xe9s. Tout sera donc envoy\xe9 (sans suppression) dans le salon o\xf9 la commande a \xe9t\xe9 effectu\xe9e."]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Cette option prend le pas sur la commande ",(0,i.jsx)(s.code,{children:"/config result_channel"}),". C'est \xe0 dire que dans le cas o\xf9 elle est activ\xe9e, les r\xe9sultats des jets de d\xe9s ne seront pas envoy\xe9s dans le salon configur\xe9 par la commande ",(0,i.jsx)(s.code,{children:"/config result_channel"})," si ce dernier est configur\xe9."]})}),"\n",(0,i.jsxs)(s.p,{children:["Les channels et fils pr\xe9fix\xe9s par ",(0,i.jsx)(s.code,{children:"\ud83c\udfb2"})," ne recevront plus les logs non plus."]}),"\n",(0,i.jsxs)(s.p,{children:["L'option sur ",(0,i.jsx)(s.strong,{children:"faux"})," r\xe9active le comportement normal du bot."]}),"\n",(0,i.jsxs)(s.h2,{id:"jets-invisibles-jet_invisible",children:["Jets invisibles: ",(0,i.jsx)(s.code,{children:"jet_invisible"})]}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/config jet_invisible [?basculer] (#channel)"})})})}),"\n",(0,i.jsxs)(s.p,{children:["Cela active l'option ",(0,i.jsx)(s.code,{children:"cach\xe9"})," pour les commandes ",(0,i.jsx)(s.code,{children:"/gm"})," et ",(0,i.jsx)(s.code,{children:"/roll"})," et permet de cacher le r\xe9sultat aux autres joueurs."]}),"\n",(0,i.jsx)(s.p,{children:"Il y a deux configurations possibles :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Si un salon est mentionn\xe9, ce channel sera utilis\xe9e pour la sauvegarde du jet, rempla\xe7ant le channel ",(0,i.jsx)(s.code,{children:"result_channel"})," (si configur\xe9)."]}),"\n",(0,i.jsx)(s.li,{children:"Si aucun salon n'est utilis\xe9, alors aucune sauvegarde du r\xe9sultat ne sera faite."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Dans les deux cas, le message sera envoy\xe9 comme un message ",(0,i.jsx)(s.a,{href:"https://support.discord.com/hc/fr/articles/1500000580222-Ephemeral-Messages-FAQ",children:(0,i.jsx)(s.strong,{children:"\xe9ph\xe9m\xe8re"})}),", signifiant qu'il n'y aura aucune trace du jet de d\xe9s dans le salon o\xf9 la commande a \xe9t\xe9 effectu\xe9e apr\xe8s un certain temps, et que personne d'autre que le lanceur ne verra le r\xe9sultat."]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var r=n(96540);const i={},t=r.createContext(i);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);