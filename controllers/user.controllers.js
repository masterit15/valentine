const bcrypt = require('bcrypt')
const User = require('../models/user.model')
class UserControllers {
  async addUser(req, res) {
    try {
      const { username, departamentId, avatar } = req.body
      let password = await hashPassword(username)
      const user = await User.create({
        avatar,
        username,
        password,
        departamentId
      });

      res.status(200).json({
        success: true,
        user
      })
    } catch (error) {

      res.status(400).json(error)
    }
  }

  async getUser(req, res) {
    const users = await User.findAll({ raw: true })
    res.json({ success: true, users })
  }

  async updateUser(req, res) {
    try {
      const { id, username, departamentId, avatar } = req.query
      const user = await User.update({ username, departamentId, avatar }, {
        where: {
          id
        }
      })
      res.json({ success: true, user })
    } catch (error) {
      res.status(400).json({ success: false })
    }

  }

  async deleteUser(req, res) {
    const id = res.query.id
    try {
      await User.destroy({
        where: {
          id
        }
      })
      res.json({ success: true })
    } catch (error) {
      res.status(400).json({ success: false })
    }
    res.json({ success: true })
  }

}
function hashPassword(name) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(name, salt, function (err, hash) {
        if (err) reject(err)
        resolve(hash)
      })
    })
  })
}
module.exports = new UserControllers