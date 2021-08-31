const { Op } = require('sequelize')
const User = require('../models/userModel')

exports.create = async (req, res) => {
  const { fullName, email, password } = req.body
  console.log(req.file)
  try {
    let result = await User.create({
      fullName,
      email,
      password,
      avatar: req.file.path
    })
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
exports.remove = async (req, res) => {
  try {
    let result = await User.destroy({
      where: { id: { [Op.eq]: parseInt(req.params.id) } }
    })
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
exports.display = async (req, res) => {
  try {
    let result = await User.findAndCountAll()
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
exports.update = async (req, res) => {
  console.log(req.body)
  try {
    let result = await User.update(req.body, {
      where: { id: parseInt(req.params.id) }
    })
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
