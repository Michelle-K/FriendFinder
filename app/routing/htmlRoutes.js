var path = require("path");

// Routes
// =============================================================
module.exports = function(app){
	
	app.use(function(req, res) {
	  res.sendFile(path.join(__dirname + "/../public/index.html"));
	});


};