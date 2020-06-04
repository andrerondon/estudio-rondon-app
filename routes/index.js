const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/test', (req, res) => {
  res.render('teste')
})

router.get('/test/neiaeuteamo', (req, res) => {
  res.render('neia')
})

module.exports = router
