const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userModel = require("../models/user-model");
const salt = 10;
const jwt = require("jsonwebtoken");



const UserController = {

	async SignUp(req, res) {
		try {
			const {username, email, password} = req.body;
			//ADDING NEW USER   
			const isUserExist = await userModel.findOne({email});
			if(isUserExist) {
				return res.status(400).json({
					message: "user already exist"
				})
			}
			//HASHING PASSWORD
			bcrypt.hash(password, salt, async function (err, hash) {
				if(err) {
					return res.status(400).json({
						mesaage: err.message
					})
				}
				//INSERTING NEW USER
				const userData = await userModel.create({
					username,
					email,
					password: hash
				})
				return res.status(200).json({
					message: "sucess",
					userData
				})

			});

		} catch(err) {
			return res.status(500).json({
				mesaage: "failed"
			})
		}
	},

	async SignIn(req, res) {

		try {
			const {email, password} = req.body
			if(!email && password) {
				return res.status(400).json({
					status: "failed",
					message: "All fields required"
				})
			}
			const data = await userModel.findOne({email})
			if(!data) {
				return res.status(400).json({
					status: "failed",
					message: "user not registered"
				})
			}
			bcrypt.compare(password, data.password, function (err, result) {
				if(err) {
					return res.status(400).json({
						status: "failed",
						message: err.message
					})
				}
				if(result) {
					const token = jwt.sign({
						data: data._id,
					}, process.env.SECRET_KEY);

					return res.status(200).json({
						status: "success",
						message: "Login Succesfully",
						token,
						id: data._id,
						name: data.username
					})
				} else {
					return res.status(400).json({
						status: "failed",
						message: "not a valid password"
					})
				}
			});
		} catch(error) {
			return res.status(400).json({
				status: "failed",
				message: error.message
			})
		}

	}
}

module.exports = UserController;