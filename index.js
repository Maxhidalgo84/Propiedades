const express = require('express')
const morgan = require('morgan')
const { dbConnect } = require('./config')
require('dotenv').config()
const authroutes = require('./src/routes/auth.routes')
const proprouters = require('./src/routes/prop.routes')
const CookieParser = require('cookie-parser')
const cors = require('cors')
 



const app = express()



dbConnect()
app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))
app.use(morgan('dev'))
app.use(express.json())
app.use(CookieParser())
app.use(authroutes)
app.use(proprouters)

app.listen(process.env.PORT, () => {
    console.log('server listening on port..', process.env.PORT);
})


    

