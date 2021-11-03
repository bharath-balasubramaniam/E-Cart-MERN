const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect(
    "mongodb+srv://bharath:10051995@e-cart.wc6q0.mongodb.net/e-cart?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(5000);
