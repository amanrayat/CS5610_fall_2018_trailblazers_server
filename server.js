const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Database Connection
require ('./db/database')();

require('./services/user.service.server')(app);

//Listen to requests at port 3000
app.listen(process.env.PORT || 3000);