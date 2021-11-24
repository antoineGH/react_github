import { User } from 'types/user'
import { useAppSelector } from '../../hooks/hooks'
import { getErrorMessage } from '../../selectors/user'
import convertDate from './utils/convertDate'
import { Col, Row, Card, Descriptions, Avatar, Image, Skeleton } from 'antd'

type Props = { user: User; isLoadingUser: boolean; hasErrorUser: boolean }

const GitHubUserResult = (props: Props): JSX.Element => {
  const { user, isLoadingUser, hasErrorUser } = props
  const errorMessage = useAppSelector(getErrorMessage)
  const displayEmptyUser = (): JSX.Element => {
    return <></>
  }

  const displayUser = (): JSX.Element => {
    return (
      <>
        <Row className="row-margin-1rem">
          <Col className="col-w100">
            <Card bordered={false}>
              <Skeleton loading={isLoadingUser} active>
                <Row>
                  <Col span={3} className="user-avatar">
                    <Avatar
                      size={100}
                      src={
                        <Image src={user?.avatar_url} style={{ width: 100 }} />
                      }
                    />
                  </Col>
                  <Col span={21} className="user-info">
                    <Row className="row-info">
                      <Col span={12} className="col-info">
                        <Row>
                          <span className="span-info">Name:</span> {user?.name}
                        </Row>
                      </Col>
                      <Col span={12} className="col-info">
                        <Row>
                          <span className="span-info">ID:</span> {user?.id}
                        </Row>
                      </Col>
                    </Row>
                    <Row className="row-info">
                      <Col span={12} className="col-info">
                        <Row>
                          <span className="span-info">Location:</span>
                          {user?.location}
                        </Row>
                      </Col>
                      <Col span={12} className="col-info">
                        <Row>
                          <span className="span-info">URL:</span>
                          <a href={user?.url} target="_blank" rel="noreferrer">
                            {user?.url}
                          </a>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="row-info">
                      <Col span={12} className="col-info">
                        <Row>
                          <span className="span-info">Created:</span>
                          {convertDate(user?.created_at)}
                        </Row>
                      </Col>
                      <Col span={12} className="col-info">
                        <Row>
                          <span className="span-info">Updated:</span>
                          {convertDate(user?.updated_at)}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Skeleton>
            </Card>
          </Col>
        </Row>
      </>
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
