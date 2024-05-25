import { useContext } from "react";
import { UserContext } from "../../components/Providers/UserContext";
import { TechProvider } from "../../components/Providers/TechContext";
import { DashboardPage } from "./DashboardPage";
import { ReturnLoginPage } from "./ReturnLoginPage";

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
                    <ReturnLoginPage />
                )}
        </main>
    )
}