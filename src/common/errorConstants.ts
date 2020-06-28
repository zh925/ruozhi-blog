import HttpException from "./httpException";

export const USER_EXISTS = new HttpException(400, '用户已存在');
export const USER_NOT_EXISTS = new HttpException(400, '用户不存在');
export const PASSWORD_ERROR = new HttpException(400, '密码错误');
