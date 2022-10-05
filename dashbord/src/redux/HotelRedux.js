import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {allHotels, UpdatingHotels} from '../APIs/index'

const initialState = {
    loading : false,
    hotels : [],
    error : ''
}

export const FetchHotels = createAsyncThunk('hotels/FetchHotels',async()=>{
     const res =  await allHotels()
     return res.data
    
 })
 export const UpdateHotels = createAsyncThunk('hotels/UpdateHotels',async(datas)=>{
    try{
     const {data , Id} = datas
     const res = await UpdatingHotels(data,Id)
     console.log(res.data);
     return res.data
    } catch(error){
     throw error.response.data.message
     // throw  rejectWithValue(error.response.data.message)
    }
  })

export const hotelSlice = createSlice({
    name:'hotels',
    initialState,
    reducers:{
        deletingHotel:(state,action)=>{
            state.hotels = state.hotels.filter(v =>{
                return v._id !== action.payload
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchHotels.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(FetchHotels.fulfilled,(state,action)=>{
            state.loading = false
            state.hotels = action.payload
            state.error = ''
        })
        builder.addCase(FetchHotels.rejected,(state,action)=>{
            state.loading = false
            state.hotels = []
            state.error = action.payload
        })
        builder.addCase(UpdateHotels.fulfilled,(state,action)=>{
            state.loading = false
            state.hotels = action.payload
            state.error = ''
        })
        builder.addCase(UpdateHotels.rejected,(state,action)=>{
            state.loading = false
            state.hotels = []
            state.error = action.payload
        })
    }
})

export default hotelSlice.reducer
export const {deletingHotel} = hotelSlice.actions