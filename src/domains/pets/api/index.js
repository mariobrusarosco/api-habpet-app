const express = require('express')
const Router = express.Router()

// const { fileLogger } = require('../../../utils/logger')

// Project's Config
// const { errorsMap, USER_COOKIE_NAME } = require('../../config')

// Models
const Pets = require('../model')

// MiddlewaresTokenExpiredError
// const authorization = require('../../middlewares/authorization')


Router.get('/', async (req, res) => {
  res.status(200).send([{
    id: "4dfs3242",
    name: "Cute Dog",
    description: "A cute dog"
  },
  {
    id: "gf435",
    name: "Cute Cat",
    description: "A cute cat"
  }])
})

Router.post('/', async (req, res) => {
  res.status(200).send("coming soon")
})

Router.put('/', async (req, res) => {
  res.status(200).send("coming soon")
})

module.exports = Router
