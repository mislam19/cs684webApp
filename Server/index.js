require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./userSechma");
const helper = require("./helper");
const axios = require("axios");
var morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
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

app.get("/news/:category", async (req, res) => {
  var category = req.params.category;
  var pageNo = req.query.pageNo;
  var API_KEY = process.env.API_KEY;
  // categories = [business, entertainment, general, health, science, sports, technology]
  var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&pageSize=10&page=${pageNo}`;
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

app.get("/news/email/:email", async (req, res) => {
  // categories = [business, entertainment, general, health, science, sports, technology]
  var API_KEY = process.env.API_KEY;
  var email = req.params.email;
  var details = await User.findOne({ email });
  var data_json = [];

  if (details !== null) {
    const promises = Object.keys(details["userPreference"]).map(async (x) => {
      var category = details["userPreference"][x];
      var data = [];
      if (category === true) {
        var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${x}&apiKey=${API_KEY}&pageSize=100`;
        res.header("Access-Control-Allow-Origin", "*");
        data = await axios.get(uri);
        data = data.data.articles;
      }
      return data;
    });
    const allArticles = await Promise.all(promises);
    var articles = [].concat.apply([], allArticles);
    res
      .status(200)
      .json({ data: { totalResults: articles.length, articles: articles } });
  } else res.status(401).json({ message: "User not found" });
});

app.post("/signup", async (req, res) => {
  helper.signUpHandler(req, res, User);
});

app.post("/signin", async (req, res) => {
  helper.signInHandler(req, res, User);
});

app.post("/updatePreference", async (req, res) => {
  var email = req.body.email;
  var preferences = req.body.preferences;
  const details = await User.updateOne(
    { email },
    { $set: { userPreference: preferences } }
  );
  res.status(200).json({ details, preferences });
});

app.get("/getDetails", async (req, res) => {
  var email = req.query.email;
  const details = await User.findOne({ email: email });
  res.status(200).json(details);
});

app.post("/signout", async (req, res) => {
  const { email } = req.body;
  const userLogin = await User.findOne({ email: email });
  if (userLogin) res.status(200).json({ message: "User is logout" });
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});

module.exports = app;
