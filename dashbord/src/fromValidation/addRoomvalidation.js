import * as Yup from "yup";

export const roomValidation = Yup.object().shape({
  title: Yup.string().required("title is required").max(255),
  hotelId: Yup.string().required("hotelId is required").max(255),
  hotelId: Yup.string().required("hotelId is required").max(24).min(24),
  price: Yup.number()
    .typeError("you must specify a number")
    .required("price is required"),
  maxPeople: Yup.number()
    .typeError("you must specify a number")
    .required("maxPeople is required")
    .max(10)
    .min(0),
  description: Yup.string()
    .required("descriprion is required")
    .min(10)
    .max(255),
  roomNumber: Yup.number()
    .typeError("you must specify a number")
    .required("roomNumber is required"),
  // category: Yup.string().required("category is required").max(255),
});

export const hotelValidation = Yup.object().shape({
  name: Yup.string().required("Name is required").max(255),
  city: Yup.string().required("city is required").max(255),
  address: Yup.string().required("address is required").max(255),
  distance: Yup.string().required("distance is required"),
  phone: Yup.string()
    .required("field is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 5 digits")
    .max(10, "Must be exactly 5 digits"),
    discription: Yup.string()
    .required("descriprion is required")
    .min(10)
    .max(255),
  category: Yup.string().required("category is required").max(255),
});
