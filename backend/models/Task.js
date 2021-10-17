// Database schema

// Mongoose helps building the schema and also add a validation
import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const model = mongoose.model('Task', TaskSchema)

export {model}