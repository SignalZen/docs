---
sidebar_position: 2
---

# Users

## Get all users
You can fetch users by using the required headers and the API endpoint: `https://api.signalzen.com/external/users`

See the example below.

```shell
curl "https://api.signalzen.com/external/users" \
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
  "limit":50,
  "offset":0,
  "total":1,
  "users":[
    {
      "id":1,
      "name":"John Smith",
      "email":"john.smith@gmail.com",
      "reference":"123",
      "created_at":"2017-11-25T20:27:42.000Z",
      "updated_at":"2017-11-25T20:27:42.000Z",
      "online_at":"2017-11-25T20:27:42.000Z",
      "last_url":"https://google.com",
      "user_attributes":[
        {"name":"company","value":"John limited"}
      ]
    }
  ]
}
```

Remember — "user_attributes" in the response stands for the custom properties set by the widget JavaScript code.

## Get a user
You can fetch single user by using the required headers and the API endpoint: `https://api.signalzen.com/external/users/{USER_ID}`

See the example below.

```shell
curl "https://api.signalzen.com/external/users/{USER_ID}" \
  -H "Authorization: Bearer YOUR_API_SECRET" \
  -H "Accept: application/vnd.signalzen.v1+json"
```

### Response
The response will contain data structure as follows:

```json
{
  "id":123,
  "name":"John Smith",
  "email":"john.smith@gmail.com",
  "reference":"123",
  "created_at":"2017-11-25T20:27:42.000Z",
  "updated_at":"2017-11-25T20:27:42.000Z",
  "online_at":"2017-11-25T20:27:42.000Z",
  "last_url":"https://google.com",
  "user_attributes":[
    {"name":"company","value":"John limited"}
  ]
}
```

Remember — "user_attributes" in the response stands for the custom properties set by the widget JavaScript code.
