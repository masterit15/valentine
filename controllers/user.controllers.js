const User = require('../models/user.model')
class UserControllers {
  async addUser(req, res) {
    const { username, departamentId } = req.body
    try {
      const user = await User.create({
        username,
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
      const { id, username, departamentId, password, avatar } = req.query
      const user = await User.update({ username, departamentId, password, avatar }, {
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
      res.json({ success: true})
    } catch (error) {
      res.status(400).json({ success: false })
    }
    res.json({ success: true })
  }
}

module.exports = new UserControllers