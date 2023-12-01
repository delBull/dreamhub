"use strict";exports.id=780,exports.ids=[780],exports.modules={7780:(e,s,l)=>{l.d(s,{Z:()=>Layout});var i=l(997),a=l(6689);function BackToTop(){let[e,s]=(0,a.useState)("false");(0,a.useEffect)(()=>(window.addEventListener("scroll",onScroll),()=>{window.removeEventListener("scroll",onScroll)}));let onScroll=()=>{window.scrollY>100&&!e?s(!0):window.scrollY<100&&e&&s(!1)};return i.jsx(i.Fragment,{children:e&&i.jsx("a",{id:"scroll-top",className:"show",href:"#top",children:i.jsx("span",{className:"icon-arrow-top"})})})}function Breadcrumb({breadcrumbTitle:e}){return i.jsx(i.Fragment,{children:(0,i.jsxs)("section",{className:"page-title",children:[i.jsx("div",{className:"shape"}),i.jsx("div",{className:"shape right s3"}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-12",children:i.jsx("div",{className:"page-title__body",children:i.jsx("div",{className:"page-title__main",children:i.jsx("h4",{className:"title",children:e})})})})})})]})})}var r=l(968),c=l.n(r);let layout_PageHead=({headTitle:e})=>i.jsx(i.Fragment,{children:i.jsx(c(),{children:i.jsx("title",{children:e||"Dreamhub"})})});function Footer1(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("footer",{className:"footer",children:[i.jsx("div",{className:"shape"}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-12",children:[(0,i.jsxs)("div",{className:"footer__main",children:[(0,i.jsxs)("div",{className:"block-text center",children:[i.jsx("h3",{className:"heading",children:"No seas un extra\xf1o"}),i.jsx("p",{children:"Aprende y vu\xe9lvete experto \xa1No te quedes fuera!"}),i.jsx("p",{children:"Con tu entrada a la comunidad Dreamhub, \xa1recibes un NFT sorpresa!"})]}),(0,i.jsxs)("form",{action:"#",className:"form",children:[i.jsx("div",{className:"form-group",children:(0,i.jsxs)("ul",{children:[i.jsx("li",{className:"form-nombre",children:i.jsx("input",{type:"name",className:"form-control",placeholder:"Tu nombre"})}),i.jsx("li",{className:"form-email",children:i.jsx("input",{type:"email",className:"form-control",placeholder:"Tu email"})})]})}),i.jsx("button",{className:"action-btn form-btn",children:i.jsx("span",{style:{width:"100%"},children:"\xdanete a los Dreamers"})})]})]}),(0,i.jsxs)("div",{className:"footer__bottom",children:[(0,i.jsxs)("div",{className:"center mb--30",children:[(0,i.jsxs)("ul",{className:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"/",children:"Inicio"})}),i.jsx("li",{children:i.jsx("a",{href:"/blockchain",children:"Blockchain"})}),i.jsx("li",{children:i.jsx("a",{href:"/roadmap",children:"Roadmap"})}),i.jsx("li",{children:i.jsx("a",{href:"/help-center",children:"Hub de Ayuda"})}),i.jsx("li",{children:i.jsx("a",{href:"https://agodecosystem.com",target:"_blank",children:"Ecosistema"})})]}),(0,i.jsxs)("p",{children:["Copyright \xa9 ",new Date().getFullYear(),", Dreamhub es marca registrada de MXHUB Ecosistema Blockchain S.A. de C.V."]})]}),(0,i.jsxs)("ul",{className:"list-social",children:[i.jsx("li",{children:i.jsx("a",{href:"https://twitter.com/Dreamhubart",target:"_blank",children:i.jsx("svg",{width:15,height:12,viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z",fill:"white"})})})}),i.jsx("li",{children:i.jsx("a",{href:"https://www.instagram.com/dreamhubart/",target:"_blank",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"14",fill:"none",viewBox:"0 0 448 512",children:i.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",fill:"white"})})})}),i.jsx("li",{children:i.jsx("a",{href:"https://discord.gg/8dZdffS7Pn",target:"_blank",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"20",fill:"none",viewBox:"0 0 640 512",children:i.jsx("path",{d:"M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z",fill:"white"})})})})]})]})]})})})]})})}var n=l(1664),t=l.n(n);function Footer2(){return i.jsx(i.Fragment,{children:i.jsx("footer",{className:"footer style-2",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-12",children:[(0,i.jsxs)("div",{className:"footer__main",children:[(0,i.jsxs)("div",{className:"info-left",children:[i.jsx(t(),{href:"/",className:"logo",children:i.jsx("img",{src:"assets/images/logo/logo-footer.png",alt:""})}),(0,i.jsxs)("ul",{className:"list-social",children:[i.jsx("li",{children:i.jsx(t(),{href:"#",children:i.jsx("svg",{width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z",fill:"white"})})})}),i.jsx("li",{children:i.jsx(t(),{href:"#",children:i.jsx("svg",{width:15,height:12,viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z",fill:"white"})})})}),i.jsx("li",{children:i.jsx(t(),{href:"#",children:(0,i.jsxs)("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z",fill:"white"}),i.jsx("path",{d:"M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z",fill:"white"}),i.jsx("path",{d:"M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z",fill:"white"})]})})}),i.jsx("li",{children:i.jsx(t(),{href:"#",children:i.jsx("svg",{width:18,height:12,viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M17.2347 1.9639C17.1458 1.22216 16.4468 0.510897 15.7154 0.415609C11.2555 -0.138536 6.7457 -0.138536 2.28731 0.415609C1.55533 0.51069 0.856308 1.22216 0.76739 1.9639C0.452537 4.68236 0.452537 7.31818 0.76739 10.036C0.856308 10.7778 1.55533 11.4897 2.28731 11.5843C6.7457 12.1384 11.2557 12.1384 15.7154 11.5843C16.4468 11.4898 17.1458 10.7778 17.2347 10.036C17.5496 7.31842 17.5496 4.68236 17.2347 1.9639ZM7.58931 8.82375V3.17703L11.8243 6.00049L7.58931 8.82375Z",fill:"white"})})})})]})]}),i.jsx("div",{className:"right",children:(0,i.jsxs)("div",{className:"top",children:[(0,i.jsxs)("ul",{className:"widget",children:[i.jsx("li",{children:i.jsx("h5",{className:"title",children:"Explora"})}),i.jsx("li",{children:i.jsx(t(),{href:"/blockchain",children:"Blockchain"})}),i.jsx("li",{children:i.jsx(t(),{href:"/roadmap",children:"Roadmap"})}),i.jsx("li",{children:i.jsx(t(),{href:"/help-center",children:"Hub de Ayuda"})}),i.jsx("li",{children:i.jsx(t(),{href:"https://agodecosystem.com",target:"_blank",children:"Ecosistema"})})]}),(0,i.jsxs)("ul",{className:"widget",children:[i.jsx("li",{children:i.jsx("h5",{className:"title",children:"Dreamhub"})}),i.jsx("li",{children:i.jsx(t(),{href:"team",children:"El Team"})}),i.jsx("li",{children:i.jsx(t(),{href:"https://agodecosystem.medium.com",target:"_blank",children:"Blog"})}),i.jsx("li",{children:i.jsx(t(),{href:"https://dreamhub.art",target:"_blank",children:"dApp"})}),i.jsx("li",{children:i.jsx(t(),{href:"https://www.youtube.com/watch?v=j1FtBMzFXco",target:"_blank",children:"DACCESS"})})]}),(0,i.jsxs)("div",{className:"widget",children:[i.jsx("h5",{className:"title",children:"No seas un extra\xf1o"}),(0,i.jsxs)("form",{action:"#",className:"form",children:[i.jsx("p",{children:"Aprende y vu\xe9lvete experto \xa1No te pierdas las \xfatlimas noticias!"}),(0,i.jsxs)("div",{className:"form-group",children:[i.jsx("input",{type:"email",className:"form-control",placeholder:"Tu email"}),i.jsx("button",{children:i.jsx("svg",{width:20,height:18,viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M11.5 1.5L19 9M19 9L11.5 16.5M19 9H1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})})]}),(0,i.jsxs)("div",{className:"bottom copyright-container",children:[(0,i.jsxs)("p",{className:"copyright-txt",children:["\xa9 ",new Date().getFullYear(),", Dreamhub es marca registrada de AGOD Ecosystem S.A. de C.V."]}),i.jsx(t(),{className:"copyright-txt",href:"#",children:"Terms & Condition"}),i.jsx(t(),{className:"copyright-txt",href:"#",children:"Privacy Policy"}),i.jsx(t(),{className:"copyright-txt",href:"#",children:"Cookie Policy"})]})]})})})})})}function MobileMenu({isMobileMenu:e}){let[s,l]=(0,a.useState)({status:!1,key:""});return i.jsx(i.Fragment,{children:i.jsx("nav",{id:"main-nav-mobi",className:"main-nav",style:{display:`${e?"block":"none"}`},children:(0,i.jsxs)("ul",{id:"menu-primary-menu",className:"menu",children:[i.jsx("li",{children:i.jsx(t(),{href:"/",children:"Inicio"})}),i.jsx("li",{children:i.jsx(t(),{href:"/",children:"Servicios"})}),(0,i.jsxs)("li",{className:"menu-item menu-item-has-children",children:[i.jsx(t(),{href:"#",children:"Explora"}),(0,i.jsxs)("ul",{className:"sub-menu",children:[i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"/blockchain",children:"Blockchain"})}),i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"/roadmap",children:"Roadmap"})}),i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"/help-center",children:"Hub de Ayuda"})}),i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"https://agodecosystem.com",target:"_blank",children:"Ecosistema"})})]})]}),i.jsx("li",{children:i.jsx(t(),{href:"/team",children:"Team"})}),i.jsx("li",{children:i.jsx(t(),{href:"https://agodecosystem.medium.com",target:"_blank",children:"Blog"})}),i.jsx("div",{children:i.jsx(t(),{href:"/booking",className:"action-btn",target:"_blank",children:i.jsx("span",{children:"Agenda para Tokenizar"})})}),i.jsx("div",{children:i.jsx(t(),{href:"https://dreamhub.art",target:"_blank",className:"action-btn",children:i.jsx("span",{children:"dApp"})})})]})})})}function Header1({scroll:e,isMobileMenu:s,handleMobileMenu:l,big:r}){let[c,n]=(0,a.useState)(0);return i.jsx(i.Fragment,{children:(0,i.jsxs)("header",{id:"header_main",className:`header ${e?"is-fixed is-small":""}`,children:[i.jsx("div",{className:`container ${r?"big":""}`,children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-12",children:(0,i.jsxs)("div",{className:"header__body",children:[i.jsx("div",{className:"header__logo",children:i.jsx(t(),{href:"/",children:i.jsx("img",{id:"site-logo",src:"/assets/images/logo/logo.png",alt:"Peson",width:160,height:38,"data-retina":"assets/images/logo/logo@2x.png","data-width":160,"data-height":38})})}),(0,i.jsxs)("div",{className:"header__right",children:[i.jsx("nav",{id:"main-nav",className:"main-nav",children:(0,i.jsxs)("ul",{id:"menu-primary-menu",className:"menu",children:[i.jsx("li",{children:i.jsx(t(),{href:"/",children:"Inicio"})}),(0,i.jsxs)("li",{children:[i.jsx("h6",{children:"Servicios"}),(0,i.jsxs)("ul",{className:"sub-menu",children:[i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Consultor\xeda de Negocios"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Asesor\xeda Financiera"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Capacitaci\xf3n Integral"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Dise\xf1o Estrat\xe9gico NFTs"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Dise\xf1o Art\xedstico NFTs"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Campa\xf1as de Fidelizaci\xf3n"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"Programa de Puntos"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"NFT Marketign en web3"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"NFT Branding en web3"})}),i.jsx("li",{children:i.jsx("p",{style:{color:"black"},children:"NFT Fundraising en web3"})})]})]}),(0,i.jsxs)("li",{className:"menu-item menu-item-has-children",children:[i.jsx("h6",{children:"Explora"}),(0,i.jsxs)("ul",{className:"sub-menu",children:[i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"/blockchain",children:"Blockchain"})}),i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"/roadmap",children:"Roadmap"})}),i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"/help-center",children:"Hub de Ayuda"})}),i.jsx("li",{className:"menu-item",children:i.jsx(t(),{href:"https://agodecosystem.com",target:"_blank",children:"Ecosistema"})})]})]}),i.jsx("li",{children:i.jsx(t(),{href:"/team",children:"Team"})}),i.jsx("li",{children:i.jsx(t(),{href:"https://agodecosystem.medium.com",target:"_blank",children:"Blog"})})]})}),i.jsx("div",{className:"mobile-button",onClick:l,children:i.jsx("span",{})})]}),(0,i.jsxs)("div",{className:"header__action",children:[i.jsx(t(),{href:"/booking",className:"action-btn",target:"_blank",children:i.jsx("span",{children:"Agenda para Tokenizar"})}),i.jsx(t(),{href:"https://dreamhub.art",target:"_blank",className:"action-btn",children:i.jsx("span",{children:"dApp"})})]})]})})})}),i.jsx(MobileMenu,{isMobileMenu:s})]})})}function Layout({headerStyle:e,footerStyle:s,headTitle:r,breadcrumbTitle:c,children:n,big:t}){let[d,h]=(0,a.useState)(0),[o,x]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=l(477);window.wow=new e.WOW({live:!1}),window.wow.init(),document.addEventListener("scroll",()=>{let e=window.scrollY>100;e!==d&&h(e)})},[]),(0,i.jsxs)(i.Fragment,{children:[i.jsx(layout_PageHead,{headTitle:r}),(0,i.jsxs)("div",{className:"wrapper",children:[i.jsx(Header1,{scroll:d,isMobileMenu:o,handleMobileMenu:()=>x(!o),big:t}),c&&i.jsx(Breadcrumb,{breadcrumbTitle:c}),n,!s&&i.jsx(Footer1,{}),1==s?i.jsx(Footer1,{}):null,2==s?i.jsx(Footer2,{}):null,i.jsx(BackToTop,{})]})]})}l(1458),l(1088)}};