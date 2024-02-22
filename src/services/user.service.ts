import Users from '../models/user.model'
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'

class UserService {
  async create(user: User) {
    const newUser = await Users.create(user).catch((error) => {
      console.log('Could not save user', error)
    })

    return newUser
  }

  async findByEmail(email: string) {
    const user = await Users.find({ email }).catch((error) => {
      console.log('Could not retrieve user info', error)
    })

    if (!user) {
      throw boom.notFound('User not found')
    }
  }
}

export default UserService
