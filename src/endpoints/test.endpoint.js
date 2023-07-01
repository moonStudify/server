const testController = require('../controllers/test.controller');

// GET ALL TESTS
export const GetAllTests = (req, res) => {
    /*  #swagger.tags = ['Test']
        #swagger.description = 'Endpoint to get all tests.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = testController.GetAllTests(req, res);

    return res.status(200).send(data);
}

// GET TEST BY ID
export const GetTestById = (req, res) => {
    /*  #swagger.tags = ['Test']
        #swagger.description = 'Endpoint to get the specific test.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = testController.GetTestById(req, res);

    return res.status(200).send(data);
}

// ADD TEST
export const AddTest = (req, res) => {
    /*  #swagger.tags = ['Test']
        #swagger.description = 'Endpoint to add a test.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Test information.',
            required: true,
            schema: { $ref: "#/definitions/AddTest" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = testController.AddTest(req, res);

    return res.status(200).send(data);
}

// UPDATE TEST BY ID
export const UpdateTestById = (req, res) => {
    /*  #swagger.tags = ['Test']
        #swagger.description = 'Endpoint to update the specific test.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Test information.',
            required: true,
            schema: { $ref: "#/definitions/UpdateTest" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = testController.UpdateTestById(req, res);

    return res.status(200).send(data);
}

// DELETE TEST BY ID
export const DeleteTestById = (req, res) => {
    /*  #swagger.tags = ['Test']
        #swagger.description = 'Endpoint to delete the specific test.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = testController.DeleteTestById(req, res);

    return res.status(200).send(data);
}
