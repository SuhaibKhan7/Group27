export const typeDefs = `#graphql
type User{
id:ID!
name:String!
email:String!
},
type Review{
id:ID!
rating:Int!
context:String!
},
type Post{
    id:ID!
    title:String
    body:String
}
type Query{
users:[User]
reviews:[Review]
user(id:ID):User
posts:[Post]
post(id:ID):Post
}




`;
