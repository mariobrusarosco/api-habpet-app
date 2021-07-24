const express = require('express')
const Router = express.Router()

// const { fileLogger } = require('../../../utils/logger')

// Project's Config
// const { errorsMap, USER_COOKIE_NAME } = require('../../config')

// Models
const Pet = require('../model')

// MiddlewaresTokenExpiredError
// const authorization = require('../../middlewares/authorization')

Router.get('/', async (_, res) => {
  try {

    const allPets = await Pet.find()

    res.status(200).send(allPets)
  }catch(error) {
    res.status(500).send(error)
  }
})

Router.post('/', async (req, res) => {
  res.status(200).send("coming soon")
})

Router.put('/', async (req, res) => {
  res.status(200).send("coming soon")
})

module.exports = Router
