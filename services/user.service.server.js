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

    register = (req, res) => {

        userDao.createUser(req.body).then(result=>{
            req.session['currentUser'] = result;
            res.send(req.session);
        })
    };

    profile = (req, res) => res.send(req.session['currentUser']);

    login = (req ,res ) =>{
        userDao.findUserByCredentials(req.body.username , req.body.password).then(result=>{
            req.session['currentUser'] = result;
            res.send(result);
        })
    };

    addfollower =(req ,res )=>{
        userDao.addFollowerById(req.params['uId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    getUser =(req ,res)=>{
        userDao.findAllUsers().then(result=>{
            res.send(result)
        })
    };

    app.post('/api/register', register);
    app.get('/api/profile', profile);
    app.get('/api/login', login);
    app.post('/api/user/:uId/follow', addfollower);
    app.get('/api/customer' , getCustomer);
    app.get('/api/user' , getUser);
    app.get('/api/customer/:cid' , getCustomerById);
    app.get('/api/brewer' , getBrewer);
    app.get('/api/brewer/bid' , getBrewerById);
    app.post('/api/customer' , createUser);
    app.post('/api/brewer' , createUser);
};