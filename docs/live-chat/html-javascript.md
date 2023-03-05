---
sidebar_position: 1
---

# HTML/JavaScript code snippet

Your personal account HTML/JavaScript code snippet can be found in the Live Chat widget Integration page on the Console.

You need to place it just before the closing of the body tag (`</body>`) inside your website HTML.

It looks like this:

```html
<script type="text/javascript">
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
</script>
```

:::note

Please change `YOUR_PUBLIC_TOKEN` to the Public Token that is given in the Integration page on the Console.

:::
