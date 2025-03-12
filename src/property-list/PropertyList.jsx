import PropertyItem from "./PropertyItem"
import properties from "./properties"
const PropertyList = () => {

    const propertyItems = properties.map((propery, index) => <PropertyItem key={index} property={propery} />)

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-5xl flex flex-wrap justify-center">
                {propertyItems}
            </div>
        </div>
    )
}


export default PropertyList