import { configureStore } from '@reduxjs/toolkit'
import {authSlice} from './store/authSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

})