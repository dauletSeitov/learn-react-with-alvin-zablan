import { Link } from "react-router-dom";
import clsx from "clsx";
import { NavBar } from "./NavBar";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const BUTTON_STYLE = {
    cyan: "bg-cyan-200 text-cyan-800 hover:bg-cyan-300",
    rose: "bg-rose-200 text-rose-800 hover:bg-rose-300",
    yellow: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
};

const HomePage = () => {
    const { themeColor, setThemeColor } = useContext(ThemeContext)

    return (
        <>
            <NavBar themeColor={themeColor} setThemeColor={setThemeColor} />
            <div className="flex justify-center font-pt-sans">
                <div className="flex flex-col items-center w-full max-w-4xl mt-24">
                    <img
                        className="w-[409px]"
                        src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg"
                        alt="Dog Breeds"
                    />
                    <div className="my-12">
                        <div className="text-4xl font-medium text-gray-600 font-nunito">
                            Dog Breeds, made simple
                        </div>
                        <div className="text-xl text-gray-500 max-w-[409px] mt-4 mb-8">
                            find a friendly breeder in your area with Bork
                        </div>
                        <Link
                            className={clsx(
                                'text-2xl rounded-full px-20 py-3',
                                BUTTON_STYLE[themeColor]
                            )}
                            to="/breeds"
                        >
                            begin
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;