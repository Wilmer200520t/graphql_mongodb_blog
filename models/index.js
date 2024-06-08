import user from "./user.js";
import post from "./post.js";
import comment from "./comments.js";

export default {
    user : user.userSchema,
    post : post.postSchema,
    comment : comment.commentSchema
}