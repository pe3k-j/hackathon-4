import { useState } from "react";

export const SearchBar = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setSearch(input);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={submitSearch}>
        <input
          className="input input__text"
          type="text"
          placeholder="Search for an image....."
          onInput={handleSearch}
          value={input}
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
};
