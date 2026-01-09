import express from "express";
// 'import("@repo/common/config")'
import { BACKEND_URL }  from "@repo/common/config"
// const BACKEND_URL = require 

const app = express();
console.log(BACKEND_URL)
app.get("/", (req,res)=>{
    res.json({
        message: "Healthy express Server"
    })
})

app.listen(3000,()=>[
    console.log("Listening on port 3000")
])