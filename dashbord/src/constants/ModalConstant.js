import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import { Box } from "@mui/system";
import {
  roomValidation,
  hotelValidation,
} from "../fromValidation/addRoomvalidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "../APIs/index";

function ModalConstant({
  setOpen,
  open,
  hotel,
  room,
  formKeys,
  category,
  allCategory,
}) {
  const [image, setImage] = useState([]);

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    const files = [...image];
    try {
      if (room) {
        const value = await uploadImage(files, values);
        await axios.post(`/api/rooms/room/${values.hotelId}`, value);
        toast("successfully created");
      } else if (hotel) {
        const value = await uploadImage(files, values);
        await axios.post("/api/hotels/hotel", value);
        toast("successfully created");
      } else if (category) {
        const value = await uploadImage(files, values);
        await axios.post("/api/category", value);
        toast("successfully created");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      {open && (
        <div
          class="modal fade fixed top-0 left-0   md:w-1/4 w-full  items-center max-h-screen outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalLong"
          aria-labelledby="exampleModalLongLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLongLabel"
                >
                  {hotel ? "Add Room" : room ? "Add Room" : "Add Category"}
                </h5>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>
              <div class="modal-body flex flex-col sm:flex-row justify-center relative p-4 min-h-screen">
                <Formik
                  initialValues={{
                    title: "",
                    hotelId: "",
                    price: "",
                    maxPeople: "",
                    discription: "",
                    roomNumber: "",
                    category: "",
                    name: "",
                    city: "",
                    address: "",
                    destance: "",
                    phone: "",
                    imageUrls: [],
                  }}
                  validationSchema={hotel ? hotelValidation : roomValidation}
                >
                  {({
                    handleChange,
                    values,
                    errors,
                    touched,
                    handleBlur,
                    onSubmit,
                  }) => (
                    <Box component="form" sx={{ mt: 3 }}>
                      {room && (
                        <div className="flex flex-col items-center mt-4">
                          {formKeys.map(
                            (v) => (
                              console.log(values),
                              console.log(errors),
                              (
                                <TextField
                                  key={v}
                                  id="standard-basic"
                                  label={v}
                                  variant="outlined"
                                  style={{ marginBottom: "8px" }}
                                  error={Boolean(touched.v && errors.v)}
                                  helperText={touched.v && errors.v}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.v}
                                  name={v}
                                />
                              )
                            )
                          )}
                          <input
                            type="file"
                            multiple="multiple"
                            onChange={(e) => {
                              setImage(e.target.files);
                            }}
                          />
                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                              onClick={(e) => handleSubmit(e, values)}
                              disabled={Boolean(
                                errors.roomNumber ||
                                  values.roomNumber === "" ||
                                  errors.description ||
                                  values.description === "" ||
                                  errors.title ||
                                  values.title === "" ||
                                  errors.hotelId ||
                                  values.hotelId === "" ||
                                  errors.price ||
                                  values.price === ""
                              )}
                              class={`inline-block px-6 py-2.5 bg-blue-600   text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1`}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      )}
                      {hotel && (
                        <div className="flex flex-col items-center mt-4">
                          {formKeys.map(
                            (v) => (
                              console.log(errors),
                              (
                                <TextField
                                  key={v}
                                  id="standard-basic"
                                  label={v}
                                  variant="outlined"
                                  style={{ marginBottom: "8px" }}
                                  error={Boolean(touched.v && errors.v)}
                                  helperText={touched.v && errors.v}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.v}
                                  name={v}
                                />
                              )
                            )
                          )}

                          <Select
                            className="w-2/3 mb-3"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.category}
                            label="category"
                            onChange={handleChange}
                            name="category"
                          >
                            {allCategory.map((item) => (
                              <MenuItem key={item._id} value={item._id}>
                                {item.category}
                              </MenuItem>
                            ))}
                          </Select>

                          <input
                            type="file"
                            required
                            multiple="multiple"
                            onChange={(e) => {
                              setImage(e.target.files);
                            }}
                          />

                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                              onClick={(e) => handleSubmit(e, values)}
                              type="submit"
                              disabled={Boolean(
                                errors.category ||
                                  values.category === "" ||
                                  errors.name ||
                                  values.name === "" ||
                                  errors.description ||
                                  values.description === "" ||
                                  errors.city ||
                                  values.city === "" ||
                                  errors.address ||
                                  values.address === "" ||
                                  errors.phone ||
                                  values.phone === ""
                              )}
                              class={`inline-block px-6 py-2.5 bg-blue-600   text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1`}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      )}
                      {category && (
                        <div className="flex flex-col items-center mt-4">
                          {formKeys.map((v) => (
                            <TextField
                              key={v}
                              id="standard-basic"
                              label={v}
                              variant="outlined"
                              style={{ marginBottom: "8px" }}
                              error={Boolean(touched.v && errors.v)}
                              helperText={touched.v && errors.v}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.v}
                              name={v}
                            />
                          ))}
                          <input
                            type="file"
                            multiple="multiple"
                            onChange={(e) => {
                              setImage(e.target.files);
                            }}
                          />
                          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                              type="submit"
                              onClick={(e) => handleSubmit(e, values)}
                              disabled={Boolean(
                                errors.category || values.category === ""
                              )}
                              class={`inline-block px-6 py-2.5 bg-blue-600   text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1`}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      )}
                    </Box>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalConstant;
