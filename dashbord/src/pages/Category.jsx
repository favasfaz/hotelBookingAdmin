import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Header } from '../components';
import axios from 'axios';
import TableConstants from '../constants/TableConstants';
import AddIcon from '@mui/icons-material/Add';
import ModalConstant from '../constants/ModalConstant';



const Customers = () => {
  const [categories,setCategories] = useState([])
  const [open,setOpen] = useState(false)
const [category,setCategory] = useState(true)
useEffect(async()=>{
 const allCategory =await axios.get('/api/category')
 setCategories(allCategory.data)
},[categories])
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
      <TableConstants array={categories} arraykeys={arraykeys} category={category} />
    </TableContainer>
    <ModalConstant open={open} setOpen={setOpen} formKeys={categoryKeys} category={category} allCategory={categories}/>
    </div>
  );
};

export default Customers;
