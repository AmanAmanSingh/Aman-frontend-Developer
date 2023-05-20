const express = require("express");
const app = express();
const PORT = 4000;
const dotenv = require("dotenv").config();
const DB_connection = require("./DB/connection")();
const CapsuleController = require("./routes/capsule")
const userController = require("./routes/user")
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/api", CapsuleController);
app.use("/api", userController);
app.listen(PORT, () => {console.log(`server running on ${PORT}`)})
