import React from 'react'
import './Pagination.css'

const Pagination = ({ totalShips, postPerPage, setCurrentPage, currentPage }) => {
    const pages = []

    for (let index = 1; index <= Math.ceil(totalShips / postPerPage); index++) {
        pages.push(index)
    }

    return (
        <div className='boxPagination'>
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? "paginationButtonActive" : "paginationButton"}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination