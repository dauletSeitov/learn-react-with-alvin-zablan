import { useState } from "react"
import CookieReciepe from "./CookieReciepe"
import ModalFoorm from "./ModalForm"

const Modal = () => {

    const [get, set] = useState(false)
    return (<>
        <div className="bg-purple-700 flex py-4 justify-center">
            <div className="border border-red-400 flex justify-between w-full max-w-4xl px-4 text-2xl text-purple-200">
                <div className="text-2xl">Bagdaulet's Recipes</div>
                <button onClick={()=>set(true)}>
                    <i class="fa-solid fa-right-from-bracket mr-2"></i>
                    Sign-In</button>
            </div>
        </div>
        <CookieReciepe />
        {get && <ModalFoorm onClose = {()=>set(false)}/>}

    </>
    )

}

export default Modal