const { StatusCodes } = require("http-status-codes")

class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = CustomAPIError
