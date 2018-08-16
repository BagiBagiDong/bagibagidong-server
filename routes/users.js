const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/users')

router
    .get('/', ControllerUser.get)
    .post('/', ControllerUser.add)

module.exports = router