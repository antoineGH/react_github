import { Col, Row, Card, Descriptions, Avatar, Image, Typography } from 'antd'

const GitHubUserResult = (): JSX.Element => {
  const { Title } = Typography

  return (
    <Row className="row-margin-1rem">
      <Col>
        <Card bordered={false}>
          <Row className="row-margin-1rem">
            <Col>
              <Avatar
                size={100}
                src={
                  <Image
                    src="https://avatars.githubusercontent.com/u/35226140?v=4"
                    style={{ width: 100 }}
                  />
                }
              />
            </Col>
            <Col>
              <Title level={2}>antoineratat</Title>
            </Col>
          </Row>
          <Row className="row-margin-1rem">
            <Col>
              <Descriptions className="desc-user-info">
                <Descriptions.Item label="name">Antoine</Descriptions.Item>
                <Descriptions.Item label="location">
                  Chengdu, China
                </Descriptions.Item>
                <Descriptions.Item label="ID">35226140</Descriptions.Item>
                <Descriptions.Item label="URL">
                  https://github.com/antoineratat
                </Descriptions.Item>
                <Descriptions.Item label="created">
                  2018-01-08T13:42:43Z
                </Descriptions.Item>
                <Descriptions.Item label="updated">
                  2021-11-05T16:56:36Z
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default GitHubUserResult