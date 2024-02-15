//datebase
import { games, authors, reviews, deleteGame, addGame, updateGame} from './db.js'

export const resolvers = {
    Query: {
        games: () => games,
        game: (_:any, args:any) => games.find((game) => game.id === parseInt(args.id)),

        authors: () => authors,
        author: (_:any, args:any) => authors.find((author) => author.id === parseInt(args.id)),

        reviews: () => reviews,
        review: (_:any, args:any) => reviews.find((review) => review.id === parseInt(args.id))
    },

    Game: {
        reviews:(parent:any) => reviews.filter((review) => review.gameId === parseInt(parent.id)),
       
    },

    Author: {
        reviews:(parent:any) => reviews.filter((review) => review.authorId === parseInt(parent.id))
    },

    Review: {
        author:(parent:any) => authors.find((author) => author.id === parseInt(parent.author_id)),
        game:(parent:any) => games.find((game) => game.id === parseInt(parent.game_id)),
    },

    Mutation: {
        addGame: (parent:any, args:any) => {
            return addGame(args.game)
        },
        deleteGame: (parent:any, args:any) => {
            deleteGame(parseInt(args.id))
            return games
        },
        updateGame: (parent:any, args:any) => {
            return updateGame(parseInt(args.id), args.edit)
        }
    }
  };

