import * as log4js from 'log4js'
import config from '../config'

log4js.configure(config.log)

const logger = log4js.getLogger()

export default async(ctx, next) => {

}
