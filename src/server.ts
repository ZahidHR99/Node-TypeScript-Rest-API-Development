import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DB Connected')

    app.listen(config.port, () => {
      logger.info(`app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('DB Connection fail', err)
  }
}

bootstrap()
