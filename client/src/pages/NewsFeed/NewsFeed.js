import usePosts from "../../hooks/use-posts";
import './NewsFeed.css';
import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import {RiShareForwardLine} from 'react-icons/ri'

const NewsFeed = () => {

    const {posts, loading} = usePosts()

    if (loading) {
        return (
            <div>...Loading</div>
        )
    }

    return (

        <div className="container" >
           <div className='news'>
               {posts && posts.map((post) => {
                   return <div className='news-item' key={post.id}>
                       <div>{post.title}</div>
                       <img src={post.image} alt=""/>
                       <div className='icons'>
                           <div className='icons-item'>
                               <AiOutlineLike /> Like
                           </div>
                           <div className='icons-item'>
                               <BiComment /> Comment
                           </div>
                           <div className='icons-item'>
                               <RiShareForwardLine /> Share
                           </div>
                       </div>
                   </div>
               })}
           </div>
        </div>


    );
}

export default NewsFeed


