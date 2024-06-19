
const express = require("express")
const login = require("./feature/login")

const app = express()


app.use(login)

app.listen(8000)