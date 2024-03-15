import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../base/SearchBar";

const Header: React.FC = () => {
  const [showMobile, setShowMobile] = useState<Boolean>(false);
  const [showSearch, setShowSearchBar] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleNavigateToSearch = () => {
    setShowSearchBar(true);
    navigate("/search");
  };

  const handleNavigateToHome = () => {
    setShowSearchBar(false);
    navigate("/");
  };

  return (
    <header className="fixed z-50 h-[12vh] w-full py-5 bg-custom-gradient text-white ">
      <nav className="lg:max-w-8xl 2xl:max-w-9xl mx-auto w-full h-full flex justify-between items-center px-5">
        <Link to="/" className="text-4xl lg:text-7xl text-primary font-bold">
          MovieLand
        </Link>
        <span className="hidden lg:flex text-xl">
          <Link to="/">Browse all movies</Link>
        </span>
        {!showSearch && (
          <button
            className="hidden lg:flex border rounded-full items-center justify-center px-4 py-3 cursor-pointer hover:bg-primary hover:border-primary transition duration-300"
            onClick={() => handleNavigateToSearch()}
          >
            <i className="fa fa-search text-xl"></i>
          </button>
        )}
        {showSearch && (
          <SearchBar handleExitSearch={() => handleNavigateToHome()} />
        )}
        <button
          className=" lg:hidden bg-primary flex items-center justify-center px-5 py-3 rounded-md cursor-pointer"
          onClick={() => setShowMobile(true)}
        >
          <i className="fa fa-bars text-2xl"></i>
        </button>
        {showMobile && (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-20 bg-black min-h-[100vh] py-10 px-5 flex flex-col gap-20">
            <button
              className="flex items-center justify-center rounded-full p-5 border border-white  w-5 h-5 self-end"
              onClick={() => setShowMobile(false)}
            >
              <i className="fa fa-times text-xl"></i>
            </button>
            <ul>
              <li onClick={() => setShowMobile(false)}>
                <Link to="/search">Search for movie</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
