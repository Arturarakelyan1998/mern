import React, {useState} from 'react'
import {BrowserRouter,Link,Switch,Route } from 'react-router-dom'
import axios from "axios";

import './AuthPage.scss'

const AuthPage = () => {

    const [form,setForm]=useState({
        email:'',
        password:''
    })
    const changeHandler =(event)=>{
        setForm({...form,[event.target.name]:event.target.value})
        console.log(form);
    }
    const registerHandler = async()=>{
        try{
            await axios.post('/api/auth/registration',{...form},{
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(response=>console.log( response))
        }catch(error){
            console.log(error)
        }
    }

        return (
            <BrowserRouter>
                <Switch>
            <>
                <div className="container">
                    <div className="auth-page">

                        <Route path="/login">
                        <h3> Authentication</h3>
                        <form className="form form-login" onSubmit={e=>e.preventDefault()}>
                            <div className="row">
                                <div className="input-filed col s12">
                                    <input type="email" name="email" className="validate" placeholder="email" onChange={changeHandler}/>
                                </div>
                                <div className="input-filed col s12">
                                    <input type="password" name="password" className="validate" placeholder="password" onChange={changeHandler}/>
                                </div>
                            </div>
                            <div className="row">
                                <button className=" waves-effect waves-light btn btn blue"> Log In</button>
                                <Link to="/registration" className="btn-outline btn-reg">Haven't account ?</Link>
                            </div>
                        </form>
                        </Route>

                        <Route path="/Registration">
                        <h3> Registration</h3>
                        <form className="form form-login" onSubmit={e => e.preventDefault()}>


                            <div className="row">
                                <div className="input-filed col s12">
                                    <input type="email" name="email" className="validate" placeholder="email" onChange={changeHandler}/>
                                </div>
                                <div className="input-filed col s12">
                                    <input type="password" name="password" className="validate" placeholder="password" onChange={changeHandler}/>
                                </div>
                            </div>
                            <div className="row">
                                <button className=" waves-effect waves-light btn btn blue "  onClick={registerHandler} > Registration</button>
                                <Link to="/login" className="btn-outline btn-reg">already have account ?</Link>
                            </div>
                        </form>
                    </Route>
                    </div>
                </div>
            </>
                </Switch>
                </BrowserRouter>

                )
}

export default AuthPage;