'use strict'

const router = require('express').Router()


//users
router.use('/users', require('./user'))

//rooms
router.use('/rooms', require('./room'))

//rezervations
router.use('/rezervations', require('./rezervation'))



module.exports = router