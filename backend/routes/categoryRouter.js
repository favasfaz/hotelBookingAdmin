import express from 'express'
const router = express.Router()
import {addCategory,deleteCategory,updateCategory,singleStaticsOfCategory,getAllCategory} from '../modal/categoryCredential/categoryCredential.js'

router.route('/').post(addCategory).get(getAllCategory)
router.route('/:id').delete(deleteCategory).put(updateCategory).get(singleStaticsOfCategory)

export default router;
