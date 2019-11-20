const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema ({
    fullname: {
        type: String,
        require: true
    },
    username: {
        type:String,
        require: true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String
        
    },
    tas: {
        type:String
        
    }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student