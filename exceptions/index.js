const RESTApi = require('faster-api-deploy');

const AppError = RESTApi.ERRORS.AppError
const AppNotExists = RESTApi.ERRORS.AppNotExists
const DBError = RESTApi.ERRORS.DBError
const NotFound = RESTApi.ERRORS.NotFound
const UserDisabled = RESTApi.ERRORS.UserDisabled
const UserExists = RESTApi.ERRORS.UserExists
const UserNotAuthorized = RESTApi.ERRORS.UserNotAuthorized
const UserNotFound = RESTApi.ERRORS.UserNotFound

module.exports = {
    AppError,
    AppNotExists,
    DBError,
    NotFound,
    UserDisabled,
    UserExists,
    UserNotAuthorized,
    UserNotFound
};