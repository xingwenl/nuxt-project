import base from './base'
import user from './account'
import topic from './topic'
import log from './log'
const router = base.Router()
router.use('/account', user)
router.use('/topic', topic)
router.use('/logs', log)
export default router
