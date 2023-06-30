const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedtopology: true,
        });


        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
     }
     catch (error){
        console.log(`Error: ${error.message}`);
        process.exit();
     }
}

module.exports = connectDB;