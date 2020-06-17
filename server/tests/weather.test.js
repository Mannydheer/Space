const { app } = require("../index");
const supertest = require("supertest");
const request = supertest(app);

//----------------------------/api/currentISSLocation --------------------
//@desc Test for 200.
describe("GET /getCountries", () => {
  it("responds with all countries from API.", async () => {
    const response = await request.get("/api/currentISSLocation");
    console.log(response);
  });
});
