// boilerplate code for server
const express = require('express');
const app = express();
const PORT = 4000;

//temporary simulated database
const products = ['t-shirt', 'shoes', 'necklace'];

app.get('/products/:productIndex', (req, res) => {
    res.send(products[req.params.productIndex]);
})

//tell app to listen on port 4000
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`))