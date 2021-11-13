import { FormEvent, useState } from 'react'
import { Input, Row, Col } from 'antd'

const { Search } = Input

const GitHubSearchUser = (): JSX.Element => {
  const [userInput, setUserInput] = useState('')

  const onSearch = (): void => {
    console.log('Search ' + userInput)
    setUserInput('')
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    setUserInput(event?.currentTarget.value)
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
    </Row>
  )
}

export default GitHubSearchUser
