import express from 'express'
const app = express();

import {router as tasks} from './routes/tasks.js'
import {mongoose, connectDB} from './db/connect.js'
import dotenv from 'dotenv'

dotenv.config()



// middleware
app.use(express.json())
// app.use(express.static('./public')) //serve static file (React part !!!)

// routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get a single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task


const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
