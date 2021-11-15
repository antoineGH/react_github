import { FormEvent, useState } from 'react'
import { Input, Row, Col, Button } from 'antd'
import { useAppDispatch } from '../../hooks/hooks'
import { loadUser, clearUser } from 'reducers/users'

const { Search } = Input

const GitHubSearchUser = (): JSX.Element => {
  const [userInput, setUserInput] = useState('')
  const dispatch = useAppDispatch()

  const onSearch = (): void => {
    dispatch(loadUser(userInput))
    setUserInput('')
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    setUserInput(event?.currentTarget.value)
  }

  const handleClear = (): void => {
    dispatch(clearUser())
  }

  return (
    <Row className="row-margin-1rem">
      <Col>
        <Search
          placeholder="Search user.."
          allowClear
          onSearch={onSearch}
          onChange={handleInputChange}
          value={userInput}
          style={{ width: 200 }}
        />
      </Col>
      <Col style={{ margin: 'auto 1rem' }}>
        <Button danger onClick={handleClear}>
          Clear
        </Button>
      </Col>
    </Row>
  )
}

export default GitHubSearchUser
