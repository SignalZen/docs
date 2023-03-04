---
sidebar_position: 8
---

# Language

Usually by creating translations of the widget, we determine the language that the visitors see by their browser settings. There is an alternative way for this purpose, you can set the language by the integration code which takes precedence over the browser language. See the code example below how to do that.


```html
<script type="text/javascript">
var _sz = {
  language: 'danish'
};
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
</script>
```
Please change `YOUR_PUBLIC_TOKEN` to the Public Token that is given in the Integration page on the Console.
