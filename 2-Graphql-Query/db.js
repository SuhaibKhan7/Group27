const users=[
    {id:1,name:"John",age:30,email:"john@gmail.com"},
    {id:2,name:"Jane",age:25,email:"jane@gmail.com"},
    {id:3,name:"Bob",age:40,email:"bob@gmail.com"}

]
const reviews=[
    {id:1,rating:4,context:"Good",reviewid:1,userid:1},
    {id:2,rating:3,context:"Bad",reviewid:2,userid:2},
    {id:3,rating:5,context:"Good",reviewid:3,userid:1}
]
const products = [
  { id: 1, name: "Product1", price: 100, reviewsid: [1, 2], sellerid :1},
  { id: 2, name: "Product2", price: 200, reviewsid:[1],sellerid:3}
];
export default{users,reviews,products}