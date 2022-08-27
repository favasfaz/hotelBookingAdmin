// import React, { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Header } from '../components'
// import axios from 'axios'

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const Employees = () => {
//   const [hotels,setHotels] = useState([])
//   useEffect(async()=>{
//     const allHotels =await axios.get('/api/hotels/hotel')
//     console.log(allHotels,'allHotels');
//     setHotels(allHotels.data)
//    },[])

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Hotels" />
//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Name</StyledTableCell>
//             <StyledTableCell align="right">Phone</StyledTableCell>
//             <StyledTableCell align="right">City</StyledTableCell>
//             <StyledTableCell align="right">Created At</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {hotels.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.phone}</StyledTableCell>
//               <StyledTableCell align="right">{row.city}</StyledTableCell>
//               <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// };
// export default Employees;

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Employees = () => {
  const [hotel,setHotel] = useState(true)
  const [open,setOpen] = useState(false)
  const [hotels,setHotels] = useState([])
useEffect(async()=>{
    const allHotels =await axios.get('/api/hotels/hotel')
    setHotels(allHotels.data)
   },[])
  return(
 
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Hotels" />
    <TableContainer component={Paper}>
    <button class="bg-blue-800 hover:bg-blue-900 text-white items-center font-thin py-1 px-4 rounded mb-2" onClick={()=>setOpen(true)}>
      <AddIcon className='mr-1'/>
  Add Hotels
</button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
         <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Created At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.city}</StyledTableCell>
              <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ModalConstant open={open} setOpen={setOpen} hotel={hotel}/>
  </div>

  )
  }

export default Employees;

