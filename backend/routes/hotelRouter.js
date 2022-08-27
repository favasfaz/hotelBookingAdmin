import express from "express";
import { createHotel,getAllHotel,getSingleHotel,updateHotel,deleteHotel,getHotelRooms } from "../modal/HotelController/HotelController.js";
const router = express.Router();

router.route("/hotel").post(createHotel).get(getAllHotel)
router.route('/hotel/:id').put(updateHotel).delete(deleteHotel).get(getSingleHotel)
router.route('/hotel/roomOfHotel/:id').get(getHotelRooms)

export default router;
