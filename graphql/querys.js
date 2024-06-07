import { GraphQLString } from "graphql";

const hello = {
    type: GraphQLString,
    description: 'This return a string',
    resolve: () => 'world'
}

export default {
    hello
}
