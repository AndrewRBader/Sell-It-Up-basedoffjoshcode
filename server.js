const express = require('express');
const app = express();
const PORT = 4000;

// getting products here via import and storing in variable

const products = require('./models/product_model.js')
console.log(products)

// index route 
// this route will catch GET requests to /products/ and respond with all the products
app.get('/products/', (req, res) => { 
	res.send(products);
});

// show route 
// this route will catch GET requests to /products/index/ and respond with a single product
app.get('/products/:productIndex', (req, res) => { 
	res.send(products[req.params.productIndex]); 
});

app.listen(PORT, () => {  console.log(`Listening for client requests on port ${PORT}`);})