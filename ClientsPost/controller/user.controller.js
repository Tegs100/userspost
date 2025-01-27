const postModel = require("../model/user.model");
const bcrypt = require("bcryptjs");


const createPost = async (req, res) => {
  const body = req.body;
  try{
  const post = new postModel(body);
  await post.save();
  res.status(201).json(post);
  }
  catch(error) {
  res.status(400).send({message: error.message})
  }
};


module.exports = {createPost};