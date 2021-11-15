import { User } from 'types/user'
import { useAppSelector } from '../../hooks/hooks'
import { getErrorMessage } from '../../selectors/user'
import {
  Col,
  Row,
  Card,
  Descriptions,
  Avatar,
  Image,
  Typography,
  Skeleton,
} from 'antd'

type Props = { user: User; isLoadingUser: boolean; hasErrorUser: boolean }

const GitHubUserResult = (props: Props): JSX.Element => {
  const { user, isLoadingUser, hasErrorUser } = props
  console.log(user)
  const errorMessage = useAppSelector(getErrorMessage)

  const { Title } = Typography

  return (
    <>
      <Row className="row-margin-1rem">
        <Col>
          <Card bordered={false}>
            <Skeleton loading={isLoadingUser} active>
              <Row className="row-margin-1rem">
                <Col className="user-avatar">
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
                <Col className="flex align-center padding-1rem user-avatar">
                  <a
                    href="https://github.com/antoineratat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Title level={2}>antoineratat</Title>
                  </a>
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
                      <a
                        href="https://github.com/antoineratat"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/antoineratat
                      </a>
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
            </Skeleton>
            {hasErrorUser && <p>{errorMessage}</p>}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default GitHubUserResult
