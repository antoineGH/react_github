import { Row, Col, Layout } from 'antd'
import GitHubSearchUser from '../gitHubSearchUser/GitHubSearchUser'

const GitHubContent = (): JSX.Element => {
  const { Content } = Layout
  return (
    <Content>
      <Row>
        <Col span={24}>
          <GitHubSearchUser />
        </Col>
        <Col span={24}>Results</Col>
      </Row>
    </Content>
  )
}

export default GitHubContent
