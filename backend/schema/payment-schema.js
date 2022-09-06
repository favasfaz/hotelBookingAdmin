import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room'
    },
    hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'hotel'
    }, 
    total:{
        type:Number,
        required:true
    }
})
 const  payment = mongoose.model("payment", paymentSchema);
export default payment
