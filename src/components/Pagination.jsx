import './Pagination.css'

const Pagination = ({
  articlesPerPage,
  totalArticles,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="cont-pagination">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
