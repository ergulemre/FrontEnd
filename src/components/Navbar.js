import React, { Component } from 'react';
import { Layout,Avatar} from 'antd';
import Title from 'antd/lib/typography/Title';
const { Header } = Layout;

export class Navbar extends Component {
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
      <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white',textAlign: 'left' }} level={3}>Restaurant Management System</Title>
        </Header>
      </Layout>
    </div>
    );
  }
}