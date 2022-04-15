// boilerplate code for server
const express = require('express');
const app = express();
const PORT = 4000;

//temporary simulated database
const products = ['t-shirt', 'shoes', 'necklace', 'catfood', 'jump-rope'];

app.get('/products/:productIndex', (req, res) => {
    //getting console.log to work:
    // console.log(req.params);
    // setting up productId  variable
    let productId = req.params.productIndex;
    // console.log(productId);
    res.send(`testing products route for product: ${products[productId]}`);
})

// greetings route
app.get('/users/:firstName', (req,res) => {
    // set user variable to req.params.firstName
    let user = req.params.firstName;
    //working console log when use nodemon
    // console.log(user)
    //send back hello user or req.params.firstName
    res.send(`Hello, ${user}.`);
})

// favorite numbers route
app.get('/numbers/:favorite', (req,res) =>{
    let favNumber = req.params.favorite;
    // console.log(favNumber);
    res.send(`My favorite number: ${favNumber}`);
})

// set up home route '/' that sends back message: 'welcome to sell-it-up'

app.get('/', (request, response) => {
    //consider the objects, request {} object provides info about the request made by the client
    //response{} - object that is a collection of properties and methods
    // a response is required for every request
    // response.send() method that closes the response cycle -> send info/data back to browser
    response.send('Welcome to Sell-it-Up!');
})


//tell app to listen on port 4000
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`))
