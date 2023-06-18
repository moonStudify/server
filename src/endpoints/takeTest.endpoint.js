const takeTestController = require('../controllers/takeTest.controller');

// ADD TAKE TEST
export const AddTakeTest = (req, res) => {
    /*  #swagger.tags = ['Take Test']
        #swagger.description = 'Endpoint to add a take test.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Take test information.',
            required: true,
            schema: { $ref: "#/definitions/AddTakeTest" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = takeTestController.AddTakeTest(req, res);

    return res.status(200).send(data);
}

// GET ALL TAKE TESTS
export const GetAllTakeTests = (req, res) => {
    /*  #swagger.tags = ['Take Test']
        #swagger.description = 'Endpoint to get all take tests.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = takeTestController.GetAllTakeTests(req, res);

    return res.status(200).send(data);
}

// GET TAKE TEST BY ID
export const GetTakeTestById = (req, res) => {
    /*  #swagger.tags = ['Take Test']
        #swagger.description = 'Endpoint to get the specific take test.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = takeTestController.GetTakeTestById(req, res);

    return res.status(200).send(data);
}

// UPDATE TAKE TEST BY ID
export const UpdateTakeTestById = (req, res) => {
    /*  #swagger.tags = ['Take Test']
        #swagger.description = 'Endpoint to update the specific take test.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Take test information.',
            required: true,
            schema: { $ref: "#/definitions/AddTakeTest" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = takeTestController.UpdateTakeTestById(req, res);

    return res.status(200).send(data);
}

// DELETE TAKE TEST BY ID
export const DeleteTakeTestById = (req, res) => {
    /*  #swagger.tags = ['Take Test']
        #swagger.description = 'Endpoint to delete the specific take test.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = takeTestController.DeleteTakeTestById(req, res);

    return res.status(200).send(data);
}
