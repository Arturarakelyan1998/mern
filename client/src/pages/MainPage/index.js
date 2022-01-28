import React from 'react';
import NewsFeed from "../NewsFeed/NewsFeed";

const Index = () => {
    return (
        <>
            <div style={{ display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "60px"}}>
                <NewsFeed/>
            </div>
        </>

    );

}

export default Index
