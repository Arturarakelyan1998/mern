import usePostsUrl from "../../hooks/use-posts-url";
import './PostsForYou.css';
import {Card, Spin} from 'antd';
import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import {RiShareForwardLine} from 'react-icons/ri'


const { Meta } = Card;


const PostsForYou = () => {

    const {posts, loading} = usePostsUrl()

    if (loading) {
        return (
            <div style={{marginTop: 50}}>
                <Spin size="large" />
            </div>
        )
    }

    return (

        <>
            {posts && posts.map((post) => {
                    return (
                        <div className="cardContainer">
                            <Card
                                hoverable
                                style={{width: 400, marginBottom: 20 }}
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
                        </div>


                    )
            })
            }
        </>
    );
}

export default PostsForYou


