const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Database Connection
require ('./db/database')();

//Listen to requests at port 3000
app.listen(3000);