import base from '../base/index'
import utils from '../../utils/index'
const router = base.Router()
const sql = base.sql

router.get('/all_user', async (req, res) => {
    const results = await sql.T('user').search()
    return res.json(base.returnJson(
        200,
        results,
        'success'
    ))
})
// 查询个人信息
router.post('/userinfo', async (req, res) => {
    try{
        const token = req.body.token;
        
        if (utils.isEmpty(token)) {
            return res.json(base.returnJson(10001,'token不存在',"未登录"));
        }

        const results = await sql.T('user_info').search('username,real_name,email,sex', {
            token:token
        });

        if (utils.isEmptyObject(results)) {
            return res.json(base.returnJson(200, 'token错误', "登录失效，请重新登录"));
        }

        return res.json(base.returnJson(200, results[0], "查询成功"));
    }catch(e){
        return res.json(base.returnJson(10004, e, "服务器错误"));
    }
})

router.post('/register', async (req, res) => {
    try{
        const username = req.body.username,
              real_password = req.body.password;

        if (utils.isEmpty(username) || utils.isEmpty(real_password)) {
            return res.json(base.returnJson(10001,'error',"请填写完整信息"));
        }


        const isExist = await sql.T('user_info').search('*', {'username':username})
        if (!utils.isEmptyObject(isExist)) {
            return res.json(base.returnJson(10002,'error',"改账号已存在，请重新输入账号"));
        }
        
        const password = utils.sha1(req.body.password)

        const results = sql.T('user_info').insert({
            username: username,
            password: password,
            real_password: real_password
        })

        res.json(base.returnJson(200, 'success', "注册成功"));
    }catch(e){
        return res.json(base.returnJson(10004, e, "服务器错误"));
    }
})

router.post('/login', async (req, res) => {
    try{
        const username = req.body.username,
              real_password = req.body.password;

        if (utils.isEmpty(username) || utils.isEmpty(real_password)) {
            return res.json(base.returnJson(10001, 'error', "请填写完整信息"));
        }

        // 获取加密密码
        const password = utils.sha1(req.body.password)
        const isExist = await sql.T('user_info').search('*', {
            username: username,
            password: password
        })
        if (utils.isEmptyObject(isExist)) {
            return res.json(base.returnJson(10003, 'error', "账号或密码错误"));
        }

        // 获取token
        const token = utils.hmac(password);
        const update = await sql.query(`update user_info set token="${token}" where username="${username}"`)
        if (update.changedRows == 0) {
            return res.json(base.returnJson(200, update, "更新失败"));
        }

        const results = await sql.T('user_info').search('username,token', {
            username:username
        });

        return res.json(base.returnJson(200, results[0], "登录成功"));
    }catch(e){
        return res.json(base.returnJson(10004, e, "服务器错误"));
    }
})
export default router