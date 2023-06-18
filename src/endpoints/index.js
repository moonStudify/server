const userEndpoints = require('./user.endpoint')
const commentEndpoints = require('./comment.endpoint')
const newFeedEndpoints = require('./newFeed.endpoint')
const questionEndpoints = require('./question.endpoint')
const classEndpoints = require('./class.endpoint')
const testEndpoints = require('./test.endpoint')

module.exports = function (app) {

    // User endpoints
    app.get('/user/', userEndpoints.GetAllUsers)
    app.get('/user/:id', userEndpoints.GetUserById)
    app.post('/user/add', userEndpoints.AddUser)
    app.put('/user/:id', userEndpoints.UpdateUserById)
    app.delete('/user/:id', userEndpoints.DeleteUserById)

    // Comment endpoints
    app.get('/comment/', commentEndpoints.GetAllComments)
    app.get('/comment/:id', commentEndpoints.GetCommentById)
    app.post('/comment/add', commentEndpoints.AddComment)
    app.put('/comment/:id', commentEndpoints.UpdateCommentById)
    app.delete('/comment/:id', commentEndpoints.DeleteCommentById)

    // NewFeed endpoints
    app.get('/newFeed/', newFeedEndpoints.GetAllNewFeeds)
    app.get('/newFeed/:id', newFeedEndpoints.GetNewFeedById)
    app.post('/newFeed/add', newFeedEndpoints.AddNewFeed)
    app.put('/newFeed/:id', newFeedEndpoints.UpdateNewFeedById)
    app.delete('/newFeed/:id', newFeedEndpoints.DeleteNewFeedById)
    
    // Question endpoints
    app.get('/question/', questionEndpoints.GetAllQuestions)
    app.get('/question/:id', questionEndpoints.GetQuestionById)
    app.post('/question/add', questionEndpoints.AddQuestion)
    app.put('/question/:id', questionEndpoints.UpdateQuestionById)
    app.delete('/question/:id', questionEndpoints.DeleteQuestionById)
    
    // Class endpoints
    app.get('/class/', classEndpoints.GetAllClasses)
    app.get('/class/:id', classEndpoints.GetClassById)
    app.post('/class/add', classEndpoints.AddClass)
    app.put('/class/:id', classEndpoints.UpdateClassById)
    app.delete('/class/:id', classEndpoints.DeleteClassById)

    // Test endpoints
    app.get('/test/', testEndpoints.GetAllTests)
    app.get('/test/:id', testEndpoints.GetTestById)
    app.post('/test/add', testEndpoints.AddTest)
    app.put('/test/:id', testEndpoints.UpdateTestById)
    app.delete('/test/:id', testEndpoints.DeleteTestById)
    
}
