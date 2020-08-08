import * as log4js from 'log4js'
import config from '../config'

log4js.configure(config.log)

const logger = log4js.getLogger()
const errorLogger = log4js.getLogger('error')

export default async(ctx, next) => {
    const startTime = new Date();
    await next();
    const duration = new Date().getTime() - startTime.getTime();
    const { request, body } = ctx;
    const logHeader = `\n==================== Request Start ====================\n`;
    const logFooter = `\n===================== Request End =====================\n`;
    const logMsg = 
    `${logHeader}
    Client IP:       ${ctx.ip}
    Request:         ${request.method} ${request.url}
    ResponseTime:    ${duration}
    Response Status: ${ctx.status}
    Request Header:  ${JSON.stringify(request.header)}
    Request Body:    ${request.method === 'GET' ? JSON.stringify(ctx.params) : JSON.stringify(request.body)}
    Response Body:   ${JSON.stringify(body)}
    ${logFooter}`
    if (ctx.status === 200 && body.code === 200) {
        logger.info(logMsg);
    } else {
        errorLogger.error(logMsg);
    }
}
