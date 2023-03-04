---
sidebar_position: 6
---

# Metadata about visitor

If you have some context data that you want to see when a chat session is started (Full visitor info) on the Console, Slack, MS Teams or mobile apps, you can add that data to your integration code.

For instance, if your visitor is logged in to your web application, you can capture his/her profile related details like name, email, phone, address and anything else what is relevant to see before answering to a chat session.

This customisation works only when you integrate by HTML/JavaScript or SAP.

Your code snippet should look like this:

```html
<script type="text/javascript">
var _sz = {
  userData: {
    reference: "your-visitor-user-id",
    email: 'your-visitor@email.com',
    name: 'Your visitor name',
    'some custom attribute': 'your visitor custom attribute'
  }
};
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
</script>

```

In case of a Single Page Application:

```javascript
var _sz = {
  userData: {
    reference: "your-visitor-user-id",
    email: 'your-visitor@email.com',
    name: 'Your visitor name',
    'some custom attribute': 'your visitor custom attribute'
  }
};
var _sz=_sz||{};_sz.appId="YOUR_PUBLIC_TOKEN",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();
```
Also, if you wish to update the data during runtime (especially useful for SPAs), you can execute JavaScript function like this:

```javascript
SignalZen.pushUserData({
  reference: "your-visitor-user-id",
  email: 'your-visitor@email.com',
  name: 'Your visitor name',
  'some custom attribute': 'your visitor custom attribute'
})
```
