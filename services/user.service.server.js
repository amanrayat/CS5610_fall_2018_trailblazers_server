const userDao = require('../dao/user.dao.server');

module.exports = app =>{

    createUser = (req , res )=>{
        userDao.createUser(req.body).then(result =>{
            res.send(req.body)
        });
    };
    getCustomer = ( req ,res ) =>{
        userDao.findAllCustomers().then(result =>{
            res.send(result)
        });
    };

    getBrewer = (req , res ) =>{
        userDao.findAllBrewers().then(result =>{
            res.send(result)
        });
    };
    getCustomerById =(req ,res) =>{
        userDao.findCustomerById(req.params['cid']).then(result=>{
            res.send(result)
        })
    };

    getBrewerById = (req , res )=>{
        userDao.findBrewerById(req.params['bid']).then(result=>{
            res.send(result)
        });
    };

    setSession = (req, res) => {

        userDao.createUser({
            _id : Date.now(),
            firstName: req.body.firstName,
            password : req.body.password
        }).then(result=>{
            req.session['currentUser'] = result;
            res.send(req.session);
        })
    };

    getSession = (req, res) => res.send(req.session['currentUser']);

    login = (req ,res ) =>{

    };
    
    app.post('/api/register', setSession);
    app.get('/api/profile', getSession);
    app.get('/api/customer' , getCustomer);
    app.get('/api/customer/:cid' , getCustomerById);
    app.get('/api/brewer' , getBrewer);
    app.get('/api/brewer/bid' , getBrewerById);
    app.post('/api/customer' , createUser);
    app.post('/api/brewer' , createUser);
};