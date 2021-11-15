import { Row, Col, Layout } from 'antd'
import GitHubSearchUser from '../gitHubSearchUser/GitHubSearchUser'
import GitHubUserResult from '../gitHubUserResult/GitHubUserResult'
import { User } from 'types/user'

type Props = { user: User; isLoadingUser: boolean; hasErrorUser: boolean }

const GitHubContent = (props: Props): JSX.Element => {
  const { user, isLoadingUser, hasErrorUser } = props
  const { Content } = Layout

  return (
    <Content>
      <Row>
        <Col span={24}>
          <GitHubSearchUser />
        </Col>
        <Col span={24}>
          <GitHubUserResult
            user={user}
            isLoadingUser={isLoadingUser}
            hasErrorUser={hasErrorUser}
          />
        </Col>
      </Row>
    </Content>
  )
}

export default GitHubContent
