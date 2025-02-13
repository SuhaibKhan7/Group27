export const typeDefs = `#graphql
interface Product{
    id: ID!
    name:String
    price:Float
    category:String
    sellerid:User
}
type PhysicalProducts implements Product{
    id: ID!
    name:String
    price:Float
    category:String
    sellerid:User
    weight:float
    dimensions: String,
    shippingCost: Float,

}
type Digitalproducts implements Product{
     id:ID,
    name: String,
    price: Float,
    category: String,
    sellerId: User,
    weight:Float,
    dimensions:String,
    shippingCost:Float,
}
type Clothes implements Product{
     id: ID!
    name:String
    price:Float
    category:String
    sellerid:User
    size: String,
    length:Float,
}
type User{
    id:ID!,
    name:String,
    email:String
}
type Query{
    products: [Product!]!
    digitalProducts:[DigitalProducts]
    physicalProducts:[PhysicalProducts]
    users:[User]
}
`;