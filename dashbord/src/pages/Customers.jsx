import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Header } from '../components';
import axios from 'axios';
import TableConstants from '../constants/TableConstants';




const Customers = () => {
  const [users,setUsers] = useState([])

useEffect(async()=>{
 const allUsers =await axios.get('/api/admin/allUsers')
 setUsers(allUsers.data)
},[users])
const arraykeys = ["email","name","phone","verified"]


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <TableContainer component={Paper}>
      <TableConstants array={users} arraykeys={arraykeys} />
    </TableContainer>
    </div>
  );
};

export default Customers;
