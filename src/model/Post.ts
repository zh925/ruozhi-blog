import { Model, DataTypes, BelongsTo } from 'sequelize'
import sequelize from '../db'
import User from './User'

export enum Topping {
    YES = 'YES',
    NO = 'NO'
}

class Post extends Model {
    public id!: string
    public title!: string
    public subtitle: string
    public summary: string
    public content!: string
    public coverUrl!: string
    public createUid!: string
    public publicName: string
    public topping: Topping
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt:Date
}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: '文章ID'
    },
    title: {
        type: DataTypes.STRING(32),
        allowNull: false,
        comment: '文章标题'
    },
    subtitle: {
        type: DataTypes.STRING(32),
        comment: '文章子标题'
    },
    summary: {
        type: DataTypes.TEXT,
        comment: '文章简介'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: '文章内容'
    },
    coverUrl: {
        type: DataTypes.STRING(32),
        allowNull: false,
        comment: '封面图'
    },
    publicName: {
        type: DataTypes.STRING(10),
        comment: '发布人姓名'
    },
    topping: {
        type: DataTypes.ENUM('YES', 'NO'),
        comment: '是否置顶'
    },
    createUid: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        comment: '创建人ID'
    }
}, {
    tableName: 'rz_post',
    sequelize: sequelize,
    timestamps: true,
    paranoid: true
})

export default Post
