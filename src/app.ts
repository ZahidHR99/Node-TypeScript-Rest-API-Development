import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

// app.get('/test', async (req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '999',
//     password: '12345',
//     role: 'student',
//   })
//   res.send('Student Created Successfully')
// })

export default app
