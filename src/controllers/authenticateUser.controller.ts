import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUser.service'

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authenticatUserService = new AuthenticateUserService()
    const token = await authenticatUserService.execute({
      email,
      password,
    })

    return response.json(token)
  }
}

export { AuthenticateUserController }
