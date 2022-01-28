import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import Layout, {Header} from "antd/es/layout/layout";
import 'antd/dist/antd.css';
import {Menu} from "antd";
import ('./NavBar.scss')

export default function Navbar({children}){
        const {logout,isLogin}=useContext(AuthContext)
    const { Header, Content} = Layout;


        return (
            <Layout>
                <Header className="header" style={{position: 'fixed', zIndex: 1, width: '100%', paddingLeft: 0}}>
                    <div className="logo"> <a href="/" className="brand-logo"> ACA App </a></div>
                    <div className='login'>
                        {isLogin ? <Link to="/login" onClick={logout}>Log Out</Link> : <Link to="/login">Log In</Link> }
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        {isLogin && <Menu.Item key="2"><Link to="/createPost">Create Post</Link></Menu.Item>}
                        {isLogin && <Menu.Item key="3"><Link to="/profile">Profile</Link></Menu.Item>}
                    </Menu>
                </Header>
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
}
