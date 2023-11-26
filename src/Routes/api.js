const express = require("express")
const { studentsList, createStudent, studentListById, updateStudent, deleteStudent } = require("../Controllers/StudentsController")
//const {createStudent}=require("../")


const router = express.Router()





//create product
router.post('/create-student',  async (req, res) => {
    const postBody = req.body

    const response = await createStudent(postBody)

    if (response) {
        res.status(200).json({ status: "success", message: "Student Profile created sucessfully." })
    } else {
        res.status(201).json({status: "fail", error: "Fail to create profile" })
    }
})

//read product
router.get('/student-list', async (req, res) => {
    const response = await studentsList()

    if (response.length !== 0) {
        res.status(200).json({ status: "success", data: response })
    } else {
        res.status(201).json({ status: "fail",error: "Profilies are not avilable .." })

    }
})
router.get('/student-list-one/:id', async (req, res) => {

    const id = req.params.id
    const response = await studentListById(id)

    if (response) {
        res.status(200).json({ status: "success", data: response })
    } else {
        res.status(201).json({status: "fail", error: "Student profile is not avilable .." })

    }
})

//update product
router.post('/update-student/:id', async (req, res) => {
    const postBody = req.body
    const id = req.params.id

    const response = await updateStudent(id, postBody)

    if (response) {
        res.status(200).json({ status: "success", message: "Bio Updated sucessfully." })
    } else {
        res.status(201).json({status: "fail", error: "Bio update Failed.." })

    }
})

//delete product
router.get('/delete-student/:id', async (req, res) => {

    const taskId = req.params.id

    const response = await deleteStudent(taskId)
    if (response) {
        res.status(200).json({ status: "success", message: "Student deleted sucessfully." })
    } else {
        res.status(201).json({status: "fail", error: "Student delete Failed.." })
    }
})


//404 page handling .....





router.use("*", (req, res) => {
    res.status(201).json({ error: "404 error happed." })
})

module.exports = router;




