"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[801],{314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(86070),s=n(25710);const o={title:"Import/Export data"},r=void 0,a={id:"admin/config/import_export",title:"Import/Export data",description:"Import and Export Data",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/admin/config/import_export.md",sourceDirName:"admin/config",slug:"/admin/config/import_export",permalink:"/en/docs/admin/config/import_export",draft:!1,unlisted:!1,editUrl:"https://github.com/Dicelette/docs/tree/main/docs/admin/config/import_export.md",tags:[],version:"current",frontMatter:{title:"Import/Export data"},sidebar:"model",previous:{title:"Delete a character",permalink:"/en/docs/admin/config/delete_char"}},l={},d=[{value:"Import and Export Data",id:"import-and-export-data",level:2},{value:"Import",id:"import",level:3},{value:"Export Data",id:"export-data",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"import-and-export-data",children:"Import and Export Data"}),"\n",(0,i.jsx)(t.p,{children:"The following commands allow you to import and export data from and to a CSV file."}),"\n",(0,i.jsxs)(t.admonition,{title:"About Dice",type:"tip",children:[(0,i.jsxs)(t.p,{children:["It is entirely possible to import specific dice for the command ",(0,i.jsx)(t.a,{href:"/en/docs/Usage/model#dbd",children:(0,i.jsx)(t.code,{children:"/dbd"})}),", but you need to fill in the ",(0,i.jsx)(t.code,{children:"dice"})," column as follows:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-md",children:"- [dice]: [value]\n"})}),(0,i.jsx)(t.p,{children:"For example:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-md",children:"'- Athletics: 1d20+Strength\n- Stealth: 1d20+Dexterity\n"})})]}),"\n",(0,i.jsxs)(t.admonition,{title:"About Excel",type:"important",children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Excel does not handle cells starting with ",(0,i.jsx)(t.code,{children:"-"})," well and may interpret them as formulas. If this happens, you need to add ",(0,i.jsx)(t.code,{children:"'"})," before the ",(0,i.jsx)(t.code,{children:"-"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Excel may have issues reading and exporting text with accents. It is recommended to save the file in UTF-8-BOM format, using tools like Notepad++ or VSCode."}),"\n",(0,i.jsxs)(t.li,{children:["Player ",(0,i.jsx)(t.code,{children:"id"}),"s may be recognized as numbers and altered. It is advised to save them as text by adding ",(0,i.jsx)(t.code,{children:"'"})," before the ",(0,i.jsx)(t.code,{children:"id"}),", like ",(0,i.jsx)(t.code,{children:"'123456789012345678"}),"."]}),"\n"]}),(0,i.jsxs)(t.p,{children:["It is highly recommended to disable Excel's automatic conversions:\n",(0,i.jsx)(t.img,{alt:"Excel",src:n(64616).A+"",width:"853",height:"708"})]}),(0,i.jsxs)(t.p,{children:['And to disable the error checking rule "Numbers formatted as text or preceded by an apostrophe" in the error checking options (Formulas > Error Checking Rules):\n',(0,i.jsx)(t.img,{src:n(72061).A+"",width:"829",height:"682"})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example",src:n(39432).A+"",width:"1219",height:"161"})}),"\n",(0,i.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,i.jsx)(t.admonition,{type:"usage",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/import [csv]"})})})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"/import"})," command allows you to import data from a CSV file. You can download the template using the ",(0,i.jsx)(t.code,{children:"/csv"})," command and fill it with the characters and statistics you wish to import."]}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Imported data will overwrite existing data, but won't delete characters that are not in the CSV file. Moreover, if the character already exists, it will be updated with the new data in the base, but the old messages will not be deleted : it is up to you to delete them."}),"\n",(0,i.jsx)(t.li,{children:"The minimum, maximum, and total points are not verified (to allow the import of characters who have gained experience or differ from others, such as monsters)."}),"\n",(0,i.jsxs)(t.li,{children:["Combinations should not be entered as is but should be directly calculated. For example, if the HP column is a combination of ",(0,i.jsx)(t.code,{children:"Constitution"})," and ",(0,i.jsx)(t.code,{children:"Endurance"}),", you must enter the result of these columns directly. There is no issue using formulas in a CSV, as the file export will only include the result!"]}),"\n"]})}),"\n",(0,i.jsx)(t.p,{children:"The following columns are necessary for the import:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"user"}),": The Discord ID of the player or their username (without the ",(0,i.jsx)(t.code,{children:"@"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"charName"}),": Depending on your template, this might be required. It is the character's name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"isPrivate"}),": ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})," to specify if the sheet is private or not. If your template does not use private sheets, you can leave this column empty."]}),"\n",(0,i.jsx)(t.li,{children:"The following columns must be the statistics of your template."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Theses columns are optional:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"avatar"})," : The link to the character's avatar. If you don't use an avatar, you can leave this column empty. The avatar used in the display will be the player's."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"channel"})," : Allows you to set a channel (also supporting thread and forum",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),") to send the sheet to, rather than using the default channels set when registering the template."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dice"})," : Specific dice for the ",(0,i.jsx)(t.code,{children:"/dbd"})," command. If you don't use this command, you can leave this column empty (or delete it)."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"export-data",children:"Export Data"}),"\n",(0,i.jsx)(t.admonition,{type:"usage",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"/export [csv] (private_sheet_only)"})})})}),"\n",(0,i.jsx)(t.p,{children:"This command allows you to export the list of characters and statistics into a CSV file. Depending on the 'private' option, the provided list will be different:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If ",(0,i.jsx)(t.code,{children:"false"}),", it will include ",(0,i.jsx)(t.strong,{children:"only"})," characters whose sheets are ",(0,i.jsx)(t.strong,{children:"public"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["If ",(0,i.jsx)(t.code,{children:"true"}),", it will include ",(0,i.jsx)(t.strong,{children:"only"})," characters whose sheets are ",(0,i.jsx)(t.strong,{children:"private"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["If omitted, it will include ",(0,i.jsx)(t.strong,{children:"all"})," characters, regardless of the sheet status."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The exported CSV file uses a semicolon as the separator."}),"\n","\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:["It is possible to use a forum, which will automatically create a post for the character. The player (and administrators) will be mentioned in the post. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},72061:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/EN_disable_nb-22915697f616788b6c38fdd37dce1243.png"},64616:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/EXCEL_EN_disable-e9218075e0f9a801402c862ee7a2f544.png"},39432:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/example-5b7f080aa6a231d5afd15036cedc4587.png"},25710:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(30758);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);