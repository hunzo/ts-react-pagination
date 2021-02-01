import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import Posts from './components/Posts'
import { modelPosts } from './models/modelPosts'

const defaultPost: modelPosts[] = []

const App: React.FC = () => {
    const [posts, setPosts] = useState(defaultPost)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    useEffect(() => {
        ;(() => {
            setLoading(true)
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((rs) => {
                    setPosts(rs.data)
                    setLoading(false)
                })
                .catch((e) => {
                    console.log(e)
                })
        })()
    }, [])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div>
            <h3>Page Number: {currentPage}</h3>
            <Posts loading={loading} posts={currentPost} />
            <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    )
}

export default App
