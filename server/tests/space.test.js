const { app } = require("../index");
const supertest = require("supertest");
const request = supertest(app);
const nock = require("nock");

// ----------------------------SPACE TESTS --------------------
// @desc Test for 200.
describe("GET /api/current-iss-location", () => {
  let apiSpaceData = {
    iss_position: {
      latitude: "4.6062",
      longitude: "-30.2983",
    },
    message: "success",
    timestamp: 1592412467,
  };

  test("should respond with space station ISS lng/lat positions.", async () => {
    nock("http://api.open-notify.org")
      .get("/iss-now.json")
      .reply(200, apiSpaceData);
    //expected data.
    const expectedLng = "-30.2983";
    const expectedLat = "4.6062";
    const expectedTimeStamp = "1592412467";
    //reqeust
    const response = await request.get("/api/current-iss-location");
    //expected response test.
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Success getting ISS space station coordinates",
      spaceLocationInformation: {
        lon: expectedLng,
        lat: expectedLat,
        timestamp: expectedTimeStamp,
      },
    });
  });
});

describe("GET /api/current-iss-location", () => {
  //test 2
  test("should will check if the ISS API fails to send data", async () => {
    let apiSpaceData = {
      spaceData: null,
      error: "Failed to get lng/lat for ISS space station location.",
    };
    nock("http://api.open-notify.org")
      .get("/iss-now.json")
      .socketDelay(5000) //4 seconds.
      .replyWithError(apiSpaceData);

    let expectedResponse = null;
    const response = await request.get("/api/current-iss-location");
    expect(response.status).toEqual(502);
    expect(response.body.spaceData).toEqual(expectedResponse);
  });
});

//----------------------WEATHER TESTS.--------------

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

    const response = await request.get(`/api/current-weather-details?lng=${lat}&lat=${lat}`);
    expect(response.status).toEqual(200);
    expect(response.body.weatherInformation).toEqual(expectedResponse);
  });
});

//Unauthorized 401
describe('"GET /api/current-weather-details"', () => {
  test("should test for validity for API key", () => {
    let wrongApiKey = "12345";
    let lat = 78.317;
    let lng = -73.9712;
    //weather API error response for invalid key.
    let apiErrorResponse = {
      success: false,
      error: {
        code: 101,
        type: "invalid_access_key",
        info:
          "You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]",
      },
    };
  //error for weather api
  nock("http://api.weatherstack.com")
      .get(`/current?access_key=${wrongApiKey}&query=${lat},${lng}`)
      .reply(101, apiErrorResponse);
  });
  let serverResponse = {
    status: 401, error: "Invalid API key."
}
    const response = await request.get(`/api/current-weather-details?lng=${lat}&lat=${lat}`);
    expect(response.status).toEqual(401)
    expect(response.body).toEqual(serverResponse)
});

//Bad Request 400
describe('"GET /api/current-weather-details"', () => {
  test("should test if lat and long are numbers and passed in", () => {
    let lat = "string";
    let lng = -73.9712;
    //weather API error response for invalid key.

    const response = await request.get(`/api/current-weather-details?lng=${lat}&lat=${lat}`);
  expect(response.status).toEqual(400);
});
})