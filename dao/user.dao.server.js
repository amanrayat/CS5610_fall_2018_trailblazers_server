const userModel = require('../model/user.model.server');

createUser = user => userModel.create(user);
findAllUsers = ()=> userModel.find().populate('customer.cId').exec();
findUserById =(id)=> userModel.find({$and : [ {_id : id}] });
deleteUserById =(id) => userModel.remove({_id : id});
updateUserById = (uid , user ) => userModel.update({_id: uid}, {$set: user});

findUserByCredentials =(uId , password)=>userModel.find({username : uId , password : password});

findAllCustomers =()=> userModel.find({type : 'CUSTOMER'});
deleteCustomerById =(id) => userModel.remove({_id : id});
findCustomerById =(id)=> userModel.find({$and : [{type : 'CUSTOMER'} , {_id : id}] });
updateCustomer = (uid , user ) => userModel.update({_id: uid}, {$set: user});

findAllEventPlanners =()=> userModel.find({type : 'EVENTPLANNER'});
deleteEventPlannerById =(id) => userModel.remove({_id : id});
findEventPlannerById =(id)=> userModel.find({$and : [{type : 'EVENTPLANNER'} , {_id : id}] });
updateEventPlanner = (uid , user ) => userModel.update({_id: uid}, {$set: user});



module.exports = {
    updateUserById,
    deleteUserById,
    createUser,
    findUserById,
    findUserByCredentials,
    findAllCustomers,
    findCustomerById,
    deleteCustomerById,
    updateCustomer,
    findAllUsers,
    findAllEventPlanners,
    deleteEventPlannerById,
    findEventPlannerById,
    updateEventPlanner
};