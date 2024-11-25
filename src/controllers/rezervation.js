'use strict' 

const Rezervation = require('../models/rezervation')

module.exports = {
    list: async (req,res) => {

        const result = await res.getModelList(Rezervation)

        res.status(200).send({
            error:false,
            result,
            detail: await res.getModelListDetails(Rezervation)
        })
    },
    create: async (req,res) => {
        
        const result = await Rezervation.create(req.body)
        res.status(201).send({
            error:false,
            result
        })
    },
    read: async (req,res) => {

        const result = await Rezervation.findOne( { _id : req.params.id } )

        res.status(200).send({
            error:false,
            result
        })
    },
    update: async (req,res) => {

        const result = await Rezervation.updateOne({_id: req.params.id}, req.body)

        res.status(200).send({
            error:false,
            result,
            new: await Rezervation.findOne({_id: req.params.id})
        })
    },
    deleteRezervation: async (req,res) => {

        const {deletedCount} = await Rezervation.deleteOne({_id: req.params.id})

        res.status(deletedCount ? 204 : 404).send({
            error:!deletedCount,
            message : deletedCount ? "Deleted succesfully" : "Not Found"
            
        })
    },
}