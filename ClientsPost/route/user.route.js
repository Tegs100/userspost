const express = require("express");
const routes = express.Router();
const {createPost} = require("../controller/user.controller");

routes.post("/posts", createPost);





module.exports = routes;
