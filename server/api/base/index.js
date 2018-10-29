import express from 'express'
import Sql from '../../utils/sql'

class Base {
    constructor () {
        this.sql = new Sql()
    }
    returnJson (retcode, data, msg) {
        return {
            retcode,
            data,
            msg
        }
    }

    Router () {
        return express.Router()
    }
}

export default new Base()