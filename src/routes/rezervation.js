'use strict'

const router = require('express').Router()

const {list,create, read, update,deleteRezervation } = require('../controllers/rezervation')

router.route('/')
    .get(list)
    .post(create)

router.route('/:id')
    .get(read)
    .put(update)
    .patch(update)
    .delete(deleteRezervation)

module.exports = router




