import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteHotel, deleteRoom, deleteCategory } from "../APIs/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditConstant from "./EditConstant";
import { useSelector,useDispatch } from "react-redux";
import {deletingCategory} from '../redux/categoryRedux'
import {deletingHotel} from '../redux/HotelRedux'

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TableConstants({ array, arraykeys, room, hotel, category }) {
 const dispatch = useDispatch()
  const [editOpen, setEditOpen] = useState(false);
  const [editId, setEditId] = useState("");

  const handleDelete = async (id) => {
    try {
      if (room) {
        await deleteRoom(id);
        
        toast("successfully deleted");
      } else if (hotel) {
        await deleteHotel(id);
      await dispatch(deletingHotel(id))
        toast("successfully deleted");
      } else if (category) {
        await deleteCategory(id);
        await dispatch(deletingCategory(id))
        toast("successfully deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    setEditOpen(true);
  };

  return (
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TableHead>
        <TableRow>
          {arraykeys.map((v,i) => {
            return <StyledTableCell key={i}>{v.toUpperCase()}</StyledTableCell>;
          })}
          {room | hotel | category ? (
            <StyledTableCell>ACTIONS</StyledTableCell>
          ) : (
            ""
          )}
        </TableRow>
      </TableHead>

      <TableBody>
        {array.map((row, i) => (
          <StyledTableRow key={i}>
            {arraykeys.map((value, i) => {
              return (
                <StyledTableCell key={i} component="th" scope="row">
                  {row[value]}
                </StyledTableCell>
              );
            })}
            {room | hotel | category ? (
              <StyledTableCell key={i} component="th" scope="row">
                <EditIcon
                  onClick={() => handleEdit(row._id)}
                  className="mr-4 cursor-pointer"
                />
                <DeleteIcon
                  className="cursor-pointer"
                  onClick={() => handleDelete(row._id)}
                />
              </StyledTableCell>
            ) : (
              ""
            )}
          </StyledTableRow>
        ))}
      </TableBody>
      <EditConstant
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        room={room}
        hotel={hotel}
        Id={editId}
        category={category}
        arraykeys={arraykeys}
        array={array}
      />
    </Table>
  );
}

export default TableConstants;
