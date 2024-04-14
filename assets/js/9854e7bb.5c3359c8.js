"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[855],{23146:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=n(13274),i=n(42463);const d={title:"Commandes administratives",sidebar_position:2},o=void 0,l={id:"commands/administration",title:"Commandes administratives",description:"Toutes les commandes suivantes sont restreintes par d\xe9faut aux membres ayant la permission G\xe9rer les r\xf4les.",source:"@site/docs/commands/administration.md",sourceDirName:"commands",slug:"/commands/administration",permalink:"/docs/commands/administration",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/commands/administration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Commandes administratives",sidebar_position:2},sidebar:"commands",previous:{title:"Informations g\xe9n\xe9rales",permalink:"/docs/commands/"},next:{title:"Lancer de d\xe9s et sc\xe8nes",permalink:"/docs/commands/roll"}},t={},a=[{value:"Configuration",id:"configuration",level:2},{value:"Logs",id:"logs",level:3},{value:"Changer le canal de r\xe9sultats",id:"changer-le-canal-de-r\xe9sultats",level:3},{value:"Supprimer l&#39;auto-cr\xe9ation des threads",id:"supprimer-lauto-cr\xe9ation-des-threads",level:3},{value:"D\xe9lai avant suppression des messages",id:"d\xe9lai-avant-suppression-des-messages",level:3},{value:"Mod\xe8le et fiche de personnages",id:"mod\xe8le-et-fiche-de-personnages",level:2},{value:"Supprimer un personnage/joueur",id:"supprimer-un-personnagejoueur",level:3},{value:"Auto-Role",id:"auto-role",level:3},{value:"Lancer de d\xe9s &quot;ma\xeetre de jeu&quot;",id:"lancer-de-d\xe9s-ma\xeetre-de-jeu",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Toutes les commandes suivantes sont restreintes par d\xe9faut aux membres ayant la permission ",(0,r.jsx)(s.code,{children:"G\xe9rer les r\xf4les"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez voir la configuration actuelle du serveur avec la commande ",(0,r.jsx)(s.code,{children:"/config"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(s.p,{children:["Les commandes suivantes sont r\xe9unies dans la commandes ",(0,r.jsx)(s.code,{children:"/config"})," et permettent de configurer le bot pour votre serveur."]}),"\n",(0,r.jsx)(s.h3,{id:"logs",children:"Logs"}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/config logs (#channel)"})})})}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.code,{children:"logs"})," offre la possibilit\xe9 de d'enregister un channel afin de :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Rapporter toutes les erreurs,"}),"\n",(0,r.jsx)(s.li,{children:"Enregistrer toute modification apport\xe9e \xe0 un personnage."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Renvoyer la commande sans l'argument ",(0,r.jsx)(s.code,{children:"#channel"})," permet de supprimer l'envoi des logs."]}),"\n",(0,r.jsx)(s.h3,{id:"changer-le-canal-de-r\xe9sultats",children:"Changer le canal de r\xe9sultats"}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/config result_channel (#channel)"})})})}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.code,{children:"/config result_channel"})," permet de d\xe9finir un canal pour recevoir les r\xe9sultats des jets de d\xe9s, plut\xf4t que d'utiliser un fil de discussion \xe0 chaque fois. L'ID du canal sera alors enregistr\xe9 dans la base de donn\xe9es de la m\xeame mani\xe8re que la commande ",(0,r.jsx)(s.code,{children:"logs"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Renvoyer la commande sans l'argument \"channel\" permet de supprimer le canal de r\xe9sultats \xe0 l'instar de la commande ",(0,r.jsx)(s.code,{children:"logs"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"supprimer-lauto-cr\xe9ation-des-threads",children:"Supprimer l'auto-cr\xe9ation des threads"}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/config d\xe9sactiver_threads [true/false]"})})})}),"\n",(0,r.jsxs)(s.p,{children:["Si l'option est sur ",(0,r.jsx)(s.strong,{children:"true"}),", d\xe9sactive la cr\xe9ation, par d\xe9faut, des threads pour les jets de d\xe9s. Tout sera donc envoy\xe9 (sans suppression) dans le channel o\xf9 la commande a \xe9t\xe9 effectu\xe9e."]}),"\n",(0,r.jsxs)(s.p,{children:["Les channels et fils pr\xe9fix\xe9s par ",(0,r.jsx)(s.code,{children:"\ud83c\udfb2"})," ne recevront plus les logs non plus."]}),"\n",(0,r.jsxs)(s.p,{children:["Elle d\xe9sactive aussi l'envoie dans le channel \xe9ventuellement configur\xe9 par la commande ",(0,r.jsx)(s.code,{children:"/config result_channel"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["L'option sur ",(0,r.jsx)(s.strong,{children:"faux"})," r\xe9active le comportement normal du bot."]}),"\n",(0,r.jsx)(s.h3,{id:"d\xe9lai-avant-suppression-des-messages",children:"D\xe9lai avant suppression des messages"}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/config supprimer_apr\xe8s [temps]"})})})}),"\n",(0,r.jsxs)(s.p,{children:["Par d\xe9faut, les messages de r\xe9sultats des jets de d\xe9s sont supprim\xe9s apr\xe8s ",(0,r.jsx)(s.strong,{children:"3"})," minutes. Cette commande permet de changer le d\xe9lais (jusqu'\xe0 60 minutes) avant suppression des messages."]}),"\n",(0,r.jsxs)(s.p,{children:["Si la valeur est mise \xe0 ",(0,r.jsx)(s.strong,{children:"0"}),", les messages ne seront plus supprim\xe9s."]}),"\n",(0,r.jsxs)(s.p,{children:["Cette option est d\xe9sactiv\xe9e si ",(0,r.jsx)(s.code,{children:"/config d\xe9sactiver_threads"})," est activ\xe9e."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Cette commande permet d'avoir \xe0 la fois les logs dans un channels d\xe9di\xe9s, tout en gardant le r\xe9sultat ind\xe9finiment dans le channel o\xf9 le jet a \xe9t\xe9 effectu\xe9."})}),"\n",(0,r.jsx)(s.h2,{id:"mod\xe8le-et-fiche-de-personnages",children:"Mod\xe8le et fiche de personnages"}),"\n",(0,r.jsx)(s.h3,{id:"supprimer-un-personnagejoueur",children:"Supprimer un personnage/joueur"}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/supprimer_char [@joueur] (*personnage)"})})})}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.code,{children:"supprimer_char"})," permet de supprimer un personnage ou un joueur de la base de donn\xe9es."]}),"\n",(0,r.jsx)(s.p,{children:"Elle demande :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"[@joueur]"})," - Le nom du joueur"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"(*personnage)"})," - Et/ou le nom du personnage, en fonction de l'utilisateur s\xe9lectionn\xe9."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'En l\'absence de nom de personnage, cela supprimera toutes les donn\xe9es du joueur. Si vous voulez supprimer uniquement le "personnage sans nom" d\'un joueur, vous pouvez le faire en choisissant "d\xe9faut" dans la liste du nom du personnage.'}),"\n",(0,r.jsx)(s.h3,{id:"auto-role",children:"Auto-Role"}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/config auto_role d\xe9 (@role)"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/config auto_role stats (@role)"})})}),"\n"]})}),"\n",(0,r.jsx)(s.p,{children:"Ces commandes permettent d'ajouter automatiquement des r\xf4les lorsque :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Un d\xe9 est ajout\xe9 (",(0,r.jsx)(s.code,{children:"/config auto_role d\xe9"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["Des statistiques sont valid\xe9es (",(0,r.jsx)(s.code,{children:"/config auto_role stats"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Cela permet, notamment, d'autoriser l'usage de ",(0,r.jsx)(s.code,{children:"/dbd"})," et ",(0,r.jsx)(s.code,{children:"/dbroll"})," aux utilisateurs qui ont, effectivement, la possibilit\xe9 d'utiliser ses deux commandes."]}),"\n",(0,r.jsx)(s.p,{children:"Si le r\xf4le n'est pas fourni, l'option sera d\xe9sactiv\xe9e."}),"\n",(0,r.jsx)(s.h2,{id:"lancer-de-d\xe9s-ma\xeetre-de-jeu",children:'Lancer de d\xe9s "ma\xeetre de jeu"'}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Les deux commandes suivantes permettent aux ma\xeetres de jeu de lancer des d\xe9s pour tous les joueurs enregistr\xe9s."})}),"\n",(0,r.jsx)(s.admonition,{type:"usage",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/mj dbroll [@Joueur] [statistique] (*personnage)"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/mj dbd [@Joueur] [*nom du d\xe9] (*personnage)"})})}),"\n"]})}),"\n",(0,r.jsxs)(s.p,{children:["Les deux commandes sont similaires \xe0 ",(0,r.jsx)(s.a,{href:"./model#dbroll-dbroll",children:"dbroll"})," et ",(0,r.jsx)(s.a,{href:"./model#dbd-dbd",children:"dbd"}),", mais n\xe9cessite en plus de sp\xe9cifier le joueur pour lequel le jet est effectu\xe9. Comme les autres commandes, il est possible de choisir un personnage appartenant \xe0 ce joueur ou de laisser le choix par d\xe9faut."]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},42463:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(79474);const i={},d=r.createContext(i);function o(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);