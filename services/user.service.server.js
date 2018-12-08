const userDao = require('../dao/user.dao.server');

module.exports = app => {

    createUser = (req, res) => {
        return userDao.createUser(req.body).then(result => {
            res.send(req.body)
        });
    };

    getCustomer = (req, res) => {
        return userDao.findAllCustomers().then(result => {
            res.send(result)
        });
    };

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }


    getCustomerById = (req, res) => {
        return userDao.findCustomerById(req.params['cid']).then(result => {
            res.send(result)
        })
    };

    register = (req, res) => {

        return userDao.findDuplicateUser(req.body.email, req.body.username, req.body.phoneNo).then(result => {
            if (result && result.length > 0) return null;
            userDao.createUser(req.body);
            return 'Success';

        }).then(user => {
            if (user) {
                req.session['currentUser'] = user;
                res.send(user);
            } else {
                res.send(null);
            }
        })
    };

    profile = (req, res) => res.send(req.session['currentUser']);

    login = (req, res) => {
        return userDao.findUserByCredentials(req.body.email, req.body.password).then(result => {
            if (result && result.length > 0) {
                req.session['currentUser'] = result;
                res.send(result);
            } else {
                res.send(null);
            }
        })
    };

    getUser = (req, res) => {
        if(req.query.name){
            return userDao.findUserByUsername(req.query.name).then(result => {
                res.send(result)
            })
        }
        else{
            return userDao.findAllUsers().then(result => {
                res.send(result)
            })
        }

    };

    deleteUserById = (req, res) =>
        userDao.deleteUserById(req.params['userId']).then(result => {
            res.send(result)
        });

    updateUserById = (req, res) => {
        return userDao.updateUserById(req.params['userId'], req.body).then(result => {
            res.send(result)
        })
    };

    getUserById =(req , res ) =>{
        return userDao.findUserById(req.params['userId']).then(result=>{
            res.send(result)
        })
    };

    getUsersByAdmin = (req, res) => {
        return userDao.findUsersByAdmin(req.params['adminId']).then(result => {
            res.send(result)
        })
    };

    app.post('/api/register', register);
    app.get('/api/profile', profile);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.get('/api/customer', getCustomer);
    app.get('/api/user', getUser);
    app.get('/api/admin/:adminId/users', getUsersByAdmin);
    app.get('/api/user/:userId', getUserById);
    app.get('/api/customer/:cid', getCustomerById);
    app.delete('/api/user/:userId', deleteUserById);
    app.put('/api/user/:userId', updateUserById);
    app.post('/api/user', createUser);
};