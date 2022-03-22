import { emailValidate, validatePassword } from './helper.js';

describe('Test Handlers', function () {
	test('Check password validation [Correct password]', () => {
		var password = validatePassword('P@ssword123');
		expect(password).toEqual(true);
	});

	test('Check password validation [Incorrect password]', () => {
		var password = validatePassword('password123');
		expect(password).toEqual(true);
	});

	test('Check email validation', () => {
		var email = emailValidate('p@g.com');
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

});
