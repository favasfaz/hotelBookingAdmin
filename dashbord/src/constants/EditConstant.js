import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {UpdateCategorys} from '../redux/categoryRedux'
import {UpdateHotels} from '../redux/HotelRedux'
import {UpdateRooms} from '../redux/RoomRedux'
import {useDispatch} from 'react-redux'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function EditConstant({
  editOpen,
  setEditOpen,
  hotel,
  category,
  room,
  arraykeys,
  Id,
  array,
  allCategory,
}) {
  const dispatch = useDispatch()
  const isEditId = array.filter((v) => v._id === Id);
  const [data, setData] = useState(allCategory || hotel || room);

  const handleSubmit = async () => {
    if (hotel) {
      await dispatch(UpdateHotels({data,Id}))
      setEditOpen(false)
    } else if (room) {
      await dispatch(UpdateRooms({data,Id}))
      setEditOpen(false)
    } else if (category) {
     await dispatch(UpdateCategorys({data,Id}))
     setEditOpen(false)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleClose = ()=>{
    setEditOpen(false)
  }


  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={editOpen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Update
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="grid grid-cols-2 gap-4">
            {isEditId.map((value, i) =>
              arraykeys.map((key, i) => (
                <div key={i}>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {key}
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={value[key]}
                    name={key}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              ))
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
