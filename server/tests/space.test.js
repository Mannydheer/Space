const { app } = require("../index");
const supertest = require("supertest");
const request = supertest(app);
const nock = require("nock");

// ----------------------------/api/currentISSLocation --------------------
// @desc Test for 200.
describe("GET /api/currentISSLocation", () => {
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
    const response = await request.get("/api/currentISSLocation");
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

describe("GET /api/currentISSLocation", () => {
  //test 2
  test("should will check if the 3rd party party fails to send data", async () => {
    let apiSpaceData = null;
    nock("http://api.open-notify.org")
      .get("/iss-now.json")
      .reply(502, apiSpaceData);

    let expectedResponse = null;
    const response = await request.get("/api/currentISSLocation");

    expect(response.status).toBe(502);
    expect(response.body).toEqual(expectedResponse);
  });
});