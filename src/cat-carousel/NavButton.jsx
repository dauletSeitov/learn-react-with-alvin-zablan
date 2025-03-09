const NavButton = ({ icon, onClick, show }) => {

    if (!show) {
        return
    }
    return (
        <button className="bg-green-400 text-green-200"
            onClick={onClick}>
            <i className={`fa-solid my-2 mx-3 text-3xl ${icon}`}></i>
        </button>
    )

}


export default NavButton;