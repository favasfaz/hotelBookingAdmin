import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {adminLogin} from '../APIs/index.js'

const initialState ={
    loading : false,
    admin:[],
    error:'',
    loginErr :false
}

export const LoginAdmin = createAsyncThunk('Author/LoginAdmin',async(data,{ rejectWithValue })=>{
    try {
     const user =  await adminLogin(data)
     localStorage.setItem('admin',user.data.email)
     return user.data
    } catch (error) {  
    return  rejectWithValue(error.response.data.message)
    }
 })

export const AuthSlice = createSlice({
    name:'Author',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(LoginAdmin.pending,(state)=>{
            state.loading =true
        })
        builder.addCase(LoginAdmin.fulfilled,(state,action)=>{
            state.loading = false
            state.admin = action.payload
            state.error = ''
        })
        builder.addCase(LoginAdmin.rejected,(state,action)=>{
            state.loading=false
            state.admin = []
            state.error = action.payload
            state.loginErr = true
        })
    }
})

export default AuthSlice.reducer