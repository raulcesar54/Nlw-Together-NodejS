import { Router } from 'express'
import { CreateUserController } from './controllers/createUser.controller'
import { CreateTagController } from './controllers/createTag.controller'
import { AuthenticateUserController } from './controllers/authenticateUser.controller'

const router = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()

router.post('/user', userController.handle)
router.post('/tag', tagController.handle)
router.post('/auth', authenticateUserController.handle)

export { router }
