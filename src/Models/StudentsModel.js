
const mongoose = require('mongoose')



// const orderSchema = mongoose.Schema({

//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     gender: {
//         type: String,
//         required: true
//     },
//     dateOfBirth: {
//         type: Date,

//     },
//     nationality: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique:true

//     },
//     phone: {
//         type: String, 
//         unique:false
//     },
//     admissionDate: {
//         type: Date,

//     },
//     courses: {
//         type: String,
//         required: true
//     }

// }) 


const mySchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,

    },
    nationality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    phone: {
        type: String,
        required: true
    },
    admissionDate: {
        type: Date,

    },
    courses: {
        type: String,
        required: true
    }

})

const StudentsModel = mongoose.model('studentBio', mySchema)





module.exports = StudentsModel;





