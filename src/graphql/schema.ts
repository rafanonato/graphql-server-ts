import { makeExecutableSchema } from 'graphql-tools'


const users: any[] = [
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

]


const typeDefs = `
    type User{
        id: ID!
        name: String!
        email: String!
    }

    type Query{
        allusers: [User!]
    }

`

const resolvers = {
    Query:{
        allusers: () => users
    }
}

export default makeExecutableSchema({typeDefs, resolvers})