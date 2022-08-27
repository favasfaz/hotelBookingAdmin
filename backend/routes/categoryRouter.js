import express from 'express'
const router = express.Router()
import {addCategory,deleteCategory,updateCategory,singleStaticsOfCategory} from '../modal/categoryCredential/categoryCredential.js'

router.route('/').post(addCategory)
router.route('/:id').delete(deleteCategory).put(updateCategory).get(singleStaticsOfCategory)

export default router;
