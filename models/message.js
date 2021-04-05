const mongoose = require("mongoose");
const { Schema } = mongoose;

const Message = new Schema({
    username: String,
    message: String
});

module.exports = mongoose.model("Message",Message);