**Current ISS Location **
----
```
- Api will return the current location of the ISS in JSON data.
- Returns the latitude and longitude and unix timestamp. 
```
* **Resource URL** <br/>
    * /api/currentISSLocation
* **Resource Information**

    * Response Format: `JSON`
    * Requires authentication? `No`
    * Rate Limited? `No, but best to do requests once every 5 seconds. (Avoid server strain)`
`
* **URL** <br/>
 /api/currentISSLocation
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
```
Code: 200
Content: {
  "iss_position": {
    "longitude": "-30.2983",
    "latitude": "4.6062"
  },
  "timestamp": 1592250551,
  "message": "success"
}
```

* **Error Response:**
```
Code: 404 - NOT FOUND
Content: null || undefined.

```


* **Sample Call** 

  ```javascript
    fetch("/api/currentISSLocation")
  ```
