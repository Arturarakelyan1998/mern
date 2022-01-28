import usePosts from "../../hooks/use-posts";
import './NewsFeed.css';
import { Card } from 'antd';
import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import {RiShareForwardLine} from 'react-icons/ri'

const { Meta } = Card;

const NewsFeed = () => {

    const {posts, loading} = usePosts()

    if (loading) {
        return (
            <div>...Loading</div>
        )
    }

    console.log(posts, "test")

    return (
        <>
            {posts && posts.map((post) => {
                return (
                        <Card
                            hoverable
                            style={{width: 400, marginBottom: 20}}
                            cover={<img src={post.image} alt=""/>}
                        >
                            <Meta title={post.title} description={post.text}/>
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

                        </Card>

                )
            })
            }
        </>





    );
}

export default NewsFeed


