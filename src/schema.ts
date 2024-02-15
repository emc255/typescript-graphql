// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
type Game {
    id: ID!
    title: String! 
    platform: [String!]!
    reviews:[Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews:[Review!]
}

type Mutation {
    addGame(game: addGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edit: editGameInput!): Game

}

input addGameInput {
    title: String!
    platform: [String!]!
}

input editGameInput {
    title: String
    platform: [String!]
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    reviews: [Review]
    review(id:ID!): Review

    games: [Game]
    game(id:ID!): Game

    authors: [Author]
    author(id:ID!): Author
}
`;
