const classStudentController = require('../controllers/classStudent.controller');

// GET ALL STUDENTS IN CLASS
export const GetAllStudentsInClass = (req, res) => {
    /*  #swagger.tags = ['Class Student']
        #swagger.description = 'Endpoint to get all students in class.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classStudentController.GetAllStudentsInClass(req, res);

    return res.status(200).send(data);
}

// FILTER STUDENTS IN CLASS BY STATUS
export const FilterStudentsInClassByStatus = (req, res) => {
    /*  #swagger.tags = ['Class Student']
        #swagger.description = 'Endpoint to filter students in class by status.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classStudentController.FilterStudentsInClassByStatus(req, res);

    return res.status(200).send(data);
}

// JOIN CLASS
export const JoinClass = (req, res) => {
    /*  #swagger.tags = ['Class Student']
        #swagger.description = 'Endpoint to join class.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Class Student information.',
            required: true,
            schema: { $ref: "#/definitions/JoinClass" }
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classStudentController.JoinClass(req, res);

    return res.status(200).send(data);
}

// UPDATE STUDENT STATUS IN CLASS
export const UpdateStudentStatusInClass = (req, res) => {
    /*  #swagger.tags = ['Class Student']
        #swagger.description = 'Endpoint to update student status in class. Return an object with updated class student information if successful. Otherwise, return null if not found.' 
        #swagger.parameters['input'] = {
            in: 'body',
            description: 'Class Student information.',
            required: true,
            schema: { $ref: "#/definitions/UpdateStudentStatusInClass" }
        }
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/ClassStudent" },
            description: 'Class Student information.'
        }
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classStudentController.UpdateStudentStatusInClass(req, res);

    return res.status(200).send(data);
}

// GET ALL CLASSES OF STUDENT
export const GetAllClassesByUserId = (req, res) => {
    /*  #swagger.tags = ['Class Student']
        #swagger.description = 'Endpoint to get all classes of student.' 
    */
    res.setHeader('Content-Type', 'application/json')
    const data = classStudentController.GetAllClassesByUserId(req, res);

    return res.status(200).send(data);
}