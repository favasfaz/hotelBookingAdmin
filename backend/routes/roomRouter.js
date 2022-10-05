import express from "express";
import { createRoom,getAllRooms,updateRoom,deleteRoom,getSingleRoom } from "../modal/RoomCredentials/RoomController.js";
const router = express.Router();

router.route("/room/:id").put(updateRoom).delete(deleteRoom).get(getSingleRoom)
router.route("/rooms").get(getAllRooms).post(createRoom)


export default router;
