import jwt from 'jsonwebtoken'
import {createError} from '../util/error.js'

export const verifyToken = (req,res,next)=>{
const token = req.cookies.access_token
if(!token){
    return next(createError(401,'You are not authenticated'))
}
jwt.verify(token,process.env.JWT_SECRETE ,(err,user)=>{
    if(err)     return next(createError(403,'Token is not valid'))
    if(!user.isAdmin) return next(createError(403,'you dont have permission'))
    next()
})
}