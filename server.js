const express = require('express');
const app = express();
const PORT = 4000;

// getting products here via import and storing in variable

const products = require('./models/product_model.js')
// console.log(products)

//first middleware - middleware executes for every request
//express.static helps express find where certain files are located
app.use(express.static('public'))


//body parser middleware, sets up request body, data is parsed by middleware from client
// note that this is a little convoluted literally, but works in this way
app.use(express.urlencoded({extended:false}))

// application view engine:
app.set('view engine', 'ejs');


// Product "new" route - get - serve form for creating a new product

app.get('/products/new', (req, res) => {
    res.render('new.ejs');
})


//product show route - GET - one product

app.get('/products/:productId/', (req,res) => {
    let productId = req.params.productId;
    console.log(productId);
    // res.send(products[productId]);
    //configuring the context object
    // setting oneProduct key to equal a products item chosen by product ID
    // message key is also property of context object
    const context = {oneProduct: products[productId], message: 'I am the show route'}
    res.render('show.ejs', context)
})

// product index route, get all the products
app.get('/products/', (req, res) => {
    // first products is the key, second is the value (the products above holding the array of objects)
    const context = {products: products};
    // passing context object through render through index.ejs
    res.render('index.ejs', context);
})

//home route '/'
app.get('/', (request, response) =>{
    response.send('Welcome to Sell-it-Up');
})

// "create" route (post route) - handles POST requests -> request body (new product data)

app.post('/products', (req, res) => {
    //push new product into products array
    products.push (req.body);
    // sends the req.body object from form (products/new)
    // res.send(req.body);
    // redirect to appended products page
    res.redirect('/products');
})

// express server: initializes the server, app.listen allows computer to receive requests at http://localhost:4000/
app.listen(PORT, () => {  console.log(`Listening for client requests on port ${PORT}`);})