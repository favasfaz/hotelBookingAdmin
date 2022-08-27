import hotelSchema from "../../schema/hotel-schema.js";
import roomSchema from "../../schema/room-schema.js";
import { createError } from "../../util/error.js";

//createHotel
export const createHotel = async (req, res,next) => {
  console.log(req.body);
  const hotel = await hotelSchema.findOne({name:req.body.name})
  if(hotel) return next(createError(401,'author already found'))
  try {
    await hotelSchema.create(req.body);
    res.status(201).json("new hotel booked");
  } catch (error) {
    console.log(error);
    res.json(error).status(401);
  }
};

//getAllHotel
export const getAllHotel = async (req, res) => {
  try {
    const hotels = await hotelSchema.find({});
    res.json(hotels);
  } catch (error) {
    res.json(error).status(401);
  }
};

//rooms from hotel
export const getHotelRooms = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const hotel = await hotelSchema.findById(_id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return roomSchema.findById(room);
      })
    );
    res.status(201).json(list);
  } catch (error) {}
};

//updateHotel
export const updateHotel = async (req, res, next) => {
  try {
    const _id = req.params.id;
    await hotelSchema.findByIdAndUpdate(_id, { $set: req.body });
    res.json("successfully updated");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//deleteHotel
export const deleteHotel = async (req, res, next) => {
  try {
    const _id = req.params.id;
    await hotelSchema.findByIdAndDelete(_id);
    res.status(201).json("successfully deleted");
  } catch (error) {
    next(error);
  }
};

//getSingleHotel
export const getSingleHotel = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const hotel = await hotelSchema.findById(_id);
    res.json(hotel);
  } catch (error) {
    next(error);
  }
};
