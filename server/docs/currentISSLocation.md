**Current ISS Location **
----
```
- Api will return the current location of the ISS in JSON data.
- Returns the latitude and longitude and unix timestamp. 
```
* **Resource URL** <br/>
    * /api/currentISSLocation
* **Resource Information**
    * Response Format: `JSON``
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
```javascript
Code: 200
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

* **Error Response:**
```javascript
Code: 404 - NOT FOUND
Content: null || undefined.

```


* **Sample Call** 

  ```javascript
    fetch("/api/currentISSLocation")
  ```

