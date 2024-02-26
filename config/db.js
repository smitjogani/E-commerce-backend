const mongoose = require("mongoose");

const mongodbUrl = "mongodb+srv://smitjogani000:wo5mbGKdL9hyPNeI@cluster0.uorjj9o.mongodb.net/";

const connectDB = () => {
    mongoose.connect(mongodbUrl);
}

module.exports = { connectDB };