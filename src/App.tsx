import React from 'react'
import './App.css'
import { Layout } from 'antd'
import GitHubMenu from './components/gitHubMenu/GitHubMenu'
import GitHubContent from './components/gitHubContent/GitHubContent'

function App() {
  return (
    <div className="App">
      <Layout>
        <GitHubMenu />
        <GitHubContent />
      </Layout>
    </div>
  )
}

export default App
