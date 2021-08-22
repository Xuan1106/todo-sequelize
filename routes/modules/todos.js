const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User


router.get('/new', (req, res) => {
  res.send('Add new todo')
})

router.post('/new', (req, res) => {

})

router.get('/:id', (req,res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.get(':id/edit', (req,res) => {

})

router.put(':id', (req, res) => {

})

router.delete(':id/', (req, res) => {

})

module.exports = router