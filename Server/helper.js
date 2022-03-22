const validatePassword = (password) => {
  let isUpperCase = false;
  let isLowerCase = false;
  let notCharacter = false;
  var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  var i = 0;
  var character = "";
  while (i <= password.length) {
    character = password.charAt(i);
    if (password.match(format)) notCharacter = true;
    else {
      if (character == character.toUpperCase()) {
        isUpperCase = true;
      }
      if (character == character.toLowerCase()) {
        isLowerCase = true;
      }
    }
    i++;
  }
  if (!isLowerCase && !isUpperCase) return false;
  else return true;
};

const emailValidate = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const signUpHandler = async (req, res, User) => {
  const { userName, email, password } = req.body;
  if (!userName || !password || !userName)
    res.status(400).json({ error: "The request was not properly formed" });
  if (!userName.length > 8 || !password.length > 8)
    res.status(400).json({ error: "The request was not properly formed" });
  if (password.includes(" "))
    res.status(400).json({ error: "The request was not properly formed" });

  await User.create({
    userName,
    email,
    password,
    userPreference: {
      business: false,
      entertainment: false,
      general: true,
      health: false,
      science: false,
      sports: false,
      technology: false,
    },
  });

  res.status(200).json({
    message: "Confirm",
    userDetails: {
      userName,
      email,
      password,
      userPreference: {
        business: false,
        entertainment: false,
        general: true,
        health: false,
        science: false,
        sports: false,
        technology: false,
      },
    },
  });
};


module.exports = {
  
  emailValidate,
  validatePassword,
  signInHandler,
};
