const { model } = require('mongoose')
const mongoose = require('mongoose')




const propSchema = new mongoose.Schema({
    propiedad: {
        type: 'string',
        trim: true

    },
    telefono: {
        type: 'number',
        required: true
    },        
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    ubicacion: {
        type: 'string',
        required: true
    },
    precio: {
        type: 'number',
        required: true
    },
    habitaciones: {
        type: 'number',
        required: true
    }




})


module.exports = model('Property', propSchema)