import clsx from "clsx"
const Front = ({ icon, value, color }) => {

    return (
        <div className={clsx("rounded-lg border-4 border-black w-40 h-56 m-4 text-3xl flex flex-col justify-between items-center p-2", color)}>
            <div className="flex justify-begin w-full">{value}</div>
            <i className={clsx("fa-solid", icon)}></i>
            <div className="flex justify-end w-full">{value}</div>
        </div>
    )
}

export default Front 