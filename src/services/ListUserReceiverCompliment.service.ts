import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/compliments.repository'

class ListUserReceiverComplimentsService {
  async execute(user_id: string) {
    const complimentsReponsitory = getCustomRepository(ComplimentsRepositories)
    const compliments = await complimentsReponsitory.find({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    })
    return compliments
  }
}

export { ListUserReceiverComplimentsService as ListUserReceiverCompliments }
