import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export enum Status {
    NORMAL = 'NORMAL',
    BLOCK = 'BLOCK'
}

class User extends Model {
    public uid!: string
    public nickname!: string
    public password!: string
    public phone: string
    public email: string
    public avatarUrl: string
    public gender: Gender
    public status: Status
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt:Date
}

User.init({
    uid: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        comment: '用户ID'
    },
    phone: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        unique: true,
        comment: '手机号'
    },
    password: {
        type: DataTypes.CHAR(32),
        allowNull: false,
        comment: '登录密码'
    },
    email: {
        type: DataTypes.STRING,
        comment: '邮箱',
        validate: {
            isEmail: true
        }
    },
    nickname: {
        type: DataTypes.STRING(8),
        allowNull: false,
        comment: '昵称'
    },
    avatarUrl: {
        type: DataTypes.STRING,
        comment: '头像URL'
    },
    gender: {
        type: DataTypes.ENUM('MALE', 'FEMALE'),
        comment: '性别。MALE: 男性，FEMALE：女性'
    },
    lastLoginTime: {
        type: DataTypes.DATE,
        comment: '上次登录时间'
    },
    status: {
        type: DataTypes.ENUM('NORMAL', 'BLOCK'),
        comment: '状态。NORMAL：正常，BLOCK：封禁',
        defaultValue: Status.NORMAL
    }
}, {
    tableName: 'rz_user',
    sequelize: sequelize,
    timestamps: true,
    paranoid: true
})

export default User
