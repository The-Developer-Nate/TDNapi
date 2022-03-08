const express = require("express")
var app = express()

app.get("/", (req, res) => {
    res.status(200).end('{"message":"OK"}')
})

app.get("/docs", (req, res) => {
    res.status(200).end('tester')
})

app.listen(80, "0.0.0.0")
