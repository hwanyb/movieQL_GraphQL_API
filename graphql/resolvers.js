import { getMovie, getMovies, getSuggestion } from "./db.js";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestion: (_, { id }) => getSuggestion(id)
    }
}


export default resolvers;