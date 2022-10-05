import React,{useEffect, useState} from 'react'
import { Button, Paper,TextField,Typography,Grid, Avatar, FormControl,  FormGroup, FormControlLabel, Checkbox, } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { useSelector, useDispatch } from "react-redux";
import {LoginAdmin} from '../redux/AuthRedux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom'


function Login() {
  const admin = useSelector((state) => state.admin);
  const {loginErr}=admin
  const isAdmin = localStorage.getItem('admin')
  const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async()=>{
      const data = {email,password}
        dispatch(LoginAdmin(data))
    
    }

    useEffect(()=>{
      if(loginErr){
        toast.error(admin.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } 
      if(isAdmin){
        navigate('/home')
      }
    },[loginErr,admin])

    // useEffect(()=>{
    // const id =  localStorage.getItem('id')
    // if(id){
    //   navigate('/home')
    // }
    // },[])
  return (
    <Grid container mt={5} >
      <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
    <Paper elevation={10} style={{padding:40,height:'60vh',width:380 , margin:'20px auto'}}>
    <Grid align='center'alignItems='center'  justifyContent='center'>
    <Avatar style={{backgroundColor:'darkblue'}}><LockIcon/></Avatar>
    <Typography mt={2} variant='h5'> ADMIN SIGN IN</Typography>
    </Grid>

   <Grid mt={5}>
    <TextField required style={{marginTop:'10px'}} value={email} onChange={e=>setEmail(e.target.value)}   label='Email' type='email'  fullWidth/>
    <TextField required style={{marginTop:'20px'}} value={password} label='Password' onChange={e=>setPassword(e.target.value)} type='password'  fullWidth/>
   
        </Grid>
   <Grid mt={3}>
   <FormControl component="fieldset">
    <FormGroup aria-label="position" row>
      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="Remember Me"
        labelPlacement="end"
      />
    </FormGroup>
  </FormControl>
   </Grid>
   <Button type='submit' onClick={handleSubmit} variant="contained" style={{color:'white',backgroundColor:'darkblue',marginTop:'5px'}} fullWidth>Submit</Button>
   
    </Paper>
 </Grid>
  )
}

export default Login