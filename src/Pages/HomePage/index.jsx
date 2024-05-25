import { useContext } from "react";
import { UserContext } from "../../components/Providers/UserContext";
import { TechProvider } from "../../components/Providers/TechContext";
import { DashboardPage } from "./DashboardPage";
import { LogoutPage } from "./LogoutPage";

export const HomePage = () => {
    const { user } = useContext(UserContext);
    return (
        <main>
            {user ? (
                <TechProvider>
                    <DashboardPage />
                </TechProvider>
            )
                :
                (
                    <LogoutPage />
                )}
        </main>
    )
}