const userModel = require('../model/user.model.server');

createUser = user => userModel.create(user);
findAllUsers = ()=> userModel.find().populate('cId').
exec(function (err, story) {
    console.log('The author is %s', story);
    // prints "The author is Ian Fleming"
});
findUserById =(id)=> userModel.find({$and : [ {_id : id}] });

findUserByCredentials =(uId , password)=>userModel.find({username : uId , password : password});

findAllCustomers =()=> userModel.find({type : 'CUSTOMER'});
deleteCustomerById =(id) => userModel.remove({_id : id});
findCustomerById =(id)=> userModel.find({$and : [{type : 'CUSTOMER'} , {_id : id}] });
updateCustomer = (uid , user ) => userModel.update({_id: uid}, {$set: user});

findAllBrewers =()=> userModel.find({type : 'BREWER'});
deleteBrewerById =(id) => userModel.remove({_id : id});
findBrewerById =(id)=> userModel.find({$and : [{type : 'BREWER'} , {_id : id}] });
updateBrewer = (uid , user ) => userModel.update({_id: uid}, {$set: user});

addFollowerById = (uId ,followee) => {
    return userModel.updateOne({_id : uId} , {$push : {'customer.following' : followee} })
};


module.exports = {
    createUser,
    findAllBrewers,
    findUserById,
    findBrewerById,
    findUserByCredentials,
    deleteBrewerById,
    updateBrewer,
    addFollowerById,
    findAllCustomers,
    findCustomerById,
    deleteCustomerById,
    updateCustomer,
    findAllUsers,
};