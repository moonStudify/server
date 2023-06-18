const authController = require('../controllers/auth.controller');

// Login with Google API
export const LoginWithGoogle = async (req, res) => {
    /*  #swagger.tags = ['Auth']
        #swagger.description = 'Endpoint to login with Google API.' 
        #swagger.headers['Authorization'] = {
            in: 'header',
            schema: 'Bearer',
            bearerFormat: 'JWT',
            type: 'http',
        }
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Google information.',
            required: true,
            schema: { $ref: "#/definitions/LoginWithGoogle" }
        }       
    */
    res.setHeader('Content-Type', 'application/json')
    const data = authController.LoginWithGoogle(req, res);

    return res.status(200).send(data);
}