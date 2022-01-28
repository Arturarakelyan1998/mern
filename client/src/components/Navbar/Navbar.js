import React, {useContext} from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import Layout, {Header} from "antd/es/layout/layout";
import 'antd/dist/antd.css';
import {Menu} from "antd";

import ('./NavBar.scss')

export default function Navbar({children}) {
    const {logout, isLogin} = useContext(AuthContext)
    const {Header, Content, Sider} = Layout;

    const { SubMenu } = Menu;

    return (
        <Layout>
            <Header className="header" style={{position: 'fixed', zIndex: 1, width: '100%', paddingLeft: 0}}>
                <div className="logo"><a href="/" className="brand-logo"> ACA App </a></div>
                <div className='login'>
                    {isLogin ? <Link to="/login" onClick={logout}>Log Out</Link> : <Link to="/login">Log In</Link>}
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    {isLogin && <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>}
                    {isLogin && <Menu.Item key="3"><Link to="/createPost">Create Post</Link></Menu.Item>}
                </Menu>
            </Header>
            <Sider width={200} className="site-layout-background" style={{position: 'fixed', zIndex: 1, top: 65}}>
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                        <Menu.Item key="1">Friends</Menu.Item>
                        <Menu.Item key="2">Photos</Menu.Item>
                        <Menu.Item key="3">Music</Menu.Item>
                        <Menu.Item key="4">Life events</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={ <NotificationOutlined />} title="Posts">
                        <Menu.Item key="5">My posts</Menu.Item>
                        <Menu.Item key="6">Friends posts</Menu.Item>
                        <Menu.Item key="7">Favorite posts</Menu.Item>
                        <Menu.Item key="8">Posts for you</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<LaptopOutlined />} title="Settings">
                        <Menu.Item key="9">Privacy</Menu.Item>
                        <Menu.Item key="10">Dark mode</Menu.Item>
                        <Menu.Item key="11">Language</Menu.Item>
                        <Menu.Item key="12">Recent ad activity</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Layout style={{padding: '0 24px 24px'}}>
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
