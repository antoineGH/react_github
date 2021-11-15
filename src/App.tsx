import React from 'react'
import GitHubMenu from './components/gitHubMenu/GitHubMenu'
import GitHubContent from './components/gitHubContent/GitHubContent'
import { useAppSelector } from './hooks/hooks'
import {
  getUserSelector,
  getIsLoadingUser,
  getHasErrorUser,
} from './selectors/user'
import { Layout } from 'antd'
import './App.css'

function App() {
  const user = useAppSelector(getUserSelector)
  console.log(user)
  const isLoadingUser = useAppSelector(getIsLoadingUser)
  console.log('isLoadingUser => ' + isLoadingUser)
  const hasErrorUser = useAppSelector(getHasErrorUser)
  console.log('hasErrorUser => ' + hasErrorUser)

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
