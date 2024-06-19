require('dotenv').config()

const express = require("express")

const login = require("./feature/login")
const registerApi = require("./features/register")

const app = express()

app.use(login)
app.use("/register", registerApi)


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log('server is running on', PORT))




