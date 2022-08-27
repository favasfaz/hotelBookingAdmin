import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    image:[String]
});

export default mongoose.model("category", categorySchema);
