 const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRouter = require("./routes/userRouter");
const router = require('./routes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
const bodyParser = require('body-parser');




// middleware
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))


app.use(express.json()); //To accept JSON Data



// headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next()
})



//api
app.get('/', (req, res) => {
    res.send("API is running")
});

app.use("/api/user", userRouter);
app.use('/api', router);
app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow));