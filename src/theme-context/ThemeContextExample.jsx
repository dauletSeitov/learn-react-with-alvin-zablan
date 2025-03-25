import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import BreedsPage from "./BreedsPage"
import { ThemeContext } from "./ThemeContext"

export const ThemeContextExample = () => {

    const [themeColor, setThemeColor] = useState("cyan")
    return (
        <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage themeColor={themeColor} setThemeColor={setThemeColor}></HomePage>}
                    />
                    <Route
                        path="/breeds"
                        element={<BreedsPage themeColor={themeColor} setThemeColor={setThemeColor}></BreedsPage>}
                    />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}