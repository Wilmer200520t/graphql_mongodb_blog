import { GraphQLObjectType, GraphQLSchema } from "graphql";
import querys from './querys.js';
import mutation from './mutation.js';;

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields: {
        getUsers: querys.findUsers,
        getUserById: querys.findUserById,
        getPosts: querys.findPosts,
        getPostById: querys.findPostById,
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation object',
    fields: {
        newUser: mutation.createUser,
        login: mutation.login,
        newPost: mutation.createPost,
        updatePost: mutation.updatePost,
        deletePost: mutation.deletePost,
        addComment: mutation.createComment,

    }

});

export default new GraphQLSchema({
    query: QueryType,
    mutation: Mutation
});;