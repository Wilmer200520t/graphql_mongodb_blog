import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from "graphql"; 
import models from "../models/index.js";

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
    fields: () =>({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        authorID: { 
            type: userType,
            resolve: async (parent)=>{
                return await models.user.findById(parent.authorID);
            }  
        },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        comments: {
            type: new GraphQLList(commentType),
            resolve: async (parent)=>{
                return await models.comment.find({postID: parent.id});
            }
        }
    })
})

const commentType = new GraphQLObjectType({
    name: 'Comment',
    description: 'This represent a data type of the comment',
    fields: {
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        postID: { 
            type: postType,
            resolve: async (parent)=>{
                return await models.post.findById(parent.postID);
            }  
        },
        authorID: { 
            type: userType,
            resolve: async (parent)=>{
                return await models.user.findById(parent.authorID);
            }  
        },
    }
})

export default {
    userType,
    postType,
    commentType
};