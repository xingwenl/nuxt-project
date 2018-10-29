import express from 'express'
import Sql from '../../utils/sql'

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
}

export default new Base()