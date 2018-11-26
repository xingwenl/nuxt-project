import base from '../base/index'
import utils from '../../utils/index'
const router = base.Router()
const sql = base.sql.T('topic')

router.get('/topic', async (req, res) => {
    const { page, count } = req.body
    
})