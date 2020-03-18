import React, { Component } from 'react';
import { Layout} from 'antd';
import { Menu} from 'antd';
import {
  DesktopOutlined,
  ProjectOutlined,
  SearchOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const {Sider} = Layout;



export class SideBar extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <div className="test">
          <Layout style={{height:"100vh"}}>
          <Sider>
          <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          height="100%"
        >
          <Menu.Item key="1">
            <SearchOutlined />
            <Link to="/restaurants"><span>Restaurant Ara</span></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>Masa Rezerv Et</span>
          </Menu.Item>
          <Menu.Item key="3">
            <ProjectOutlined />
            <Link to="/home"><span>Restaurant Doluluk</span></Link>
          </Menu.Item>
          <Menu.Item key="5">
            <MessageOutlined />
            <span>İletişim</span>
          </Menu.Item>
        </Menu>
        </Sider>
        </Layout>
        </div>  
    );
  }
}