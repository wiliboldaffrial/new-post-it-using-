const mongoose = require ("mongose");
const Schema = mongoose.Schema;

const userSchema = new Schema[{
    fullName: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    },
    createdOn: {
        type:Date, 
        default: new DataTransfer().getTime()
    },
}]