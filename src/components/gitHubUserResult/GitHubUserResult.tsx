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
  const errorMessage = useAppSelector(getErrorMessage)
  const { Title } = Typography

  const displayEmptyUser = (): JSX.Element => {
    return <></>
  }

  const displayUser = (): JSX.Element => {
    return (
      <Row className="row-margin-1rem">
        <Col className="col-w100">
          <Card bordered={false}>
            <Skeleton loading={isLoadingUser} active>
              <Row className="row-margin-1rem">
                <Col className="user-avatar">
                  <Avatar
                    size={100}
                    src={
                      <Image src={user?.avatar_url} style={{ width: 100 }} />
                    }
                  />
                </Col>
                <Col className="flex align-center padding-1rem user-avatar">
                  <a
                    href="https://github.com/antoineratat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Title level={2}>{user?.login}</Title>
                  </a>
                </Col>
              </Row>
              <Row className="row-margin-1rem">
                <Col>
                  <Descriptions className="desc-user-info">
                    <Descriptions.Item label="name">
                      {user?.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="location">
                      {user?.location}
                    </Descriptions.Item>
                    <Descriptions.Item label="ID">{user?.id}</Descriptions.Item>
                    <Descriptions.Item label="URL">
                      <a href={user?.url} target="_blank" rel="noreferrer">
                        {user?.url}
                      </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="created">
                      {user?.created_at}
                    </Descriptions.Item>
                    <Descriptions.Item label="updated">
                      {user?.updated_at}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Skeleton>
          </Card>
        </Col>
      </Row>
    )
  }

  const displayError = (): JSX.Element => {
    return (
      <Row className="row-margin-1rem">
        <Col className="col-w100">
          <Card bordered={false}>
            <Row className="row-margin-1rem">
              <Col>
                <Descriptions.Item label="name">
                  {errorMessage}
                </Descriptions.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }

  return (
    <>
      {hasErrorUser
        ? displayError()
        : !isLoadingUser
        ? user?.login === ''
          ? displayEmptyUser()
          : displayUser()
        : displayUser()}
    </>
  )
}

export default GitHubUserResult
