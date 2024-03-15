import React from "react";

type SearchBarProp = {
  handleExitSearch: () => void;
};
const SearchBar: React.FC<SearchBarProp> = ({ handleExitSearch }) => {
  return (
    <div className="relative flex items-center justify-center gap-3 w-[500px]">
      <input
        type="text"
        name="search"
        id="search-bar"
        className=" bg-white w-80 h-12 transition duration-700 ease-linear px-5 text-black rounded-md"
        placeholder="Search title, keyword..."
      />
      <button
        className="hidden lg:flex border rounded-full items-center justify-center px-4 py-3 cursor-pointer hover:bg-primary hover:border-primary transition duration-300"
        onClick={handleExitSearch}
      >
        <i className="fa fa-times text-xl"></i>
      </button>
    </div>
  );
};

export default SearchBar;
