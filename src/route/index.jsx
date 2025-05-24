import {BrowserRouter, Routes, Route} from "react-router";
import {UsersPage} from "../page/user-page.jsx";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={"/"}
                    element={<UsersPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}