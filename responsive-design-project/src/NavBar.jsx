import { useState } from "react";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center bg-violet-50 shadow-md py-2 px-4">
        <div className="w-full max-w-6xl border border-red-400 flex justify-between items-center">
          <div className="text-4xl text-violet-900 items-center flex">
            <img
              src="https://static-task-assets.react-formula-staging.com/899963.png"
              className="w-24 mr-2"
            />
            hasher
          </div>
          <div className="text-xl font-medium text-violet-900 hidden md:flex items-center">
            <button className="mx-4">Home</button>
            <button className="mx-4">About</button>
            <button className="mx-4">Contact</button>
            <button>
              <i class="fa-solid fa-magnifying-glass text-2xl text-red-700 mx-4"></i>
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex md:hidden text-4xl text-violet-950 p-4"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 bg-violet-950 flex flex-col pt-12 pb4 rounded-bl-lg">
          <button className="flex mx-4 text-2xl text-violet-200 pl-4 px-20 py-4">
            Home
          </button>
          <button className="flex mx-4 text-2xl text-violet-200 pl-4 px-20 py-4">
            About
          </button>
          <button className="flex mx-4 text-2xl text-violet-200 pl-4 px-20 py-4">
            Contact
          </button>
          <button onClick={()=>setIsMobileMenuOpen(false)}>
            <i class="fa-solid fa-x text-violet-300 text-3xl absolute top-0 right-0 p-2"></i>
          </button>
        </div>
      )}
    </>
  );
};
