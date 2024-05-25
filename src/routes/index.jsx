import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { UserCreateForm } from "../components/UserCreateForm";
import { ProtectedRoutes } from "../ProtectedRoutes";
import { DashboardPage } from "../Pages/HomePage/DashboardPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<UserCreateForm />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<DashboardPage/>} />
            </Route>
        </Routes>
    )
}