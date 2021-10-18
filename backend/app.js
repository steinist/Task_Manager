import express from 'express'
const app = express();

import {router as tasks} from './routes/tasks.js'
import {mongoose, connectDB} from './db/connect.js'
import dotenv from 'dotenv'

dotenv.config()



// middleware
app.use(express.json())
// app.use(express.static('./public')) //serve static file (React part !!!)

app.use('/api/v1/tasks', tasks)



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
