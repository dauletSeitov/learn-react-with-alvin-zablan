const PropertyItem = ({ property }) => {


    return (
        <div className="m-4 border border-gray-300 rounded-lg overflow-clip">
            <img src={property.imageUrl} className="w-72 h-64 object-cover "></img>
            <div className="p-4 text-gray-500">
                <div className="text-xl text-black">{property.address}</div>
                <div>{property.city}, {property.state}</div>
                <div className="flex justify-between mt-2">
                    <div>{
                        property.bedrooms}
                        <i className="fa-solid fa-bed text-xl text-blue-400 ml-2"></i>
                    </div>
                    <div>{property.bathrooms}
                        <i className="fa-solid fa-toilet text-xl text-blue-400 ml-2"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default PropertyItem