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
  "request": {
    "type": "City",
    "query": "Lagos, Nigeria",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Lagos",
    "country": "Nigeria",
    "region": "Lagos",
    "lat": "6.453",
    "lon": "3.396",
    "timezone_id": "Africa\/Lagos",
    "localtime": "2020-06-17 01:25",
    "localtime_epoch": 1592357100,
    "utc_offset": "1.0"
  },
  "current": {
    "observation_time": "12:25 AM",
    "temperature": 27,
    "weather_code": 116,
    "weather_icons": [
      "https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 0,
    "wind_degree": 212,
    "wind_dir": "SSW",
    "pressure": 1012,
    "precip": 0,
    "humidity": 89,
    "cloudcover": 25,
    "feelslike": 31,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "no"
  }
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

