export const typeDefs = `#graphql
type User{
id:ID!
name:String!
email:String!
reviews:[Review]
},
type Review{
id:ID!
rating:Int!
context:String!
user:User
},
type Product{
    id:ID!
    name:String!
    price:Float!
    reviews:[Review]
    seller:User
}

type Query{
users:[User]
reviews:[Review]
products:[Product]


}




`;
