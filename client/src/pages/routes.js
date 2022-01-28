import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from "./MainPage";
import AuthPage from "./AuthPage/AuthPage";

export const useRoutes = (isLogin)=>{
    if(isLogin){
        return(
            <>
                <Route path="/" exact component={Index}/>
                {/*<Redirect to="/"/>*/}
            </>
        )
    }

    return(
        <>
            <Route path="/login" exact component={AuthPage}/>
            {/*<Redirect to="/"/>*/}
        </>
    )


}
