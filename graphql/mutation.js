import { GraphQLString } from 'graphql';
import models from '../models/index.js';
import Tokken from '../auth/auth.js';

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

export default {
    createUser 
}