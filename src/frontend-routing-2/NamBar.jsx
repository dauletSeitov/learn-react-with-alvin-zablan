import clsx from "clsx"
import { Link, useLocation } from "react-router-dom"

export const NavBar = ({ }) => {

    const pathName = useLocation().pathname

    console.log("location:",)

    return (
        <nav className="bg-amber-50 flex justify-center py-10">
            <div className="max-w-5xl w-full flex justify-between items-center">
                <div className="text-green-800 text-2xl flex items-center flex-col px-8">
                    <img className="w-32 mb-2"
                        src="https://sarahtaylorart.com/cdn/shop/products/f8f6a662-0c00-49af-8afd-badc37821a77.jpg?v=1615456004&width=823"></img>
                    Carl's Cat sitters
                </div>

                <div className="text-amber-900/40">
                    <Link className={clsx("mx-3", pathName === "/" && "text-amber-900")} to="/">
                        <i className="mr-2 text-xl fas fa-home"></i>
                        Home</Link>
                    <Link className={clsx("mx-3", pathName === "/about" && "text-amber-900")} to="/about">
                        <i className="mr-2 text-xl fas fa-comment"></i>
                        About</Link>
                    <Link className={clsx("mx-3", pathName === "/sign-in" && "text-amber-900")} to="/sign-in">
                        <i className="mr-2 text-xl fas fa-sign-in"></i>
                        Sign In</Link>
                </div>
            </div>


        </nav>)

}