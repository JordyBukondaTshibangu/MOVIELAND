import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [showMobile, setShowMobile] = useState<Boolean>(false);
  return (
    <header className="sticky z-10 h-[11vh] w-full py-5 bg-custom-gradient text-white">
      <nav className="max-w-9xl mx-auto  h-full flex justify-between items-center px-5 lg:px-10">
        <div className="text-5xl text-primary font-bold">MovieLand</div>
        <span className="hidden lg:flex text-xl">
          <Link to="/">Browse all movies</Link>
        </span>
        <button className="hidden lg:flex border rounded-full items-center justify-center px-5 py-4 cursor-pointer">
          <i className="fa fa-search text-2xl"></i>
        </button>
        <button
          className=" lg:hidden bg-primary flex items-center justify-center px-5 py-3 rounded-md cursor-pointer"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            setShowMobile(true)
          }
        >
          <i className="fa fa-bars text-2xl"></i>
        </button>
        {showMobile && (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-20 bg-black min-h-[100vh] py-10 px-5 flex flex-col ">
            <button
              className="flex items-center justify-center rounded-full p-5 border border-white  w-5 h-5 self-end"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                setShowMobile(false)
              }
            >
              <i className="fa fa-times text-xl"></i>
            </button>
            <ul>
              <li>
                <Link to="/">All movies</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
