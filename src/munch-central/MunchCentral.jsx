import RestourantItem from "./RestourantItem"
import restourants from "./restourants"
const MunchCentral = () => {

    const restourantItems = restourants.map((r, i) => <RestourantItem key={i} restourant={r} />)
    return (
        <div className="flex justify-center bg-stone-100">
            <div className="w-full max-w-5xl flex flex-wrap justify-center">
                {restourantItems}
            </div>
        </div>
    )
}



export default MunchCentral