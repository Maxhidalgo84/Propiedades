import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerRequest } from '../api/auth'
import { onLogin } from '../store/authSlice'

export const useAuthStore = () => {

    //const [isAuthenticated,setIsAuthenticated] = useState(false)

    const dispatch  = useDispatch()
    const {user,isAuthenticated,errorMessage} = useSelector(state => state.auth)


    const startRegister = async(user) => {

        try {
            const res = await registerRequest(user)
            console.log(res.data);
            dispatch(onLogin(res.data))
        } catch (error) {
            console.log(error)
            
        }
    }

    return {
        //propiedades
        isAuthenticated,
        errorMessage,
        user,

        //metodos
        startRegister,
        
    }
}


