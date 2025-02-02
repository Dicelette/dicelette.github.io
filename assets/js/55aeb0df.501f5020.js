(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[351],{8706:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>de,contentTitle:()=>ue,default:()=>ge,frontMatter:()=>me,metadata:()=>a,toc:()=>xe});const a=JSON.parse('{"id":"sheet/model/form","title":"G\xe9n\xe9ration de mod\xe8le","description":"Le formulaire suivant vous aidera \xe0 cr\xe9er un mod\xe8le de fichier de configuration pour votre serveur. Les modalit\xe9s de v\xe9rification sont les m\xeames que par le bot, donc si vous avez des erreurs, vous pouvez les corriger ici plut\xf4t que manuellement.","source":"@site/docs/sheet/model/form.mdx","sourceDirName":"sheet/model","slug":"/sheet/model/form","permalink":"/docs/sheet/model/form","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/sheet/model/form.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"G\xe9n\xe9ration de mod\xe8le","title":"G\xe9n\xe9ration de mod\xe8le"},"sidebar":"model","previous":{"title":"Enregistrement d\'un Mod\xe8le","permalink":"/docs/sheet/model/"},"next":{"title":"Enregistrer un utilisateur","permalink":"/docs/sheet/user"}}');var l=t(74848),i=t(28453),n=t(75079),r=t(67512),c=t(4308),o=t(84538),m=t(50539),u=t(9136),d=t(78465),x=t.n(d),p=t(29644),g=t.n(p),h=t(42503);function f(e,s){return""!==e.success.toString()&&""!==e.failure.toString()&&e.failure===e.success&&e.failure>=0&&e.success>=0||"failure"===s&&e.failure<0||"success"===s&&e.success<0?"error":""}var b=t(37399),j=t(4671);const v=e=>{let{len:s,type:t,onClick:a}=e;const i="dice"===t?(0,m.T)({message:"Ajouter un d\xe9"}):(0,m.T)({message:"Ajouter une statistique"}),r="dice"===t?(0,m.T)({message:"d\xe9s"}):(0,m.T)({message:"statistiques (max 25)"}),c=`${(0,m.T)({message:"Vous avez atteint le nombre maximum de"})} ${r}`;return"stats"===t?(0,l.jsx)(n.A,{title:s>25?c:i,arrow:!0,children:(0,l.jsx)("span",{children:(0,l.jsx)(j.A,{onClick:a,size:"small",className:"manage-button",disabled:s>25,children:(0,l.jsx)(b.In,{icon:"fluent:add-circle-12-regular",height:"20"})})})}):(0,l.jsx)(n.A,{title:i,arrow:!0,children:(0,l.jsx)("span",{children:(0,l.jsx)(j.A,{onClick:a,size:"small",className:"manage-button",children:(0,l.jsx)(b.In,{icon:"fluent:add-circle-12-regular",height:"20"})})})})};var N=t(35181),C=t(47461);const $=e=>{let{className:s,label:t,name:a}=e;return(0,l.jsx)(c.D0,{name:a,children:e=>{let{field:a}=e;return(0,l.jsx)(N.A,{className:s,control:(0,l.jsx)(C.A,{onChange:a.onChange,checked:a.checked,name:a.name,value:a.value,id:a.name}),labelPlacement:"start",label:t})}})},T=e=>{let{length:s,type:t,children:a,label:i,onAdd:n}=e;return(0,l.jsxs)("section",{className:"flex flex-col",children:[(0,l.jsxs)("span",{className:"text-lg font-bold mb-2 heading-2",children:[i,n&&(0,l.jsx)(v,{len:s,type:t,onClick:n})]}),a]})};var y=t(50767);const w=e=>(0,l.jsx)(c.D0,{name:e.name,children:s=>{let{field:t,form:{errors:a}}=s;return(0,l.jsx)(y.A,{...e,value:t.value,onChange:e.onChange??t.onChange,onBlur:t.onBlur,autoFocus:e.autoFocus,className:`2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full ${e.className}`,error:void 0!==a[t.name],label:e.label,size:"small",name:t.name,type:e.type,typeof:e.type})}}),k=e=>(0,l.jsx)(c.D0,{name:e.name,children:s=>{let{field:t,form:{errors:a}}=s;return(0,l.jsx)(y.A,{...e,value:t.value,onChange:e.onChange??t.onChange,onBlur:t.onBlur,autoFocus:e.autoFocus,className:`!mb-4 w-[400px] min-[0px]:max-xl:w-full ${e.className}`,error:void 0!==a[t.name],label:e.label,size:"small",name:t.name,type:e.type,typeof:e.type,inputProps:e.inputProps})}}),S=e=>{let{critical:s}=e;return(0,l.jsxs)(T,{label:"Critique",children:[(0,l.jsx)(k,{label:(0,m.T)({message:"Succ\xe8s"}),name:"critical.success",type:"number",id:"critical",className:`success ${f(s,"success")}`,inputProps:{min:0}}),(0,l.jsx)(k,{label:(0,m.T)({message:"\xc9chec"}),name:"critical.failure",type:"number",id:"critical",className:`failure ${f(s,"failure")}`,inputProps:{min:0}}),(t=s,""!==t.success.toString()&&""!==t.failure.toString()&&t.failure===t.success&&t.failure>=0&&t.success>=0?(0,l.jsx)(h.m_,{id:"critical",anchorSelect:"#critical",content:(0,m.T)({message:"Les deux valeurs ne peuvent \xeatre identiques"}),style:{background:"var(--rt-color-error)"}}):t.failure<0?(0,l.jsx)(h.m_,{id:"critical",anchorSelect:".failure",content:(0,m.T)({message:"La valeur ne peut pas \xeatre inf\xe9rieure \xe0 0"}),style:{background:"var(--rt-color-error)"}}):t.success<0?(0,l.jsx)(h.m_,{id:"critical",anchorSelect:".success",content:(0,m.T)({message:"La valeur ne peut pas \xeatre inf\xe9rieure \xe0 0"}),style:{background:"var(--rt-color-error)"}}):void 0)]});var t};var z=t(44675),A=t(88166);const L=e=>{let{onClick:s,size:t,maxLen:a,length:i}=e;const r=1280===t?"xl":"2xl";return(0,l.jsx)(n.A,{title:(0,m.T)({message:"Dupliquer ce champ"}),classes:{popper:i>a?"error-copy":"copy-tooltip"},arrow:!0,children:(0,l.jsx)(j.A,{onClick:s,size:"small",className:`manage-button !p-px relative top-2.5 min-[0px]:max-${r}:w-full`,"aria-label":(0,m.T)({message:"Dupliquer ce champ"}),disabled:i>a,children:(0,l.jsx)(b.In,{icon:"system-uicons:duplicate",height:"24",className:"copy-button"})})})},D=e=>{let{onClick:s,size:t}=e;const a=1280===t?"xl":"2xl";return(0,l.jsxs)(r.A,{onClick:s,className:`!p-1 relative ${a}:top-2.5 min-[0px]:max-${a}:w-full copy-button`,variant:"outlined",size:"medium","aria-label":(0,m.T)({message:"Dupliquer ce champ"}),title:(0,m.T)({message:"Dupliquer ce champ"}),children:[(0,l.jsx)(b.In,{icon:"system-uicons:duplicate",height:"24",className:"copy-button text-button"}),(0,m.T)({message:"Dupliquer"})]})},I=e=>{let{onClick:s,size:t,maxLen:a,length:i}=e;const n=(0,z.A)();return(0,A.A)(n.breakpoints.down(t))?(0,l.jsx)(D,{onClick:s,size:t}):(0,l.jsx)(L,{length:i,maxLen:a,onClick:s,size:t})},q=e=>{let{onClick:s,size:t}=e;const a=1280===t?"xl":"2xl";return(0,l.jsx)(n.A,{title:(0,m.T)({message:"Supprimer ce champ"}),classes:{popper:"remove"},arrow:!0,children:(0,l.jsx)(j.A,{onClick:s,size:"small",className:`manage-button !p-px relative top-2.5 min-[0px]:max-${a}:w-full`,"aria-label":(0,m.T)({message:"Supprimer ce champ"}),children:(0,l.jsx)(b.In,{icon:"lucide:delete",height:"24",className:"delete-button"})})})},_=e=>{let{onClick:s,size:t}=e;const a=1280===t?"xl":"2xl";return(0,l.jsxs)(r.A,{onClick:s,className:`!p-1 relative ${a}:top-2.5 min-[0px]:max-${a}:w-full delete-button`,variant:"outlined",size:"medium","aria-label":(0,m.T)({message:"Supprimer ce champ"}),children:[(0,l.jsx)(b.In,{icon:"lucide:delete",height:"24",className:"delete-button text-button"}),(0,m.T)({message:"Supprimer"})]})},P=e=>{let{onClick:s,size:t}=e;const a=(0,z.A)();return(0,A.A)(a.breakpoints.down(t))?(0,l.jsx)(_,{onClick:s,size:t}):(0,l.jsx)(q,{onClick:s,size:t})};var F=t(62022),V=t(96540);const E=e=>{let{duplicateIndices:s,index:t,dices:a,push:i,remove:n}=e;const r=a[t],{name:o,value:u}=r;return(0,l.jsx)(F.sx,{draggableId:String(t),index:t,children:e=>(0,V.createElement)("tr",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,key:t,className:`flex flex-col xl:flex-row items-start xl:w-full ${s.includes(t)?"error-bg":""} ${0===t?"border-t-0":""}`},(0,l.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,l.jsx)(I,{maxLen:25,length:a.length,size:1280,onClick:()=>{i({name:o,value:u})}})}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:[(0,l.jsx)(w,{name:`damages[${t}].name`,label:(0,m.T)({message:"Nom"}),className:""+(0===o.length?"error":""),id:`Dice-Nom-${t}`}),(0,l.jsx)(c.Kw,{name:`damages[${t}].name`})]}),(0,l.jsx)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:(0,l.jsx)(w,{name:`damages[${t}].value`,label:(0,m.T)({message:"Valeur"}),className:""+(0===o.length?"error":""),id:`Value-${t}`})}),((e,s,t)=>s.includes(e)?(0,l.jsx)(h.m_,{id:`Dice-Nom-${e}`,content:(0,m.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Dice-Nom-${e}`}):0===t.name.length?(0,l.jsx)(h.m_,{id:`Dice-Nom-${e}`,content:(0,m.T)({message:"Le nom ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Dice-Nom-${e}`}):null)(t,s,r),0===o.length&&(0,l.jsx)(h.m_,{id:`Value-${t}`,content:(0,m.T)({message:"La valeur ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Value-${t}`}),(0,l.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,l.jsx)(P,{size:1280,onClick:()=>n(t)})}))},t)},M=e=>{let{values:s,setFieldValue:t}=e;const[a,i]=(0,V.useState)([]);(0,V.useEffect)((()=>{(()=>{const e=[];s.damages.forEach(((t,a)=>{const l=s.damages.findIndex(((e,s)=>s!==a&&e.name===t.name));-1===l||e.includes(a)||(e.push(a),e.push(l))})),i(e)})()}),[s.damages]);const n=e=>{if(!e.destination)return;const a=Array.from(s.damages),[l]=a.splice(e.source.index,1);a.splice(e.destination.index,0,l),t("damages",a)};return(0,l.jsx)("div",{className:"statistic",children:(0,l.jsx)(c.ED,{name:"damages",children:e=>{let{push:t,remove:i}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(T,{length:s.damages.length,type:"dice",label:(0,m.T)({message:"D\xe9s"}),onAdd:()=>t({name:"",value:""}),children:""}),(0,l.jsx)("table",{className:"w-full",children:(0,l.jsx)(F.JY,{onDragEnd:n,children:(0,l.jsx)(F.gL,{droppableId:"droppable",children:e=>(0,l.jsxs)("tbody",{...e.droppableProps,ref:e.innerRef,className:"divide-y block w-full",children:[s.damages.map(((e,n)=>(0,l.jsx)(E,{duplicateIndices:a,index:n,dices:s.damages,push:t,remove:i}))),e.placeholder]})})})})]})}})})},R=()=>(0,l.jsxs)(T,{label:"G\xe9n\xe9ral",children:[(0,l.jsx)($,{className:"self-start !ml-0 -mt-2",label:(0,m.T)({message:"Rendre obligatoire le nom du personnage"}),name:"isCharNameRequired"}),(0,l.jsx)($,{className:"self-start !ml-0 -mt-2 mb-6",label:(0,m.T)({message:"Fiches priv\xe9es"}),"aria-label":(0,m.T)({message:"Utilis\xe9e uniquement dans le CSV d'importation de fiche"}),name:"isPrivate"}),(0,l.jsx)(h.m_,{anchorSelect:"#isPrivate",content:(0,m.T)({message:"Utilis\xe9e uniquement dans le CSV d'importation de fiche"})}),(0,l.jsx)(k,{label:(0,m.T)({message:"Total"}),name:"total",id:"total",type:"number",inputProps:{min:0}}),(0,l.jsx)(k,{label:(0,m.T)({message:"D\xe9 principal"}),name:"diceType"})]});var B=t(16026);const U=e=>"naturalDice"===e?{title:(0,m.T)({message:"Affecter uniquement les d\xe9s naturels"}),value:"onNaturalDice",icon:{selected:"game-icons:dice-target",unselected:"game-icons:perspective-dice-six-faces-three"},class:"onNatDice"}:"excludedStat"===e?{title:(0,m.T)({message:"Exclure de la s\xe9lection des d\xe9s de statistiques"}),value:"excludedStat",icon:{selected:"fluent:table-simple-exclude-16-regular",unselected:"fluent:table-simple-include-16-filled"},class:"excludedStat"}:{title:(0,m.T)({message:"Utilisable sur les d\xe9s de comp\xe9tences"}),value:"affectSkill",icon:{selected:"pepicons-pencil:sword-shield-circle",unselected:"pepicons-pencil:sword-shield-circle-off"},class:"affectSkill"},G=e=>{let{selected:s,onChange:t,size:a,opt:i}=e;const r=1280===a?"xl":"2xl",c=U(i);return(0,l.jsx)(n.A,{title:c.title,classes:{popper:`toggle-tooltip ${c.class}`},arrow:!0,children:(0,l.jsx)(B.A,{value:c.value,size:"small",onChange:t,selected:s,className:`manage-button !p-px relative top-1 min-[0px]:max-${r}:w-full toggle !border-[0px] align-middle ${c.class}`,children:(0,l.jsx)(b.In,{icon:s?c.icon.selected:c.icon.unselected,height:"32",className:`text-button toggle-button ml-[5px] ${s?"checked":""} ${c.class}`})})})},J=e=>{let{selected:s,onChange:t,size:a,opt:i}=e;const n=1280===a?"xl":"2xl",r=U(i);return(0,l.jsxs)(B.A,{value:r.value,className:`!p-1 relative ${n}:top-2.5 min-[0px]:max-${n}:w-full toggle-button toggle ${r.class}`,size:"small",selected:s,onChange:t,"aria-label":r.title,title:r.title,children:[(0,l.jsx)(b.In,{icon:r.icon.selected,height:"24",className:"text-button dice-button"}),r.title]})};function O(e){let{selected:s,onChange:t,size:a,opt:i}=e;const n=(0,z.A)();return(0,A.A)(n.breakpoints.down(a))?(0,l.jsx)(J,{selected:s,onChange:t,size:a,opt:i}):(0,l.jsx)(G,{selected:s,onChange:t,size:a,opt:i})}const K=e=>"number"==typeof e||!Number.isNaN(Number(e))&&"string"==typeof e,H=(e,s)=>K(e)&&Number.parseInt(e,10)<s,Y=(e,s)=>{if(!s.min)return;const{min:t,max:a}=s;return t?t&&a&&t>a?(0,l.jsx)(h.m_,{id:`Min-${e}`,content:(0,m.T)({message:"La valeur minimale ne peut pas \xeatre sup\xe9rieure \xe0 la valeur maximale"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):H(t,0)?(0,l.jsx)(h.m_,{id:`Min-${e}`,content:(0,m.T)({message:"La valeur minimale ne peut pas \xeatre n\xe9gative"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):K(t)?null:(0,l.jsx)(h.m_,{id:`Min-${e}`,content:(0,m.T)({message:"La valeur minimale doit \xeatre un nombre"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):void 0},X=(e,s)=>{const{min:t,max:a}=s;if(a)return t&&a&&t>a?(0,l.jsx)(h.m_,{id:`Max-${e}`,content:(0,m.T)({message:"La valeur maximale ne peut pas \xeatre inf\xe9rieure \xe0 la valeur minimale"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):H(a,0)?(0,l.jsx)(h.m_,{id:`Max-${e}`,content:(0,m.T)({message:"La valeur maximale ne peut pas \xeatre n\xe9gative"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):K(a)?null:(0,l.jsx)(h.m_,{id:`Max-${e}`,content:(0,m.T)({message:"La valeur maximale doit \xeatre un nombre"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`})},Z=e=>{const{min:s,max:t}=e;if(s)return s&&t&&s>t||H(s,0)||Number.isNaN(Number.parseInt(String(s),10))?"error":""},Q=e=>{const{min:s,max:t}=e;if(t)return s&&t&&s>t||H(t,0)?"error":K(t)?"":"error"},W=(e,s,t)=>0===t.length?(0,l.jsx)(h.m_,{id:`Stats-Nom-${e}`,content:(0,m.T)({message:"Le nom ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Stats-Nom-${e}`}):s.includes(e)?(0,l.jsx)(h.m_,{id:`Stats-Nom-${e}`,content:(0,m.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Stats-Nom-${e}`}):null,ee=e=>{if(0===e.length)return"error"},se=e=>{let{statIndex:s,duplicateIndices:t,push:a,remove:i,statistics:n,setFieldValue:r}=e;const o=n[s],{max:u,min:d,combinaison:x,excluded:p,name:g}=o;return(0,l.jsx)(F.sx,{draggableId:String(s),index:s,children:e=>(0,V.createElement)("tr",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,key:s,className:`flex flex-col 2xl:flex-row items-start 2xl:w-full ${0===s?"border-t-0":""}  ${t.includes(s)?"error-bg":""} 2xl:h-18`},(0,l.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full",children:(0,l.jsx)(I,{size:1536,length:n.length,maxLen:25,onClick:()=>{a({name:"",max:u,min:d,combinaison:x,excluded:p})}})}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,l.jsx)(w,{label:(0,m.T)({message:"Nom"}),name:`statistics[${s}].name`,id:`Stats-Nom-${s}`,className:`${ee(g)}`,"data-tooltip-variant":"error"}),(0,l.jsx)(c.Kw,{name:`statistics[${s}].name`}),W(s,t,g)]}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,l.jsx)(w,{type:"number",inputProps:{min:0},name:`statistics[${s}].min`,label:(0,m.T)({message:"Min"}),className:`2xl:w-[100px] ${Z(o)}`,id:`Min-${s}`,"data-tooltip-variant":"error",disabled:!!x}),Y(s,o)]}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,l.jsx)(w,{type:"number",inputProps:{min:0},name:`statistics[${s}].max`,label:(0,m.T)({message:"Max"}),id:`Max-${s}`,className:`2xl:w-[100px] ${Q(o)}`,disabled:!!x}),X(s,o)]}),(0,l.jsx)("td",{className:"p-2 min-[0px]:max-2xl:w-full ",children:(0,l.jsx)(w,{label:(0,m.T)({message:"Combinaison"}),name:`statistics[${s}].combinaison`,disabled:!(!d&&!u)})}),(0,l.jsx)("td",{className:"p-2 min-[0px]:max-2xl:w-full ",children:(0,l.jsx)(O,{selected:p,onChange:()=>r(`statistics[${s}].excluded`,!p),size:1280,opt:"excludedStat"})}),(0,l.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full ",children:(0,l.jsx)(P,{size:1536,onClick:()=>i(s)})}))},s)},te=e=>{let{values:s,setFieldValue:t}=e;const[a,i]=(0,V.useState)([]);(0,V.useEffect)((()=>{(()=>{const e=[];s.statistics.forEach(((t,a)=>{const l=s.statistics.findIndex(((e,s)=>s!==a&&e.name===t.name));-1===l||e.includes(a)||(e.push(a),e.push(l))})),i(e)})()}),[s.statistics]);const n=e=>{if(!e.destination)return;const a=Array.from(s.statistics),[l]=a.splice(e.source.index,1);a.splice(e.destination.index,0,l),t("statistics",a)};return(0,l.jsx)("div",{className:"statistic",children:(0,l.jsx)(c.ED,{name:"statistics",children:e=>{let{push:i,remove:r}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(T,{type:"stats",length:s.statistics.length,label:(0,m.T)({message:"Statistiques"}),onAdd:()=>i({name:"",values:{min:0,max:0,combinaison:"",excluded:!1}}),children:""}),(0,l.jsx)("table",{className:"w-full",children:(0,l.jsx)(F.JY,{onDragEnd:n,children:(0,l.jsx)(F.gL,{droppableId:"droppable",children:e=>(0,l.jsxs)("tbody",{...e.droppableProps,ref:e.innerRef,className:"divide-y block w-full",children:[s.statistics.map(((e,n)=>(0,l.jsx)(se,{statIndex:n,duplicateIndices:a,push:i,remove:r,statistics:s.statistics,setFieldValue:t},n))),e.placeholder]})})})})]})}})})};var ae=t(73698);const le=e=>{let{index:s,idName:t,duplicateIndices:a,customCritical:i}=e;return a.includes(s)&&"selection"!==t?(0,l.jsx)(h.m_,{id:`Critical-${t}-${s}`,content:(0,m.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Critical-${t}-${s}`}):0===i?.[t].length?(0,l.jsx)(h.m_,{id:`Critical-${t}-${s}`,content:(0,m.T)({message:"Le texte ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Critical-${t}-${s}`}):null},ie=e=>{let{index:s,duplicateIndices:t,push:a,remove:i,customCritical:n,setFieldValue:r}=e;const o=n[s],{onNaturalDice:u,affectSkill:d,selection:x,name:p,formula:g,text:h}=o;return(0,l.jsx)(F.sx,{draggableId:String(s),index:s,children:e=>(0,V.createElement)("tr",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,key:s,className:`flex flex-col xl:flex-row items-start xl:w-full ${t.includes(s)?"error-bg":""} ${0===s?"border-t-0":""}`},(0,l.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,l.jsx)(I,{maxLen:22,length:n.length,size:1280,onClick:()=>{var e;a({...(e=n[s],{selection:e.selection,name:e?.name,formula:e?.formula,text:e?.text,onNaturalDice:e?.onNaturalDice,affectSkill:e?.affectSkill})})}})}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:[(0,l.jsx)(ae.A,{size:"small",slotProps:{paper:{className:"autocomplete"}},id:`Critical-selection-${s}`,className:"autocomplete 2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full",style:{fontFamily:"Fira Code VF"},options:[">",">=","<","<=","==","!="],value:x||"",onChange:(e,t)=>r(`customCritical[${s}].selection`,t||""),renderInput:e=>(0,l.jsx)(y.A,{size:"medium",...e,label:(0,m.T)({message:"Signe"}),style:{fontFamily:"Fira Code VF"},variant:"outlined",className:"2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full "+(0===x.length?"error":"")})}),(0,l.jsx)(c.Kw,{name:`customCritical[${s}].selection`}),le({index:s,idName:"selection",duplicateIndices:t,customCritical:o})]}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:[(0,l.jsx)(w,{name:`customCritical[${s}].name`,label:(0,m.T)({message:"Nom"}),variant:"outlined",className:""+(0===p.length?"error":""),id:`Critical-name-${s}`}),(0,l.jsx)(c.Kw,{name:`customCritical[${s}].name`}),le({index:s,idName:"name",duplicateIndices:t,customCritical:o})]}),(0,l.jsxs)("td",{className:"p-2 min-[0px]:max-xl:w-full h-200px",children:[(0,l.jsx)(w,{name:`customCritical[${s}].formula`,label:(0,m.T)({message:"Formule"}),variant:"outlined",className:""+(0===g.length?"error":""),id:`Critical-formula-${s}`}),(0,l.jsx)(c.Kw,{name:`customCritical[${s}].formula`}),le({index:s,idName:"formula",duplicateIndices:t,customCritical:o})]}),(0,l.jsx)("td",{className:"p-2 min-[0px]:max-xl:w-full h-200px",children:(0,l.jsx)(O,{selected:u,onChange:()=>r(`customCritical[${s}].onNaturalDice`,!u),size:1280,opt:"naturalDice"})}),(0,l.jsx)("td",{className:"p-2 min-[0px]:max-xl:w-full h-200px",children:(0,l.jsx)(O,{selected:d,onChange:()=>r(`customCritical[${s}].affectSkill`,!d),size:1280,opt:"affectSkill"})}),(0,l.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,l.jsx)(P,{size:1280,onClick:()=>i(s)})}))},s)},ne=e=>{let{values:s,setFieldValue:t}=e;const[a,i]=(0,V.useState)([]);(0,V.useEffect)((()=>{(()=>{const e=[];s.customCritical.forEach(((t,a)=>{const l=s.customCritical.findIndex(((e,s)=>s!==a&&e.name===t.name));-1===l||e.includes(a)||(e.push(a),e.push(l))})),i(e)})()}),[s.customCritical]);const n=e=>{if(!e.destination)return;const a=Array.from(s.customCritical),[l]=a.splice(e.source.index,1);a.splice(e.destination.index,0,l),t("customCritical",a)};return(0,l.jsx)("div",{className:"statistic",children:(0,l.jsx)(c.ED,{name:"customCritical",children:e=>{let{push:i,remove:r}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(T,{length:s.customCritical.length,type:"critical",label:(0,m.T)({message:"Critiques Personnalis\xe9s"}),onAdd:()=>i({selection:">=",name:"",formula:"",text:"",onNaturalDice:!1,affectSkill:!1}),children:""}),(0,l.jsx)("table",{className:"w-full",children:(0,l.jsx)(F.JY,{onDragEnd:n,children:(0,l.jsx)(F.gL,{droppableId:"droppable",children:e=>(0,l.jsxs)("tbody",{...e.droppableProps,ref:e.innerRef,className:"divide-y block w-full",children:[s.customCritical.map(((e,n)=>(0,l.jsx)(ie,{index:n,duplicateIndices:a,push:i,remove:r,customCritical:s.customCritical,setFieldValue:t},n))),e.placeholder]})})})})]})}})})};var re=t(96763);function ce(e){var s;if("number"==typeof(s=e)||!Number.isNaN(Number(s))&&"string"==typeof s)return Number.parseInt(e.toString(),10)}const oe=()=>{const e=e=>{const s={},t={},a={};if(e.statistics.length>0)for(const c of e.statistics)s[c.name]={combinaison:c.combinaison,max:ce(c.max),min:ce(c.min),exclude:c.excluded};if(e.damages.length>0)for(const c of e.damages)t[c.name]=c.value;if(e.customCritical.length>0)for(const c of e.customCritical)a[c.name]={sign:c.selection,value:c.formula,onNaturalDice:c.onNaturalDice,affectSkill:c.affectSkill};const l={success:e.critical.success&&K(e.critical.success)?Number.parseInt(e.critical.success.toString(),10):void 0,failure:e.critical.failure&&K(e.critical.failure)?Number.parseInt(e.critical.failure.toString(),10):void 0},i=K(e.total)?Number.parseInt(e.total.toString(),10):void 0,n={charName:e.isCharNameRequired,critical:l,diceType:e.diceType,total:i,statistics:e.statistics.length>0?s:void 0,damage:e.damages.length>0?t:void 0,customCritical:e.customCritical.length>0?a:void 0};try{const s=(0,o.Ff)(n);s.$schema="https://raw.githubusercontent.com/Dicelette/core/refs/heads/main/dicelette.schema.json";const t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),a=["user","charName","avatar","channel"];e.isPrivate&&a.push("isPrivate"),s.statistics&&a.push(...Object.keys(s.statistics)),a.push("dice");const l=`\ufeff${a.join(";")}\n`,i=new Blob([l],{type:"text/csv"}),r=[{name:"statisticalTemplate.json",url:URL.createObjectURL(t)},{name:"import.csv",url:URL.createObjectURL(i)}];for(const e of r){const s=document.createElement("a");s.href=e.url,s.download=e.name,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(e.url)}}catch(r){const e=function(e){return re.error(e),e instanceof o.C2?"createCriticalCustom"===e.cause?(0,m.T)({message:"Le d\xe9 de critique est invalide : $ ne peut pas \xeatre utilis\xe9 sans statistiques."}):"no_dice_type"===e.message?(0,m.T)({message:"Les critiques customis\xe9s ne peuvent pas \xeatre utilis\xe9s sans d\xe9 type."}):"no_roll_result"===e.message?(0,m.T)({message:'Le d\xe9 de comp\xe9tence nomm\xe9 "{{x}}" ("{{formule}}") ne semble pas \xeatre un d\xe9.'}).replace("{{x}}",e.dice).replace("{{formule}}",e.method.toString()):(0,m.T)({message:'Le d\xe9 "{{x}}" est invalide. Journalisation : {{error}}'}).replace("{{x}}",e.dice).replace("{{error}}",e.method.toString()):e instanceof o.xM?(0,m.T)({message:'La formule "{{x}}" est invalide.'}).replace("{{x}}",e.formula):e instanceof o.VG?(0,m.T)({message:"Le maximum est sup\xe9rieur au minimum"}):e instanceof o.Rq?(0,m.T)({message:"Les d\xe9s de capacit\xe9s ont \xe9t\xe9 mal renseign\xe9s."}):e instanceof o.HT?(0,m.T)({message:"Trop de d\xe9s (max : 25)"}):e instanceof o.zZ?(0,m.T)({message:"Aucune statistique n'a \xe9t\xe9 trouv\xe9e"}):e instanceof o.XD?(0,m.T)({message:"Trop de statistiques (max : 25)"}):(0,m.T)({message:"Une erreur est survenue : {{x}}"}).replace("{{x}}",e.message)}(r);g()(x()).fire({html:e,icon:"error",showCloseButton:!0,backdrop:!0,showConfirmButton:!1,customClass:{confirmButton:"hide",popup:["error","swal2-toast"],htmlContainer:["error","swal2-toast"],closeButton:"error"}}).then()}},s=e=>(()=>{if(!(0,u.A)())return!1;const e=document.getElementsByClassName("error"),s=document.getElementsByClassName("error-bg");return e.length>0||s.length>0})()?(0,l.jsx)(n.A,{title:(0,m.T)({message:"Veuillez corriger les erreurs"}),classes:{popper:"error"},arrow:!0,children:(0,l.jsx)("span",{children:(0,l.jsx)(r.A,{type:"submit",disabled:!0,variant:"outlined",size:"medium",id:"disabledButton",className:"download-button",children:(0,m.T)({message:"T\xe9l\xe9charger le mod\xe8le"})})})}):(0,l.jsx)(r.A,{type:"submit",disabled:e,variant:"outlined",size:"medium",className:"download-button",children:(0,m.T)({message:"T\xe9l\xe9charger le mod\xe8le"})});return(0,l.jsx)(c.l1,{initialValues:{isCharNameRequired:!1,isPrivate:!1,statistics:[],total:"",diceType:"",critical:{success:"",failure:""},damages:[],customCritical:[]},onSubmit:(s,t)=>{let{setSubmitting:a}=t;setTimeout((()=>{e(s),a(!1)}),400)},children:e=>{let{isSubmitting:t,values:a,setFieldValue:i}=e;return(0,l.jsxs)(c.lV,{children:[(0,l.jsx)(R,{}),(0,l.jsx)(S,{critical:a.critical}),(0,l.jsx)(te,{values:a,setFieldValue:i}),(0,l.jsx)(M,{values:a,setFieldValue:i}),(0,l.jsx)(ne,{values:a,setFieldValue:i}),s(t)]})}})},me={sidebar_position:2,sidebar_label:"G\xe9n\xe9ration de mod\xe8le",title:"G\xe9n\xe9ration de mod\xe8le"},ue=void 0,de={},xe=[];function pe(e){const s={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:'Le formulaire suivant vous aidera \xe0 cr\xe9er un mod\xe8le de fichier de configuration pour votre serveur. Les modalit\xe9s de v\xe9rification sont les m\xeames que par le bot, donc si vous avez des erreurs, vous pouvez les corriger ici plut\xf4t que manuellement.\nEnsuite, il vous suffira de cliquer sur "T\xe9l\xe9charger le mod\xe8le" pour obtenir un fichier de configuration pr\xeat \xe0 \xeatre utilis\xe9.'}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsxs)(s.p,{children:["Le formulaire fourni aussi un fichier ",(0,l.jsx)(s.code,{children:"csv"})," afin d'importer plusieurs personnages en m\xeame temps. Vous pouvez ignorer ce fichier si vous n'avez pas d'importation \xe0 faire.\nPour plus d'information, vous pouvez vous r\xe9f\xe9rer \xe0 la ",(0,l.jsx)(s.a,{href:"/docs/sheet/import_export",children:"documentation"}),"."]})}),"\n",(0,l.jsx)(oe,{})]})}function ge(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(pe,{...e})}):pe(e)}},78982:()=>{},47790:()=>{},73776:()=>{},21638:()=>{},92668:()=>{},77965:()=>{},66089:()=>{},79368:()=>{},64688:()=>{},51069:()=>{},15340:()=>{},79838:()=>{},41234:()=>{}}]);