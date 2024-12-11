"use strict";(self.webpackChunkdicelette_docs=self.webpackChunkdicelette_docs||[]).push([[48],{5440:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(30758),o=n(13526),i=n(38968),s=n(31409),l=n(53259),c=n(39193),r=n(785),d=n(61034),u=n(43852);const m={backToTopButton:"backToTopButton_bIsX",backToTopButtonShow:"backToTopButtonShow_OJCb"};var b=n(86070);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(23335),x=n(25557),f=n(22851),j=n(66056),_=n(69437);function v(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const C="collapseSidebarButton_NR6C",g="collapseSidebarButtonIcon_R71n";function A(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",C),onClick:t,children:(0,b.jsx)(v,{className:g})})}var k=n(2007),S=n(50298);const T=Symbol("EmptyContext"),N=a.createContext(T);function I(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var y=n(69292),B=n(83503),w=n(75162),L=n(30491);function E(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,r.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){let{item:t,onItemClick:n,activePath:i,level:c,index:r,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.p)(),_=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),v=(0,l.w8)(t,i),C=(0,B.ys)(x,i),{collapsed:g,setCollapsed:A}=(0,y.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:k,setExpandedItem:I}=function(){const e=(0,a.useContext)(N);if(e===T)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),H=function(e){void 0===e&&(e=!g),I(e?null:r),A(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:v,collapsed:g,updateCollapsed:H}),(0,a.useEffect)((()=>{h&&null!=k&&k!==r&&f&&A(!0)}),[h,k,r,A,f]),(0,b.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,b.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C}),children:[(0,b.jsx)(w.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),x?H(!1):(e.preventDefault(),H())}:()=>{n?.(t)},"aria-current":C?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!g:void 0,href:h?_??"#":_,...d,children:m}),x&&h&&(0,b.jsx)(E,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),H()}})]}),(0,b.jsx)(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(Y,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var M=n(25378),G=n(37126);const P="menuExternalLink_dQ8K";function R(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l.w8)(t,a),x=(0,M.A)(d);return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(w.A,{className:(0,o.A)("menu__link",!x&&P,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,b.jsx)(G.A,{})]})},u)}const D="menuHtmlItem__aP_";function W(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,b.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[D,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(H,{item:t,...n});case"html":return(0,b.jsx)(W,{item:t,...n});default:return(0,b.jsx)(R,{item:t,...n})}}function F(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,b.jsx)(I,{children:a.map(((e,t)=>(0,b.jsx)(V,{item:e,index:t,...n},t)))})}const Y=(0,a.memo)(F),z="menu_PLTV",U="menuWithAnnouncementBar_IXcr";function O(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",z,l&&U,i),children:(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(Y,{items:n,activePath:t,level:1})})})}const q="sidebar_zBiw",Q="sidebarWithHideableNavbar_YaHj",X="sidebarHidden_LtC8",K="sidebarLogo_GDbt";function J(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.p)();return(0,b.jsxs)("div",{className:(0,o.A)(q,s&&Q,i&&X),children:[s&&(0,b.jsx)(_.A,{tabIndex:-1,className:K}),(0,b.jsx)(O,{path:t,sidebar:n}),l&&(0,b.jsx)(A,{onClick:a})]})}const Z=a.memo(J);var $=n(76410),ee=n(52119);const te=e=>{let{sidebar:t,path:n}=e;const a=(0,ee.M)();return(0,b.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(Y,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ne(e){return(0,b.jsx)($.GX,{component:te,props:e})}const ae=a.memo(ne);function oe(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(Z,{...e}),a&&(0,b.jsx)(ae,{...e})]})}const ie={expandButton:"expandButton_FB6i",expandButtonIcon:"expandButtonIcon_OHGi"};function se(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ie.expandButton,title:(0,r.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(v,{className:ie.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_rDCU",docSidebarContainerHidden:"docSidebarContainerHidden_Y6uj",sidebarViewport:"sidebarViewport_AEQV"};function ce(e){let{children:t}=e;const n=(0,c.t)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.zy)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.O)()&&r(!0),i((e=>!e))}),[i,c]);return(0,b.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(ce,{children:(0,b.jsxs)("div",{className:(0,o.A)(le.sidebarViewport,c&&le.sidebarViewportHidden),children:[(0,b.jsx)(oe,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_eAqd",docMainContainerEnhanced:"docMainContainerEnhanced_ycPh",docItemWrapperEnhanced:"docItemWrapperEnhanced_lQcD"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,b.jsx)("main",{className:(0,o.A)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_h7lY",docsWrapper:"docsWrapper_mEff"};function be(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:me.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:me.docRoot,children:[n&&(0,b.jsx)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(ue,{hiddenSidebarContainer:o,children:t})]})]})}var he=n(27007);function pe(e){const t=(0,l.B5)(e);if(!t)return(0,b.jsx)(he.A,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,b.jsx)(c.V,{name:a,items:r,children:(0,b.jsx)(be,{children:n})})})}},27007:(e,t,n)=>{n.d(t,{A:()=>l});n(30758);var a=n(13526),o=n(785),i=n(4374),s=n(86070);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);