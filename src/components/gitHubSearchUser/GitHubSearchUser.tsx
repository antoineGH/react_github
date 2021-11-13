import { FormEvent, useState } from 'react'
import { Input } from 'antd'

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
    <>
      <Search
        placeholder="Search user.."
        allowClear
        onSearch={onSearch}
        onChange={handleInputChange}
        value={userInput}
        style={{ width: 200 }}
      />
    </>
  )
}

export default GitHubSearchUser
