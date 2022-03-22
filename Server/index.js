require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./userSechma");
const helper = require("./helper");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;

var DB =
  "mongodb+srv://preet123:preet123@cluster0.qeh1a.mongodb.net/newsapp?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.get("/index", async (req, res) => {
  res.status(200).json({ status: true });
});

app.get("/news", async (req, res) => {
  var category = "general";
  var API_KEY = process.env.API_KEY;
  // categories = [business, entertainment, general, health, science, sports, technology]
  var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  res.header("Access-Control-Allow-Origin", "*");

  axios
    .get(uri)
    .then(function (response) {
      var data = response.data;
      res.status(200).json({ data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error });
    });
});

app.get("/news/:email", async (req, res) => {
  // categories = [business, entertainment, general, health, science, sports, technology]
  var API_KEY = process.env.API_KEY;
  var email = req.params.email;
  var details = await User.findOne({ email });
  var data_json = [];

  if (details !== null) {
    for (var x of Object.keys(details["userPreference"])) {
      var category = details["userPreference"][x];
      console.log(category);
      if (category === true) {
        var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        res.header("Access-Control-Allow-Origin", "*");

        axios.get(uri).then(function (response) {
          var data = response.data;
          data_json.push(data);
        });
      }
    }
    res.status(200).json(data_json);
  } else res.status(401).json({ message: "User not found" });
});

app.post("/signup", async (req, res) => {
  helper.signUpHandler(req, res, User);
});

