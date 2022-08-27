import bookingSchema from "../../schema/booking-schema.js";
import roomSchema from '../../schema/room-schema.js'

export const getAllBookings = async(req,res,next) =>{
    try {
        const allBookings = await bookingSchema.find({})
        res.status(201).json('success')
    } catch (error) {
        console.log(error,'error')
    }
}

export const newBooking = async(req,res,next) =>{
    try {
        await roomSchema.findByIdAndUpdate(req.body.room,{$set:{isBooked:true}})
        await bookingSchema.create(req.body)
        res.status(201).json('success')
    } catch (error) {
        console.log(error,'error');
    }
}

export const bookingDetails = async(req,res,next) =>{

    try {
        const details = await bookingSchema.findById(req.params.id).populate('customer').populate('room').populate('hotel')
        res.status(201).json(details)
    } catch (error) {
        console.log(error,'error');
    }
}

export const updateBooking = async(req,res,next) =>{
    try {
        if(req.query.status === 'SUCCESS'){
            await bookingSchema.findByIdAndUpdate(req.params.id,{$set:{status:"SUCCESS"}})
            return res.status(201).json('success')
        }
        else if(req.query.status === 'FAILED'){
            await bookingSchema.findByIdAndUpdate(req.params.id,{$set:{status:"FAILED"}})
            res.status(201).json('success')
        }
    } catch (error) {
        console.log(error,'error')
    }
}