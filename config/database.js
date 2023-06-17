const mongoose = require("mongoose")

const uri = "mongodb+srv://itssharmatarun:Blog@cluster0.apgesz5.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const client = await mongoose.connect(uri)
        console.log("Connected to database successfully")
        return client
    }
    catch (err) {
        console.log(`Error in connecting with the database ${err}`)
    }
}

module.exports = connectDB