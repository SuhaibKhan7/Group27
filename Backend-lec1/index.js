const express = require('express')
const getproduct = require('./api/products')
const redis = require('./client/redis')
const app = express();

app.get('/', (req, res) => {
    res.send("This is Home page")
})
app.get('/products', async (req, res) => {
    const products = await redis.get('productlist');
    console.log(products);
    if (products) {
        return res.json(JSON.parse(products))
    }
    const data = await getproduct();
    await redis.set('productlist', JSON.stringify(data), 'EX', 60);
    res.json(data)
})
app.listen(3000, () => {
    console.log("server is running")
})