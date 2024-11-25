'use strict'

const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type : Number,
        required : true,
        unique : true,
        trim:true
    },

    image:{
        type:String,
        trim:true
    },

    bedType:['single','double'],

    price:{
        type:Number,
        required:true,
    }

},{
    collection:'rooms',
    timestamps:true
})

module.exports = mongoose.model('Room', roomSchema)