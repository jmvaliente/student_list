const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taSchema = new Schema ({
    fullname: {
        type: String,
        require: true
    }
})

const Ta = mongoose.model('Ta', taSchema);

module.exports = Ta