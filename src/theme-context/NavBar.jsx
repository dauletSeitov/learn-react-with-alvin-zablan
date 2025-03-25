import clsx from "clsx"
import { Link, useLocation } from "react-router-dom"
import Select from 'react-select';
import { useState } from "react";

const options = [
    { value: 'cyan', label: <div className="bg-cyan-500 w-4 h-4 rounded-full" /> },
    { value: 'rose', label: <div className="bg-rose-500 w-4 h-4 rounded-full" /> },
    { value: 'yellow', label: <div className="bg-yellow-500 w-4 h-4 rounded-full" /> },
];

export const NavBar = ({ themeColor, setThemeColor }) => {

    const pathName = useLocation().pathname

    console.log("location:",)

    return (
        <nav className="bg-amber-50 flex justify-center py-10">
            <div className="max-w-5xl w-full flex justify-between items-center">
                <div className="text-green-800 text-2xl flex items-center flex-col px-8">
                    <img className="w-32 mb-2"
                        src="https://svgstud.io/svgs/455ef169a34cad461ead53a2e2d6a9450bbbe790fbc99e62005fae64bdbca044.svg"></img>
                    Dogo dog
                </div>

                <div className="text-amber-900/40 border border-black flex">
                    <Link className={clsx("mx-3", pathName === "/" && "text-amber-900")} to="/">
                        <i className="mr-2 text-xl fas fa-home"></i>
                        Home</Link>
                    <Link className={clsx("mx-3", pathName === "/breeds" && "text-amber-900")} to="/breeds">
                        <i className="mr-2 text-xl fas fa-comment"></i>
                        Breeds</Link>
                    <Link className={clsx("mx-3", pathName === "/sign-in" && "text-amber-900")} to="/sign-in">
                        <i className="mr-2 text-xl fas fa-sign-in"></i>
                        Sign In</Link>
                    <Select
                        options={options}
                        value={options.find(opt => opt.value === themeColor)}
                        onChange={opt => setThemeColor(opt.value)}
                    />
                </div>
            </div>


        </nav>)

}