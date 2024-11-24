const express = require("express")
const data = require("./data.json")
const cors = require("cors")
const app = express()


app.use(cors())
app.get("/api/products", (req, res, next) => {
    return res.json(data)
})

app.listen(4500)