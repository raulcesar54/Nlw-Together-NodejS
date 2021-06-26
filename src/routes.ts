import { Router } from 'express'
import { CreateUserController } from './controllers/createUser.controller'
import { CreateTagController } from './controllers/createTag.controller'
import { AuthenticateUserController } from './controllers/authenticateUser.controller'
import { ensureAdmin } from './middleware/ensureAdmin'
import { CreateComplimentController } from './controllers/createCompliment.controller'
const router = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()

router.post('/user', userController.handle)
router.post('/tag', ensureAdmin, tagController.handle)
router.post('/auth', authenticateUserController.handle)
router.post('/compliment', complimentController.handle)

export { router }
