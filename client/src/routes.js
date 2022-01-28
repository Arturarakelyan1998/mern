import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from "./pages/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Profile from "./pages/Profile/Profile";

export const useRoutes = (isLogin)=>{
    if(isLogin){
        return(
            <Switch>
                <Route path="/" exact component={Index}/>
                {/*<Redirect to="/"/>*/}
                <Route path="/profile" exact component={Profile}/>
                {/*<Redirect to="/profile"/>*/}
            </Switch>
        );
    }

else{
        return(
            <Switch>
                <Route path="/login" exact component={AuthPage}/>
                {/*<Redirect to="/login"/>*/}
            </Switch>
        );
    }



}
