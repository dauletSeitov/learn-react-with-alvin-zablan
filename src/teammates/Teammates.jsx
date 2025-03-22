import { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard"

const Teammates = () => {

    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(true)


    console.log("")
    const fetchProfiles = () => {
        fetch("https://api.react-formula.com/learning-api/demos/teammates-project/profiles")
            .then(data => data.json())
            //.then(data => console.log(data))
            .then(data => {
                setProfiles(data)
                setLoading(false)
            })


    }

    useEffect(() => {
        fetchProfiles()
    }, [])

    const profileCards = profiles.map((p, i) => <ProfileCard key={i} profile={p} />)
    return (
        <div className="flex justify-center bg-neutral-100 min-h-screen items-center">
            {loading ? <i className="fa-solid fa-spinner text-2xl text-teal-600 animate-spin" /> :
                <div className="w-full max-w-md">
                    {profileCards}
                </div>}
        </div>
    )
}


export default Teammates