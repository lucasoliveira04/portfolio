import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"

export const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomePage} />
            </Routes>
        </BrowserRouter>
    )
}