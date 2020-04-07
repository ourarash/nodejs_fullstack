app.get("/", async function(req, res) {
  if (req.query && Object.keys(req.query).length > 0) {
    console.log("I got a query!");
    console.log('req.query.param1: ', req.query.param1);
    console.log('req.query.param2: ', req.query.param2);
    outputString = process(req.query);
    res.send(outputString);
  }
});
