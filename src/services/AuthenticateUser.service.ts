import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/users.repository'

interface IAuth {
  email: string
  password: string
}
class AuthenticateUserService {
  async execute({ email, password }: IAuth) {
    const userRepositories = getCustomRepository(UserRepositories)
    if (!email) {
      throw new Error('email obrigatório')
    }
    const user = await userRepositories.findOne({ email })

    if (!user) {
      throw new Error('email/password incorreto')
    }
    const passwoordIsValid = await compare(password, user.password)

    if (!passwoordIsValid) {
      throw new Error('email/password invalido')
    }

    const token = sign(
      { email: user.email },
      '4334eb90cc9e4da75264f62324e848db734eb9a2',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )
    return token
  }
}

export { AuthenticateUserService }
