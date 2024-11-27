const express = require("express")
const data = require("./data.json")
const cors = require("cors")
const { default: axios } = require("axios")
const app = express()


app.use(cors())
app.get("/api/products", (req, res, next) => {
    setTimeout(() => {
        return res.json(data)
    }, 2000);
})

app.get("/api/buses", async (req, res, next) => {
    try {
        const { data } = await axios.get("https://data.gov.il/api/3/action/datastore_search?resource_id=91d298ed-a260-4f93-9d50-d5e3c5b82ce1&limit=30")
        console.log(data)
        return res.json(data?.result?.records)
    } catch (error) {
        res.json({ message: "data unavailable" })
    }
})

app.get("/api/brokers", async (req, res, next) => {
    try {
        const { data } = await axios.get("https://data.gov.il/api/3/action/datastore_search?resource_id=a0f56034-88db-4132-8803-854bcdb01ca1&limit=50")
        console.log(data)
        return res.json(data?.result?.records)
    } catch (error) {
        res.json({ message: "data unavailable" })
    }
})

app.get("/api/cars-details", async (req, res, next) => {
    try {
        const { carNum } = req.query;
        if (!carNum) throw new Error()
        const { data } = await axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${carNum}`)
        console.log(data)
        return res.json(data?.result?.records)
    } catch (error) {
        res.json({ message: "data unavailable" })
    }
})


app.listen(4500)