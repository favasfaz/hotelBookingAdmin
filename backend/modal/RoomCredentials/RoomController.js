// createRoom

import roomSchema from "../../schema/room-schema.js";
import hotelSchema from "../../schema/hotel-schema.js";
import { createError } from "../../util/error.js";
import mongoose from "mongoose";

export const createRoom = async (req, res, next) => {
  try {
    const hotel = await hotelSchema.findById(req.body.hotelId)
    if(!hotel) return next(createError(401,'Enter correct hotel Id'))
    const existRoom = await roomSchema.findOne({hotelId:req.body.hotelId,roomNumber:req.body.roomNumber})
    if(existRoom) return next(createError(401,'another room has same room number'))
    const newRoom = await roomSchema.create(req.body);
    await hotelSchema.findByIdAndUpdate(req.body.hotelId, {
      $push: { rooms: newRoom._id },
    });
    res.status(200).json("success");
  } catch (error) {
    console.log(error,'error');
    next(createError(401,'Enter valid hotelId'));
  }
};

// //getAllRoom
export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await roomSchema.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.json(error).status(401);
  }
};

// //updateHotel
export const updateRoom = async (req, res, next) => {
  try {
    const id = req.params.id
    console.log(req.body);
 await roomSchema.findByIdAndUpdate(id,{$set:{price:req.body?.price,title:req.body?.title}});
  const rooms = await roomSchema.find({})
    res.status(201).json(rooms);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// //deleteHotel
export const deleteRoom = async (req, res, next) => {
  try {
    const _id = req.params.id;
    await roomSchema.findByIdAndDelete(_id);
    res.status(201).json("successfully deleted");
  } catch (error) {
    next(error);
  }
};

// //getSingleHotel
export const getSingleRoom = async (req, res, next) => {
  console.log('its came')
  try {
    const _id = req.params.id;
    const hotel = await roomSchema.findById(_id);
    res.status(201).json(hotel);
  } catch (error) {
    next(error);
  }
};
