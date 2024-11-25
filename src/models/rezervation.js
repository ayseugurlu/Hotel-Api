'use strict'

const mongoose = require('mongoose')
const calculateNights = require('../helpers/calculateNights')


const rezervationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    roomId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },

    arrivalDate: {
        type: Date,
        required: true,
    },

    deperatureDate:{
        type: Date,
        required: true,
    },

    guessNumber: {
        type: Number,
        required: true,
    },

    night:{
        type: Number,
        default: calculateNights(this.arrivalDate,this.deperatureDate),
        transform: calculateNights(this.arrivalDate,this.deperatureDate)
    },

    price:{
        type: Number,
        required: true,
        default: 100
    },

    totalPrice: {
        type: Number,
        required: true,
        default: function(){
            return this.night * this.price
        },
        transform: function(){
            return this.night * this.price
        },
    }

},{
    collection:'Rezervation',
    timestamps:true
})

module.exports = mongoose.model('Rezervation', rezervationSchema)