const express = require('express');
const app = express();
const PORT = 4000;

// getting products here via import and storing in variable

const products = require('./models/product_model.js')
// console.log(products)

//product show route - GET - one product

app.get('/products/:productId/', (req,res) => {
    let productId = req.params.productId;
    console.log(productId);
    res.send(products[productId]);
})

// product index route, get all the products
app.get('/products', (req, res) => {
    res.send(products);
})

//home route '/'
app.get('/', (request, response) =>{
    response.send('Welcome to Sell-it-Up')
})

// express server: initializes the server, app.listen allows computer to receive requests at http://localhost:4000/
app.listen(PORT, () => {  console.log(`Listening for client requests on port ${PORT}`);})