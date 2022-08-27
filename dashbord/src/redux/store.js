import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthRedux'
import HotelReducer from './HotelRedux'
const store = configureStore({
    reducer:{
       admin :AuthReducer,
       hotel :HotelReducer
    }
})

export default store