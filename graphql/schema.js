import { GraphQLObjectType, GraphQLSchema } from "graphql";
import querys from './querys.js';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields: {
        hello: querys.hello
    }
});

export default new GraphQLSchema({
    query: QueryType,
    //mutation: Mutation
});;