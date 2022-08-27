import axios from "axios";

//uploading images to cloudinary
export const uploadImage =async(files,values) =>{
    
    files.map(async (images) => {
                          const file = images;
                          const formData = new FormData();
                          formData.append("file", file);
                          formData.append("upload_preset", "srpv6qud");
                          await axios
                            .post(
                              "https://api.cloudinary.com/v1_1/dyj8kjlnl/image/upload",
                              formData
                            )
                            .then((res) => values.imageUrls.push(res.data.url))
                            .catch((err) => console.log(err));
                        });
                        return values
}

//admin Login
export const adminLogin = async(data)=>{
return await axios.post('/api/admin/login',data)
}