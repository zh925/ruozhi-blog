import {Model, CHAR, STRING, ENUM, BuildOptions, DATE} from 'sequelize';
import sequelize from '../db';

enum Gender {
    Male = 'MALE',
    Female = 'FEMALE'
}

class UserModel extends Model {
    public uid!: string;
    public nickname!: string;
    public password!: string;
    public phone: string;
    public email: string;
    public avatarUrl: string;
    public gender: Gender;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt:Date
}

type UserModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
}

const User = <UserModelStatic>sequelize.define('User', {
    uid: {
        type: CHAR(36),
        allowNull: false,
        primaryKey: true,
        comment: '用户ID'
    },
    phone: {
        type: CHAR(11),
        allowNull: false,
        unique: true,
        comment: '手机号'
    },
    password: {
        type: CHAR(32),
        allowNull: false,
        comment: '登录密码'
    },
    email: {
        type: STRING,
        comment: '邮箱'
    },
    nickname: {
        type: STRING(8),
        allowNull: false,
        comment: '昵称'
    },
    avatarUrl: {
        type: STRING,
        comment: '头像URL'
    },
    gender: {
        type: ENUM('MALE', 'FEMALE'),
        comment: '性别。MALE: 男性，FEMALE：女性'
    },
    lastLoginTime: {
        type: DATE,
        comment: '上次登录时间'
    },
    status: {
        type: ENUM('NORMAL', 'BLOCK'),
        comment: '状态。NORMAL：正常，BLOCK：封禁',
        defaultValue: 'NORMAL'
    }
}, {
    tableName: 'rz_user',
    timestamps: true,
    paranoid: true
});

export default User;
