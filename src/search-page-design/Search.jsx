const Search = () => {
    return (
        <div className="border-2 border-red-400 flex-1 flex flex-col justify-center items-center">
            <div className="text-6xl text-orange-500 mb-4">
                Foogle
            </div>
            <div className="flex bg-orange-200 border border-orange-300 p-2 rounded-full w-80 ">
                <i className="fa-solid fa-magnifying-glass text-xl text-orange-400 ml-1 mt-1"></i>
                <input className="flex-1 bg-orange-200 mx-1" />
            </div>
            <div className="mt-4">
                <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">Foogle search</button>
                <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">Image search</button>
            </div>

        </div>)
};

export default Search;