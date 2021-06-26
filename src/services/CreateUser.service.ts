import { UserRepositories } from '../repositories/users.repository'
import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface UserRequest {
  name: string
  email: string
  password: string
  admin?: boolean
}
class CreateUserService {
  async execute({ name, email, admin = false, password }: UserRequest) {
    const userRepository = getCustomRepository(UserRepositories)
    if (!email) {
      throw new Error('Email é  obrigatório')
    }

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new Error('Usuario já existe na api')
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    })

    await userRepository.save(user)
    return {}
  }
}

export { CreateUserService }
