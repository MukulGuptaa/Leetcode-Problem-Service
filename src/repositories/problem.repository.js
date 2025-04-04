const logger = require("../config/logger.config");
const NotFoundError = require("../errors/notFound.error");
const NotImplementedError = require("../errors/notImplemented.error");
const { Problem } = require("../models");

class ProblemRepository{
    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases ? problemData.testCases : [],
                codeStubs: problemData.codeStubs,
                difficulty: problemData.difficulty
            });
            return problem;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try{
            const problems = await Problem.find({});
            return problems;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFoundError("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem){
                logger.error(`Problem with id: ${id} not found in db`);
                throw new NotFoundError("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, problemData){
        try {
            const problem = await Problem.findByIdAndUpdate(id, problemData, {new: true}); // check this
            if(!problem){
                throw new NotFoundError("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;