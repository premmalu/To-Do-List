const mongoose = require("mongoose");
const url =
  "mongodb+srv://Admin:Admin123@cluster0.zc3f5ki.mongodb.net/?retryWrites=true&w=majority";
module.exports = mongoose.connect(
  url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(`Error in DB Connection ${err}`);
    console.log(`MongoDB Connection Suceeded...`);
  }
);
