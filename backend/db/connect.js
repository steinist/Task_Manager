import mongoose from 'mongoose'

const connectDB = (url) => {
    return mongoose.connect(url)
}

// mongoose
// .connect(connectionString)
// .then(() => console.log('CONNECTED TO THE DB'))
// .catch((err) => console.log(err))

export {mongoose, connectDB}