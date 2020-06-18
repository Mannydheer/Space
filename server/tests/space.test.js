const app = require("../index");
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

//Bad Gateway 502
describe("GET /api/current-iss-location", () => {
  //test 2
  test("should check if the ISS API is down for any unexpected reason.", async () => {
    nock("http://api.open-notify.org").get("/iss-now.json").socketDelay(5000); //5 seconds.

    let expectedResponse = null;
    const response = await request.get("/api/current-iss-location");
    expect(response.status).toEqual(502);
    expect(response.body).toEqual(expectedResponse);
  });
});