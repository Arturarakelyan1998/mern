import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from "./MainPage";
import AuthPage from "./AuthPage/AuthPage";

export const useRoutes = (isLogin)=>{
    if(isLogin){
        return(
            <Switch>
                <Route path="/" exact component={Index}/>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/login" exact component={AuthPage}/>
            <Redirect to="/"/>
        </Switch>
    )


}
