import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {allRooms,UpdatingRooms} from '../APIs/index'


const initialState = {
    loading : false,
    rooms : [],
    error : ''
}

export const FetchRooms = createAsyncThunk('rooms/FetchRooms',async()=>{
     const res =  await allRooms()
     return res.data 
 })

 export const UpdateRooms = createAsyncThunk('rooms/UpdateRooms',async(datas)=>{
    try{
     const {data , Id} = datas
     const res = await UpdatingRooms(data,Id)
     return res.data
    } catch(error){
     throw error.response.data.message
     // throw  rejectWithValue(error.response.data.message)
    }
  })

export const roomSlice = createSlice({
    name:'rooms',
    initialState,
    reducers:{
        deletingRoom:(state,action)=>{
            state.rooms = state.rooms.filter(v =>{
                return v._id !== action.payload
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchRooms.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(FetchRooms.fulfilled,(state,action)=>{
            state.loading = false
            state.rooms = action.payload
            state.error = ''
        })
        builder.addCase(FetchRooms.rejected,(state,action)=>{
            state.loading = false
            state.rooms = []
            state.error = action.payload
        })
        builder.addCase(UpdateRooms.fulfilled,(state,action)=>{
            state.loading = false
            state.rooms = action.payload
            state.error = ''
            console.log(action.payload,'payload');
        })
        builder.addCase(UpdateRooms.rejected,(state,action)=>{
            state.loading = false
            state.rooms = []
            state.error = action.payload
        })
    }
})

export default roomSlice.reducer
export const {deletingRoom} = roomSlice.actions