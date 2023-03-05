---
sidebar_position: 5
---

# Single Page Applications (SAP)

In order to install the widget to a Single Page Application such as written in ReactJS, Vue or EmberJS, you will need to use only the JavaScript code.

It should be placed in a place that loads the application so that there wouldn't be any re-render cycles executing the code snippet multiple times. If you see error in the debugger console about initializing SignalZen multiple times, it's a problem and you should avoid that.

The code snippet is basically the same like as for HTML/JavaScript integration, but it doesn't contain the `<script>` tag:

```javascript
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
```

:::note

Please change `YOUR_PUBLIC_TOKEN` to the Public Token that is given in the Integration page on the Console.

:::
