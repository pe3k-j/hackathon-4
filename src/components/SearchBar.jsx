export const SearchBar = ({ search, setSearch }) => {

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="SearchBar">
      <input className="input input__text" type="text" placeholder="Search for a image..." onInput={handleSearch} value={search} />
    </div>
  )
}
