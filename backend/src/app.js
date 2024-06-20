const express = require("express")
const routes = require("./routes")
const fileUpload = require("express-fileupload")
const cors = require("cors")

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {

        this.server.use(cors({ origin: "*" }))

        this.server.use(express.json())

        this.server.use("/public/img",express.static("public/img"))

        this.server.use(fileUpload())

        this.server.use(express.urlencoded({ extended: false }))
    }

    routes() {
        this.server.use(routes)
    }
}


module.exports = new App().server
