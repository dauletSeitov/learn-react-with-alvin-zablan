import { useRef, useState } from "react"

export const Example3 = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    return (
        <div className="h-screen bg-emerald-100">
            <h2 className="p-8 text-3xl font-bold text-green-700">Example 3</h2>

            <button className="px-8 py-2 mx-8 text-white bg-emerald-600 rounded-full"
                onClick={() => {
                    if (isPlaying) {
                        videoRef.current.pause()
                        setIsPlaying(false)
                    } else {
                        videoRef.current.play()
                        setIsPlaying(true)
                    }
                    
                }}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <video width={480}
                ref={videoRef}>
                <source src="https://cdn.pixabay.com/video/2024/06/09/215926_large.mp4" type="video/mp4"></source>
            </video>

        </div>
    )
}