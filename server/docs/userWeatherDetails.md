**Current Weather API  **
----
```
- Api will return the real-time weather data for the current user IP-address.
```
* **URL** <br/>
    * /api/userWeatherDetails`
* **Resource Information**

    * Response Format: `JSON`
    * Requires authentication? `Yes`
    * Rate Limited? `1000requests/month`
`
* **URL Params** <br/>
    * /api/currentWeatherDetails/`
    <br/>
        * **Required**: 
        `1. IP address (Auto-Fetch)` </br>
            locationQuery = [number]
 
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
  * **Code:** 200 Success <br />
    **Content:** 
    {
  "request": {
    "type": "IP",
    "query": "70.53.187.82",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Saint-Michel",
    "country": "Canada",
    "region": "Quebec",
    "lat": "45.567",
    "lon": "-73.617",
    "timezone_id": "America\/Toronto",
    "localtime": "2020-06-16 00:32",
    "localtime_epoch": 1592267520,
    "utc_offset": "-4.0"
  },
  "current": {
    "observation_time": "04:32 AM",
    "temperature": 18,
    "weather_code": 116,
    "weather_icons": [
      "https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 6,
    "wind_degree": 271,
    "wind_dir": "W",
    "pressure": 1030,
    "precip": 0,
    "humidity": 63,
    "cloudcover": 8,
    "feelslike": 18,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "no"
  }
}
   
`

* **Error Response:**
  * **Code:** 601 CUSTOM ERROR (MISSING QUERY)<br />
      **Content:** 
      {
  "success": false,
  "error": {
    "code": 601,
    "type": "missing_query",
    "info": "Please specify a valid location identifier using the query parameter."
  }
}
     
  * **Code:** 615 (REQUEST_FAILED) - Invalid PARAMS<br />
      **Content:** 
      {
  "success": false,
  "error": {
    "code": 615,
    "type": "request_failed",
    "info": "Your API request failed. Please try again or contact support."
  }
}   
  * **Code:** 101 (MISSING ACCESS KEY) - Invalid API KEY<br />
      **Content:** 
{
  "success": false,
  "error": {
    "code": 101,
    "type": "missing_access_key",
    "info": "You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY]"
  }
}



* **Sample Call** 

  ```javascript
    fetch(`/api/userWeatherDetails`)
  ```

