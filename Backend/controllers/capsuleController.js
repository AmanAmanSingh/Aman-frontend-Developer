const express = require("express");
const capsuleModel = require("../models/capsules-model")
const axios = require("axios");

const CapsuleController = {

	async SpacexData(req, res) {
		const spacxData = await axios.get('https://api.spacexdata.com/v3/capsules');
		//console.log(spacxData.data)

		const fillData = await capsuleModel.create(spacxData.data)
		//console.log(fillData, "fildata");
	},

	async GetAllData(req, res) {
		console.log(req.user, "user")
		try {
			const allData = await capsuleModel.find();
			return res.status(200).json({
				message: "success",
				data: allData
			})
		} catch(err) {
			return res.status(500).json({
				message: err.message
			})
		}
	},


	async PaginatedData(req, res) {
		const {page = 1, pagesize = 4, status, type, original_launch_unix} = req.query;
		try {

			let query = {};

			if(status) {
				query.status = status;
				const data = await capsuleModel
					.find(query)
					.skip(pagesize * (page - 1))
					.limit(pagesize);
				return res.status(200).json({
					message: "success",
					data: data,
				});
			}

			if(type) {
				query.type = type;
				const data = await capsuleModel
					.find(query)
					.skip(pagesize * (page - 1))
					.limit(pagesize);
				return res.status(200).json({
					message: "success",
					data: data,
				});
			}

			if(original_launch_unix) {
				query.original_launch_unix = original_launch_unix;

				const data = await capsuleModel
					.find(query)
					.skip(pagesize * (page - 1))
					.limit(pagesize);
				return res.status(200).json({
					message: "success",
					data: data,
				});
			}

			const allData = await capsuleModel.find().skip((page - 1) * pagesize).limit(pagesize);
			return res.status(200).json({
				message: "success",
				data: allData
			})
		} catch(err) {
			return res.status(500).json({
				message: err.message
			})
		}
	}
}

module.exports = CapsuleController;