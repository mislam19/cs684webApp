// ------------- LogIn API --------------
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
