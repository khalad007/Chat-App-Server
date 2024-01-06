const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose")

const app = express();
dotenv.config();

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Server is connected to the Database")
    } catch (err) {
        console.log("Server is NOT connected",err.message)
    }
}
connectDb();

const PORT = process.config.PORT || 5000

app.get('/', (req, res) => {
    res.send('API is working')
})
app.listen(PORT, console.log("Server is runnigss "))