import { UserRepositories } from '../repositories/users.repository'

interface UserRequest {
  name: string
  email: string
  admin?: boolean
}
class CreateUserService {
  async execute({ name, email, admin }: UserRequest) {
    const userRepository = new UserRepositories()
    if (!email) {
      throw new Error('Email é  obrigatório')
    }

    const userAlreadyExists = await userRepository.findOne({ name })

    if (userAlreadyExists) {
      throw new Error('Usuario já existe na api')
    }

    const user = userRepository.create({ name, email, admin })

    await userRepository.save(user)

    return user
  }
}

export { CreateUserService }
