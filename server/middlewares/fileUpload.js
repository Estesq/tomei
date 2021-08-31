var multer = require('multer')
var mime = {
  'image/png': '.png'
}
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/images/avatar')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + mime[file.mimetype])
  }
})

var upload = multer({ storage: storage })

module.exports = upload
