class HttpException extends Error {
    constructor(errCode = 500, msg = '服务器异常', data = {}) {
        super();
        this.msg = msg;
        this.errCode = errCode;
        this.data = data;
        Object.setPrototypeOf(this, HttpException.prototype);
    }
    public msg: string;
    public errCode: number;
    public data: any;
}

export default HttpException;
