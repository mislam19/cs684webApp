const helper = require("./helper.js");
var express = require("express"); // (npm install --save express)
const supertest = require("supertest");
var app = require("./index.js");

describe("Test Handlers", function () {
  test("Check password validation [Correct password]", () => {
    var password = helper.validatePassword("P@ssword123");
    expect(password).toEqual(true);
  });

  test("Check email validation", () => {
    var email = helper.emailValidate("p@g.com");
    expect(email).toEqual(true);
  });

  test("GET /index to check if server is running", async () => {
    await supertest(app)
      .get("/index")
      .expect(200)
      .then((res) => {
        expect(res.text).toBe(JSON.stringify({ status: true }));
      });
  });

  test("GET /signin", async () => {
    await supertest(app)
      .post("/signin")
      .send({
        email: "jessi@g.com",
        password: "Password@123",
      })
      .expect(200)
      .then((res) => {
        expect(res.text).toBe(
          JSON.stringify({
            message: "User is Authorized",
            userLogin: {
              _id: "6237e3ff2cb8c60ff15f14ae",
              userName: "jessi123",
              email: "jessi@g.com",
              password: "Password@123",
              __v: 0,
            },
          })
        );
      });
  });

  test("GET /getDetails", async () => {
    await supertest(app)
      .get("/getDetails?email=preet123@google.com")
      .expect(200)
      .then((res) => {
        expect(res.text).toBe(
          JSON.stringify({
            _id: "62391f17bc591a2447a1c08a",
            userName: "preet",
            email: "preet123@google.com",
            password: "Password@123",
            userPreference: {
              business: false,
              entertainment: false,
              general: true,
              health: false,
              science: false,
              sports: false,
              technology: false,
            },
            __v: 0,
          })
        );
      });
  });

  test("GET /updatePreference", async () => {
    await supertest(app)
      .post("/updatePreference")
      .send({
        email: "preet123@google.com",
        preferences: {
          business: false,
          entertainment: false,
          general: true,
          health: false,
          science: false,
          sports: false,
          technology: false,
        },
      })
      .expect(200)
      .then((res) => {
        expect(res.text).toBe(
          JSON.stringify({
            details: {
              acknowledged: true,
              modifiedCount: 0,
              upsertedId: null,
              upsertedCount: 0,
              matchedCount: 1,
            },
            preferences: {
              business: false,
              entertainment: false,
              general: true,
              health: false,
              science: false,
              sports: false,
              technology: false,
            },
          })
        );
      });
  });

  test("POST /signout", async () => {
    await supertest(app)
      .post("/signout")
      .send({
        email: "preet123@google.com",
      })
      .expect(200)
      .then((res) => {
        expect(res.text).toBe(
          JSON.stringify({
            message: "User is logout",
          })
        );
      });
  });
});
