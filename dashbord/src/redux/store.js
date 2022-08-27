import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthRedux'
const store = configureStore({
    reducer:{
       admin :AuthReducer
    }
})

export default store