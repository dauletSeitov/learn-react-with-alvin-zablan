const ModalForm = ({onClose}) => {



    return (
        <div className="fixed top-0 left=0 bg-stone-700/75 backdrop-blur-sm h-full w-full flex justify-center items-center">


            <div className="bg-white rounded-lg h-80 w-80 flex flex-col justify-center items-center">
                <div>i am a modal</div>
                <button onClick={onClose}>click to close</button>
            </div>

        </div>
    )
}


export default ModalForm