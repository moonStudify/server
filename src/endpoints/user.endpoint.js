const user = require('./controllers/user.controller');

/** Get all users
 * 
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const GetAllUsers = (req, res) => {
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to get all users.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = user.GetAllUsers(req, res);

    return res.status(200).send(data);
}

// Add user
export const AddUser = (req, res) => {
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to add a user.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = user.AddUser(req, res);

    return res.status(200).send(data);
}

// Get user by id
export const GetUserById = async (req, res) => {
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to get the specific user.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = user.GetUserById(req, res);

    return res.status(200).send(data);
};

// Update user by id
export const UpdateUserById = async (req, res) => {
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to update the specific user.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = user.UpdateUserById(req, res);

    return res.status(200).send(data);
}

// Delete user by id
export const DeleteUserById = async (req, res) => {
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete the specific user.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = user.DeleteUserById(req, res);

    return res.status(200).send(data);
}
