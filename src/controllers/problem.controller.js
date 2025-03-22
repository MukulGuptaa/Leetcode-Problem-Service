const { StatusCodes } = require('http-status-codes');
const NotImplementedError = require('../errors/notImplemented.error');
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res){
    return res.json({message: "Problem controller is up"});
}

async function addProblem(req, res, next){
    try{
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newProblem
        });
    } catch(error) {
        next(error);
    }
}

async function getProblem(req, res, next){
    try{
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched a problem',
            error: {},
            data: problem
        });
    } catch(error) {
        next(error);
    }
}

async function getProblems(req, res, next){
    try{
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all problems',
            error: {},
            data: problems
        });
    } catch(error) {
        next(error);
    }
}

function updateProblem(req, res, next){
    try{
        throw new NotImplementedError("updateProblem");
    } catch(error) {
        next(error);
    }
}

async function deleteProblem(req, res, next){
    try{
        const problem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted a problem',
            error: {},
            data: req.params.id
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}