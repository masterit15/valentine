const Departament = require('../models/departament.model')
class DepartamentController {
  async addDepartament(req, res) {
    try {
      const { name } = req.body
      const departament = await Departament.create({
        name
      })
      res.json({ success: true,  departament})
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
  async getDepartament(req, res) {
    const departaments = await Departament.findAll({raw: true})
    res.json({ success: true, departaments })
  }
  updateDepartament(req, res) {
    res.json({ success: true })
  }
  deleteDepartament(req, res) {
    res.json({ success: true })
  }
}

module.exports = new DepartamentController()