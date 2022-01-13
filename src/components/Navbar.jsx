import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'; 
import icon from '../images/crypto-logo.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={`https://tse1.mm.bing.net/th?id=OIP.62_U2YjGz_uuircBxzEpxQHaHH&pid=Api&rs=1&c=1&qlt=95&w=123&h=118`} size="large"/>
            
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
            </div>
                {/* <Button className="menu-control-container">

                </Button> */}
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>} >
                        <Link to="/">Home</Link>
                    </Menu.Item>
                </Menu>
                <Menu theme="dark">
                    <Menu.Item icon={<FundOutlined/>} >
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                </Menu>
                <Menu theme="dark">
                    <Menu.Item icon={<MoneyCollectOutlined/>} >
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                </Menu>
                <Menu theme="dark">
                    <Menu.Item icon={<BulbOutlined/>} >
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>

        </div>
    )
}

export default Navbar
