
const express = require("express")
const registerApi = require("./features/register")

const app = express()

app.use("/register", registerApi)

app.listen(8000)