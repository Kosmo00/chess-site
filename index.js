const express = require('express')
const morgan = require('morgan')

const app = express()

// Settings

app.set('port', process.env.PORT || 4000)

// Middlewares

app.use(morgan('dev'))
app.use(express.json())

// Global variables

// Routes

//app.use(require('./routes'))

// Starting the server

app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`))
