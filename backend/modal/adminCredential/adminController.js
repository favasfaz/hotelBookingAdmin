import { createToken } from "../../middleware/tokenMiddleware.js";
import adminSchema from "../../schema/admin-schema.js";
import { createError } from "../../util/error.js";
import userSchema from '../../schema/users-schema.js'
import categorySchema from "../../schema/category-schema.js";

//login admin
export const LoginAdmin =  async(req, res,next) => {
  
  try {
    const { email, password } = req.body;
    const admin = await adminSchema.findOne({email,password})
    if (!admin) {
      next(createError(400,'check your password or email'))
    } else {
      const token = createToken(admin.email,admin._id)
      return res.cookie("access_token",token,{
        httpOnly:true 
      }).status(201).json(admin);
    }
  } catch (error) {
    next(error)
  }
};

//edit user
export const editUser = async(req, res,next) => {
  try {
    let _id = req.params.id
  const user = await userSchema.findByIdAndUpdate(_id,[{ $set: { verified: { $not: "$verified" } } }])
   res.status(201).json('success')
  } catch (error) {
    next(error)
  }
};

export const getAllUser =async(req,res,next) =>{
try {
  const users = await userSchema.find({})
  res.status(201).json(users)
} catch (error) {
  
}
}

export const addCategory = async(req,res,next)=>{
  try {
    await categorySchema.create(req.body)
    res.status(201).json('success')
  } catch (error) {
    next(error)
  }
}

export const deleteCategory =async(req,res,next) =>{
  try {
    await categorySchema.findByIdAndDelete(req.params.id)
  } catch (error) {
    next(error)
  }
}

export const updateCategory = async(req,res,next) =>{
  try {
    await findByIdAndUpdate(req.params.id,{$set:req.body})
  } catch (error) {
    
  }
}