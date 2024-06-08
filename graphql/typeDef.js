import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";


const userType = new GraphQLObjectType({
    name: 'User',
    description: 'This represent a data type of the user',
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    }
});

const postType = new GraphQLObjectType({
    name: 'Post',
    description: 'This represent a data type of the post',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        authorID: { type: GraphQLString },
    }
})

export default{
    userType,
    postType
};