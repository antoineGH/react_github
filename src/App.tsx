import React from 'react'
import './App.css'
import { Layout } from 'antd'
import GitHubMenu from '@components/gitHubMenu/GitHubMenu'

function App() {
  const { Header, Footer, Content } = Layout
  return (
    <div className="App">
      <Layout>
        <Header>{GitHubMenu}</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
