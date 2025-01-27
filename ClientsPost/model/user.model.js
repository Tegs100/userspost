const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String, 
    require: true
  },
  desc: {
    type: String,
    require: true
  },
  previewPix: {
    type: String,
    require: true
  },
  previewVideo: {
    type: String,
    require: true
  },
  detailedVideo: {
    type: String,
    require: true
  },
  creatorId: {
    type: String,
    require: true}
}, {timestamps:true});

const postModel = mongoose.model("Post", postSchema);


module.exports = postModel;