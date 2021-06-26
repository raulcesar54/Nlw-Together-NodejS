import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/compliments.repository'

class ListUserSenderComplimentsService {
  async execute(user_id: string) {
    const complimentsReponsitory = getCustomRepository(ComplimentsRepositories)
    const compliments = await complimentsReponsitory.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    })
    return compliments
  }
}

export { ListUserSenderComplimentsService as ListUserSenderCompliments }
