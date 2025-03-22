const CatItem = ({ cat }) => {
    return (
        <div className="relative flex flex-col items-center rounded-lg  bg-white h-56 max-w-lg w-full my-8 overflow-clip">
            <div className="ml-90 h-28 w-full flex justify-begin items-end mb-2">

                <div className=" bg-rose-300 p-2 text-violet-700 text-xl font medium">
                    {cat.name}
                </div>

            </div>
            <div className="h-28 bg-violet-600 w-full flex justify-begin items-begin">
                <div className="mt-2  ml-45  w-full text-xl text-white">
                    {cat.description}
                </div>

            </div>
            <div className="absolute w-30 border-7 border-white h-30 rounded-full overflow-clip top-12 left-10">
                <img src={cat.imageUrl}
                    className="w-30 h-30 object-cover"></img>
            </div>
            <i className="absolute top-10 right-10 fa fa-paw rotate-45 text-9xl text-violet-300/10" aria-hidden="true"></i>
        </div>
    )
}

export default CatItem