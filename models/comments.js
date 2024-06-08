import {Schema, model} from "mongoose";

const commentSchema = new Schema({
    authorID:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    postID:{
        type: Schema.Types.ObjectId,
        ref: "post",
        required: true
    },
    comment:{
        type: String,
        required: true
    }
}, {
    timestamp: true,
    versionKey: false
})

export default{
    commentSchema : model("comment", commentSchema)
}
