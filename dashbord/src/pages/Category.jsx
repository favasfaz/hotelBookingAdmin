import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Header } from '../components';
import TableConstants from '../constants/TableConstants';
import AddIcon from '@mui/icons-material/Add';
import ModalConstant from '../constants/ModalConstant';
import {useDispatch,useSelector} from 'react-redux'
import {FetchCategorys} from '../redux/categoryRedux'

const Customers = () => {
  const allCategory = useSelector(state => state.categorys.category)
  const dispatch = useDispatch()
  const [categories,setCategories] = useState([])
  const [open,setOpen] = useState(false)
const [category,setCategory] = useState(true)
useEffect(async()=>{
 await dispatch(FetchCategorys())
 setCategories(allCategory)
},[])
const arraykeys = ["category","createdAt"]
const categoryKeys = ["category"]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Categories" />
      <TableContainer component={Paper}>
      <button class="bg-blue-800 hover:bg-blue-900 text-white items-center font-thin py-1 px-4 rounded mb-2" onClick={()=>setOpen(true)}>
      <AddIcon className='mr-1'/>
  Add Category
</button>
      <TableConstants array={allCategory} arraykeys={arraykeys} category={category} />
    </TableContainer>
    <ModalConstant open={open} setOpen={setOpen} formKeys={categoryKeys} category={category} allCategory={categories}/>
    </div>
  );
};

export default Customers;
