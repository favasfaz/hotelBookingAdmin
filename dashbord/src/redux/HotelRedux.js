import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {allHotels} from '../APIs/index'
const initialState = {
    loading : false,
    hotels : [],
    error : ''
}

export const FetchHotels = createAsyncThunk('hotels/FetchHotels',async({ rejectWithValue })=>{
    try {
     const res =  await allHotels()
     return res.data
    } catch (error) {  
    throw  rejectWithValue(error.response.data.message)
    }
 })

export const hotelSlice = createSlice({
    name:'hotels',
    initialState,
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
    }
})

export default hotelSlice.reducer