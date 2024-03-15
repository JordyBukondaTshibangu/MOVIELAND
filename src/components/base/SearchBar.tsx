import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex items-center justify-center gap-3 w-[500px]">
      <input
        type="text"
        name="search"
        id="search-bar"
        className=" bg-white w-80 h-12 transition duration-700 ease-linear px-5 text-black rounded-md"
        placeholder="Search title, keyword..."
      />
      <button className="hidden lg:flex border rounded-full items-center justify-center px-4 py-3 cursor-pointer hover:bg-primary hover:border-primary transition duration-300">
        <i className="fa fa-search text-xl"></i>
      </button>
    </div>
  );
};

export default SearchBar;
