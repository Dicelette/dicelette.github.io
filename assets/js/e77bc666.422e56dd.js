(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[995],{32805:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>H,contentTitle:()=>G,default:()=>Y,frontMatter:()=>U,metadata:()=>O,toc:()=>J});var t=a(86070),i=a(15658),n=a(32718),l=a(47051),r=a(77041),o=a(72776),c=a(37244),m=a(28955),d=a(31304),u=a(30790);const x=e=>{let{len:s,type:a,onClick:i}=e;const l="dice"===a?(0,c.T)({message:"Ajouter un d\xe9"}):(0,c.T)({message:"Ajouter une statistique"}),r="dice"===a?(0,c.T)({message:"d\xe9s"}):(0,c.T)({message:"statistiques (max 25)"}),o=`${(0,c.T)({message:"Vous avez atteint le nombre maximum de"})} ${r}`;return"stats"===a?(0,t.jsx)(n.A,{title:s>25?o:l,arrow:!0,children:(0,t.jsx)("span",{children:(0,t.jsx)(d.A,{onClick:i,size:"small",className:"manage-button",disabled:s>25,children:(0,t.jsx)(u.In,{icon:"fluent:add-circle-12-regular",height:"20"})})})}):(0,t.jsx)(n.A,{title:l,arrow:!0,children:(0,t.jsx)("span",{children:(0,t.jsx)(d.A,{onClick:i,size:"small",className:"manage-button",children:(0,t.jsx)(u.In,{icon:"fluent:add-circle-12-regular",height:"20"})})})})};var p=a(50623),g=a(7298);const h=e=>{let{className:s,label:a,name:i}=e;return(0,t.jsx)(r.D0,{name:i,children:e=>{let{field:i}=e;return(0,t.jsx)(p.A,{className:s,control:(0,t.jsx)(g.A,{onChange:i.onChange,checked:i.checked,name:i.name,value:i.value,id:i.name}),labelPlacement:"start",label:a})}})},b=e=>{let{length:s,type:a,children:i,label:n,onAdd:l}=e;return(0,t.jsxs)("section",{className:"flex flex-col",children:[(0,t.jsxs)("span",{className:"text-lg font-bold mb-2",children:[n,l&&(0,t.jsx)(x,{len:s,type:a,onClick:l})]}),i]})};var f=a(51239);const j=e=>(0,t.jsx)(r.D0,{name:e.name,children:s=>{let{field:a,form:{errors:i}}=s;return(0,t.jsx)(f.A,{...e,value:a.value,onChange:e.onChange??a.onChange,onBlur:a.onBlur,autoFocus:e.autoFocus,className:`2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full ${e.className}`,error:void 0!==i[a.name],label:e.label,size:"small",name:a.name,type:e.type,typeof:e.type})}}),v=e=>(0,t.jsx)(r.D0,{name:e.name,children:s=>{let{field:a,form:{errors:i}}=s;return(0,t.jsx)(f.A,{...e,value:a.value,onChange:e.onChange??a.onChange,onBlur:a.onBlur,autoFocus:e.autoFocus,className:`!mb-4 w-[400px] min-[0px]:max-xl:w-full ${e.className}`,error:void 0!==i[a.name],label:e.label,size:"small",name:a.name,type:e.type,typeof:e.type,inputProps:e.inputProps})}});function N(e,s){return e.failure===e.success||"failure"===s&&e.failure<0||"success"===s&&e.success<0?"error":""}const T=e=>{let{critical:s}=e;return(0,t.jsxs)(b,{label:"Critique",children:[(0,t.jsx)(v,{label:(0,c.T)({message:"Succ\xe8s"}),name:"critical.success",type:"number",id:"critical",className:`success ${N(s,"success")}`,inputProps:{min:0}}),(0,t.jsx)(v,{label:(0,c.T)({message:"\xc9chec"}),name:"critical.failure",type:"number",id:"critical",className:`failure ${N(s,"failure")}`,inputProps:{min:0}}),(a=s,a.failure===a.success?(0,t.jsx)(m.m_,{id:"critical",anchorSelect:"#critical",content:(0,c.T)({message:"Les deux valeurs ne peuvent \xeatre identiques"}),style:{background:"var(--rt-color-error)"}}):a.failure<0?(0,t.jsx)(m.m_,{id:"critical",anchorSelect:".failure",content:(0,c.T)({message:"La valeur ne peut pas \xeatre inf\xe9rieure \xe0 0"}),style:{background:"var(--rt-color-error)"}}):a.success<0?(0,t.jsx)(m.m_,{id:"critical",anchorSelect:".success",content:(0,c.T)({message:"La valeur ne peut pas \xeatre inf\xe9rieure \xe0 0"}),style:{background:"var(--rt-color-error)"}}):void 0)]});var a};var y=a(30758),k=a(89195),$=a(21473),C=a(67132);const w=e=>{let{onClick:s,size:a,maxLen:i,length:l}=e;const r=1280===a?"xl":"2xl";return(0,t.jsx)(n.A,{title:(0,c.T)({message:"Dupliquer ce champ"}),classes:{popper:l>i?"error-copy":"copy-tooltip"},arrow:!0,children:(0,t.jsx)(d.A,{onClick:s,size:"small",className:`manage-button !p-px relative top-2.5 min-[0px]:max-${r}:w-full`,"aria-label":(0,c.T)({message:"Dupliquer ce champ"}),disabled:l>i,children:(0,t.jsx)(u.In,{icon:"system-uicons:duplicate",height:"24",className:"copy-button"})})})},S=e=>{let{onClick:s,size:a}=e;const i=1280===a?"xl":"2xl";return(0,t.jsxs)(l.A,{onClick:s,className:`!p-1 relative ${i}:top-2.5 min-[0px]:max-${i}:w-full copy-button`,variant:"outlined",size:"medium","aria-label":(0,c.T)({message:"Dupliquer ce champ"}),title:(0,c.T)({message:"Dupliquer ce champ"}),children:[(0,t.jsx)(u.In,{icon:"system-uicons:duplicate",height:"24",className:"copy-button text-button"}),(0,c.T)({message:"Dupliquer"})]})},L=e=>{let{onClick:s,size:a,maxLen:i,length:n}=e;const l=(0,$.A)();return(0,C.A)(l.breakpoints.down(a))?(0,t.jsx)(S,{onClick:s,size:a}):(0,t.jsx)(w,{length:n,maxLen:i,onClick:s,size:a})},z=e=>{let{onClick:s,size:a}=e;const i=1280===a?"xl":"2xl";return(0,t.jsx)(n.A,{title:(0,c.T)({message:"Supprimer ce champ"}),classes:{popper:"remove"},arrow:!0,children:(0,t.jsx)(d.A,{onClick:s,size:"small",className:`manage-button !p-px relative top-2.5 min-[0px]:max-${i}:w-full`,"aria-label":(0,c.T)({message:"Supprimer ce champ"}),children:(0,t.jsx)(u.In,{icon:"lucide:delete",height:"24",className:"delete-button"})})})},A=e=>{let{onClick:s,size:a}=e;const i=1280===a?"xl":"2xl";return(0,t.jsxs)(l.A,{onClick:s,className:`!p-1 relative ${i}:top-2.5 min-[0px]:max-${i}:w-full delete-button`,variant:"outlined",size:"medium","aria-label":(0,c.T)({message:"Supprimer ce champ"}),children:[(0,t.jsx)(u.In,{icon:"lucide:delete",height:"24",className:"delete-button text-button"}),(0,c.T)({message:"Supprimer"})]})},q=e=>{let{onClick:s,size:a}=e;const i=(0,$.A)();return(0,C.A)(i.breakpoints.down(a))?(0,t.jsx)(A,{onClick:s,size:a}):(0,t.jsx)(z,{onClick:s,size:a})},D=e=>{let{values:s,setFieldValue:a}=e;const[i,n]=(0,y.useState)([]);(0,y.useEffect)((()=>{(()=>{const e=[];s.damages.forEach(((a,t)=>{const i=s.damages.findIndex(((e,s)=>s!==t&&e.name===a.name));-1===i||e.includes(t)||(e.push(t),e.push(i))})),n(e)})()}),[s.damages]);const l=e=>{if(!e.destination)return;const t=Array.from(s.damages),[i]=t.splice(e.source.index,1);t.splice(e.destination.index,0,i),a("damages",t)};return(0,t.jsx)("div",{className:"statistic",children:(0,t.jsx)(r.ED,{name:"damages",children:e=>{let{push:a,remove:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(b,{length:s.damages.length,type:"dice",label:(0,c.T)({message:"D\xe9s"}),onAdd:()=>a({name:"",value:""}),children:""}),(0,t.jsx)("table",{className:"w-full",children:(0,t.jsx)(k.JY,{onDragEnd:l,children:(0,t.jsx)(k.gL,{droppableId:"droppable",children:e=>(0,t.jsxs)("tbody",{...e.droppableProps,ref:e.innerRef,className:"divide-y block w-full",children:[s.damages.map(((e,l)=>(0,t.jsx)(k.sx,{draggableId:String(l),index:l,children:e=>(0,y.createElement)("tr",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,key:l,className:`flex flex-col xl:flex-row items-start xl:w-full ${i.includes(l)?"error-bg":""} ${0===l?"border-t-0":""}`},(0,t.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,t.jsx)(L,{maxLen:25,length:s.damages.length,size:1280,onClick:()=>{a({name:s.damages[l].name,value:s.damages[l].value})}})}),(0,t.jsxs)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:[(0,t.jsx)(j,{name:`damages[${l}].name`,label:(0,c.T)({message:"Nom"}),className:""+(0===s.damages[l].name.length?"error":""),id:`Dice-Nom-${l}`}),(0,t.jsx)(r.Kw,{name:`damages[${l}].name`})]}),(0,t.jsx)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:(0,t.jsx)(j,{name:`damages[${l}].value`,label:(0,c.T)({message:"Valeur"}),className:""+(0===s.damages[l].name.length?"error":""),id:`Value-${l}`})}),(e=>i.includes(e)?(0,t.jsx)(m.m_,{id:`Dice-Nom-${e}`,content:(0,c.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Dice-Nom-${e}`}):0===s.damages[e].name.length?(0,t.jsx)(m.m_,{id:`Dice-Nom-${e}`,content:(0,c.T)({message:"Le nom ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Dice-Nom-${e}`}):null)(l),0===s.damages[l].name.length&&(0,t.jsx)(m.m_,{id:`Value-${l}`,content:(0,c.T)({message:"La valeur ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Value-${l}`}),(0,t.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,t.jsx)(q,{size:1280,onClick:()=>n(l)})}))},l))),e.placeholder]})})})})]})}})})},_=()=>(0,t.jsxs)(b,{label:"G\xe9n\xe9ral",children:[(0,t.jsx)(h,{className:"self-start !ml-0 -mt-2",label:(0,c.T)({message:"Rendre obligatoire le nom du personnage"}),name:"isCharNameRequired"}),(0,t.jsx)(h,{className:"self-start !ml-0 -mt-2 mb-6",label:(0,c.T)({message:"Fiches priv\xe9es"}),"aria-label":(0,c.T)({message:"Utilis\xe9e uniquement dans le CSV d'importation de fiche"}),name:"isPrivate"}),(0,t.jsx)(m.m_,{anchorSelect:"#isPrivate",content:(0,c.T)({message:"Utilis\xe9e uniquement dans le CSV d'importation de fiche"})}),(0,t.jsx)(v,{label:(0,c.T)({message:"Total"}),name:"total",id:"total",type:"number",inputProps:{min:0}}),(0,t.jsx)(v,{label:(0,c.T)({message:"D\xe9 principal"}),name:"diceType"})]}),P=e=>{let{values:s,setFieldValue:a}=e;const[i,n]=(0,y.useState)([]);(0,y.useEffect)((()=>{(()=>{const e=[];s.statistics.forEach(((a,t)=>{const i=s.statistics.findIndex(((e,s)=>s!==t&&e.name===a.name));-1===i||e.includes(t)||(e.push(t),e.push(i))})),n(e)})()}),[s.statistics]);const l=e=>{if(s.statistics[e].min)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max?(0,t.jsx)(m.m_,{id:`Min-${e}`,content:(0,c.T)({message:"La valeur minimale ne peut pas \xeatre sup\xe9rieure \xe0 la valeur maximale"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):s.statistics[e].min<0?(0,t.jsx)(m.m_,{id:`Min-${e}`,content:(0,c.T)({message:"La valeur minimale ne peut pas \xeatre n\xe9gative"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):isNaN(parseInt(s.statistics[e].min,10))?(0,t.jsx)(m.m_,{id:`Min-${e}`,content:(0,c.T)({message:"La valeur minimale doit \xeatre un nombre"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):null},o=e=>{if(s.statistics[e].max)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max?(0,t.jsx)(m.m_,{id:`Max-${e}`,content:(0,c.T)({message:"La valeur maximale ne peut pas \xeatre inf\xe9rieure \xe0 la valeur minimale"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):s.statistics[e].max<0?(0,t.jsx)(m.m_,{id:`Max-${e}`,content:(0,c.T)({message:"La valeur maximale ne peut pas \xeatre n\xe9gative"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):isNaN(parseInt(s.statistics[e].max,10))?(0,t.jsx)(m.m_,{id:`Max-${e}`,content:(0,c.T)({message:"La valeur maximale doit \xeatre un nombre"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):null},d=e=>{if(s.statistics[e].min)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max||s.statistics[e].min<0||isNaN(parseInt(s.statistics[e].min,10))?"error":""},u=e=>{if(s.statistics[e].max)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max||s.statistics[e].max<0||isNaN(parseInt(s.statistics[e].max,10))?"error":""},x=e=>{if(0===s.statistics[e].name.length)return"error"},p=e=>{if(!e.destination)return;const t=Array.from(s.statistics),[i]=t.splice(e.source.index,1);t.splice(e.destination.index,0,i),a("statistics",t)};return(0,t.jsx)("div",{className:"statistic",children:(0,t.jsx)(r.ED,{name:"statistics",children:e=>{let{push:a,remove:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(b,{type:"stats",length:s.statistics.length,label:(0,c.T)({message:"Statistiques"}),onAdd:()=>a({name:"",values:{min:0,max:0,combinaison:""}}),children:""}),(0,t.jsx)("table",{className:"w-full",children:(0,t.jsx)(k.JY,{onDragEnd:p,children:(0,t.jsx)(k.gL,{droppableId:"droppable",children:e=>(0,t.jsxs)("tbody",{...e.droppableProps,ref:e.innerRef,className:"divide-y block w-full",children:[s.statistics.map(((e,p)=>(0,t.jsx)(k.sx,{draggableId:String(p),index:p,children:e=>{return(0,y.createElement)("tr",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,key:p,className:`flex flex-col 2xl:flex-row items-start 2xl:w-full ${0===p?"border-t-0":""}  ${i.includes(p)?"error-bg":""} 2xl:h-18`},(0,t.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full",children:(0,t.jsx)(L,{size:1536,length:s.statistics.length,maxLen:25,onClick:()=>{a({name:"",max:s.statistics[p].max,min:s.statistics[p].min,combinaison:s.statistics[p].combinaison})}})}),(0,t.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,t.jsx)(j,{label:(0,c.T)({message:"Nom"}),name:`statistics[${p}].name`,id:`Stats-Nom-${p}`,className:`${x(p)}`,"data-tooltip-variant":"error"}),(0,t.jsx)(r.Kw,{name:`statistics[${p}].name`}),(g=p,0===s.statistics[g].name.length?(0,t.jsx)(m.m_,{id:`Stats-Nom-${g}`,content:(0,c.T)({message:"Le nom ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Stats-Nom-${g}`}):i.includes(g)?(0,t.jsx)(m.m_,{id:`Stats-Nom-${g}`,content:(0,c.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Stats-Nom-${g}`}):null)]}),(0,t.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,t.jsx)(j,{type:"number",inputProps:{min:0},name:`statistics[${p}].min`,label:(0,c.T)({message:"Min"}),className:`2xl:w-[100px] ${d(p)}`,id:`Min-${p}`,"data-tooltip-variant":"error",disabled:!!s.statistics[p].combinaison}),l(p)]}),(0,t.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,t.jsx)(j,{type:"number",inputProps:{min:0},name:`statistics[${p}].max`,label:(0,c.T)({message:"Max"}),id:`Max-${p}`,className:`2xl:w-[100px] ${u(p)}`,disabled:!!s.statistics[p].combinaison}),o(p)]}),(0,t.jsx)("td",{className:"p-2 min-[0px]:max-2xl:w-full ",children:(0,t.jsx)(j,{label:(0,c.T)({message:"Combinaison"}),name:`statistics[${p}].combinaison`,disabled:!(!s.statistics[p].min&&!s.statistics[p].max)})}),(0,t.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full ",children:(0,t.jsx)(q,{size:1536,onClick:()=>n(p)})}));var g}},p))),e.placeholder]})})})})]})}})})};var M=a(65640);var R=a(22913),V=a(64940),I=a.n(V),E=a(59605),B=a.n(E);const F=()=>{const e=e=>{let s={},a={};for(const n of e.statistics)s[n.name]={combinaison:n.combinaison,max:n.max,min:n.min};for(const n of e.damages)a[n.name]=n.value;0===Object.keys(s).length&&(s=void 0),0===Object.keys(a).length&&(a=void 0);const t={charName:e.isCharNameRequired,critical:e.critical,diceType:e.diceType,total:e.total,statistics:s,damage:a};try{const s=(0,o.Ff)(t),a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),i=["user","charName","avatar","channel"];e.isPrivate&&i.push("isPrivate"),i.push(...Object.keys(s.statistics)),i.push("dice");const n=`\ufeff${i.join(";")}\n`,l=new Blob([n],{type:"text/csv"}),r=[{name:"statisticalTemplate.json",url:URL.createObjectURL(a)},{name:"import.csv",url:URL.createObjectURL(l)}];for(const e of r){const s=document.createElement("a");s.href=e.url,s.download=e.name,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(e.url)}}catch(i){const e=function(e){return M.error(e),e instanceof o.C2?(0,c.T)({message:'Le d\xe9 "{{x}}" est invalide.'}).replace("{{x}}",e.dice):e instanceof o.xM?(0,c.T)({message:'La formule "{{x}}" est invalide.'}).replace("{{x}}",e.formula):e instanceof o.VG?(0,c.T)({message:"Le maximum est sup\xe9rieur au minimum"}):e instanceof o.Rq?(0,c.T)({message:"Les d\xe9s de capacit\xe9s ont \xe9t\xe9 mal renseign\xe9s."}):e instanceof o.HT?(0,c.T)({message:"Trop de d\xe9s (max : 25)"}):e instanceof o.zZ?(0,c.T)({message:"Aucune statistique n'a \xe9t\xe9 trouv\xe9e"}):e instanceof o.XD?(0,c.T)({message:"Trop de statistiques (max : 25)"}):(0,c.T)({message:"Une erreur est survenue : {{x}}"}).replace("{{x}}",e.message)}(i);B()(I()).fire({html:e,icon:"error",showCloseButton:!0,backdrop:!0,showConfirmButton:!1,customClass:{confirmButton:"hide",popup:["error","swal2-toast"],htmlContainer:["error","swal2-toast"],closeButton:"error"}})}},s=e=>(()=>{if(!(0,R.A)())return!1;const e=document.getElementsByClassName("error"),s=document.getElementsByClassName("error-bg");return e.length>0||s.length>0})()?(0,t.jsx)(n.A,{title:(0,c.T)({message:"Veuillez corriger les erreurs"}),classes:{popper:"error"},arrow:!0,children:(0,t.jsx)("span",{children:(0,t.jsx)(l.A,{type:"submit",disabled:!0,variant:"outlined",size:"medium",id:"disabledButton",className:"download-button",children:(0,c.T)({message:"T\xe9l\xe9charger le mod\xe8le"})})})}):(0,t.jsx)(l.A,{type:"submit",disabled:e,variant:"outlined",size:"medium",className:"download-button",children:(0,c.T)({message:"T\xe9l\xe9charger le mod\xe8le"})});return(0,t.jsx)(r.l1,{initialValues:{isCharNameRequired:!1,isPrivate:!1,statistics:[],total:0,diceType:"",critical:{success:20,failure:1},damages:[]},onSubmit:(s,a)=>{let{setSubmitting:t}=a;setTimeout((()=>{e(s),t(!1)}),400)},children:e=>{let{isSubmitting:a,values:i,setFieldValue:n}=e;return(0,t.jsxs)(r.lV,{children:[(0,t.jsx)(_,{}),(0,t.jsx)(T,{critical:i.critical}),(0,t.jsx)(P,{values:i,setFieldValue:n}),(0,t.jsx)(D,{values:i,setFieldValue:n}),s(a)]})}})},U={sidebar_position:2,sidebar_label:"G\xe9n\xe9ration de mod\xe8le",title:"G\xe9n\xe9ration de mod\xe8le"},G=void 0,O={id:"admin/model/form",title:"G\xe9n\xe9ration de mod\xe8le",description:"Le formulaire suivant vous aidera \xe0 cr\xe9er un mod\xe8le de fichier de configuration pour votre serveur. Les modalit\xe9s de v\xe9rification sont les m\xeames que par le bot, donc si vous avez des erreurs, vous pouvez les corriger ici plut\xf4t que manuellement.",source:"@site/docs/admin/model/form.mdx",sourceDirName:"admin/model",slug:"/admin/model/form",permalink:"/docs/admin/model/form",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/admin/model/form.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"G\xe9n\xe9ration de mod\xe8le",title:"G\xe9n\xe9ration de mod\xe8le"},sidebar:"model",previous:{title:"Enregistrement d'un Mod\xe8le",permalink:"/docs/admin/model/"},next:{title:"Limitation",permalink:"/docs/admin/model/limitation"}},H={},J=[];function K(e){const s={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:'Le formulaire suivant vous aidera \xe0 cr\xe9er un mod\xe8le de fichier de configuration pour votre serveur. Les modalit\xe9s de v\xe9rification sont les m\xeames que par le bot, donc si vous avez des erreurs, vous pouvez les corriger ici plut\xf4t que manuellement.\nEnsuite, il vous suffira de cliquer sur "T\xe9l\xe9charger le mod\xe8le" pour obtenir un fichier de configuration pr\xeat \xe0 \xeatre utilis\xe9.'}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Le formulaire fourni aussi un fichier ",(0,t.jsx)(s.code,{children:"csv"})," afin d'importer plusieurs personnages en m\xeame temps. Vous pouvez ignorer ce fichier si vous n'avez pas d'importation \xe0 faire.\nPour plus d'information, vous pouvez vous r\xe9f\xe9rer \xe0 la ",(0,t.jsx)(s.a,{href:"/docs/admin/config/import_export",children:"documentation"}),"."]})}),"\n",(0,t.jsx)(F,{})]})}function Y(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(K,{...e})}):K(e)}},34654:()=>{},34149:()=>{},89780:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},85222:()=>{}}]);