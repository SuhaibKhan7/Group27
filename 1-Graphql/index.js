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
    products() {
      return db.products;
    },
  },
  User: {
    reviews(parent) {
      return db.reviews.filter((review) => review.reviewid === parent.id);
    },
  },
  Product: {
    seller(parent) {
      return db.users.find((user) => user.id === parent.sellerid);
    },
    reviews(parent) {
      return db.reviews.filter((review) =>
        parent.reviewsid.includes(review.id)
      );
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
