"use strict";(self.webpackChunksignalzen_docs=self.webpackChunksignalzen_docs||[]).push([[628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},l="Users",o={unversionedId:"api/users",id:"api/users",title:"Users",description:"Get all users",source:"@site/docs/api/users.md",sourceDirName:"api",slug:"/api/users",permalink:"/docs/api/users",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"rootSidebar",previous:{title:"Authentication",permalink:"/docs/api/authentication"},next:{title:"Messages",permalink:"/docs/api/messages"}},i={},p=[{value:"Get all users",id:"get-all-users",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3},{value:"Get a user",id:"get-a-user",level:2},{value:"Response",id:"response-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"users"},"Users"),(0,a.kt)("h2",{id:"get-all-users"},"Get all users"),(0,a.kt)("p",null,"You can fetch users by using the required headers and the API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.signalzen.com/external/users")),(0,a.kt)("p",null,"See the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://api.signalzen.com/external/users" \\\n  -H "Authorization: Bearer YOUR_API_SECRET" \\\n  -H "Accept: application/vnd.signalzen.v1+json"\n')),(0,a.kt)("p",null,"Please be aware, that you need to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_API_SECRET")," with API Secret Key that you can find on the Console Integration (General) page."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"You can also add query parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"offset")," - Use it to scroll through all users list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"limit")," - Greater than 0 and lower than 100")),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"The response will contain data structure as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "limit":50,\n  "offset":0,\n  "total":1,\n  "users":[\n    {\n      "id":1,\n      "name":"John Smith",\n      "email":"john.smith@gmail.com",\n      "reference":"123",\n      "created_at":"2017-11-25T20:27:42.000Z",\n      "updated_at":"2017-11-25T20:27:42.000Z",\n      "online_at":"2017-11-25T20:27:42.000Z",\n      "last_url":"https://google.com",\n      "user_attributes":[\n        {"name":"company","value":"John limited"}\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,'Remember \u2014 "user_attributes" in the response stands for the custom properties set by the widget JavaScript code.'),(0,a.kt)("h2",{id:"get-a-user"},"Get a user"),(0,a.kt)("p",null,"You can fetch single user by using the required headers and the API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.signalzen.com/external/users/{USER_ID}")),(0,a.kt)("p",null,"See the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "https://api.signalzen.com/external/users/{USER_ID}" \\\n  -H "Authorization: Bearer YOUR_API_SECRET" \\\n  -H "Accept: application/vnd.signalzen.v1+json"\n')),(0,a.kt)("h3",{id:"response-1"},"Response"),(0,a.kt)("p",null,"The response will contain data structure as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":123,\n  "name":"John Smith",\n  "email":"john.smith@gmail.com",\n  "reference":"123",\n  "created_at":"2017-11-25T20:27:42.000Z",\n  "updated_at":"2017-11-25T20:27:42.000Z",\n  "online_at":"2017-11-25T20:27:42.000Z",\n  "last_url":"https://google.com",\n  "user_attributes":[\n    {"name":"company","value":"John limited"}\n  ]\n}\n')),(0,a.kt)("p",null,'Remember \u2014 "user_attributes" in the response stands for the custom properties set by the widget JavaScript code.'))}d.isMDXComponent=!0}}]);