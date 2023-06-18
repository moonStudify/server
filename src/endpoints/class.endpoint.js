const classEndpoint = require('./endpoints/class.endpoint');

// GET ALL CLASSES
export const GetAllClasses = (req, res) => {
    /*  #swagger.tags = ['Class']
        #swagger.description = 'Endpoint to get all classes.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classEndpoint.GetAllClasses(req, res);

    return res.status(200).send(data);
}

// GET CLASS BY ID
export const GetClassById = (req, res) => {
    /*  #swagger.tags = ['Class']
        #swagger.description = 'Endpoint to get the specific class.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classEndpoint.GetClassById(req, res);

    return res.status(200).send(data);
}

// ADD CLASS
export const AddClass = (req, res) => {
    /*  #swagger.tags = ['Class']
        #swagger.description = 'Endpoint to add a class.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Class information.',
            required: true,
            schema: { $ref: "#/definitions/AddClass" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classEndpoint.AddClass(req, res);

    return res.status(200).send(data);
}

// UPDATE CLASS BY ID
export const UpdateClassById = (req, res) => {
    /*  #swagger.tags = ['Class']
        #swagger.description = 'Endpoint to update the specific class.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Class information.',
            required: true,
            schema: { $ref: "#/definitions/AddClass" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classEndpoint.UpdateClassById(req, res);

    return res.status(200).send(data);
}

// DELETE CLASS BY ID
export const DeleteClassById = (req, res) => {
    /*  #swagger.tags = ['Class']
        #swagger.description = 'Endpoint to delete the specific class.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classEndpoint.DeleteClassById(req, res);

    return res.status(200).send(data);
}
