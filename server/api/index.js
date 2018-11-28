import base from './base'
import user from './account'
import topic from './topic'
const router = base.Router()
router.use('/account', user)
router.use('/topic', topic)
export default router
