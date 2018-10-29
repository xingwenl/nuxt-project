import base from './base'
import user from './account'
const router = base.Router()
router.use('/account', user)
export default router
