const questionController = require('../controllers/question.controller');

// ADD QUESTION
export const AddQuestion = async (req, res) => {
    /*  #swagger.tags = ['Question']
        #swagger.description = 'Endpoint to add a question.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Question information.',
            required: true,
            schema: { $ref: "#/definitions/AddQuestion" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = questionController.AddQuestion(req, res);

    return res.status(200).send(data);
}

// GET ALL QUESTIONS
export const GetAllQuestions = async (req, res) => {
    /*  #swagger.tags = ['Question']
        #swagger.description = 'Endpoint to get all questions.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = questionController.GetAllQuestions(req, res);

    return res.status(200).send(data);
}

// GET QUESTION BY ID
export const GetQuestionById = async (req, res) => {
    /*  #swagger.tags = ['Question']
        #swagger.description = 'Endpoint to get the specific question.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = questionController.GetQuestionById(req, res);

    return res.status(200).send(data);
}

// UPDATE QUESTION BY ID
export const UpdateQuestionById = async (req, res) => {
    /*  #swagger.tags = ['Question']
        #swagger.description = 'Endpoint to update the specific question.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Question information.',
            required: true,
            schema: { $ref: "#/definitions/UpdateQuestion" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = questionController.UpdateQuestionById(req, res);

    return res.status(200).send(data);
}

// DELETE QUESTION BY ID
export const DeleteQuestionById = async (req, res) => {
    /*  #swagger.tags = ['Question']
        #swagger.description = 'Endpoint to delete the specific question.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = questionController.DeleteQuestionById(req, res);

    return res.status(200).send(data);
}
