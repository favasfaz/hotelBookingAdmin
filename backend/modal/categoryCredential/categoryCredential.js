import categorySchema from "../../schema/category-schema.js";
import hotelSchema from "../../schema/hotel-schema.js";
import { createError } from "../../util/error.js";

export const addCategory = async(req,res,next) =>{
    try {
        const ifExist = await categorySchema.findOne({category:req.body.category})
        if(ifExist) return next(createError(401,'Already Exist'))
        await categorySchema.create(req.body)
        res.status(201).json('success')
    } catch (error) {
        console.log(error,'error')
    }
}

export const deleteCategory = async(req,res,next) =>{
    try {
        await categorySchema.findByIdAndDelete(req.params.id)
        res.status(201).json(' category is deleted')
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = async( req,res,next) =>{
    try {
        await categorySchema.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(201).json('category is updated')
    } catch (error) {
        console.log(error);
    }
}

export const singleStaticsOfCategory = async(req,res,next) =>{
try {
    const categoryItems = await hotelSchema
    .find({category:req.params.id})
    .populate('category')
    res.status(201).json(categoryItems)
} catch (error) {
 console.log(error);   
}
}

