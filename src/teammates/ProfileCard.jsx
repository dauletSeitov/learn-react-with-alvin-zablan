const ProfileCard = ({ profile }) => {

    return (
        <div className="flex m-2 shadow-md rounded-md overflow-clip">
            <div className="bg-teal-700 p-4">
                <img src={profile.image} className="w-24 rounded-full border-2 border-teal-500" />
            </div>
            <div className="bg-white flex-1 flex flex-col justify-center pl-4">
                <div className="text-xl text-neutral-600">{profile.name}</div>
                <div className="text-lg text-teal-700">{profile.title}</div>
                <div className="text-neutral-600">{profile.email}</div>


            </div>
        </div>
    )
}


export default ProfileCard