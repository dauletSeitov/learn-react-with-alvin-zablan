const CatCard = ({ cat: { name, breed, age, location, imageUrl } }) => {

    console.log("name:", name)
    return (<div className="border border-red-400 m-6 rounded-lg">

        <img src={imageUrl} className="w-80 h-64 object-cover rounded-t-lg"></img>
        <div className="p-4">
            <div className="flex text-neutral-500">
                <div className="mr-2 font-bold w-24">name</div>
                <div>{name}</div>
            </div>
            <div className="flex text-neutral-500">
                <div className="mr-2 font-bold w-24">breed</div>
                <div>{breed}</div>
            </div>
            <div className="flex text-neutral-500">
                <div className="mr-2 font-bold w-24">age</div>
                <div>{age}</div>
            </div>
            <div className="flex text-neutral-500">
                <div className="mr-2 font-bold w-24">location</div>
                <div>{location}</div>
            </div>
        </div>


    </div>

    )


}

export default CatCard