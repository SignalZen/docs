---
sidebar_position: 1
---

# Security

## Introduction

Your system must ensure security for incoming webhooks from SignalZen. SignalZen sends `x-signalzen-signature` header with each webhook request and your system must build the signature itself, then compare it with the one SignalZen sends and, if they don't match, ignore the webhook. If webhook's header and your signature matches, the request is valid and sent by SignalZen.

## Building signature
For building the signature, SignalZen uses hash-based message authentication code (or HMAC), which is a cryptographic authentication technique that uses a hash function and a secret key.

Your secret key is the API Secret key issued by SignalZen. You can find it on Console general integrations page or on the webhooks configuration page.

We supply for the algorithm the payload of the request and use the API Secret key to generate the signature.

This is how the building/validating of the signature looks in NodeJS (Express):

```javascript
const { createHmac } = require('crypto')
const req = <ExpressJS request object>
const hmac = createHmac('sha256', '<API Secret key>')
hmac.update(req.rawBody)
let signature = hmac.digest()
if (!Buffer.isBuffer(signature)) {
  throw "error: problem creating digest"
}

if (signature.toString('hex') !== req.headers['x-signalzen-signature']) {
  throw "error: signature is invalid"
}

```
