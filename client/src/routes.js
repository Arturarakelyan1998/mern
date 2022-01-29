import React, {useEffect, useState} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from "./pages/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Profile from "./pages/Profile/Profile";
import CreatePost from "./pages/CreatePost/CreatePost";
import MyPosts from "./pages/MyPosts/MyPosts";
import PostsForYou from "./pages/PostsForYou/PostsForYou";

export const useRoutes = (isLogin)=>{
    if(isLogin){
        return(
            <Switch>
                <Route exact  path="/" >
                    <Index/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/createPost">
                    <CreatePost/>
                </Route>
                <Route path="/myPosts">
                    <MyPosts/>
                </Route>
                <Route path="/postsForYou">
                    <PostsForYou/>
                </Route>
            </Switch>
        );
    }

else{
        return(
            <Switch>
                <Route path="/login" >
                    <AuthPage/>
                </Route>
            </Switch>
        );
    }



}
