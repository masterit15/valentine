const { Router } = require("express")
const router = Router()
const ValentineController = require('../controllers/valentine.controller')

// Добавляем пользователя
router.post('/valentine', ValentineController.addValentine)

module.exports = router