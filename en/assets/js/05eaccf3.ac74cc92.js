"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[371],{86300:(e,n,s)=>{s.r(n),s.d(n,{CL:()=>c,assets:()=>r,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"introduction/expression","title":"Mathematical Expressions","description":"Mathematical Expressions with MathJS","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/introduction/expression.mdx","sourceDirName":"introduction","slug":"/introduction/expression","permalink":"/en/docs/introduction/expression","draft":false,"unlisted":false,"editUrl":"https://github.com/Dicelette/docs/tree/main/docs/introduction/expression.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Mathematical Expressions","sidebar_position":2},"sidebar":"introduction","previous":{"title":"Behavior","permalink":"/en/docs/introduction/behavior"},"next":{"title":"Commands syntax","permalink":"/en/docs/introduction/format"}}');var t=s(74848),d=s(28453);const o={title:"Mathematical Expressions",sidebar_position:2},l=void 0,r={};function c({children:e}){const n={code:"code",...(0,d.R)()};return(0,t.jsx)(n.code,{style:{textDecoration:"underline",fontWeight:"bold"},children:e.toLowerCase()})}const a=[{value:"Mathematical Expressions with MathJS",id:"mathematical-expressions-with-mathjs",level:2},{value:"Examples of Mathematical Expressions",id:"examples-of-mathematical-expressions",level:3},{value:"Shared Unique Rolls (Reusing Results)",id:"shared-unique-rolls-reusing-results",level:2},{value:"Bulk Rolls",id:"bulk-rolls",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"mathematical-expressions-with-mathjs",children:"Mathematical Expressions with MathJS"}),"\n",(0,t.jsxs)(n.p,{children:["The bot uses the ",(0,t.jsx)(n.a,{href:"https://mathjs.org/",children:"mathjs"})," library to evaluate mathematical expressions. You can use complex mathematical expressions when enclosed within ",(0,t.jsx)(n.code,{children:"{{"})," and ",(0,t.jsx)(n.code,{children:"}}"}),".\nDepending on the commands, you can use:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$"}),": Represents the value of the statistic used."]}),"\n",(0,t.jsx)(n.li,{children:"The name of a statistic (which will be replaced by its value)."}),"\n",(0,t.jsxs)(n.li,{children:["Dice combinations (like ",(0,t.jsx)(n.code,{children:"1d6"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Expressions are typically used in:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(c,{children:"seuil_reussite"}),": Success threshold for dice rolls in the ",(0,t.jsx)(n.a,{href:"/en/docs/usage/model#dbroll-dbroll",children:(0,t.jsx)(n.code,{children:"/dbroll"})})," command."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(c,{children:"expression"}),": For the ",(0,t.jsx)(n.a,{href:"/en/docs/usage/model#calcul-calc",children:(0,t.jsx)(n.code,{children:"/calc"})}),", ",(0,t.jsx)(n.a,{href:"/en/docs/usage/model#dbroll-dbroll",children:(0,t.jsx)(n.code,{children:"/dbroll"})}),", and ",(0,t.jsx)(n.a,{href:"/en/docs/usage/model#dbd-dbd",children:(0,t.jsx)(n.code,{children:"/dbd"})})," commands."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-of-mathematical-expressions",children:"Examples of Mathematical Expressions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1d6 + {{ceil($ / 2)}}"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1d6 > {{ceil($ / 2)}}"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"shared-unique-rolls-reusing-results",children:"Shared Unique Rolls (Reusing Results)"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the syntax ",(0,t.jsx)(n.code,{children:"die;&+x;\xb5*y"})," to roll a single die and apply different formulas to the same die, displaying the result of each formula. The ",(0,t.jsx)(n.code,{children:"&"})," symbol represents the die's result."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsx)(n.p,{children:"You must avoid spaces before and after the separator between formulas, or the bot will interpret the remainder as comments."})}),"\n",(0,t.jsxs)(n.admonition,{type:"example",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/roll 1d20;&+5;&*2\n"})}),(0,t.jsx)(n.p,{children:"Displays the result as:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  \u203b `1d20` \u27f6 `[10]` = ` 10 `\n  \u25c8 `[1d20]+5` \u27f6 `[10]+5` = ` 15 `\n  \u25c8 `[1d20]\xd72` \u27f6 `[10]\xd72` = ` 20 `\n"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"You can use dice in the formulas, but only the first die will be saved and reused."}),(0,t.jsxs)(n.admonition,{type:"example",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"1d20;&+1d4;&*2"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  \u203b `1d20` \u27f6 `[7]` = ` 7 `\n  \u25c8 `[1d20]+1d4` \u27f6 `7+[1]` = ` 8 `\n  \u25c8 `[1d20]\xd72` \u27f6 `[7]\xd72` = ` 14 `\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["To add comments between rolls, use the syntax ",(0,t.jsx)(n.code,{children:"[comment]"}),". For a global comment, use the ",(0,t.jsx)(n.code,{children:"# comment"})," syntax at the end of the dice roll."]}),"\n",(0,t.jsxs)(n.admonition,{type:"example",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"1d20;&-2[HP loss]"})}),(0,t.jsxs)(n.p,{children:["\u203b ",(0,t.jsx)(n.code,{children:"1d20"})," \u27f6 ",(0,t.jsx)(n.code,{children:"[2]"})," = ",(0,t.jsx)(n.code,{children:"2"}),"\n\u25c8 ",(0,t.jsx)("u",{children:"HP loss"})," \u2014 ",(0,t.jsx)(n.code,{children:"[1d20]-2"})," \u27f6 ",(0,t.jsx)(n.code,{children:"[2]-2"})," = ",(0,t.jsx)(n.code,{children:"0"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, you can hide the first die using the syntax ",(0,t.jsx)(n.code,{children:"(die)"}),":"]}),"\n",(0,t.jsxs)(n.admonition,{type:"example",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"(1d20);&>100;&+2"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Failure"})," \u2014 ",(0,t.jsx)(n.code,{children:"[1d20]>100"})," \u27f6 ",(0,t.jsx)(n.code,{children:"[12]>100"})," = ",(0,t.jsx)(n.code,{children:"12<100"}),"\n\u25c8 ",(0,t.jsx)(n.code,{children:"[1d20]+2"})," \u27f6 ",(0,t.jsx)(n.code,{children:"[12]+2"})," = ",(0,t.jsx)(n.code,{children:"14"})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Mass dice rolls cannot be used with this syntax.",type:"danger"}),"\n",(0,t.jsx)(n.h2,{id:"bulk-rolls",children:"Bulk Rolls"}),"\n",(0,t.jsxs)(n.p,{children:["The bot also supports the ",(0,t.jsx)(n.code,{children:"x#(dice)"}),' notation for "bulk rolls," allowing you to save time during your gaming sessions.']})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},d=i.createContext(t);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);