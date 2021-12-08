const {gql} = require('apollo-server')

const typeDefs = gql`
type User {
    name: String!  # These are graphQL type
    age: Int!
    library_access: Boolean!
}

# Queries

type Query {
    getAllUsers: [User!]!
}

# mutations
type Mutation {
    createUser(name:String!, age: Int!, library_access: Boolean!): User!
}




`;

module.exports = {typeDefs};