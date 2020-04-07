"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("static"));
app.use(cors());

let port = 5000;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const delay = function(t) {
  return new Promise(resolve => setTimeout(resolve, t));
};

app.get("/", async function(req, res) {
  if (req.query && Object.keys(req.query).length > 0) {
    console.log("I got a query!");
    handleGet(res, res, req.query);
  }
});

app.listen(port, err => {
  console.log(`Listening on port: ${port}`);
});
//-----------------------------------------------------------------------------
async function handleGet(req, res, query) {
  let error = "NO_ERROR";
  let randomValue;
  let min_value;
  let max_value;

  console.log("query: ", JSON.stringify(query));
  if (
    query !== undefined &&
    query.min_value !== undefined &&
    query.max_value !== undefined
  ) {
    min_value = parseInt(query.min_value);
    max_value = parseInt(query.max_value);
    randomValue = generateRandomNumber(min_value, max_value);
    console.log("randomValue: ", randomValue);
  } else {
    error = "ERROR: min_value or max_value not provided";
  }

  let output = {
    randomValue: randomValue,
    min_value: min_value,
    max_value: max_value,
    error: error
  };

  let outputString = JSON.stringify(output, null, 2);
  console.log("outputString: ", outputString);
  
  // Let's generate some artificial delay!
  await delay(2000);
  res.send(outputString);
}
