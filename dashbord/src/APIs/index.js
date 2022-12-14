import axios from "axios";

//uploading images to cloudinary
export const uploadImage =async(files,values) =>{
  let img = []
  const uploaders = files.map(async (images) => {
      const file = images;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "srpv6qud");
     return axios
        .post(
          "https://api.cloudinary.com/v1_1/dyj8kjlnl/image/upload",
          formData
        )
        .then(res => img.push(res.data.url))
    });
  return await axios.all(uploaders).then(() => {
      values.imageUrls = img
    });
}

//admin Login
export const adminLogin = async(data)=>{
return await axios.post('/api/admin/login',data)
}

//get allHotels
export const allHotels = async()=>{
  return axios.get('/api/hotels/hotel')
}

//deleting hotel
export const deleteHotel = async(id)=>{
return axios.delete(`/api/hotels/hotel/${id}`)
}

//deleting room
export const deleteRoom = async(id)=>{
return axios.delete(`/api/rooms/room/${id}`)
}

//deleting category
export const deleteCategory = async(id) =>{
  return axios.delete(`/api/category/${id}`)
}

//single room details
export const roomDetails = async(id)=>{
  return axios.get(`/api/rooms/room/${id}`)
}

//single hotel detail
export const hotelDetails =async (id) =>{
return axios.get(`/api/hotels/hotel/${id}`)
}

//single category detail
export const categoryDetails = async (id) =>{
  return axios.get(`/api/category/${id}`)
}

//return allRooms
export const allRooms = async ()=>{
  return axios.get('/api/rooms/rooms')
}

//return all Categories
export const allCategory = async() =>{
  return axios.get('/api/category')
}

//updateCategory
export const updatingCategory = async(data,Id)=>{
  return axios.put(`/api/category/${Id}`,data)
}

//updating Rooms
export const UpdatingRooms = async(data,Id)=>{
  return axios.put(`/api/rooms/room/${Id}`,data)
}

//updating Hotels
export const UpdatingHotels = async(data,Id)=>{
  return axios.put(`/api/hotels/hotel/${Id}`,data)
}

//returning home data
export const HomeData = async()=>{
  return axios.get('/api/admin/home')
}