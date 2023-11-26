


//

const StudentsModel = require("../Models/StudentsModel")



//create data
exports.createStudent = async (postBody) => {
 
    try {
      ///  console.log('response')
       const response = await  StudentsModel.create(postBody)
       console.log(response)
        if (response) {
            return true
        } else {
            false ;
        }
    } catch (error) {
        console.log(error)
        return false
    }

}

//read data

exports.studentsList = async () => {
    try {
        const response = await StudentsModel.find({})
        if (response) {
            return response
        } else {
            false
        }
    } catch (error) {
        return false
    }

}
exports.studentListById = async (id) => {
    try {
        const response = await StudentsModel.find({_id:id})
        if (response) {
            return response
        } else {
            false
        }
    } catch (error) {
        return false
    }

}




//update data

exports.updateStudent = async (id,postbody) => {
    try {
        const Query={_id:id}
        const response = await StudentsModel.updateOne(Query,postbody)
        if (response) {
            return true
        } else {
            false
        }
    } catch (error) {
        return false
    }

}





//delete data

exports.deleteStudent = async (id) => {
    try {
    
        const Query = { _id: id }
        const response = await StudentsModel.deleteOne(Query)

       console.log(response)
        if (response) {
            return true
        } else {
            console.log('Query')
            false
        }
    } catch (error) {
        console.log(error)
        return false
    }

}
