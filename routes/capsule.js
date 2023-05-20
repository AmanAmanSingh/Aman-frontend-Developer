
const express = require("express");
const router = express.Router();

const CapsuleController = require("../controllers/capsuleController");
const Authentication = require("../middelwares/jwt");


//FILLING DATA OF SPACX INTO MY API
router.post("/capsules", CapsuleController.SpacexData)


//Retriving All Filled Data
router.get("/capsules", Authentication, CapsuleController.GetAllData)

//GET DATA BY FILTER AND PAGINATE
router.get("/capsules/pagination", Authentication, CapsuleController.PaginatedData)





module.exports = router