const express = require('express')
const morgan = require('morgan')

const cors_config = require('./cors')
const app = express()

// Settings

app.set('port', process.env.PORT || 4000)
app.use(cors(cors_config.application.cors.server))

// Middlewares

app.use(morgan('dev'))
app.use(express.json())

// Global variables

// Routes

app.use('/api', require('./routes'))

// Starting the server

app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`))
