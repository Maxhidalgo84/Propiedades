const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN)
        console.log("db connection established");
    } catch (error) {
        console.log(error)
    }
}


module.exports = { dbConnect}