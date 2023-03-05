---
sidebar_position: 9
---

# Embedding Chat box in a div

There might be cases, when you want to embed the live chat box directly in a desired div element. We support this need by `renderInContainerId` attribute.

All what you need to do is to create a div in your HTML code with your desired id and point SignalZen code snippet to use it for rendering the chat box inside. You should set that div's height and width by CSS because the chat box will use that sizes for the layout which will be 100% of your defined sizes of the div.

When `renderInContainerId` is used, no closing options of the chat widget will be visible for visitors. However, by using `SignalZen.show()` and `SignalZen.hide()` you can control that from your JavaScript code.

Here is an example:

```html
<script type="text/javascript">
var _sz = {
  renderInContainerId: 'my_widget_container_id'
};
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
</script>
```
:::note

Please change `YOUR_PUBLIC_TOKEN` to the Public Token that is given in the Integration page on the Console.

:::
