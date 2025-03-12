import SongItem from "./SongItem"
import songs from "./songs"
const SongList = () => {

    const songItems = songs.map((song, index) => <SongItem key={index} song={song} />)

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-2xl">
                {songItems}
            </div>
        </div>
    )

}


export default SongList