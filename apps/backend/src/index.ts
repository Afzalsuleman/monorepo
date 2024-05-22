import express from "express";
import {backenUrl} from "@repo/common/config";
const app = express()

app.get("/", (req, res) => {
    console.log(backenUrl);
    res.json({
        message: backenUrl
    });
})
app.listen(8080);