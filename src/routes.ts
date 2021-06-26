import { Router } from 'express'
import { CreateUserController } from './controllers/createUser.controller'
import { CreateTagController } from './controllers/createTag.controller'
import { AuthenticateUserController } from './controllers/authenticateUser.controller'
import { ensureAdmin } from './middleware/ensureAdmin'
import { ensureAuthenticate } from './middleware/ensureAuthenticated'
import { CreateComplimentController } from './controllers/createCompliment.controller'
import { ListUserReceiverController } from './controllers/listUserReceiveCompliments.controller'
import { ListUserSenderComplimentController } from './controllers/listUserSenderCompliments.controller'
import { ListUsersController } from './controllers/ListUsers.controller copy'
const router = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()
const listComplimentSenderController = new ListUserSenderComplimentController()
const listComplimentReceiverController = new ListUserReceiverController()
const listUsers = new ListUsersController()

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
router.get('/users', ensureAuthenticate, listUsers.handle)
export { router }
