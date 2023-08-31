const Router = require('express')
const { authRequired } = require('../middlewares/validateToken')


const { agregar,
    getprops,
    getprop,
    deleteprop,
    updateprop

} = require('../controllers/prop.controller')


const router = Router()


router.post('/agregar', authRequired, agregar)
router.get('/propiedades', authRequired, getprops)
router.get('/propiedades/:id', authRequired, getprop)
router.delete('/propiedades/:id', authRequired, deleteprop)
router.put('/propiedades/:id',authRequired, updateprop)


module.exports = router