---
sidebar_position: 1
---

# Basics

## Introduction
Webhooks enables SignalZen to send HTTP requests to your desired URL and in this way notify your system about certain events.

There is a wide range of events possible to catch, for instance, a chat has been started, a message has been sent etc.

Webhooks need security measures to be in place, so that you could confirm that they are sent by SignalZen on your side.

You can create webhooks on Console for specific events. Each webhook is created and validated with URL and event type.

## Example of the payload

```json
{
  "data":{
    "id":28,
    "body":"hey hey",
    "read_by_user":null,
    "created_at":"2024-06-08T08:01:23.000Z",
    "file_url":null,
    "type":"Message",
    "rating":null,
    "sender_type":"user",
    "read_by_operator":false,
    "sender":{
      "id":5,
      "email":null,
      "name":"#5"
    }
  },
  "event_type":"message.created"
}
```
