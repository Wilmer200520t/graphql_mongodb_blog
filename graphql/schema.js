import { GraphQLObjectType, GraphQLSchema } from "graphql";
import querys from './querys.js';
import mutation from './mutation.js';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields: {
        hello: querys.hello
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation object',
    fields: {
        newUser: mutation.createUser
    }

});

export default new GraphQLSchema({
    query: QueryType,
    mutation: Mutation
});;