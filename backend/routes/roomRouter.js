import express from "express";
import { createRoom,getAllRooms,updateRoom,deleteRoom,getSingleRoom } from "../modal/RoomCredentials/RoomController.js";
const router = express.Router();

router.route("/room/:id").post(createRoom).put(updateRoom).delete(deleteRoom).get(getSingleRoom)
router.route("/room").get(getAllRooms)


export default router;
