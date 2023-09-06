const mongoose = require("mongoose")
require('dotenv').config()

const connection  = mongoose.connect(process.env.SECRET_KEY)
// console.log(connection)

module.exports = {connection}