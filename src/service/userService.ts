import User from '../model/User'
import * as ErrorConstants from '../common/errorConstants'
import { secret } from '../config'
import { v4 as uuidv4 } from 'uuid'
import { MD5 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'

export default {
    async create(ctx) {
        const { body } = ctx.request
        try {
            await User.create({
                uid: this.getUuid(),
                nickname: body.nickname,
                password: MD5(body.password).toString(),
                phone: body.phone,
                email: body.email,
                avatarUrl: body.avatarUrl,
                gender: body.gender
            })
        } catch(err) {
            throw err
        }
    },
    getUuid() {
        return uuidv4().replace(/-/g, '')
    },
    async findByPhone(phone) {
        return User.findOne({
            where: { phone }
        })
    },
    login(user, password) {
        if (user.password !== MD5(password).toString()) {
            throw ErrorConstants.PASSWORD_ERROR
        }
        return jwt.sign({
            uid: user.uid,
            phone: user.phone
        }, secret)
    },
    getUserInfo(uid) {
        return User.findByPk(uid, {
            attributes: [
                'uid',
                'phone',
                'email',
                'avatarUrl',
                'nickname',
                'gender',
                'createdAt',
                'updatedAt',
                'deletedAt'
            ],
            raw: true
        })
    }
}
