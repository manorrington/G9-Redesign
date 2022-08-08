// imports
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

// database connection
mongoose.connect(
  "mongodb+srv://dbUSER:dbUSER@redesigndb.aj1vcme.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("MongoDB connection successful!")
);

// create DB schema
const redesignS = new mongoose.Schema({
  item: String,
});

const Stuff = mongoose.model("Stuff", redesignS);
const itemOne = Stuff({
  item: "testing"
}).save(function (err) {
  if (err) throw err;
  console.log("item saved");
});

// second database ( if necessary )

// middleware
app.use(bodyparser.json());
app.use(cors());

// ----------------------------------- endpoints -------------------------- //
app.get("/", function (req, res) {
  res.send("Hello World");
});

// port
app.listen(3001, () => {
  console.log("listening on 3001");
});
