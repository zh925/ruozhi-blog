import { db } from '../config'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: db.pool
})

export default sequelize
