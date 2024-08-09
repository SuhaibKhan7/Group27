const mongoose = require('mongoose')
require('dotenv').config()

const main = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONDODBURL)
        console.log('Db Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = main