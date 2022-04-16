const express = require('express');
const app = express();
const PORT = 4000;

// temporary, simulated database 
const products = [
  {
    name: 'Internet Friends',
    price: 29,
    image:
      'https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_6de889fb-b540-49e4-b733-3af0baaa7f63_x1440.jpg?v=1571274629',
  },
  {
    name: 'Angry Pants',
    price: 35,
    image:
      'https://cdn.shopify.com/s/files/1/1297/1509/products/HERO_c5b0ec76-ad06-4cc7-a165-6129e11a8ff6_x1440.jpg?v=1571274622',
  },
  {
    name: 'Dead Cool',
    price: 50,
    image:
      'https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_40030160-f468-4d50-8f30-c8b9733ce84e_x1440.jpg?v=1575020412',
  },
];

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