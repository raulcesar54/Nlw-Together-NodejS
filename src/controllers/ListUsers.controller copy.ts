import { Request, Response } from 'express'
import { ListUsersService } from '../services/ListUser.service'
import { ListUserReceiverCompliments } from '../services/ListUserReceiverCompliment.service'

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUserReceiver = new ListUsersService()
    const user = await listUserReceiver.execute()
    return response.json(user)
  }
}

export { ListUsersController }
