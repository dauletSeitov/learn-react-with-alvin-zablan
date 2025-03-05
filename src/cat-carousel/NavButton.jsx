const NavButton = ({ icon }) => {

    return (
        <button className="bg-green-400 text-green-200">
            <i class={`fa-solid my-2 mx-3 text-3xl ${icon}`}></i>
        </button>
    )

}


export default NavButton;