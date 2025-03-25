import { NavBar } from "../NamBar"
import { Link, useLocation } from "react-router-dom"

export const HomePage = () => {


    return <>
        <NavBar />
        <div className="flex justify-center items-center pt-50">
            <div>HOME PAGE</div>

            <Link to="sign-in"
                className="bg-green-400 p-3 rounded-md"
            >sign in</Link>
        </div>
    </>
}