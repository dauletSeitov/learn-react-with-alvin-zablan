import SessionContext from "context/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartModal } from "./modals/CartModal";
import { ModalWrapper } from "./modals/CartModal/ModalWrapper";
import { MobileMenuModal } from "./modals/MobileMenuModal";

export const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        onMouseLeave={() => setUserMenuOpen(false)}
        className="bg-emerald-800 flex justify-center"
      >
        <div className="w-full max-w-5xl border border-red-400 flex items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="text-2xl text-white flex flex-col items-center">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
              />
              Rica's Plants
            </div>
          </Link>
          <div className="flex-1 justify-end hidden sm:flex">
            <div className="relative min-w-32">
              <button
                onClick={() => setUserMenuOpen(true)}
                className="text-emerald-200 flex items-center"
              >
                <i className="fa-solid fa-user mr-2 text-xl" />
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] left-0 bg-white mt-20 rounded-md shadow-md">
                  <button
                    onClick={() => signOut()}
                    className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                  >
                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket" />
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
              cart
            </button>
          </div>
          <button
            className="flex sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-4xl text-emerald-400"></i>
          </button>
        </div>
      </nav>
      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal setCartOpen={setCartOpen} />
      </ModalWrapper>

      <ModalWrapper
        isOpen={mobileMenuOpen}
        onCloseClick={() => setMobileMenuOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }}
        />
      </ModalWrapper>
    </>
  );
};
