import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf } = format
import path from 'path'

//custom log formate
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'message' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'message' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorLogger }
