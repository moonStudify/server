require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')()
const port = process.env.PORT || 5000;
const hostUrl = process.env.HOST_URL || `localhost:${port}`

const doc = {
    info: {
        version: "1.0.0",
        title: "Moonstudify",
        description: "API Documentation for Moonstudify"
    },
    host: hostUrl,
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
        Bearer: {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    },
    security: [{ "Bearer": [] }],
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
        AddClass: {
            classId: "string",
            className: "string",
            teacherId: "string",
            students: [],
            dateCreate: "string",
            dateUpdate: "string",
            bannerUrl: "string",
        },
        AddTest: {
            testId: "string",
            classId: "string",
            questions: [],
            dateCreate: "string",
            dateUpdate: "string",
            name: "string",
            description: "string",
            duration: "string",
            maxPoint: "string",
            teacherId: "string",
        },
        AddTakeTest: {
            takeTestId: "string",
            testId: "string",
            userId: "string",
            submitTime: "string",
            point: "string",
            questions: [],
            chosenAnswer: [],
            dateSubmit: "string",
        },
        LoginWithGoogle: {
            email: "string",
            password: "string",
        },
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/endpoints/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')           // Your project's root file
})