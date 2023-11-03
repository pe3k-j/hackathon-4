import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { ImagePreview } from "./ImagePreview";
import { key } from "../../keys";
import { Pagination } from "./Pagination";

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const loadCountries = async () => {
    const url =
      search === ""
        ? `https://api.unsplash.com/photos/random?client_id=${key}&count=12`
        : `https://api.unsplash.com/search/photos?query=${search}&client_id=${key}&page=${page}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    search === "" ? setItems(data) : setItems(data.results);
  };

  useEffect(() => {
    loadCountries();
  }, [search, page]);

  return (
    <div className="Homepage">
      <SearchBar setSearch={setSearch} />
      {items.length === 0 || search === "" ? (
        ""
      ) : (
        <Pagination page={page} setPage={setPage} />
      )}
      <div className="images">
        {items !== null
          ? items.map((item) => <ImagePreview key={item.id} image={item} />)
          : "Loading"}
      </div>
      {items.length === 0 || search === "" ? (
        ""
      ) : (
        <Pagination page={page} setPage={setPage} />
      )}
    </div>
  );
};
