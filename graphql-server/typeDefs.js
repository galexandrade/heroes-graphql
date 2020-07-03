const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type Hero {
        id: ID
        name: String!
        photo: String!
    }

    type Villain {
        id: ID
        name: String!
        photo: String!
    }

    type Movie {
        id: ID
        name: String!
        villain: Villain!
        heroes: [Hero!]!
    }

    type Query {
        getMovies: [Movie!]!
    }
`;

module.exports = typeDefs;
