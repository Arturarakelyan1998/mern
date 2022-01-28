import React, {useState, useContext} from 'react'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import axios from "axios";
import {RiLockPasswordLine} from 'react-icons/ri';
import {BiUser} from 'react-icons/bi';
import './AuthPage.scss'
import {AuthContext} from "../../context/AuthContext";

const AuthPage = () => {
    const [success, setSuccess] = useState('')

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const {login} = useContext(AuthContext)

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response =>
                setSuccess(response.data.message)
            )
        } catch (error) {
            console.log(error, "Error ")
        }
    }
    const loginHandler = async () => {
        try {

            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response=>{
                login(response.data.token, response.data.userId)
            })
        }
        catch(error){
            console.log(error);
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
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="input-filed col s12">
                                            <BiUser/>
                                            <input type="email" name="email" placeholder="Email"
                                                   onChange={changeHandler}/>
                                        </div>
                                        <div className="input-filed col s12">
                                            <RiLockPasswordLine/>
                                            <input type="password" name="password" placeholder="Password"
                                                   onChange={changeHandler}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className=" waves-effect waves-light btn btn blue"
                                                onClick={loginHandler}> Log In
                                        </button>
                                        <Link to="/registration" className="btn-outline btn-reg">Haven't account
                                            ?</Link>
                                    </div>
                                </form>
                            </Route>

                            <Route path="/registration">
                                <h3> Registration</h3>
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>


                                    <div className="row">
                                        <div className="input-filed col s12">
                                            <input type="text" name="firstname" placeholder="Firstname"
                                                   onChange={changeHandler}/>
                                        </div>
                                        <div className="input-filed col s12">
                                            <input type="text" name="lastname" placeholder="Lastname"
                                                   onChange={changeHandler}/>
                                        </div>
                                        <div className="input-filed col s12">
                                            <input type="email" name="email" placeholder="Email"
                                                   onChange={changeHandler}/>
                                        </div>
                                        <div className="input-filed col s12">
                                            <input type="password" name="password" placeholder="Password"
                                                   onChange={changeHandler}/>
                                        </div>
                                    </div>
                                    {success ?  <h1 style={{color:"green",fontSize:24}}>{success}</h1>:(<div className="row">
                                        <button className=" waves-effect waves-light btn btn blue "
                                                onClick={registerHandler}> Registration
                                        </button>
                                        <Link to="/login" className="btn-outline btn-reg">already have account ?</Link>
                                    </div>)}
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