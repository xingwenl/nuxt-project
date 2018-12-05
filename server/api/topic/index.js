import base, { Sql, utils } from '../base/index'
import multer from 'multer'
const router = base.Router()
const sql = new Sql('topic')
const topic_img = base.upload().single('topic_img') // 名称一定要已有

router.post('/upload_images', (req, res) => {
    try {
        topic_img(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.json(base.returnJson(10006, '图片未找到', '上传失败'))
                // A Multer error occurred when uploading.
            } else if (err) {
                // An unknown error occurred when uploading.
                return res.json(base.returnJson(10006, err, '上传失败'))
            }
            if (req.file) {
                return res.json(base.returnJson(200, {
                    path: req.file.path
                }, '上传成功'))
            }
            return res.json(base.returnJson(10006, '图片未找到', '上传失败'))
        })
        
    } catch (err) {
        return res.json(base.returnJson(10004, err, '服务器错误'))
    }
})

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
