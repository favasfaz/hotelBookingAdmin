import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    imageUrls:[String]
},{timestamps:true});

export default mongoose.model("category", categorySchema);
