import { Options } from 'sequelize/types'

export const db: Options = {
    host: 'localhost',
    dialect: 'mysql',
    database: 'rz_blog',
    username: 'root',
    password: '123456',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
}

export const secret = 'ruozhi'

export default {
    db,
    secret
}
