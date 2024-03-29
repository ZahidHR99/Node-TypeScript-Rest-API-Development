import { Request, Response } from 'express'
import usersService from './users.service'

const createdUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: false,
      message: 'User create successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Fail to create user',
    })
  }
}

export default {
  createdUser,
}
