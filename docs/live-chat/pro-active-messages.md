---
sidebar_position: 14
---

# Pro active messages triggering

On Console you can create pro active messages with trigger "JavaScript". This type of pro active messages
can be triggered with JavaScript API. The function takes only one argument which is the shortcut entered on Console while creating pro active message.

```html
<script type="text/javascript">
window.addEventListener('signalzen.ready', function () {
  SignalZen.triggerProActiveMessage("checkout_page")
}, false);
</script>

```
