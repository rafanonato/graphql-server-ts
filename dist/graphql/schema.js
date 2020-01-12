"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'jon',
        email: 'jon@jon.com'
    },
    {
        id: 2,
        name: 'Rafa',
        email: 'rafa@jon.com'
    }
];
const typeDefs = `
    type User{
        id: ID!
        name: String!
        email: String!
    }

    type Query{
        allusers: [User!]
    }

`;
const resolvers = {
    Query: {
        allusers: () => users
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
