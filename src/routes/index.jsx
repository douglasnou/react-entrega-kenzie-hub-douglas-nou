import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { TechCreateForm } from "../components/TechCreateForm"

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<TechCreateForm />} />
        </Routes>
    )
}