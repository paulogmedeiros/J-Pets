const express = require("express")
const routes = require("./routes")
const fileUpload = require("express-fileupload")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }
    
    middlewares(){
       
        this.server.use(express.json())

        this.server.use(express.static("public"))

        this.server.use(fileUpload())

        this.server.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.server.use(routes)
    }
}


module.exports = new App().server
