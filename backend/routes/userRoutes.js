

const express =require('express')
const router =express.Router()

const{registerUser ,LoginUser ,ShowUser} =require('../controllers/userController')


router.post('/',registerUser)

router.get('/login',LoginUser)

router.get('/Profile',ShowUser)

module.exports =router