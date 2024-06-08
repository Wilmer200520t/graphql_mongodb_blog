import { Schema, model } from "mongoose";

const postSchema = new Schema({
    authorID:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title :{
        type    : String,
        required: true
    },
    body : {
        type    : String,
        required: true
    },
}, { 
    timestamp : true
})

export default {
    postSchema : model("post", postSchema)
}