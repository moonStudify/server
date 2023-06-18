const comment = require('../endpoints/comment.endpoint');

// GET ALL COMMENTS
export const GetAllComments = async (req, res) => {
    /*  #swagger.tags = ['Comment']
        #swagger.description = 'Endpoint to get all comments.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = comment.GetAllComments(req, res);

    return res.status(200).send(data);
}

// GET COMMENT BY ID
export const GetCommentById = async (req, res) => {
    /*  #swagger.tags = ['Comment']
        #swagger.description = 'Endpoint to get the specific comment.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = comment.GetCommentById(req, res);

    return res.status(200).send(data);
}

// ADD COMMENT
export const AddComment = async (req, res) => {
    /*  #swagger.tags = ['Comment']
        #swagger.description = 'Endpoint to add a comment.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Comment information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = comment.AddComment(req, res);

    return res.status(200).send(data);
}

// UPDATE COMMENT BY ID
export const UpdateCommentById = async (req, res) => {
    /*  #swagger.tags = ['Comment']
        #swagger.description = 'Endpoint to update the specific comment.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Comment information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = comment.UpdateCommentById(req, res);

    return res.status(200).send(data);
}

// DELETE COMMENT BY ID
export const DeleteCommentById = async (req, res) => {
    /*  #swagger.tags = ['Comment']
        #swagger.description = 'Endpoint to delete the specific user.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = comment.DeleteCommentById(req, res);

    return res.status(200).send(data);
}
