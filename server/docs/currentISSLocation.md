## Current ISS Location

```
Api will return the current location of the ISS in JSON data.
```

**ENDPOINT**

```
/api/currentISSLocation
```

**Resource Information**

```
Response Format: JSON
```

#### URL Parameters

No parameters.
**METHOD**

```
Request type:
- GET
```

## Status Response

**Success Response:**

```javascript
Content: {
  status: 200,
  message: "Success getting ISS space station coordinates"m
  spaceLocationInformation: {
  lon: -30.2983,
  lat: 4.6062
  timestamp: 1592250551,
  }
}
```

**Error Response:**
No data returned from the API.

```javascript
  Code: 404 - NOT FOUND
  Content: {status: 404, error: "No data available"}
```

Request to the API failed.

```javascript
  Code: 502 BAD GATEWAY
  Content: {status: 404, error: "Received invalid response from API."}
```

**Sample Call**

```javascript
fetch("/api/currentISSLocation");
```
