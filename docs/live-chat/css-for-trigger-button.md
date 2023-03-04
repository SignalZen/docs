---
sidebar_position: 10
---

# CSS for trigger button

Sometimes you may want to change the widget trigger button CSS. You can do that by using #signalzen_widget__root a CSS selector.

Please don't forget to use !important declaration for each of your new style settings.

```html
<style>
// Changing the size of the button:
#signalzen_widget__root a {
  width: 50px !important;
  height: 50px !important;
}
</style>
<script type="text/javascript">
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
</script>
```
Please change `YOUR_PUBLIC_TOKEN` to the Public Token that is given in the Integration page on the Console.
