import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../page/home.page.jsx";

export function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}