import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const config = await mongoose.connect("mongodb://localhost:27017/otaku", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`Mongo DB connected : ${config.connection.host}`.cyan.underline)
    } catch(error) {
        console.error(`Error : ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB