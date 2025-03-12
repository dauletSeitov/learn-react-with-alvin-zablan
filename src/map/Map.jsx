import messages from "./messages"
import clsx from "clsx"

const Map = () => {

    console.log("messages", messages)

    return (
        <div className="flex justify-center"> 
            <div className="w-full max-w-xl">
                {messages.map((itm, idx) => {

                    return (
                        <div key={idx} className={clsx("flex border border-zinc-300 rounded-lg m-4 p-4", idx % 2 == 0?"justify-end" : "justify-begin")}>
                            <div className="font-bold mr-2">
                                {itm.user}:
                            </div>
                            <div>
                                {itm.text}
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}


export default Map