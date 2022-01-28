import React from 'react';
import styles from './index.module.css';
import NewsFeed from "../NewsFeed/NewsFeed";

const Index = () => {
    return (
        <>
            <div className={styles.container}>
                <NewsFeed/>
            </div>
        </>

    );

}

export default Index
