import React from 'react'

interface props {
    postPerPage: number
    totalPosts: number
    paginate: (page: number) => void
}

const Pagination: React.FC<props> = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i: number = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        style={{
                            display: 'inline',
                            padding: '3px',
                            border: '0.25px solid gray',
                            listStyleType: 'none',
                        }}
                    >
                        <a
                            onClick={() => paginate(number)}
                            href="!#"
                            style={{ textDecoration: 'none' }}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
