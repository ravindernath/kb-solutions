const express = require("express");
// const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const router = require('./routes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); //To accept JSON Data

//headers


//api
app.get('/', (req, res) => {
    res.send("API is running")
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.use('/api', router);


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow));