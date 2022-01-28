import React, {useEffect, useState} from "react";
import getPosts from "../components/services/getPosts";

const usePosts = () => {
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPosts().then((data) => {
            setPosts(data)
            setLoading(false)
        })

    }, [])

    return {posts, loading}
}

export default usePosts
