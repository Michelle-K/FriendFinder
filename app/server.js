// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'public')));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);
require("./data/friends.js");

app.post("/api/newFriend", function(req, res) {
  var newFriend = req.body;

  console.log("Finding your new best friend!");

  friends.push(newFriends);

  res.json(newFriends);
});

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
