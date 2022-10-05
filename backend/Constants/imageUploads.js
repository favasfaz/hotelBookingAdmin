//uploading images to cloudinary
export const uploadImage =async(files,values) =>{
    const img=[]
    files.forEach( (images) => {
      const file = images;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "srpv6qud");
       axios
        .post(
          "https://api.cloudinary.com/v1_1/dyj8kjlnl/image/upload",
          formData
        )
        .then((res) =>{img.push(res.data.url);console.log(res.data.url);})
        .catch((err) => console.log(err));
    });
}