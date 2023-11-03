import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { ImagePreview } from "./ImagePreview";
import { key } from "../../keys";

export const HomePage = () => {

  const [items, setItems] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const loadCountries = async () => {
    const url = (search === '') ? `https://api.unsplash.com/photos/random?client_id=${key}&count=12` : `https://api.unsplash.com/search/photos?query=${search}&client_id=${key}&page=${page}&per_page=12`
    const response = await fetch(url);
    const data = await response.json();


    (search === '') ? setItems(data) : setItems(data.results)      
  }

  useEffect(() => {
    loadCountries()
  }, [search, page])

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  return (
    <div className="Homepage">
      <SearchBar search={search} setSearch={setSearch} />
      <button onClick={prevPage}> Prev </button>
      <button onClick={nextPage}> Next </button>
      <div className="countries">
        {
          (items !== null)
            ? items.map((item) => (<ImagePreview key={item.id} image={item} />))
            : 'Loading'
        }
      </div>
      <button onClick={prevPage}> Prev </button>
      <button onClick={nextPage}> Next </button>
    </div>
  )
}
