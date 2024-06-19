require('dotenv').config()

const express = require("express")
const registerApi = require("./features/register")

const app = express()


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log('server is running on', PORT))

app.use("/register", registerApi)


