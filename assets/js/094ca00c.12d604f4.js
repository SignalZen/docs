"use strict";(self.webpackChunksignalzen_docs=self.webpackChunksignalzen_docs||[]).push([[252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="Metadata about visitor",s={unversionedId:"live-chat/metadata-about-visitor",id:"live-chat/metadata-about-visitor",title:"Metadata about visitor",description:"If you have some context data that you want to see when a chat session is started (Full visitor info) on the Console, Slack, MS Teams or mobile apps, you can add that data to your integration code.",source:"@site/docs/live-chat/metadata-about-visitor.md",sourceDirName:"live-chat",slug:"/live-chat/metadata-about-visitor",permalink:"/docs/live-chat/metadata-about-visitor",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"rootSidebar",previous:{title:"Single Page Applications (SAP)",permalink:"/docs/live-chat/single-page-applications"},next:{title:"Invisibility and show on click",permalink:"/docs/live-chat/invisibility"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-about-visitor"},"Metadata about visitor"),(0,r.kt)("p",null,"If you have some context data that you want to see when a chat session is started (Full visitor info) on the Console, Slack, MS Teams or mobile apps, you can add that data to your integration code."),(0,r.kt)("p",null,"For instance, if your visitor is logged in to your web application, you can capture his/her profile related details like name, email, phone, address and anything else what is relevant to see before answering to a chat session."),(0,r.kt)("p",null,"This customisation works only when you integrate by HTML/JavaScript or SAP."),(0,r.kt)("p",null,"Your code snippet should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript">\nvar _sz = {\n  userData: {\n    reference: "your-visitor-user-id",\n    email: \'your-visitor@email.com\',\n    name: \'Your visitor name\',\n    \'some custom attribute\': \'your visitor custom attribute\'\n  }\n};\nvar _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();\n<\/script>\n\n')),(0,r.kt)("p",null,"In case of a Single Page Application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var _sz = {\n  userData: {\n    reference: "your-visitor-user-id",\n    email: \'your-visitor@email.com\',\n    name: \'Your visitor name\',\n    \'some custom attribute\': \'your visitor custom attribute\'\n  }\n};\nvar _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();\n')),(0,r.kt)("p",null,"Also, if you wish to update the data during runtime (especially useful for SPAs), you can execute JavaScript function like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"SignalZen.pushUserData({\n  reference: \"your-visitor-user-id\",\n  email: 'your-visitor@email.com',\n  name: 'Your visitor name',\n  'some custom attribute': 'your visitor custom attribute'\n})\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please change ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_PUBLIC_TOKEN")," to the Public Token that is given in the Integration page on the Console.")))}d.isMDXComponent=!0}}]);