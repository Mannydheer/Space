const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);
const nock = require("nock");

//----------------------WEATHER TESTS.--------------

//Success response 200
describe("GET /api/current-weather-details", () => {
  //test 2
  test("should check for a 200 response", async () => {
    //data
    let weatherData = {
      request: {
        type: "LatLon",
        query: "Lat 78.31 and Lon -73.97",
        language: "en",
        unit: "m",
      },
      location: {
        name: "Etah",
        country: "Greenland",
        region: "Nordgronland",
        lat: "78.317",
        lon: "-72.633",
        timezone_id: "America/Iqaluit",
        localtime: "2020-06-17 17:40",
        localtime_epoch: 1592415600,
        utc_offset: "-4.0",
      },
      current: {
        observation_time: "09:40 PM",
        temperature: -3,
        weather_code: 119,
        weather_icons: [
          "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png",
        ],
        weather_descriptions: ["Cloudy"],
        wind_speed: 7,
        wind_degree: 152,
        wind_dir: "SSE",
        pressure: 1013,
        precip: 0,
        humidity: 94,
        cloudcover: 83,
        feelslike: -6,
        uv_index: 1,
        visibility: 5,
        is_day: "no",
      },
    };

    let lat = 78.317;
    let lng = -73.9712;

    nock("http://api.weatherstack.com")
      .get(
        `/current?access_key=${process.env.WEATHER_API_KEY}&query=${lat},${lng}`
      )
      .reply(200, weatherData);

    //weather information.
    let expectedResponse = {
      country: "Greenland",
      region: "Nordgronland",
      lat: 78.31,
      lon: -73.9712,
      temperature: -3,
    };

    const response = await request.get(
      `/api/current-weather-details?lng=${lat}&lat=${lat}`
    );
    expect(response.status).toEqual(200);
    expect(response.body.weatherInformation).toContain(expectedResponse);
  });
});

//Unauthorized 401
describe("GET /api/current-weather-details", () => {
  test("should test for validity for API key", async () => {
    let wrongApiKey = "12345";
    let lat = 78.317;
    let lng = -73.9712;
    //weather API error response for invalid key.
    let apiErrorResponse = {
      success: false,
      error: {
        code: 101,
        type: "invalid_access_key",
        info: "You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]",
      },
    };
    //error for weather api
    nock("http://api.weatherstack.com")
      .get(`/current?access_key=${wrongApiKey}&query=${lat},${lng}`)
      .reply(101, apiErrorResponse);

    let serverResponse = {
      status: 401,
      error: "Invalid API key.",
    };
    const response = await request.get(
      `/api/current-weather-details?lng=${lat}&lat=${lat}`
    );
    expect(response.status).toEqual(401);
    expect(response.body).toEqual(serverResponse);
  });
});

//Bad Request 400
describe("GET /api/current-weather-details", () => {
  test("should test if lat and long are type numbers and are not null", async () => {
    let lat = "string";
    let lng = -73.9712;
    //weather API error response for invalid key.

    const response = await request.get(
      `/api/current-weather-details?lng=${lat}&lat=${lng}`
    );
    expect(response.status).toEqual(400);
  });
});

//Unauthorized 404
describe("GET /api/current-weather-details", () => {
  test("should test if valid data is returned from the weather API", async () => {
    let lat = 831.0;
    let lng = -73.9712;
    //weather API error response for invalid key.
    let apiErrorResponse = {
      request: {
        type: "LatLon",
        query: "Lat 831.00 and Lon -73.97",
        language: "en",
        unit: "m",
      },
      location: {
        name: null,
        country: null,
        region: null,
        lat: null,
        lon: null,
        timezone_id: "",
        localtime: "2020-06-17 23:29",
        localtime_epoch: 1592436540,
        utc_offset: "",
      },
      current: {
        observation_time: null,
        temperature: 0,
        weather_code: 0,
        weather_icons: [],
        weather_descriptions: [],
        wind_speed: 0,
        wind_degree: 0,
        wind_dir: null,
        pressure: 0,
        precip: 0,
        humidity: 0,
        cloudcover: 0,
        feelslike: 0,
        uv_index: 0,
        visibility: 0,
        is_day: null,
      },
    };
    //error for weather api
    nock("http://api.weatherstack.com")
      .get(
        `/current?access_key=${process.env.WEATHER_API_KEY}&query=${lat},${lng}`
      )
      .reply(200, apiErrorResponse);
    let serverResponse = {
      status: 404,
      error: "No data available",
    };
    const response = await request.get(
      `/api/current-weather-details?lng=${lat}&lat=${lng}`
    );
    expect(response.status).toEqual(404);
    expect(response.body).toEqual(serverResponse);
  });
});

//Bad Gateway 502
describe("GET /api/current-weather-details", () => {
  //test 2
  test("should check if the weather API is down for any unexpected reason.", async () => {
    let lat = 78.317;
    let lng = -73.9712;
    nock("http://api.open-notify.org").get("/iss-now.json").socketDelay(5000); //5 seconds.

    let expectedResponse = null;
    const response = await request.get(
      `/api/current-weather-details?lng=${lat}&lat=${lng}`
    );
    expect(response.status).toEqual(502);
    expect(response.body).toEqual(expectedResponse);
  });
});