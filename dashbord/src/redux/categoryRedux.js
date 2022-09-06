import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {allCategory,updatingCategory} from '../APIs/index'
const initialState = {
    loading : false,
    category : [],
    error : ''
}

export const FetchCategorys = createAsyncThunk('category/FetchCategorys',async()=>{

     const res =  await allCategory()
     return res.data
   
 })

 export const UpdateCategorys = createAsyncThunk('category/UpdateCategorys',async(datas)=>{
   try{
    const {data , Id} = datas
    const res = await updatingCategory(data,Id)
    return res.data
   } catch(error){
    throw error.response.data.message
    // throw  rejectWithValue(error.response.data.message)
   }
 })

 const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        deletingCategory:(state,action)=>{
            state.category = state.category.filter(v =>{
                return v._id !== action.payload
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchCategorys.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(FetchCategorys.fulfilled,(state,action)=>{
            state.loading = false
            state.category = action.payload
            state.error = ''
        })
        builder.addCase(FetchCategorys.rejected,(state,action)=>{
            state.loading = false
            state.category = []
            state.error = action.payload
        })
        builder.addCase(UpdateCategorys.fulfilled,(state,action)=>{
            state.loading = false
            state.category = action.payload
            state.error = ''
        })
        builder.addCase(UpdateCategorys.rejected,(state,action)=>{
            state.loading = false
            state.category = []
            state.error = action.payload
        })
       
    }
})

export default categorySlice.reducer
export const {deletingCategory} = categorySlice.actions