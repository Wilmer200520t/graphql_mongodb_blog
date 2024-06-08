import { GraphQLList, GraphQLID } from "graphql";
import models from "../models/index.js";
import typeDef from '../graphql/typeDef.js'

const findUsers = {
    type: new GraphQLList(typeDef.userType),
    description: 'This return a string',
    resolve: async () => {
        return await models.user.find();
    }
}

const findUserById = {
    type: typeDef.userType,
    description: 'This return a string',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async (_, args)=>{
        return await models.user.findById(args.id);
    }
}

export default {
    findUsers,
    findUserById
}
