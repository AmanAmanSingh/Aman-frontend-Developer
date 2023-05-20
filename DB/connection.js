const mongoose = require("mongoose");

const connection = () => {
	mongoose.connect(process.env.DATABASE_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.log("database connected")
	}).catch((err) => {
		console.log(err)
	})
}


module.exports = connection;