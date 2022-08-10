/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




// imports
const mongoose = require("mongoose");
const cors = require("cors");
const Test = require("./models/test");
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// database connection
mongoose.connect(
  "mongodb+srv://dbUSER:dbUSER@redesigndb.aj1vcme.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("MongoDB connection successful!")
);

// second database ( if necessary )

// middleware
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

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
