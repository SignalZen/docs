"use strict";(self.webpackChunksignalzen_docs=self.webpackChunksignalzen_docs||[]).push([[753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:3},l="Messages",o={unversionedId:"api/messages",id:"api/messages",title:"Messages",description:"Get all messages that belong to a user",source:"@site/docs/api/messages.md",sourceDirName:"api",slug:"/api/messages",permalink:"/docs/api/messages",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"rootSidebar",previous:{title:"Users",permalink:"/docs/api/users"},next:{title:"Errors",permalink:"/docs/api/errors"}},i={},p=[{value:"Get all messages that belong to a user",id:"get-all-messages-that-belong-to-a-user",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3},{value:"Get a message",id:"get-a-message",level:2},{value:"Response",id:"response-1",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messages"},"Messages"),(0,r.kt)("h2",{id:"get-all-messages-that-belong-to-a-user"},"Get all messages that belong to a user"),(0,r.kt)("p",null,"You can fetch messages that belong to a user by using the required headers and the API endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.signalzen.com/external/users/{USER_ID}/messages")),(0,r.kt)("p",null,"See the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://api.signalzen.com/external/users/{USER_ID}/messages" \\\n  -H "Authorization: Bearer YOUR_API_SECRET" \\\n  -H "Accept: application/vnd.signalzen.v1+json"\n')),(0,r.kt)("p",null,"Please be aware, that you need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_API_SECRET")," with API Secret Key that you can find on the Console Integration (General) page."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"You can also add query parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offset")," - Use it to scroll through all users list"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit")," - Greater than 0 and lower than 100")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"The response will contain data structure as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "limit": 50,\n  "offset": 0,\n  "total": 2,\n  "messages": [\n    {\n      "id": 1,\n      "body": "test chat message",\n      "read_by_user": true,\n      "created_at": "2018-02-09T17:18:50.000Z",\n      "file_url": null,\n      "auto_invitation": false,\n      "sender_type": "user",\n      "read_by_operator": true,\n      "sender": {\n        "id": 1,\n        "name": "David Smith",\n        "email": "visitor@gmail.com"\n      }\n    },\n    {\n      "id": 2,\n      "body": "test response from operator",\n      "read_by_user": false,\n      "created_at": "2018-02-09T18:18:38.000Z",\n      "file_url": null,\n      "auto_invitation": false,\n      "sender_type": "operator",\n      "read_by_operator": true,\n      "sender": {\n        "id": 1,\n        "forename": "John",\n        "surname": "Smith",\n        "email": "operator@gmail.com",\n        "picture_thumb_url": null\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-a-message"},"Get a message"),(0,r.kt)("p",null,"You can fetch single message by using the required headers and the API endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.signalzen.com/external/users/{USER_ID}/messages/{MESSAGE_ID}")),(0,r.kt)("p",null,"See the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://api.signalzen.com/external/users/{USER_ID}/messages/{MESSAGE_ID}" \\\n  -H "Authorization: Bearer YOUR_API_SECRET" \\\n  -H "Accept: application/vnd.signalzen.v1+json"\n')),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("p",null,"The response will contain data structure as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1234,\n  "body": "test chat message",\n  "read_by_user": true,\n  "created_at": "2018-02-09T17:18:50.000Z",\n  "file_url": null,\n  "auto_invitation": false,\n  "sender_type": "user",\n  "read_by_operator": true,\n  "sender": {\n    "id": 1,\n    "name": "David Smith",\n    "email": "visitor@gmail.com"\n  }\n}\n')))}m.isMDXComponent=!0}}]);