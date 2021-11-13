import React from 'react'
import './App.css'
import { Layout } from 'antd'
import GitHubMenu from './components/gitHubMenu/GitHubMenu'

function App() {
  const { Content } = Layout
  return (
    <div className="App">
      <Layout>
        <GitHubMenu />
        <Content>Content</Content>
      </Layout>
    </div>
  )
}

export default App
