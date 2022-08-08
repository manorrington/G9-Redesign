const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// port
app.listen(3001, () => {
    console.log("listening on 3001");
  });