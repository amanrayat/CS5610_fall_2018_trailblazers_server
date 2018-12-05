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

    getCustomerById =(req ,res) =>{
        userDao.findCustomerById(req.params['cid']).then(result=>{
            res.send(result)
        })
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

    getUser =(req ,res)=>{
        userDao.findAllUsers().then(result=>{
            res.send(result)
        })
    };

    deleteUserById = (req , res) =>
        userDao.deleteUserById(req.params['userId']).then(result=>{
            res.send(result)
        });

    updateUserById = (req , res ) =>{
        userDao.updateUserById(req.params['userId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    app.post('/api/register', register);
    app.get('/api/profile', profile);
    app.get('/api/login', login);
    app.get('/api/customer' , getCustomer);
    app.get('/api/user' , getUser);
    app.get('/api/customer/:cid' , getCustomerById);
    app.delete('/api/user/:userId' , deleteUserById);
    app.put('/api/user/:userId' , updateUserById);
    app.post('/api/customer' , createUser);
};