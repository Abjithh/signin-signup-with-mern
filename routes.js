const express = require('express')
const Router = express.Router()
const{ signupHandler, signinHandler } = require('./auth')

Router.post('/signup', signupHandler)
Router.post('/signin', signinHandler)

module.exports = Router