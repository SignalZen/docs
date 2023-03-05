---
sidebar_position: 7
---

# Invisibility and show on click

Depending on your needs, you can start the widget in invisibility mode, which means that all the widget will be hidden until the point you decide differently. See the code example on the right how to start the widget invisible.

In order to make the widget visible, just call `SignalZen.show()` or `SignalZen.hide()` if you want to hide it again.

This is particularly useful if you want to show the widget only after clicking and element (button etc.) located on your website.

The code snippet should look like this:

```html
<script type="text/javascript">
var _sz = {
  invisible: true
};
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
</script>
```
:::note

Please change `YOUR_PUBLIC_TOKEN` to the Public Token that is given in the Integration page on the Console.

:::
