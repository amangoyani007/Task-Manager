const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class UnAuthenticatedError extends Error {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = 401
    }
  }
  
  module.exports = UnAuthenticatedError
