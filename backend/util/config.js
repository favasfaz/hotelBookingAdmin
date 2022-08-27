import mongoose from "mongoose";

 const connectMongo = async ()=>mongoose.connect(process.env.MONGO_URL)
 .then(()=>console.log('mongo connection successfull'))

 export default connectMongo