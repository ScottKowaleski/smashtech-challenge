// require all dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

// home page route
app.get('/', function (req, res) {
    // render the 'index' template, and pass in a few variables
    res.render('index', { 
        title: 'Smashtech coding challenge', 
        message: 'Create an Account:',
        name: 'Name',
        password: 'Password'
    });
})

// GET response for '/'
app.post('/login', function (req, res) {
    res.user = {
        name: req.body.login,
        password: req.body.password
    }
    res.render('display', {
        user: req.body.login,
        welcome: 'You have created an account!',
        celebrate: 'Smile and celebrate!'  
    });
})

app.use(express.static('public'));
