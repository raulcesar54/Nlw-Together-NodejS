import { TagRepositories } from '../repositories/tag.repository'
import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/compliments.repository'
import { UserRepositories } from '../repositories/users.repository'
interface ComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}
class CreateComplimentService {
  async execute({
    tag_id,
    user_receiver,
    user_sender,
    message,
  }: ComplimentRequest) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepositories = getCustomRepository(UserRepositories)
    const userReceiverIsValid = await userRepositories.findOne(user_receiver)

    if (user_receiver === user_sender) {
      throw new Error('Você não pode dar complementos a voce mesmo')
    }
    if (!userReceiverIsValid) {
      throw new Error('Usuario não existe')
    }
    if (!message) {
      throw new Error('A mensagem é obrigatória')
    }

    const compliment = complimentRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    })
    await complimentRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }
