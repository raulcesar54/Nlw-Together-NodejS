import { Request, Response } from 'express'
import { ListUserSenderCompliments } from '../services/ListUserSenderCompliment.service'

class ListUserSenderComplimentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listUserSender = new ListUserSenderCompliments()
    const compliments = await listUserSender.execute(user_id)
    return response.json(compliments)
  }
}

export { ListUserSenderComplimentController }
