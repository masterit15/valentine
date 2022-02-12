const { Router } = require("express")
const router = Router()
const DepartamentControllers = require('../controllers/departament.controller')

// Добавляем департамент
router.post('/departament', DepartamentControllers.addDepartament)

// Получаем департаменты
router.get('/departament', DepartamentControllers.getDepartament)

module.exports = router