import React, {Component} from 'react';

import './AuthPage.scss'

class AuthPage extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="auth-page">
                        <h3> Authentication</h3>


                        <form className="form form-login">


                            <div className="row">
                                <div className="input-filed col s12">
                                    <input type="email" name="email" className="validate" placeholder="email"/>
                                </div>
                                <div className="input-filed col s12">
                                    <input type="password" name="password" className="validate" placeholder="password"/>
                                </div>
                            </div>
                            <div className="row">
                                <button className=" waves-effect waves-light btn btn blue"> Log In</button>
                                <a href="/" className="btn-outline btn-reg">Haven't account ?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default AuthPage;