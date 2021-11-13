import { Row, Col, Layout } from 'antd'
import GitHubSearchUser from '../gitHubSearchUser/GitHubSearchUser'
import GitHubUserResult from '../gitHubUserResult/GitHubUserResult'

const GitHubContent = (): JSX.Element => {
  const { Content } = Layout
  return (
    <Content>
      <Row>
        <Col span={24}>
          <GitHubSearchUser />
        </Col>
        <Col span={24}>
          <GitHubUserResult />
        </Col>
      </Row>
    </Content>
  )
}

export default GitHubContent
