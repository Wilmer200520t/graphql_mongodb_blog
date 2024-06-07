import { GraphQLList, GraphQLSchema, GraphQLString } from "graphql";
import models from "../models/index.js";

const hello = {
    type: GraphQLList,
    description: 'This return a string',
    resolve: async () => {
        return await models.userSchema.find();
    }
}

export default {
    hello
}
