---
sidebar_position: 3
---

# Messages

## Get all messages that belong to a user

You can fetch messages that belong to a user by using the required headers and the API endpoint: `https://api.signalzen.com/external/users/{USER_ID}/messages`

See the example below.

```shell
curl "https://api.signalzen.com/external/users/{USER_ID}/messages" \
  -H "Authorization: Bearer YOUR_API_SECRET" \
  -H "Accept: application/vnd.signalzen.v1+json"
```

Please be aware, that you need to replace `YOUR_API_SECRET` with API Secret Key that you can find on the Console Integration (General) page.

### Parameters

You can also add query parameters:
* `offset` - Use it to scroll through all users list
* `limit` - Greater than 0 and lower than 100

### Response
The response will contain data structure as follows:

```json
{
  "limit": 50,
  "offset": 0,
  "total": 2,
  "messages": [
    {
      "id": 1,
      "body": "test chat message",
      "read_by_user": true,
      "created_at": "2018-02-09T17:18:50.000Z",
      "file_url": null,
      "auto_invitation": false,
      "sender_type": "user",
      "read_by_operator": true,
      "sender": {
        "id": 1,
        "name": "David Smith",
        "email": "visitor@gmail.com"
      }
    },
    {
      "id": 2,
      "body": "test response from operator",
      "read_by_user": false,
      "created_at": "2018-02-09T18:18:38.000Z",
      "file_url": null,
      "auto_invitation": false,
      "sender_type": "operator",
      "read_by_operator": true,
      "sender": {
        "id": 1,
        "forename": "John",
        "surname": "Smith",
        "email": "operator@gmail.com",
        "picture_thumb_url": null
      }
    }
  ]
}
```

## Get a message
You can fetch single message by using the required headers and the API endpoint: `https://api.signalzen.com/external/users/{USER_ID}/messages/{MESSAGE_ID}`

See the example below.

```shell
curl "https://api.signalzen.com/external/users/{USER_ID}/messages/{MESSAGE_ID}" \
  -H "Authorization: Bearer YOUR_API_SECRET" \
  -H "Accept: application/vnd.signalzen.v1+json"
```

### Response
The response will contain data structure as follows:

```json
{
  "id": 1234,
  "body": "test chat message",
  "read_by_user": true,
  "created_at": "2018-02-09T17:18:50.000Z",
  "file_url": null,
  "auto_invitation": false,
  "sender_type": "user",
  "read_by_operator": true,
  "sender": {
    "id": 1,
    "name": "David Smith",
    "email": "visitor@gmail.com"
  }
}
```
