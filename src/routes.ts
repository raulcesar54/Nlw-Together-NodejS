import { Router } from 'express'
import { CreateUserController } from './controllers/createUser.controller'

const router = Router()

const userController = new CreateUserController()

router.post('/user', userController.handle)
export { router }
