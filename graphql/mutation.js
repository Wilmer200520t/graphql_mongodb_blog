import { GraphQLString } from 'graphql';
import models from '../models/index.js';
import Tokken from '../auth/auth.js';
import typeDef from './typeDef.js';

const createUser = {
    type: GraphQLString,
    description: 'This create a new user and return a tokken',
    args: {
        username: {
            type        : GraphQLString,
            description : 'Enter a username'
        },
        password: {
            type        : GraphQLString,
            description : 'Enter a password'
        },
        email: {
            type        : GraphQLString,
            description : 'Enter an email'
        },
        displayName : {
            type        : GraphQLString,
            description : 'Enter a display name'
        }
    },
    resolve: async (_, args) =>{
        const { username, password, email, displayName } = args;
        const user = await models.user.create({username, password, email, displayName});
        await user.save();

        let userNonPassword = {...user._doc};
        delete userNonPassword.password;

        const tokken = Tokken.createJWTTokken(userNonPassword);

        return tokken
    }
}

const login = {
    type: GraphQLString,
    description: 'This login',
    args: {
        email : {
            type        : GraphQLString,
            description : 'Enter an email'
        },
        password : {
            type        : GraphQLString,
            description : 'Enter a password'
        }
    },
    resolve : async (_, args) => {
        const user = await models.user.findOne({email: args.email});
        
        /**
         * Validation user and password
         **/
        if(!user) throw new Error('User not found');
        if(user.password !== args.password) throw new Error('Password not match');

        let userNonPassword = {...user._doc};
        delete userNonPassword.password;

        return Tokken.createJWTTokken(user);
    }
}

const createPost = {
    type: typeDef.postType,
    description: 'This create a new post',
    args: {
        title: { type: GraphQLString},
        body: { type: GraphQLString},
    }, 
    resolve: async (_, args, {verifiedUser}) => {
        if(!verifiedUser) throw new Error('User not authenticated');
        const { title, body } = args;
        const newPost = new models.post({
            title, 
            body,
            authorID: verifiedUser._id
        });

        await newPost.save();

        return newPost;
    }
}

const updatePost = {
    type: typeDef.postType,
    description: 'This update a post',
    args: {
        id: { type: GraphQLString},
        title: { type: GraphQLString},
        body: { type: GraphQLString},
    },
    resolve: async (_, { id, title, body }, {verifiedUser}) =>{
        if(!verifiedUser) throw new Error('User not authenticated');
        
        const updatedPost = await models.post.findOneAndUpdate(
            {
                _id: id, 
                authorID: verifiedUser._id
            },
            {
                title, body
            },
            {new: true} //Return the post updated
        );

        return updatedPost;
    }
}

const deletePost = {
    type: GraphQLString,
    description: 'This delete a post',
    args: {
        id: { type: GraphQLString}
    },
    resolve: async (_, {id}, {verifiedUser}) => {
        if(!verifiedUser) throw new Error('User not authenticated');
        
        const postDeleted = await models.post.findOneAndDelete(
            {
                _id: id, 
                authorID: verifiedUser._id
            }
        );

        if(!postDeleted) throw new Error('Post not found');

        return 'Post deleted';
    }

}

const createComment = {
    type: typeDef.commentType,
    description: 'Create a new comment',
    args: {
        postID: { type: GraphQLString},
        comment: { type: GraphQLString},
    },
    resolve: async (_, { postID, comment }, {verifiedUser}) => {
        if(!verifiedUser) throw new Error('User not authenticated');

        const newComment = new models.comment({
            postID,
            comment,
            authorID: verifiedUser._id
        });

        newComment.save();

        return newComment;
    }
}

export default {
    createUser,
    login,
    createPost,
    updatePost,
    deletePost,
    createComment
}