const mongoose = require('mongoose')
const main = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/users')
        console.log('Db Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = main