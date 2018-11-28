import express from 'express'
import Sql from '../../utils/sql'
import utils from '../../utils'
class Base {
    constructor () {
        this.sql = new Sql()
    }
    returnJson (code, data, msg) {
        return {
            code,
            data,
            msg
        }
    }

    Router () {
        return express.Router()
    }
    /**
     *
     *
     * @param {String} token
     * @returns {id, }
     * @memberof Base
     */
    async userinfo (token) {
        let _this = this
        try{
            if (utils.isEmpty(token)) {
                return this.returnJson(10003,'token不存在',"未登录");
            }
            const results = await this.sql.T('account').search('id,account', {
                token
            });
            if (utils.isEmptyObject(results)) {
                return this.returnJson(10005, 'token错误', "登录失效，请重新登录");
            }
            return this.returnJson(200, results[0], "查询成功");
        }catch(e){
            return _this.returnJson(10004, e, "服务器错误");
        }
    }
}
export {
    Sql
}
export default new Base()