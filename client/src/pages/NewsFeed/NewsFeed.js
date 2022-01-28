import usePosts from "../../hooks/use-posts";
import './NewsFeed.css';
import {Card, Spin} from 'antd';
import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import {RiShareForwardLine} from 'react-icons/ri'

const { Meta } = Card;

const NewsFeed = () => {

    const {posts, loading} = usePosts()

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
                        <Card
                            hoverable
                            style={{width: 400, marginBottom: 20 }}
                            cover={<img src={post.photo} alt=""/>}
                        >
                            <Meta title={post.title} description={post.description}/>
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


