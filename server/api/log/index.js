import base, { Sql } from '../base/index'
import utils from '../../utils/index'
const router = base.Router()
const sql = new Sql('sys_logs')


// 查询个人信息
router.post('/create', async (req, res) => {
    try{
        const { title, info, type, addr } = req.body
        console.log(req.body)

        await sql.insert({
            info,
            title,
            type,
            addr,
        })

        return res.json(base.returnJson(200, null, "查询成功"));
    }catch(e){
        return res.json(base.returnJson(10004, e, "服务器错误"));
    }
})

export default router