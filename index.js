'use strict'

const express = require('express')

const app = express()

//* Required Modules:

// envVariables to process.env:
require("dotenv").config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

//* Configrations:

// Connect to DB:
const dbConnection = require('./src/configs/dbConnection')

dbConnection()

// Cross-origin resource sharing (CORS):
const cors = require('cors')
/* default
const defaultCorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}
    */
app.use(cors())

//* Middlewares

// Parse JSON:
app.use(express.json())





//* Routes

//All Routes
app.use('/', require('./src/routes'))

// Home Path
app.all('/', (req,res) => {
    res.send({
        error:false,
        message: 'Welcome to Pizza Api',
        docs:{
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json"
        }
    })
})

// StaticFile:

app.use('/images', express.static('./uploads'))

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))


// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

