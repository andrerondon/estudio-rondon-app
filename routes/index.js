const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/test', (req, res) => {
  res.render('teste')
})

router.get('/euteamo', (req, res) => {
  res.render('neia')
})

module.exports = router
