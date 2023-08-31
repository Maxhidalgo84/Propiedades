import {  Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { Properties } from "../pages/Properties"
import { ProtectedRoutes } from "./ProtectedRoutes"


export const AppRouter =  () => {

    

    return (
    <Routes>

          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route element={<ProtectedRoutes />}>
                <Route path="/properties" element={<Properties />} />
                <Route path="/properties/:id" element={<h1>Property Details</h1>} />
                <Route path="/properties/:id/edit" element={<h1>Edit Property</h1>} />
                <Route path="/properties/agregar" element={<h1>Agregar Property</h1>} />
          </Route>
    </Routes>

    )

}