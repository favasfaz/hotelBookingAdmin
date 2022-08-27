import { Header } from '../components';
import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import ModalConstant from '../constants/ModalConstant';
import TableConstants from '../constants/TableConstants';




const Rooms = () => {

  const [open,setOpen] = useState(false)
  const [rooms,setRooms] = useState([])
  const [room,setRoom] = useState(true)
  const arraykeys = ["title","hotelId","price","createdAt"]
  const roomKeys = ["title","hotelId","price","maxPeople","description","roomNumber"]

  useEffect(async()=>{
    const allRooms =await axios.get('/api/rooms/room')
    setRooms(allRooms.data)
   },[rooms])
  return(
 
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Rooms" />
    <TableContainer component={Paper}>
    <button class="bg-blue-800 hover:bg-blue-900 text-white items-center font-thin py-1 px-4 rounded mb-2" onClick={()=>setOpen(true)}>
      <AddIcon className='mr-1'/>
  Add Room
</button>
    <TableConstants array={rooms} arraykeys={arraykeys} room={room}/>
    </TableContainer>
    <ModalConstant open={open} setOpen={setOpen} formKeys={roomKeys} room={room}/>
  </div>

  )
  }

export default Rooms;
