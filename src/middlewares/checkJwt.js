require('dotenv').config();
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

if (!issuerBaseUrl) {
    throw new Error('Please make sure that the file .env is in place and populated');
}
if (!audience) {
    console.log('AUTH0_AUDIENCE not set in .env. Shutting down API server.');
    process.exit(1);
}

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`
    }),
    audience: audience,
    issuer: `${issuerBaseUrl}/`,
    algorithms: ['RS256']
});

module.exports = checkJwt;