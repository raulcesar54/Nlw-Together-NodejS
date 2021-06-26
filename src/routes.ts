import { Router } from 'express'
import { CreateUserController } from './controllers/createUser.controller'
import { CreateTagController } from './controllers/createTag.controller'
import { AuthenticateUserController } from './controllers/authenticateUser.controller'
import { ensureAdmin } from './middleware/ensureAdmin'
import { ensureAuthenticate } from './middleware/ensureAuthenticated'
import { CreateComplimentController } from './controllers/createCompliment.controller'
import { ListUserReceiverController } from './controllers/listUserReceiveCompliments.controller'
import { ListUserSenderComplimentController } from './controllers/listUserSenderCompliments.controller'
const router = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()
const listComplimentSenderController = new ListUserSenderComplimentController()
const listComplimentReceiverController = new ListUserReceiverController()

router.post('/user', userController.handle)
router.post('/auth', authenticateUserController.handle)
router.post('/tag', ensureAuthenticate, ensureAdmin, tagController.handle)
router.post(
  '/compliment',
  ensureAuthenticate,

  complimentController.handle
)
router.get(
  '/user/compliments/send',
  ensureAuthenticate,
  listComplimentSenderController.handle
)
router.get(
  '/user/compliments/receive',
  ensureAuthenticate,
  listComplimentReceiverController.handle
)

export { router }
