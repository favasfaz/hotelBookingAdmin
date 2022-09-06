import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthRedux'
import HotelReducer from './HotelRedux'
import RoomReducer from './RoomRedux'
import CategoryReducer from './categoryRedux'
const store = configureStore({
    reducer:{
       admin :AuthReducer,
       hotels :HotelReducer,
       rooms : RoomReducer,
       categorys: CategoryReducer
    }
})

export default store