import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";




export const ProtectedRoutes = () => {

    const {isAuthenticated} = useAuthStore();

    
        if(!isAuthenticated) return <Navigate to='./register' replace/>

        return (
            <Outlet />

        )

        

    




}