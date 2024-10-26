"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[512],{70080:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(86070),t=n(15658);const r={title:"Import et export de donn\xe9es"},o=void 0,d={id:"admin/config/import_export",title:"Import et export de donn\xe9es",description:"Les commandes suivantes permettent d'importer et d'exporter des donn\xe9es depuis et vers un fichier CSV.",source:"@site/docs/admin/config/import_export.md",sourceDirName:"admin/config",slug:"/admin/config/import_export",permalink:"/docs/admin/config/import_export",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/admin/config/import_export.md",tags:[],version:"current",frontMatter:{title:"Import et export de donn\xe9es"},sidebar:"model",previous:{title:"Supprimer un personnage",permalink:"/docs/admin/config/delete_char"},next:{title:"Enregistrement d'un Mod\xe8le",permalink:"/docs/admin/model/"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Exporter des donn\xe9es",id:"exporter-des-donn\xe9es",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Les commandes suivantes permettent d'importer et d'exporter des donn\xe9es depuis et vers un fichier CSV."}),"\n",(0,i.jsxs)(s.admonition,{title:"Au sujet des d\xe9s",type:"tip",children:[(0,i.jsxs)(s.p,{children:["Il est tout \xe0 fait possible d'importer des d\xe9s sp\xe9cifiques pour la commande ",(0,i.jsx)(s.a,{href:"/docs/Usage/model#dbd",children:(0,i.jsx)(s.code,{children:"/dbd"})}),", mais vous devez remplir les cases de la colonne ",(0,i.jsx)(s.code,{children:"dice"})," sous la forme suivante :"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"- [d\xe9] : [valeur]\n"})}),(0,i.jsx)(s.p,{children:"Par exemple :"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"'- Athl\xe9tisme : 1d20+Force\n- Discr\xe9tion : 1d20+Dext\xe9rit\xe9\n"})})]}),"\n",(0,i.jsxs)(s.admonition,{title:"\xc0 propos d'Excel",type:"important",children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Excel n'aime pas les cases dont le contenu comme par ",(0,i.jsx)(s.code,{children:"-"})," et peut les interpr\xe9ter comme des formules. Si tel est le cas, vous devez ajouter ",(0,i.jsx)(s.code,{children:"'"})," devant le ",(0,i.jsx)(s.code,{children:"-"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Excel peut avoir des probl\xe8mes en lisant et exportant les textes contenant des accents. Il est recommand\xe9es d'enregistrer le fichier en UTF-8-BOM, en utilisant par exemple Notepad++ ou VSCode."}),"\n",(0,i.jsxs)(s.li,{children:["Tout comme la liste des d\xe9s, si vous utiliser l'ID du joueur, il faudra ajouter ",(0,i.jsx)(s.code,{children:"'"})," devant (comme ",(0,i.jsx)(s.code,{children:"'123456789012345678"}),") pour \xe9viter que Excel ne le transforme en nombre."]}),"\n"]}),(0,i.jsxs)(s.p,{children:["Il est vivement conseiller de d\xe9sactiver les conversions automatiques d'Excel:\n",(0,i.jsx)(s.img,{alt:"Excel",src:n(64001).A+"",width:"939",height:"681"})]}),(0,i.jsxs)(s.p,{children:['Et de d\xe9sactiver la r\xe8gle de v\xe9rification des erreurs "Nombres mis en forme en tant que texte ou pr\xe9c\xe9d\xe9s d\'une apostrophe" dans les options de v\xe9rification des erreurs (Formules > R\xe8gle de v\xe9rification des erreurs) :\n',(0,i.jsx)(s.img,{src:n(7054).A+"",width:"937",height:"679"})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Example",src:n(55420).A+"",width:"1219",height:"161"})}),"\n",(0,i.jsx)(s.h2,{id:"import",children:"Import"}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/import [csv]"})})})}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.code,{children:"/import"})," permet d'importer des donn\xe9es depuis un fichier CSV. Vous pouvez t\xe9l\xe9charger le mod\xe8le en utilisant la commande ",(0,i.jsx)(s.code,{children:"/csv"})," et le remplir avec les personnages et statistiques que vous souhaitez importer."]}),"\n",(0,i.jsx)(s.admonition,{type:"important",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Les donn\xe9es import\xe9es \xe9craseront les donn\xe9es existantes, mais ne supprimerons pas les personnages non pr\xe9sents dans le fichier. De plus, si le personnage du joueur existe d\xe9j\xe0, ses donn\xe9es seront \xe9cras\xe9es dans la base de donn\xe9e mais le message du personnage ne sera pas supprim\xe9 : vous devrez le faire manuellement."}),"\n",(0,i.jsx)(s.li,{children:"Le minimum, maximum ainsi que le total de points n'est pas v\xe9rifi\xe9s (afin de permettre l'import de personnages ayant acquis de l'exp\xe9rience ou qui sont diff\xe9rents des autres, comme des monstres)."}),"\n",(0,i.jsxs)(s.li,{children:["Les combinaisons ne doivent pas \xeatre rentr\xe9e telles quelles mais doivent \xeatre directement calcul\xe9es. Par exemple, si la colonne PV est une combainaison de ",(0,i.jsx)(s.code,{children:"Constitution"})," et ",(0,i.jsx)(s.code,{children:"Endurance"})," vous devez rentrer le r\xe9sultat des colonnes directement. Il n'y a pas de probl\xe8me \xe0 utiliser des formules dans un CSV, car l'exportation du fichier incluera seulement le r\xe9sultat !"]}),"\n"]})}),"\n",(0,i.jsx)(s.p,{children:"Les colonnes suivantes sont n\xe9cessaires pour l'import :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user"})," : L'ID Discord du joueur ou son nom d'utilisateur (sans le ",(0,i.jsx)(s.code,{children:"@"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"charName"})," : En fonction de votre mod\xe8le, peut \xeatre obligatoire. C'est le nom du personnage."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"isPrivate"})," : ",(0,i.jsx)(s.code,{children:"true"})," ou ",(0,i.jsx)(s.code,{children:"false"})," pour d\xe9finir si la fiche est priv\xe9e ou non. Si votre mod\xe8le n'utilise pas de fiche priv\xe9e, vous pouvez laisser cette colonne vide."]}),"\n",(0,i.jsx)(s.li,{children:"Les colonnes suivantes doivent \xeatre les statistiques de votre mod\xe8le."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Les colonnes suivantes sont facultatives :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"avatar"})," : Le lien vers l'avatar du personnage. Si vous n'utilisez pas d'avatar, vous pouvez laisser cette colonne vide. L'avatar utilis\xe9 dans l'affichage sera celui du joueur."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"channel"}),": Permet de d\xe9finir un channel (prend \xe9galement en charge les fils et les forums",(0,i.jsx)(s.sup,{children:(0,i.jsx)(s.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"), o\xf9 sera envoy\xe9e la fiche, plut\xf4t que d'utiliser les channels par d\xe9faut d\xe9finis lors de l'enregistrement du mod\xe8le."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"dice"})," : Les d\xe9s sp\xe9cifiques pour la commande ",(0,i.jsx)(s.code,{children:"/dbd"}),". Si vous n'utilisez pas cette commande, vous pouvez laisser cette colonne vide, voire la supprimer."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"exporter-des-donn\xe9es",children:"Exporter des donn\xe9es"}),"\n",(0,i.jsx)(s.admonition,{type:"usage",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/export [csv] (fiche_priv\xe9e_uniquement)"})})})}),"\n",(0,i.jsxs)(s.p,{children:["Cette commande permet d'exporter la liste des personnages et des statistiques dans un fichier CSV.\nEn fonction de l'option ",(0,i.jsx)(s.code,{children:"private"}),", la liste fournie sera diff\xe9rente :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Si ",(0,i.jsx)(s.code,{children:"false"}),", elle incluera ",(0,i.jsx)(s.strong,{children:"uniquement"})," les personnages dont la fiche est ",(0,i.jsx)(s.strong,{children:"publique"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Si ",(0,i.jsx)(s.code,{children:"true"}),", elle incluera ",(0,i.jsx)(s.strong,{children:"uniquement"})," les personnages dont la fiche est ",(0,i.jsx)(s.strong,{children:"priv\xe9e"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Si elle est omise, elle inclura ",(0,i.jsx)(s.strong,{children:"tous"})," les personnages, quelque soit le statut de la fiche."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Le fichier CSV export\xe9 utilise le point virgule comme s\xe9parateur."}),"\n","\n",(0,i.jsxs)(s.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(s.p,{children:["Il est possible d'utiliser un forum, qui cr\xe9era automatiquement un post pour le personnage. Le joueur (ainsi que les administrateurs) seront mentionn\xe9s dans le post. ",(0,i.jsx)(s.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},64001:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/EXCEL_FR_disable-63b63be2b13f51a615d9e12b974b94d4.png"},7054:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/FR_disable_nb-cf80c75f62b5dcd0281858ea17dcfebf.png"},55420:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/example-5b7f080aa6a231d5afd15036cedc4587.png"},15658:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var i=n(30758);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);