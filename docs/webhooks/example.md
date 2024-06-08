---
sidebar_position: 1
---

# Full NodeJS (Express) example

## Introduction

By looking into this example, you can understand the flow of accepting incoming webhook.

```javascript
const express = require('express')
const bodyParser = require('body-parser')
const { createHmac } = require('crypto')

const app = express();
app.disable('x-powered-by')
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/webhooks.json', async (req, res) => {
  try {
    const hmac = createHmac('sha256', 'FtSMkCXAdCan2OuDCNaqrQ')
    hmac.update(req.rawBody)
    let result = hmac.digest()
    if (!Buffer.isBuffer(result)) {
      throw "error: problem creating digest"
    }

    if (result.toString('hex') !== req.headers['x-signalzen-signature']) {
      throw "error: signature is invalid"
    }

    if (req.body.challenge) {
      return res.status(200).send(req.body.challenge)
    }

    // TODO: do something with the request.body (event data)
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).send({ error: "Something went wrong" });
  }
});

```
