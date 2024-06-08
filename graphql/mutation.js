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
        const user = await models.userSchema.create({username, password, email, displayName});
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

        const user = await models.userSchema.findOne({email: args.email});
        
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
    resolve: async (_, args) => {
        const { title, body } = args;
        
        const newPost = new models.post({
            title, 
            body,
            authorID: "66629293c32ef576b04c5151"
        });

        return newPost;
    }
}

export default {
    createUser,
    login,
    createPost
}