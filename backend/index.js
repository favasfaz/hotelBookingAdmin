import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import adminRouter from "./routes/adminRouter.js";
import hotelRouter from "./routes/hotelRouter.js";
import roomRouter from "./routes/roomRouter.js";
import bookingRouter from './routes/bookingRouter.js'
import categoryRouter from './routes/categoryRouter.js'
import cookieParcer from "cookie-parser";
import {verifyToken} from './middleware/authMiddleware.js'

import db from "./util/config.js";
import bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.PORT || 3002;
const app = express();
app.use(helmet());
db();
app.use(cookieParcer());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api/admin", adminRouter);
app.use("/api/hotels",verifyToken, hotelRouter);
app.use("/api/rooms",verifyToken, roomRouter);
app.use('/api/booking',verifyToken,bookingRouter)
app.use('/api/category',verifyToken,categoryRouter)

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(500).json({
    success: false,
    status: errStatus,
    message: errorMessage,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


