'use strict'

const mongoose = require('mongoose')
const passwordEncrypt = require('../helpers/passwordEncrypt')


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
        set: (password) => passwordEncrypt(password)
    },
    isActive:{
        type:Boolean,
        default: true
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
},{
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)