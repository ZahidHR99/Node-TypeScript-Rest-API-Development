import express from 'express'
import userController from './users.controller'
const router = express.Router()

router.post('/create-user', userController.createdUser)

export default router
