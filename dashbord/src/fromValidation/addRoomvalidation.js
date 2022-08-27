import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const roomValidation = Yup.object().shape({
  title: Yup.string().required("title is required").max(255),
  hotelId: Yup.string()
      .required("hotelId is required")
      .max(255),
      hotelId:Yup.string()
      .required("hotelId is required")
      .max(24)
      .min(24),
      price: Yup.number()
      .typeError('you must specify a number')
      .required("price is required"),
      maxPeople: Yup.number()
      .typeError('you must specify a number')
      .required("maxPeople is required")
      .max(10)
      .min(0),
      description: Yup.string()
      .required("descriprion is required")
      .min(10)
      .max(255),
      roomNumber: Yup.string()
      .required("roomNumber is required")
      .min(0)
      .max(10),
      category: Yup.string().required("category is required").max(255),   
  })


export const hotelValidation = Yup.object().shape({
  name: Yup.string().required("Name is required").max(255),
  city: Yup.string()
      .required("city is required")
      .max(255),
      address:Yup.string()
      .required("address is required")
      .max(255)
      ,
      distance: Yup.string()
      .required("price is required"),
      phone: Yup.number()
      .typeError('you must specify a number')
      .required("phone is required")
      .max(10)
      .min(10),
      description: Yup.string()
      .required("descriprion is required")
      .min(10)
      .max(255),
      category: Yup.string().required("category is required").max(255),   
  })