(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[50],{44862:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>J,contentTitle:()=>G,default:()=>H,frontMatter:()=>O,metadata:()=>K,toc:()=>W});var a=t(86070),i=t(76113),r=t(3555),l=t(52133),n=t(77041),c=t(6521),o=t(43803),m=t(87543),u=t(9314),d=t(67914);const x=e=>{let{len:s,type:t,onClick:i}=e;const l="dice"===t?(0,o.T)({message:"Ajouter un d\xe9"}):(0,o.T)({message:"Ajouter une statistique"}),n="dice"===t?(0,o.T)({message:"d\xe9s"}):(0,o.T)({message:"statistiques (max 25)"}),c=`${(0,o.T)({message:"Vous avez atteint le nombre maximum de"})} ${n}`;return"stats"===t?(0,a.jsx)(r.A,{title:s>25?c:l,arrow:!0,children:(0,a.jsx)("span",{children:(0,a.jsx)(u.A,{onClick:i,size:"small",className:"manage-button",disabled:s>25,children:(0,a.jsx)(d.In,{icon:"fluent:add-circle-12-regular",height:"20"})})})}):(0,a.jsx)(r.A,{title:l,arrow:!0,children:(0,a.jsx)("span",{children:(0,a.jsx)(u.A,{onClick:i,size:"small",className:"manage-button",children:(0,a.jsx)(d.In,{icon:"fluent:add-circle-12-regular",height:"20"})})})})};var p=t(31209),h=t(83436);const g=e=>{let{className:s,label:t,name:i}=e;return(0,a.jsx)(n.D0,{name:i,children:e=>{let{field:i}=e;return(0,a.jsx)(p.A,{className:s,control:(0,a.jsx)(h.A,{onChange:i.onChange,checked:i.checked,name:i.name,value:i.value,id:i.name}),labelPlacement:"start",label:t})}})},b=e=>{let{length:s,type:t,children:i,label:r,onAdd:l}=e;return(0,a.jsxs)("section",{className:"flex flex-col",children:[(0,a.jsxs)("span",{className:"text-lg font-bold mb-2",children:[r,l&&(0,a.jsx)(x,{len:s,type:t,onClick:l})]}),i]})};var f=t(45204);const j=e=>(0,a.jsx)(n.D0,{name:e.name,children:s=>{let{field:t,form:{errors:i}}=s;return(0,a.jsx)(f.A,{...e,value:t.value,onChange:e.onChange??t.onChange,onBlur:t.onBlur,autoFocus:e.autoFocus,className:`2xl:w-[200px] !mb-0 min-[0px]:max-2xl:w-full ${e.className}`,error:void 0!==i[t.name],label:e.label,size:"small",name:t.name,type:e.type,typeof:e.type})}}),v=e=>(0,a.jsx)(n.D0,{name:e.name,children:s=>{let{field:t,form:{errors:i}}=s;return(0,a.jsx)(f.A,{...e,value:t.value,onChange:e.onChange??t.onChange,onBlur:t.onBlur,autoFocus:e.autoFocus,className:`!mb-4 w-[400px] min-[0px]:max-xl:w-full ${e.className}`,error:void 0!==i[t.name],label:e.label,size:"small",name:t.name,type:e.type,typeof:e.type,inputProps:e.inputProps})}});function T(e,s){return e.failure===e.success||"failure"===s&&e.failure<0||"success"===s&&e.success<0?"error":""}const y=e=>{let{critical:s}=e;return(0,a.jsxs)(b,{label:"Critique",children:[(0,a.jsx)(v,{label:(0,o.T)({message:"Succ\xe8s"}),name:"critical.success",type:"number",id:"critical",className:`success ${T(s,"success")}`,inputProps:{min:0}}),(0,a.jsx)(v,{label:(0,o.T)({message:"\xc9chec"}),name:"critical.failure",type:"number",id:"critical",className:`failure ${T(s,"failure")}`,inputProps:{min:0}}),(t=s,t.failure===t.success?(0,a.jsx)(m.m_,{id:"critical",anchorSelect:"#critical",content:(0,o.T)({message:"Les deux valeurs ne peuvent \xeatre identiques"}),style:{background:"var(--rt-color-error)"}}):t.failure<0?(0,a.jsx)(m.m_,{id:"critical",anchorSelect:".failure",content:(0,o.T)({message:"La valeur ne peut pas \xeatre inf\xe9rieure \xe0 0"}),style:{background:"var(--rt-color-error)"}}):t.success<0?(0,a.jsx)(m.m_,{id:"critical",anchorSelect:".success",content:(0,o.T)({message:"La valeur ne peut pas \xeatre inf\xe9rieure \xe0 0"}),style:{background:"var(--rt-color-error)"}}):void 0)]});var t};var N=t(30758),k=t(10972),w=t(46495);const $=e=>{let{onClick:s,size:t,maxLen:i,length:l}=e;const n=1280===t?"xl":"2xl";return(0,a.jsx)(r.A,{title:(0,o.T)({message:"Dupliquer ce champ"}),classes:{popper:l>i?"error-copy":"copy-tooltip"},arrow:!0,children:(0,a.jsx)("span",{children:(0,a.jsx)(u.A,{onClick:s,size:"small",className:`manage-button !p-px relative top-2.5 min-[0px]:max-${n}:w-full`,"aria-label":(0,o.T)({message:"Dupliquer ce champ"}),title:(0,o.T)({message:"Dupliquer ce champ"}),disabled:l>i,children:(0,a.jsx)(d.In,{icon:"system-uicons:duplicate",height:"24",className:"copy-button"})})})})},C=e=>{let{onClick:s,size:t}=e;const i=1280===t?"xl":"2xl";return(0,a.jsxs)(l.A,{onClick:s,className:`!p-1 relative ${i}:top-2.5 min-[0px]:max-${i}:w-full copy-button`,variant:"outlined",size:"medium","aria-label":(0,o.T)({message:"Dupliquer ce champ"}),title:(0,o.T)({message:"Dupliquer ce champ"}),children:[(0,a.jsx)(d.In,{icon:"system-uicons:duplicate",height:"24",className:"copy-button text-button"}),(0,o.T)({message:"Dupliquer"})]})},S=e=>{let{onClick:s,size:t,maxLen:i,length:r}=e;const l=(0,k.A)();return(0,w.A)(l.breakpoints.down(t))?(0,a.jsx)(C,{onClick:s,size:t}):(0,a.jsx)($,{length:r,maxLen:i,onClick:s,size:t})},A=e=>{let{onClick:s,size:t}=e;const i=1280===t?"xl":"2xl";return(0,a.jsx)(r.A,{title:(0,o.T)({message:"Supprimer ce champ"}),classes:{popper:"remove"},arrow:!0,children:(0,a.jsx)(u.A,{onClick:s,size:"small",className:`manage-button !p-px relative top-2.5 min-[0px]:max-${i}:w-full`,"aria-label":(0,o.T)({message:"Supprimer ce champ"}),title:(0,o.T)({message:"Supprimer ce champ"}),children:(0,a.jsx)(d.In,{icon:"lucide:delete",height:"24",className:"delete-button"})})})},L=e=>{let{onClick:s,size:t}=e;const i=1280===t?"xl":"2xl";return(0,a.jsxs)(l.A,{onClick:s,className:`!p-1 relative ${i}:top-2.5 min-[0px]:max-${i}:w-full delete-button`,variant:"outlined",size:"medium","aria-label":(0,o.T)({message:"Supprimer ce champ"}),title:(0,o.T)({message:"Supprimer ce champ"}),children:[(0,a.jsx)(d.In,{icon:"lucide:delete",height:"24",className:"delete-button text-button"}),(0,o.T)({message:"Supprimer"})]})},z=e=>{let{onClick:s,size:t}=e;const i=(0,k.A)();return(0,w.A)(i.breakpoints.down(t))?(0,a.jsx)(L,{onClick:s,size:t}):(0,a.jsx)(A,{onClick:s,size:t})},D=e=>{let{values:s}=e;const[t,i]=(0,N.useState)([]);(0,N.useEffect)((()=>{(()=>{const e=[];s.damages.forEach(((t,a)=>{const i=s.damages.findIndex(((e,s)=>s!==a&&e.name===t.name));-1===i||e.includes(a)||(e.push(a),e.push(i))})),i(e)})()}),[s.damages]);const r=e=>t.includes(e)?(0,a.jsx)(m.m_,{id:`Dice-Nom-${e}`,content:(0,o.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Dice-Nom-${e}`}):0===s.damages[e].name.length?(0,a.jsx)(m.m_,{id:`Dice-Nom-${e}`,content:(0,o.T)({message:"Le nom ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Dice-Nom-${e}`}):null;return(0,a.jsx)("div",{className:"statistic",children:(0,a.jsx)(n.ED,{name:"damages",children:e=>{let{push:i,remove:l}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(b,{length:s.damages.length,type:"dice",label:(0,o.T)({message:"D\xe9s"}),onAdd:()=>i({name:"",value:""}),children:""}),(0,a.jsx)("table",{className:"w-full",children:(0,a.jsx)("tbody",{className:"divide-y block w-full",children:s.damages.map(((e,c)=>(0,a.jsxs)("tr",{className:`flex flex-col xl:flex-row items-start xl:w-full ${t.includes(c)?"error-bg":""} ${0===c?"border-t-0":""}`,children:[(0,a.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,a.jsx)(S,{maxLen:9999,length:s.damages.length,size:1280,onClick:()=>{i({name:"",value:s.damages[c].value})}})}),(0,a.jsxs)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:[(0,a.jsx)(j,{name:`damages[${c}].name`,label:(0,o.T)({message:"Nom"}),className:""+(0===s.damages[c].name.length?"error":""),id:`Dice-Nom-${c}`}),(0,a.jsx)(n.Kw,{name:`damages[${c}].name`})]}),(0,a.jsx)("td",{className:"p-2 min-[0px]:max-xl:w-full",children:(0,a.jsx)(j,{name:`damages[${c}].value`,label:(0,o.T)({message:"Valeur"}),className:""+(0===s.damages[c].name.length?"error":""),id:`Value-${c}`})}),r(c),0===s.damages[c].name.length&&(0,a.jsx)(m.m_,{id:`Value-${c}`,content:(0,o.T)({message:"La valeur ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Value-${c}`}),(0,a.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full",children:(0,a.jsx)(z,{size:1280,onClick:()=>l(c)})})]},c)))})})]})}})})},M=()=>(0,a.jsxs)(b,{label:"G\xe9n\xe9ral",children:[(0,a.jsx)(g,{className:"self-start !ml-0 -mt-2",label:(0,o.T)({message:"Rendre obligatoire le nom du personnage"}),name:"isCharNameRequired"}),(0,a.jsx)(g,{className:"self-start !ml-0 -mt-2 mb-6",label:(0,o.T)({message:"Fiches priv\xe9es"}),"aria-label":(0,o.T)({message:"Utilis\xe9e uniquement dans le CSV d'importation de fiche"}),name:"isPrivate"}),(0,a.jsx)(m.m_,{anchorSelect:"#isPrivate",content:(0,o.T)({message:"Utilis\xe9e uniquement dans le CSV d'importation de fiche"})}),(0,a.jsx)(v,{label:(0,o.T)({message:"Total"}),name:"total",id:"total",type:"number",inputProps:{min:0}}),(0,a.jsx)(v,{label:(0,o.T)({message:"D\xe9 principal"}),name:"diceType"})]});var _=t(65640);const q=e=>{let{values:s}=e;const[t,i]=(0,N.useState)([]);(0,N.useEffect)((()=>{(()=>{const e=[];s.statistics.forEach(((t,a)=>{const i=s.statistics.findIndex(((e,s)=>s!==a&&e.name===t.name));-1===i||e.includes(a)||(e.push(a),e.push(i))})),i(e)})()}),[s.statistics]);const r=e=>{if(s.statistics[e].min)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max?(0,a.jsx)(m.m_,{id:`Min-${e}`,content:(0,o.T)({message:"La valeur minimale ne peut pas \xeatre sup\xe9rieure \xe0 la valeur maximale"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):s.statistics[e].min<0?(0,a.jsx)(m.m_,{id:`Min-${e}`,content:(0,o.T)({message:"La valeur minimale ne peut pas \xeatre n\xe9gative"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):isNaN(parseInt(s.statistics[e].min,10))?(0,a.jsx)(m.m_,{id:`Min-${e}`,content:(0,o.T)({message:"La valeur minimale doit \xeatre un nombre"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Min-${e}`}):null},l=e=>{if(s.statistics[e].max)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max?(0,a.jsx)(m.m_,{id:`Max-${e}`,content:(0,o.T)({message:"La valeur maximale ne peut pas \xeatre inf\xe9rieure \xe0 la valeur minimale"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):s.statistics[e].max<0?(0,a.jsx)(m.m_,{id:`Max-${e}`,content:(0,o.T)({message:"La valeur maximale ne peut pas \xeatre n\xe9gative"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):isNaN(parseInt(s.statistics[e].max,10))?(0,a.jsx)(m.m_,{id:`Max-${e}`,content:(0,o.T)({message:"La valeur maximale doit \xeatre un nombre"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Max-${e}`}):null},c=e=>{if(s.statistics[e].min)return _.log(s.statistics[e].min,s.statistics[e].max),s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max||s.statistics[e].min<0||isNaN(parseInt(s.statistics[e].min,10))?"error":""},u=e=>{if(s.statistics[e].max)return s.statistics[e].min&&s.statistics[e].max&&s.statistics[e].min>s.statistics[e].max||s.statistics[e].max<0||isNaN(parseInt(s.statistics[e].max,10))?"error":""},d=e=>{if(0===s.statistics[e].name.length)return"error"};return(0,a.jsx)("div",{className:"statistic",children:(0,a.jsx)(n.ED,{name:"statistics",children:e=>{let{push:i,remove:x}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(b,{type:"stats",length:s.statistics.length,label:(0,o.T)({message:"Statistiques"}),onAdd:()=>i({name:"",values:{min:0,max:0,combinaison:""}}),children:""}),(0,a.jsx)("table",{className:"w-full",children:(0,a.jsx)("tbody",{className:"divide-y block w-full",children:s.statistics.map(((e,p)=>{return(0,a.jsxs)("tr",{className:`\n\t\t\t\t\t\t\t\t\t\tflex flex-col 2xl:flex-row items-start 2xl:w-full ${0===p?"border-t-0":""}  ${t.includes(p)?"error-bg":""} 2xl:h-18`,children:[(0,a.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full",children:(0,a.jsx)(S,{size:1536,length:s.statistics.length,maxLen:20,onClick:()=>{i({name:"",values:s.statistics[p].values})}})}),(0,a.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,a.jsx)(j,{label:(0,o.T)({message:"Nom"}),name:`statistics[${p}].name`,id:`Stats-Nom-${p}`,className:`${d(p)}`,"data-tooltip-variant":"error"}),(0,a.jsx)(n.Kw,{name:`statistics[${p}].name`}),(h=p,0===s.statistics[h].name.length?(0,a.jsx)(m.m_,{id:`Stats-Nom-${h}`,content:(0,o.T)({message:"Le nom ne peut pas \xeatre vide"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Stats-Nom-${h}`}):t.includes(h)?(0,a.jsx)(m.m_,{id:`Stats-Nom-${h}`,content:(0,o.T)({message:"Ce nom est d\xe9j\xe0 utilis\xe9"}),style:{background:"var(--rt-color-error)"},anchorSelect:`#Stats-Nom-${h}`}):null)]}),(0,a.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,a.jsx)(j,{type:"number",inputProps:{min:0},name:`statistics[${p}].min`,label:(0,o.T)({message:"Min"}),className:`2xl:w-[100px] ${c(p)}`,id:`Min-${p}`,"data-tooltip-variant":"error",disabled:!!s.statistics[p].combinaison}),r(p)]}),(0,a.jsxs)("td",{className:"p-2 min-[0px]:max-2xl:w-full",children:[(0,a.jsx)(j,{type:"number",inputProps:{min:0},name:`statistics[${p}].max`,label:(0,o.T)({message:"Max"}),id:`Max-${p}`,className:`2xl:w-[100px] ${u(p)}`,disabled:!!s.statistics[p].combinaison}),l(p)]}),(0,a.jsx)("td",{className:"p-2 min-[0px]:max-2xl:w-full ",children:(0,a.jsx)(j,{label:(0,o.T)({message:"Combinaison"}),name:`statistics[${p}].combinaison`,disabled:!(!s.statistics[p].min&&!s.statistics[p].max)})}),(0,a.jsx)("td",{className:"p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-2xl:w-full ",children:(0,a.jsx)(z,{size:1536,onClick:()=>x(p)})})]},p);var h}))})})]})}})})};function B(e){switch(e){case"error.emptyObject":return(0,o.T)({message:"L'objet {{x}} est vide"});case"common.space":return(0,o.T)({message:" "});case"error.invalidDice.withoutDice":case"error.invalidDice":return(0,o.T)({message:'Le d\xe9 "{{x}}" est invalide.'});case"error.invalidFormula":return(0,o.T)({message:'La formule "{{x}}" est invalide.'});case"error.maxGreater":return(0,o.T)({message:"Le maximum est sup\xe9rieur au minimum"});case"error.tooManyDice":return(0,o.T)({message:"Trop de d\xe9s (max : 25)"});case"error.noStat":return(0,o.T)({message:"Aucune statistique n'a \xe9t\xe9 trouv\xe9e"})}}var P=t(7004),R=t(19267),E=t.n(R),I=t(17050),V=t.n(I),F=t(65640);const U=()=>{const e=e=>{let s={},t={};for(const r of e.statistics)s[r.name]={combinaison:r.combinaison,max:r.max,min:r.min};for(const r of e.damages)t[r.name]=r.value;0===Object.keys(s).length&&(s=void 0),0===Object.keys(t).length&&(t=void 0);const a={charName:e.isCharNameRequired,critical:e.critical,diceType:e.diceType,total:e.total,statistics:s,damage:t};try{const s=(0,c.Ff)(a),t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),i=["user","charName"];e.isPrivate&&i.push("isPrivate"),i.push(...Object.keys(s.statistics)),i.push("dice");const r=`\ufeff${i.join(";")}\n`,l=new Blob([r],{type:"text/csv"}),n=[{name:"statisticalTemplate.json",url:URL.createObjectURL(t)},{name:"import.csv",url:URL.createObjectURL(l)}];for(const e of n){const s=document.createElement("a");s.href=e.url,s.download=e.name,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(e.url)}}catch(i){F.log(i);const e=function(e){const s=e.message,t=s.match(/\[(.*)\]/gi);let a="";if(s.startsWith("Expected"))return(0,o.T)({message:"Erreur dans le d\xe9 : "})+s.replace("Expected",(0,o.T)({message:"Attendant"})).replace("but",(0,o.T)({message:"mais"})).replaceAll(/\bor/gm,(0,o.T)({message:"ou"})).replace("found",(0,o.T)({message:"trouv\xe9"}));if(t){const e=t[0].replace("[","").replace("]","").split(",");for(const s of e)a+=B(s.trim());const i=s.replace(/\[(.*)\]/gi,"");return a.length>0?a.replaceAll("{{x}}",i.replace(":","").trim()):i}return s}(i);V()(E()).fire({html:e,icon:"error",showCloseButton:!0,backdrop:!0,showConfirmButton:!1,customClass:{confirmButton:"hide",popup:["error","swal2-toast"],htmlContainer:["error","swal2-toast"],closeButton:"error"}})}},s=e=>(()=>{if(!(0,P.A)())return!1;const e=document.getElementsByClassName("error"),s=document.getElementsByClassName("error-bg");return e.length>0||s.length>0})()?(0,a.jsx)(r.A,{title:(0,o.T)({message:"Veuillez corriger les erreurs"}),classes:{popper:"error"},arrow:!0,children:(0,a.jsx)("span",{children:(0,a.jsx)(l.A,{type:"submit",disabled:!0,variant:"outlined",size:"medium",id:"disabledButton",className:"download-button",children:(0,o.T)({message:"T\xe9l\xe9charger le mod\xe8le"})})})}):(0,a.jsx)(l.A,{type:"submit",disabled:e,variant:"outlined",size:"medium",className:"download-button",children:(0,o.T)({message:"T\xe9l\xe9charger le mod\xe8le"})});return(0,a.jsx)(n.l1,{initialValues:{isCharNameRequired:!1,isPrivate:!1,statistics:[],total:0,diceType:"",critical:{success:20,failure:1},damages:[]},onSubmit:(s,t)=>{let{setSubmitting:a}=t;setTimeout((()=>{e(s),a(!1)}),400)},children:e=>{let{isSubmitting:t,values:i}=e;return(0,a.jsxs)(n.lV,{children:[(0,a.jsx)(M,{}),(0,a.jsx)(y,{critical:i.critical}),(0,a.jsx)(q,{values:i}),(0,a.jsx)(D,{values:i}),s(t)]})}})},O={sidebar_label:"Model creation generator",title:"Template creation generator"},G=void 0,K={id:"model/register/form",title:"Template creation generator",description:"The following form will help you create a configuration file template for your server. The verification procedures are the same as for the bot, so if you have any errors, you can correct them here rather than manually.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/model/register/form.mdx",sourceDirName:"model/register",slug:"/model/register/form",permalink:"/en/docs/model/register/form",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/model/register/form.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Model creation generator",title:"Template creation generator"},sidebar:"model",previous:{title:"Reference's server model",permalink:"/en/docs/model/register/template"},next:{title:"Limitation",permalink:"/en/docs/model/register/limitation"}},J={},W=[];function Y(e){const s={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:'The following form will help you create a configuration file template for your server. The verification procedures are the same as for the bot, so if you have any errors, you can correct them here rather than manually.\nThen simply click on "Download template" to obtain a ready-to-use configuration file.'}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["The form also provides a ",(0,a.jsx)(s.code,{children:"csv"})," file to import multiple characters at once. You can ignore this file if you don't have any data to import. For more information, you can refer to the ",(0,a.jsx)(s.a,{href:"/docs/commands/administration.md#import-data",children:"documentation"}),"."]})}),"\n",(0,a.jsx)(U,{})]})}function H(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(Y,{...e})}):Y(e)}},34654:()=>{},34149:()=>{},89780:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},85222:()=>{}}]);