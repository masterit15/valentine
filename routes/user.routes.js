const { Router } = require("express")
const router = Router()
const UserControllers = require('../controllers/user.controllers')

// Добавляем пользователя
router.post('/user', UserControllers.addUser())

module.exports = router