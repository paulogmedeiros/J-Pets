const express = require("express")
const router = express.Router
const routes = new router()


routes.get("/", (req,res)=>{
    res.json({teste:"teste"})
})


module.exports = routes