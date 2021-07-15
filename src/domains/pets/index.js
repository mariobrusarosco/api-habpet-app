const express = require('express')
const Router = express.Router()

// const { API_VERSION } = process.env
const { API_VERSION } = require('../../config')

console.log({ API_VERSION})
// Auth Middleware
// const authorization = require('../middlewares/authorization')

const pets = require('./api')

Router.use(`${API_VERSION}/pets`, pets)

module.exports = Router
