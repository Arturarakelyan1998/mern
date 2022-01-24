import usePosts from "../../hooks/use-posts";

const NewsFeed = () => {

    const {posts, loading} = usePosts()

    if (loading) {
        return (
            <div>...Loading</div>
        )
    }

    return (

        <div className="container" >
            {posts && posts.map((post) => {
                return <div key={post.id}>
                    <div>{post.title}</div>
                    <img src={post.image} alt=""/>
                    <div>{post.text}</div>
                </div>
            })}
        </div>


    );
}

export default NewsFeed
