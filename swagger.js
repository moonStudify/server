const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Moonstudify",
        description: "API Documentation for Moonstudify"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    definitions: {
        Parents: {
            father: "Simon Doe",
            mother: "Marie Doe"
        },
        User: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                $ref: '#/definitions/Parents'
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company"
                    }
                }
            ]
        },
        AddUser: {
            userId: "string",
            email: "string",
            password: "string",
            role: "string",
            classes: [],
            avatarUrl: "string",
            status: "string",
            fullname: "string",
            dob: "string",
            createDate: "string",
            updateDate: "string",
        },
        AddNewFeed: {
            newFeedId: "string",
            comments: [],
            content: "string",
            classId: "string",
            attachmentLink: "string",
            dateCreate: "string",
            newFeedUrl: "string",
            teacherId: "string",
        },
        AddQuestion: {
            questionId: "string",
            type: "string",
            content: "string",
            answers: [],
            correctAnswers: [],
            thumbnailUrl: "string",
            maxPoint: "string",
        },
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/endpoints/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')           // Your project's root file
})