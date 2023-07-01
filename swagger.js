require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')()
const port = process.env.PORT || 5000;
const hostUrl = process.env.HOST_URL || `localhost:${port}`
const schema = process.env.NODE_ENV === 'production' ? 'https' : 'http';

const UtcNow = new Date().toISOString();

const doc = {
    info: {
        version: "1.0.0",
        title: "Moonstudify",
        description: "API Documentation for Moonstudify"
    },
    host: `${hostUrl}`,
    basePath: "/",
    schemes: [schema],
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
            email: "string",
            avatarUrl: "string",
            status: "string",
            fullname: "string",
            dob: UtcNow,
        },
        UpdateUser: {
            avatarUrl: "string",
            status: "string",
            fullname: "string",
            dob: UtcNow,
        },
        AddNewFeed: {
            newFeedId: "string",
            comments: [],
            content: "string",
            classId: "string",
            attachmentLink: "string",
            dateCreate: UtcNow,
            newFeedUrl: "string",
            teacherId: "string",
        },
        AddQuestion: {
            type: "string",
            content: "string",
            answers: [],
            correctAnswers: "string",
            thumbnailUrl: "string",
            maxPoint: 0,
        },
        UpdateQuestion: {
            type: "string",
            content: "string",
            answers: [],
            correctAnswers: "string",
            thumbnailUrl: "string",
            maxPoint: 0,
        },
        AddComment: {
            commentId: "string",
            newFeedId: "string",
            content: "string",
            dateCreate: UtcNow,
        },
        AddClass: {
            classCode: "string",
            description: "string",
            newfeeds: [],
            users: [],
            name: "string",
            tests: [],
            teacherId: "string",
            bannerUrl: "string",
        },
        UpdateClass: {
            description: "string",
            newfeeds: [],
            users: [],
            name: "string",
            tests: [],
            bannerUrl: "string",
        },
        AddTest: {
            classId: "string",
            classCode: "string",
            description: "string",
            startTime: UtcNow,
            endTime: UtcNow,
            url: "string",
            questions: [],
            questionOrders: [],
            maxPoint: 0,
            bannerUrl: "string",
        },
        UpdateTest: {
            description: "string",
            startTime: UtcNow,
            endTime: UtcNow,
            url: "string",
            questions: [],
            questionOrders: [],
            maxPoint: 0,
            bannerUrl: "string",
        },
        AddTakeTest: {
            takeTestId: "string",
            testId: "string",
            userId: "string",
            submitTime: UtcNow,
            point: 0,
            questions: [],
            chosenAnswer: [],
            dateSubmit: UtcNow,
        },
        LoginWithGoogle: {
            email: "string",
            password: "string",
        },
        JoinClass: {
            classId: "string",
            studentId: "string",
        },
        UpdateStudentStatusInClass: {
            classId: "string",
            studentId: "string",
            status: "string",
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/endpoints/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')           // Your project's root file
})
