import { TagRepositories } from '../repositories/tag.repository'
import { getCustomRepository } from 'typeorm'
interface TagRequest {
  name: string
}
class CreateTagService {
  async execute({ name }: TagRequest) {
    const tagRepository = getCustomRepository(TagRepositories)
    if (!name) {
      throw new Error('Tag é  obrigatório')
    }

    const userAlreadyExists = await tagRepository.findOne({ name })

    if (userAlreadyExists) {
      throw new Error('Tag já existe na api')
    }

    const user = tagRepository.create({ name })

    await tagRepository.save(user)

    return user
  }
}

export { CreateTagService }
