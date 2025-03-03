const Header = () => {
    return (
        <div className="bg-orange-200 flex justify-between px-4 py-2 text-orange-500">
            <div className="flex items-center">
                <div className="mx-4">
                    About
                </div>
                <div className="mx-4">
                    Store
                </div>
            </div>
            <div className="flex items-center">
                <div className="mx-4">
                    Settings
                </div>
                <div className="mx-4">
                <i className="fa-solid fa-heart text-3xl" ></i>
                </div>
            </div>

        </div>)
};

export default Header;