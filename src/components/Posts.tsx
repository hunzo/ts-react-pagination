import React from 'react'
import { modelPosts } from '../models/modelPosts'

interface props {
    posts: modelPosts[] | undefined
    loading: boolean
}

const Posts: React.FC<props> = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>
                        {post.id}, {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
