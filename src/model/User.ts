import {Model, CHAR, STRING, ENUM, BuildOptions} from 'sequelize';
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
        primaryKey: true
    },
    phone: {
        type: CHAR(11),
        allowNull: false,
        unique: true
    },
    password: {
        type: CHAR(32),
        allowNull: false
    },
    email: {
        type: STRING
    },
    nickname: {
        type: STRING(8)
    },
    avatarUrl: {
        type: STRING
    },
    gender: {
        type: ENUM('MALE', 'FEMALE')
    }
}, {
    tableName: 'rz_user',
    timestamps: true,
    paranoid: true
});

export default User;
