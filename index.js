const express = require("express");
const mongoose = require("mongoose");
const { urlencoded, json } = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/user");
const config = require("./config/key");
const app = express();
mongoose
  .connect(config.DBURL, { useNewUrlParser: true })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());
app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, error: err.message });
    return res.status(200).json({
      success: true,
      userData: doc,
    });
  });
});
app.listen(5000);
