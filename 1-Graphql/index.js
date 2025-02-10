import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    reviews() {
      return db.reviews;
    },
    user(_, { id }) {
      return db.users[id];
    },
    async posts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return data;
    },

    async post(_, { id }) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts${id}`
      );
      const data = await response.json();
      return data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀 Server ready at ${url}`);
