const express = require('express')
const verifyToken = require('./../verify-token') // <--
const router = express.Router()
const controller = require('./../controllers/home')

router.get('/', controller.index) 
//     res.send('Selamat datang di Perpustakaan')
// })

// router.get('/home', verifyToken, function (req, res) { // <--
//     res.send({
//         user: req.user
//     })
// })

router.get('/home', verifyToken, controller.home) 

module.exports = router