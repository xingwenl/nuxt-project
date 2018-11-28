import base, { Sql } from '../base/index'
import utils from '../../utils/index'
const router = base.Router()
const sql = new Sql('topic')

router.get('/', async (req, res) => {
    try {
        const page = req.body.page || 0
        const count = req.body.count || 10
        const results = await sql.search('*', null, `order by id desc limit ${page * count},${count}`)
        return res.json(base.returnJson(200, results, 'success'))
    } catch (err) {
        return res.json(base.returnJson(10004, err, '服务器错误'))
    }
})

router.post('/', async (req, res) => {
    try {
        const {content, title, intro, rander_content} = req.body
        const token = req.cookies.token;
        let userinfo = await base.userinfo(token)
        if (userinfo.code != 200) {
            return res.json(userinfo)
        }
        let data = {
            content,
            title,
            intro,
            rander_content,
        }
        if (utils.hasNullParams(data)) {
            return res.json(base.returnJson(10001, null, '请输入完整信息'))
        }
        data = {
            ...data,
            account_id: userinfo.data.id,
            author: userinfo.data.account
        }
        const results = await sql.insert(data)
        return res.json(base.returnJson(200, {}, 'success'))
    } catch (err) {
        return res.json(base.returnJson(10004, err, '服务器错误'))
    }
})
export default router
