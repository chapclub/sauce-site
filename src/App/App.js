import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="AppLayout">
        <Content className="AppContent">
          <h1>u know we had to do it to em</h1>
        </Content>
        <Footer className="AppFooter">
          made with love by chap.club
        </Footer>
      </Layout>
    );
  }
}

export default App;
