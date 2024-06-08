import { GraphQLList, GraphQLID } from "graphql";
import models from "../models/index.js";
import typeDef from '../graphql/typeDef.js'

const findUsers = {
    type: new GraphQLList(typeDef.userType),
    description: 'This return a list of users',
    resolve: async () => {
        return await models.user.find();
    }
}

const findUserById = {
    type: typeDef.userType,
    description: 'This return a one user',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async (_, args)=>{
        return await models.user.findById(args.id);
    }
}

const findPosts = {
    type: new GraphQLList(typeDef.postType),
    description: 'This return a list of posts',
    resolve: async () => {
        return await models.post.find();
    }

}

const findPostById = {
    type: typeDef.postType,
    description: 'This return a one post',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async (_, args)=>{
        return await models.post.findById(args.id);
    }
}

export default {
    findUsers,
    findUserById,
    findPosts,
    findPostById
}
