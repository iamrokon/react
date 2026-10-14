import React, { useState, useEffect } from 'react'


export default function GetPost() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setPost(data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError(error.message)
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error && null}
        </div>
    )
}