import { Request, Response } from 'express'
import { ListUserReceiverCompliments } from '../services/ListUserReceiverCompliment.service'

class ListUserReceiverController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listUserReceiver = new ListUserReceiverCompliments()
    const compliments = await listUserReceiver.execute(user_id)
    return response.json(compliments)
  }
}

export { ListUserReceiverController }
