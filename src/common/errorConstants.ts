import HttpException from "./httpException";

export const PHONE_ILLEGAL = new HttpException(400, '手机号码不正确');
export const REPASSWORD_ERROR = new HttpException(400, '重复密码不正确');

export const USER_EXISTS = new HttpException(400, '用户已存在');
export const USER_NOT_EXISTS = new HttpException(400, '用户不存在');
export const PASSWORD_ERROR = new HttpException(400, '密码错误');
