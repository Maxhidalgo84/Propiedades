import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: [],
        errorMessage: undefined,
    },
    reducers: {
        onLogin: (state,payload) => {
            state.user = payload,
            state.isAuthenticated = true
            state.errorMessage = undefined
        },
        onLogout: (state,payload) => {
            state.user = {},
            state.isAuthenticated = false
            state.errorMessage = undefined
        },
        onRegister: (state,payload) => {
            state.user = payload,
            state.isAuthenticated = true
            state.errorMessage = undefined
        },
    }
})

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onRegister} = authSlice.actions
