
import { Link } from "react-router-dom"

export const HomePage = () => {



    return (
        <div className="p-8">
            <div className="text-xl">this Is Home Page</div>
            <Link className="my-10 text-blue-400 underline" to="/other">go to other page</Link>
            <div></div>

        </div>
    )


}