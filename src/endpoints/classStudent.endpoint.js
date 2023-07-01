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

