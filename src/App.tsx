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
  const isLoadingUser = useAppSelector(getIsLoadingUser)
  const hasErrorUser = useAppSelector(getHasErrorUser)

  return (
    <div className="App">
      <Layout>
        <GitHubMenu />
        <GitHubContent
          user={user}
          isLoadingUser={isLoadingUser}
          hasErrorUser={hasErrorUser}
        />
      </Layout>
    </div>
  )
}

export default App
