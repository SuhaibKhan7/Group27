const mongoose = require('mongoose')

const main = async (req, res) => {
    try {

        const connection = await mongoose.connect(process.env.DB_URI)
        console.log("Database Connected..")
    }
    catch (error) {
        console.log('Database not connected, Error 🤨 ' + error)
    }

}
module.exports = main