const {model} = require('mongoose')
 const mongoose = require('mongoose')




 const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        trim: true

    },
    email: {
        type:'string',
        required: true,
        unique: true
    },
    password: {
        type:'string',
        required: true
    }
    
 }, {
    timestamps: true
 }
 
 )


 module.exports = model('User',userSchema)