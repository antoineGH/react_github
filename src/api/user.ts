import { User } from '../types/user'

export const getUser = async (userName: string): Promise<User> => {
  const data = await fetch(`https://api.github.com/users/${userName}`)
  const json = await data.json()

  return new Promise((resolve, reject) => {
    json && Object.hasOwnProperty('Login') && resolve(json)
    reject()
  })
}
