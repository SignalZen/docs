---
sidebar_position: 12
---

# Events

We support multiple events that come with metadata about each of them. This could be used for an advanced integration if you want to know in your JavaScript implementation when the chat is opened, a message is received or sent. Let's start with the events list and wrap up with a single example how to catch an event.

## signalzen.collapse
This event is called when the chat is expanded or suspended and by capturing it, you can get an object with key `status` which will return the action nature. Currently, the status value can be `opened` or `closed`.

## signalzen.messageReceived
This event is called when a visitor receives a chat message not depending on the message nature, it means it can be even an auto invitation message. The event metadata contains message information which you can check yourself while dealing with the implementation.

## signalzen.messageSent
This event is called when a visitor sends a chat message. The event metadata contains message information which you can check yourself while dealing with the implementation.

## signalzen.chatStarted
This event is called when a visitor is created on our system, just after the first message. The event metadata contains user information which you can check yourself while dealing with the implementation.

## signalzen.onlineStatusChange
This event is called when a Live Chat widget gets initialized or online status of the widget changes. Please remember, that online status can be forced by the antenna menu on the Console. The event metadata contains online/offline operators information as well as the status property.

## Real world example

Let's say you have a webpage where you need to react somehow when the widget collapse event happens. In this case, you need to put an event listener in your code and wait for the event to happen. Once the event happens, you can execute appropriate your own JS code. See the example on the right of this page. Be aware, that the metadata is contained in the listener function argument, under the `.detail` scope.

```javascript
window.addEventListener('signalzen.collapse', function (e) {
  if (e.detail.status === 'opened') {
    alert('The chat is opened!');
  } else {
    alert('The chat is closed!');
  }
}, false);
```
