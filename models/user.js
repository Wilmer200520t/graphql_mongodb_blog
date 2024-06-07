import { Schema, model} from "mongoose";

const userSchema = new Schema({
    username :{
        type    : String,
        required: true,
        unique  : true
    },
    password : {
        type    : String,
        required: true
    },
    email   : {
        type    : String,
        required: true,
        unique  : true,
        match   : [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Please enter a valid email'
        ]
    },
    displayName :{
        type    : String,
        required: true
    }

}, {
    timestamps: true,            // This will add createdAt and updatedAt fields
    versionKey: false            // This will remove __v from created collection
})


export default {
    User : model("user", userSchema)
}