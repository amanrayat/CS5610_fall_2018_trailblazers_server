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
require('./services/user.service.server')(app);
require('./services/feedback.service.server')(app);

//Listen to requests at port 3000
app.listen(process.env.PORT || 3000);