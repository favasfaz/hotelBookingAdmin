

import { Header } from '../components';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import ModalConstant from '../constants/ModalConstant';
import TableConstants from '../constants/TableConstants';


const Hotels = () => {
  const [hotel,setHotel] = useState(true)
  const [open,setOpen] = useState(false)
  const [hotels,setHotels] = useState([])
useEffect(async()=>{
    const allHotels =await axios.get('/api/hotels/hotel')
    setHotels(allHotels.data)
   },[])

   const arraykeys = ["name","phone","city","createdAt"]
   const hotelKeys = ["name","category","city","address","distance","phone","description"]
  return(
 
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Hotels" />
    <TableContainer component={Paper}>
    <button class="bg-blue-800 hover:bg-blue-900 text-white items-center font-thin py-1 px-4 rounded mb-2" onClick={()=>setOpen(true)}>
      <AddIcon className='mr-1'/>
  Add Hotels
</button>
    <TableConstants array={hotels} arraykeys={arraykeys} />
    </TableContainer>
    <ModalConstant open={open} setOpen={setOpen} hotel={hotel} formKeys={hotelKeys}/>
  </div>

  )
  }

export default Hotels;

