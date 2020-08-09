import { Configuration } from 'log4js'
import * as path from 'path'

const config: Configuration = {
    appenders: {
        console: {
            type: 'console'
        },
        response: {
            type: 'dateFile',
            filename: path.resolve(__dirname, '../../log/response/response'),
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            maxLogSize: 1000,
            numBackups: 3,
            path: ('../log/app'),
            layout: {
              type: 'basic'
            }
        },
        errorFile: {
            type: 'dateFile',
            filename: path.resolve(__dirname, '../../log/error/error'),
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            maxLogSize: 1000,
            numBackups: 3,
            path: ('../log/error'),
            layout: {
              type: 'basic'
            }
        }
    },
    categories: {
        default: { appenders: [ 'console', 'response' ], level: 'all' },
        error: { appenders: ['errorFile', 'console'], level: 'error' },
    }
}

export default config
