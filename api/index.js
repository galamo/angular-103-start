const express = require("express")
const data = require("./data.json")
const cors = require("cors")
const app = express()


app.use(cors())
app.get("/api/products", (req, res, next) => {
    setTimeout(() => {
        return res.json(data)
    }, 2000);
})

app.listen(4500)