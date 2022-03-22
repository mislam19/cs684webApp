const helper = require("./helper.js");
var express = require("express"); // (npm install --save express)
const supertest = require("supertest");
var app = require("./index.js");

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
