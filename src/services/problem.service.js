const sanitizeMarkdown = require("../utils/index");

class ProblemService{
    
    constructor(problemRespository){
        this.problemRespository = problemRespository;
    }

    async createProblem(problemData){

        // 1. sanitize the marldown for description
        problemData.description = sanitizeMarkdown.markdownSanitizer(problemData.description);

        const problem = await this.problemRespository.createProblem(problemData);
        return problem;
            
    }

    async getAllProblems(){
    
        const problems = await this.problemRespository.getAllProblems();
        return problems;
        
    }

    async getProblem(id){
        const problem = await this.problemRespository.getProblem(id);
        return problem; 
    }


}

module.exports = ProblemService;