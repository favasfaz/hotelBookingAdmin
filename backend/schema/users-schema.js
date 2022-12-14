import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  verified: {
    type:Boolean,
    default:false,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
});

const user =  mongoose.model("user", userSchema);
export default user;
