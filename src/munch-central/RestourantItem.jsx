const RestourantItem = ({ restourant }) => {

    return (
        <div className="relative flex flex-col bg-white shadow-md m-4">
            {restourant.promotion && <div className="bg-rose-400 text-white py-1 px-4 absolute top-4 text-sm rounded-r-full">promotion</div>}
            <img src={restourant.image} className="w-64 h-40 object-cover" />
            <div className="flex justify-between border border-black m-1">

                <div className="text-xl font-medium">{restourant.name}</div>
                <div className="text-rose-500">
                    <i className="fa-solid fa-star mr-1"></i>
                    {restourant.rating}
                </div>

            </div>

            <div className="m-1 text-stone-600">
                <i className="fa-solid fa-location-dot mr-1"></i>
                {restourant.location}
            </div>

            <div className="m-1 text-stone-600">{'$'.repeat(restourant.cost)}</div>

        </div>
    )

}




export default RestourantItem