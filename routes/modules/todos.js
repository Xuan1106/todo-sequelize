const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.send('Add new todo')
})

router.post('/new', (req, res) => {

})

router.get(':id/edit', (req,res) => {

})

router.put(':id', (req, res) => {

})

router.delete(':id/', (req, res) => {

})

module.exports = router