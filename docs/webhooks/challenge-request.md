---
sidebar_position: 1
---

# Challenge request

Each webhook URL must respond to the challenge request which is send by SignalZen to your webhook URL. It helps to validate if the given URL really belongs to you.

The challenge request sends JSON string with key "challenge" and you need to return HTTP response with text which is the value of the key.

The challenge request is send once when adding/changing the URL of the webhook on Console.
