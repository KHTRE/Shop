const Router = require('express');
const router = new Router;

const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const deviceRouter = require('./deviceRouter')

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;