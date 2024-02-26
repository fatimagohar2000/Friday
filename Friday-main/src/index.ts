// Environment Variables
import { config } from 'dotenv'
config()

// Express Setup
import express, { json, urlencoded } from 'express'

const PORT = process.env.PORT || 4000
const app = express()

// Middleware
app.use(json())
app.use(urlencoded({ extended: false }))

// Route Imports
import Msg from './Routes/Msg'

// Routes
app.use('/msg', Msg)

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))