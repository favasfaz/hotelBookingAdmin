import express from 'express'
import {LoginAdmin,editUser,getAllUser,addCategory,deleteCategory,updateCategory} from '../modal/adminCredential/adminController.js'

const router = express.Router()

router.route('/login').post(LoginAdmin)
router.route('/editUser/:id').put(editUser)
router.route('/allUsers').get(getAllUser)
router.route('/addCategory').post(addCategory)
router.route('/category/:id').delete(deleteCategory).put(updateCategory)

export default router