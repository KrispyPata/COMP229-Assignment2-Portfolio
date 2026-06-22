import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './server/express.js'
import config from './config/config.js'

dotenv.config()

mongoose.Promise = global.Promise

mongoose.connect(config.mongoUri)

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})

mongoose.connection.once('open', () => {
    console.log('Connected to the Database!')
})

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})