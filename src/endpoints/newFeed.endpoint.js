const newFeed = require('../controllers/newFeed.controller');

// ADD NEWFEED
export const AddNewFeed = async (req, res) => {
    /*  #swagger.tags = ['NewFeed']
        #swagger.description = 'Endpoint to add a newFeed.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'NewFeed information.',
            required: true,
            schema: { $ref: "#/definitions/AddNewFeed" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = newFeed.AddNewFeed(req, res);

    return res.status(200).send(data);
}

// GET ALL NEWFEEDS
export const GetAllNewFeeds = async (req, res) => {
    /*  #swagger.tags = ['NewFeed']
        #swagger.description = 'Endpoint to get all newFeeds.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = newFeed.GetAllNewFeeds(req, res);

    return res.status(200).send(data);
}

// GET NEWFEED BY ID
export const GetNewFeedById = async (req, res) => {
    /*  #swagger.tags = ['NewFeed']
        #swagger.description = 'Endpoint to get the specific newFeed.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = newFeed.GetNewFeedById(req, res);

    return res.status(200).send(data);
}

// UPDATE NEWFEED BY ID
export const UpdateNewFeedById = async (req, res) => {
    /*  #swagger.tags = ['NewFeed']
        #swagger.description = 'Endpoint to update the specific newFeed.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'NewFeed information.',
            required: true,
            schema: { $ref: "#/definitions/AddNewFeed" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = newFeed.UpdateNewFeedById(req, res);

    return res.status(200).send(data);
}

// DELETE NEWFEED BY ID
export const DeleteNewFeedById = async (req, res) => {
    /*  #swagger.tags = ['NewFeed']
        #swagger.description = 'Endpoint to delete the specific newFeed.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = newFeed.DeleteNewFeedById(req, res);

    return res.status(200).send(data);
}