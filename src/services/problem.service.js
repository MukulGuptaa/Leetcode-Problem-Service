const sanitizeMarkdown = require("../utils/index");

class ProblemService{
    
    constructor(problemRespository){
        this.problemRespository = problemRespository;
    }

    async createProblem(problemData){

        try{
            // 1. sanitize the marldown for description
            problemData.description = sanitizeMarkdown.markdownSanitizer(problemData.description);

            const problem = await this.problemRespository.createProblem(problemData);
            return problem;
            
        } catch(error) {
            console.log(error);
            throw error;
        }
        
    }

}

module.exports = ProblemService;