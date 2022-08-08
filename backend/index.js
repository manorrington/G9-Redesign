// imports
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const Test = require("./models/test");
const app = express();

// database connection
mongoose.connect(
  "mongodb+srv://dbUSER:dbUSER@redesigndb.aj1vcme.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("MongoDB connection successful!")
);

// second database ( if necessary )

// middleware
app.use(bodyparser.json());
app.use(cors());

// ----------------------------------- endpoints -------------------------- //
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/testdata", function (req, res) {
  Test.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

// testing post
app.post("/newdata", async (req, res) => {
  const post = new Test({
    title: req.body.title,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

// port
app.listen(3001, () => {
  console.log("listening on 3001");
});
