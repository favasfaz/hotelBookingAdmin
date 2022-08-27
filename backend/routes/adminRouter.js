import express from 'express'
import {LoginAdmin,editUser,getAllUser,addCategory,deleteCategory,updateCategory} from '../modal/adminCredential/adminController.js'
import {verifyToken} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(LoginAdmin)
router.route('/editUser/:id').put(verifyToken,editUser)
router.route('/allUsers').get(verifyToken,getAllUser)
router.route('/addCategory').post(verifyToken,addCategory)
router.route('/category/:id').delete(verifyToken,deleteCategory).put(verifyToken,updateCategory)

export default router