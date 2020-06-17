**Current Weather API  **
----
```
- Api will return the real-time weather data for a query with coordinates passed as lat/lng.
```
* **URL** <br/>
    * /api/currentWeatherDetails/`:coordinates`
* **Resource Information**
    * Response Format: `JSON`
`
* **URL Params** <br/>
    * /api/currentWeatherDetails/`:coordinates`
    <br/>
        * **Required**: The `coordinates` can be passed location identifiers in order to get back the weather data.
    
        `1. coordinates (Lat/Lon)`</br>
            locationQuery = [number, number]

 
* **METHOD** 
```
Request type: 
- GET
```
* **DATA Params** 
```
None
```

* **Success Response:**
```javascript
  Code: 200 Success 
  Content: {
    status: 200,
    message: "Success getting weather Details",
    weatherInformation:
    country: "Nigeria",
    region: "Lagos",
    lat: 6.453,
    lon: 3.396,
    temperature: 27,
}
     
```

* **Error Response:**
```javascript
  Code: 400 BAD REQUEST
  Content: {status: 400, error: Missing/Invalid coordinates.}
```
```javascript
  Code: 502 BAD GATEWAY
  Content: {status: 404, error: Received invalid response from API.}
```


* **Sample Call** 

```javascript
let locationQuery = {lat: 40.7831,lng: -73.9712};

fetch(`/api/currentWeatherDetails/${locationQuery}`);
```

