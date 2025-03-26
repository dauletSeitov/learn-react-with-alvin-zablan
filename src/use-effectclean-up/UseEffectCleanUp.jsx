import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { OtherPage } from "./OtherPage"

export const UseEffectCleanUp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/other" element={<OtherPage />} />
            </Routes>
        </BrowserRouter >
    )


}