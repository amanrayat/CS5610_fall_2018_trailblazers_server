const userModel = require('../models/user.model.server');

createUser = user => userModel.create(user);
findAllUsers = ()=> userModel.find();

findAllCustomers =()=> userModel.find({type : 'CUSTOMER'});
deleteCustomerById =(id) => userModel.remove({_id : id});
findCustomerById =(id)=> userModel.find({$and : [{type : 'CUSTOMER'} , {_id : id}] });
updateCustomer = (uid , user ) => userModel.update({_id: uid}, {$set: user});

findAllBrewers =()=> userModel.find({type : 'CUSTOMER'});
deleteBrewerById =(id) => userModel.remove({_id : id});
findBrewerById =(id)=> userModel.find({$and : [{type : 'CUSTOMER'} , {_id : id}] });
updateBrewer = (uid , user ) => userModel.update({_id: uid}, {$set: user});

module.exports = {
    createUser,
    findAllBrewers,
    findBrewerById,
    deleteBrewerById,
    updateBrewer,
    findAllCustomers,
    findCustomerById,
    deleteCustomerById,
    updateCustomer,
    findAllUsers
};