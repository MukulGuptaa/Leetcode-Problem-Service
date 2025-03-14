const { StatusCodes } = require('http-status-codes');
const NotImplementedError = require('../errors/notImplemented.error');

function pingProblemController(req, res){
    return res.json({message: "Problem controller is up"});
}

function addProblem(req, res, next){
    try{
        throw new NotImplementedError("addProblem");
    } catch(error) {
        next(error);
    }
}

function getProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function getProblems(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function updateProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function deleteProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}