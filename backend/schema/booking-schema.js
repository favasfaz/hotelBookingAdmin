import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
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
    payment:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'payment'
    },
    status:{
        type:String,
        default:"PENDING",
        enum:["PENDING","SUCCESS","FAILED"]
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    }
},{timestamps:true});

export default mongoose.model("booking", bookingSchema);
