module.exports = function(express, app) {
	app.use("/assets", express.static("assets"));
};
