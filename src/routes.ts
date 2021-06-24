import { Router } from 'express'
import { CreateUserController } from './controllers/createUser.controller'
import { CreateTagController } from './controllers/createTag.controller'

const router = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()

router.post('/user', userController.handle)
router.post('/tag', tagController.handle)

export { router }
