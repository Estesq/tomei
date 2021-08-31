const {
  create,
  remove,
  display,
  update
} = require('../controllers/userController')
const upload = require('../middlewares/fileUpload')

var userRouter = require('express').Router()

userRouter.post('/create', upload.single('avatar'), create)
userRouter.post('/remove/:id', remove)
userRouter.get('/display', display)
userRouter.post('/update/:id', upload.single('avatar'), update)

module.exports = userRouter
