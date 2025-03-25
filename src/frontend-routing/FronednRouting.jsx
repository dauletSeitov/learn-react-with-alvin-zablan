import { PageOne } from "./PageOne"
import { PageTwo } from "./PageTwo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const FronednRouting = () => {

    return (
        <BrowserRouter>
            <>
                <div className="bg-black p-8 text-white flex justify-around">
                    <Link to="/">home</Link>
                    <Link to="/one">one</Link>
                    <Link to="/two">two</Link>
                </div>
            </>
            <Routes>
                <Route path="/" element={<div>HOME PATH</div>} />
                <Route path="/one" element={<PageOne />} />
                <Route path="/two" element={<PageTwo />} />
            </Routes>
        </BrowserRouter >
    )


}