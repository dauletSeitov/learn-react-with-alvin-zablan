import PlayingCard from "./PlayingCard"

const PlayingCardWrapper = () => {

    return <div className="flex justify-center">
        <PlayingCard value="A" icon="fa-heart" color="text-red-500" />
        <PlayingCard value="10" icon="fa-cat" color="text-black" />
        <PlayingCard value="2" icon="fa-diamond" color="text-red-500" />
    </div>

}

export default PlayingCardWrapper