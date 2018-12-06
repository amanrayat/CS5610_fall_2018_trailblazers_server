const bodyParser = require('body-parser');
const session    = require('express-session');
const express    = require('express');
const app        = express();
const idleTimeoutSeconds = 30*60*1000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Database Connection
require ('./db/database')();


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    cookie: {
        maxAge: idleTimeoutSeconds * 1000,
    },
    rolling: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

require('./services/likes.service.server')(app);
require('./services/beer.service.server')(app);
require('./services/user.service.server')(app);
require('./services/userFollowers.service.server')(app);
require('./services/comment.service.server')(app);

//Listen to requests at port 3000
app.listen(4000);