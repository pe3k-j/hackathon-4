export const Pagination = ({ page, setPage }) => {

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prevPage}> Prev </button>
      <span className="pageNumber">{page}</span>
      <button onClick={nextPage}> Next </button>
    </div>
  )
}
