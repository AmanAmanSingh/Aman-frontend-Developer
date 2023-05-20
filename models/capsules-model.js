const mongoose = require("mongoose");

const CapsuleSchema = new mongoose.Schema({

	capsule_serial: {
		type: String
	},
	capsule_id: {
		type: String
	},
	status: {
		type: String
	},
	original_launch: {
		type: String
	},
	original_launch_unix: {
		type: Number
	},
	missions: {
		type: Array
	},
	landings: {
		type: Number
	},
	type: {
		type: String
	},
	details: {
		type: String
	},
	reuse_count: {
		type: Number
	},
})

module.exports = mongoose.model("Capsule", CapsuleSchema)