const express = require('express')
const MovieController = require('./../controllers/movie')
const route = express.Router()

route.get('/movies', MovieController.get)

route.get('/movie/:id', MovieController.getById)

module.exports = route 