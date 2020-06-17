Current Weather API 
----
```
Api will return the real-time weather data for a query with coordinates passed as lat/lng.
```
**ENDPOINT** 
```
/api/currentWeatherDetails/?lng=lng&lat=lat
```

**Resource Information**
```
Response Format: JSON
```


#### URL Parameters
Field|Required|description
:-----:|:-----:|:-----:
lng|yes| Value of the longitude position.
lat|yes| Value of the latitude position.

**METHOD** 
```
Request type: 
- GET
```
Status Response
---

**Success Response:**
```javascript
Content: {
  status: 200,
  message: "Success getting weather Details",
  weatherInformation: {
  country: "Nigeria",
  region: "Lagos",
  lat: 6.453,
  lon: 3.396,
  temperature: 27,
  }
}
     
```

**Error Response:**

if
* longitude or latitude value or both are missing.
* longitude or latitude value is not a number.
```javascript
  Code: 400 BAD REQUEST
  Content: {status: 400, error: "Missing/Invalid coordinates."}
```
Api key is invalid. 

```javascript
  Code: 401 UNAUTHORIZED
  Content: {status: 401, error: "Invalid API key."}
```
No data returned from the API.

```javascript
  Code: 404 - NOT FOUND
  Content: {status: 404, error: "No data available"} 
```
Request to the API failed.
```javascript
  Code: 502 BAD GATEWAY
  Content: {status: 404, error: "Request to the API failed"}
```

**Sample Call** 
```javascript
fetch(`/api/currentWeatherDetails/?lat=${40.7831}&lng=${-73.9712}`);
```

