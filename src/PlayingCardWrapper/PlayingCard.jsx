import { useState } from "react"

import Back from "./Back"
import Front from "./Front"

const PlayingCard = ({ value, icon, color }) => {

    const [isFlipped, setIsFlipped] = useState(true)
    return (
        <div onClick={() => setIsFlipped((prev) => !prev)}>
            {isFlipped ? <Front icon={icon} value={value} color={color} /> : <Back />}
        </div>
    )

}

export default PlayingCard