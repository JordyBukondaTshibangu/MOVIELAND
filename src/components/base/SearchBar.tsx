import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearSearchTerm,
  setSearchTerm,
} from "../../store/slices/movie/searchSlice";

type SearchBarProp = {
  handleExitSearch: () => void;
};
const SearchBar: React.FC<SearchBarProp> = ({ handleExitSearch }) => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    dispatch(setSearchTerm(event.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchTerm());
    handleExitSearch();
  };
  return (
    <div className="relative flex items-center justify-center gap-3 lg:w-[500px]">
      <input
        type="text"
        name="search"
        id="search-bar"
        className=" bg-white w-80 h-12 transition duration-700 ease-linear px-5 text-black rounded-md"
        placeholder="Search title, keyword..."
        value={search}
        onChange={handleChange}
      />
      <button
        className="flex border rounded-full items-center justify-center px-4 py-3 cursor-pointer bg-primary lg:bg-black text-white border-none lg:border-white hover:bg-primary hover:border-primary transition duration-300"
        onClick={() => handleClearSearch()}
      >
        <i className="fa fa-times text-xl"></i>
      </button>
    </div>
  );
};

export default SearchBar;
