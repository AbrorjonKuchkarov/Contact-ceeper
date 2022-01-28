const mongoose = require('mongoose');
const config = require('config');
const db = process.env.REACT_APP_MY_MONGO_URI;
require("dotenv").config();


 const connectDB = async () => {
   try{
      mongoose.connect(db , {
         useNewUrlParser: true
      })

      console.log('MongoDb Connected');
   }catch(err){
      console.error(err.message);
       process.exit(1);
   }
 };

 module.exports = connectDB;