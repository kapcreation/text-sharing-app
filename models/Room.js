const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://kap:123@cluster0.spxpaf1.mongodb.net/kap?retryWrites=true&w=majority")

const Room = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: String,
})

module.exports = mongoose.model("Room", Room)