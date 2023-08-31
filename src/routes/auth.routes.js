const Router = require('express')
const {login,register,logout,profile} = require('../controllers/auth.controller')
const {authRequired} = require('../middlewares/validateToken')
const { validateField } = require('../middlewares/field-validator')
const { resgisterSchema, loginSchema } = require('../schemas/auth-schema')
const router = Router()



router.post('/register', validateField(resgisterSchema),register)

router.post('/login', validateField(loginSchema),login)

router.get('/logout',logout)

router.get('/profile', authRequired, profile)


module.exports = router