const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFoundError extends BaseError{
    constructor(resourceName, resourceValue){
        super("NotFoundError", StatusCodes.NOT_FOUND,`The requested resource: ${resourceName} with value: ${resourceValue} was not found`, {
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFoundError;