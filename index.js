const express = require("express");
const dotenv = require("dotenv");



const app = express();
dotenv.config();

const PORT = process.config.PORT || 5000

app.get('/', (req,res) => {
    res.send('API is working')
})
app.listen(PORT, console.log("Server is runnigss "))