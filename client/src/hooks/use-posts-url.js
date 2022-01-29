import React, {useEffect, useState} from "react";
import getPostsUrl from "../components/services/getPostsUrl";

const usePostsUrl = () => {
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPostsUrl().then((data) => {
            setPosts(data)
            setLoading(false)
        })

    }, [])

    return {posts, loading}
}

export default usePostsUrl
