import React from 'react';
import styles from './index.module.css';
import NewsFeed from "../NewsFeed/NewsFeed";
import Profile from "../Profile/Profile";

const Index = () => {
    return (
        <>
            <div className={styles.container}>
                {/*<NewsFeed/>*/}
            </div>
            <Profile />
        </>

    );

}

export default Index
