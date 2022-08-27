import express from "express";
const router = express.Router();
import {getAllBookings,newBooking,bookingDetails,updateBooking} from '../modal/BookingCredential/bookingCredentail.js'

router.route('/').get(getAllBookings).post(newBooking).put(updateBooking)
router.route("/:id").get(bookingDetails)


export default router;
