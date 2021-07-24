const express = require('express')
const Router = express.Router()

// Configuration
const { API_VERSION } = require('../config')
// Auth Middleware
const authorization = require('../middlewares/authorization')

module.exports = Router
