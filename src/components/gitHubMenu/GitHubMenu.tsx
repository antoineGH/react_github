import { Header } from 'antd/lib/layout/layout'
import { Typography } from 'antd'

const GitHubMenu = (): JSX.Element => {
  const { Text } = Typography

  return (
    <Header>
      <Text className="text-white">GitHub Users</Text>
    </Header>
  )
}

export default GitHubMenu
