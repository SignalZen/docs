---
sidebar_position: 1
---

# Authentication

In order to use the backend API for retrieving your website data (chats, messages etc.), you will need to use API Secret Key that you can find on the Integration (General) page of your website.

SignalZen expects for the API Secret Key to be included in all API requests to the server in a header that looks like the following:

`Authorization: Bearer YOUR_API_SECRET`

We also expect for the Accept header to be included in all API requests to the server:

`Accept: application/vnd.signalzen.v1+json`

Both headers MUST be sent together with each request, otherwise you can not access the resources.
