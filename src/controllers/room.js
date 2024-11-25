'use strict' 

const Room = require('../models/room')

module.exports = {
    list: async (req,res) => {

        const result = await res.getModelList(Room)

        res.status(200).send({
            error:false,
            result,
            detail: await res.getModelListDetails(Room)
        })
    },
    create: async (req,res) => {
        
        const result = await Room.create(req.body)
        res.status(201).send({
            error:false,
            result
        })
    },
    read: async (req,res) => {

        const result = await Room.findOne( { _id : req.params.id } )

        res.status(200).send({
            error:false,
            result
        })
    },
    update: async (req,res) => {

        const result = await Room.updateOne({_id: req.params.id}, req.body)

        res.status(200).send({
            error:false,
            result,
            new: await Room.findOne({_id: req.params.id})
        })
    },
    deleteRoom: async (req,res) => {

        const {deletedCount} = await Room.deleteOne({_id: req.params.id})

        res.status(deletedCount ? 204 : 404).send({
            error:!deletedCount,
            message : deletedCount ? "Deleted succesfully" : "Not Found"
            
        })
    },
}