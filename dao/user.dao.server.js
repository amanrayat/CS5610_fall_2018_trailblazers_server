const userModel = require('../model/user.model.server');
const randomId = require('random-id');


createUser = user => userModel.create(Object.assign(user, {"_id": randomId(5,'09')}));
findAllUsers = () => userModel.find().populate('customer.cId').exec();
findUserById = (id) => userModel.find({$and: [{_id: id}]});
deleteUserById = (id) => userModel.remove({_id: id});
updateUserById = (uid, user) => userModel.update({_id: uid}, {$set: user});

findUserByCredentials = (emailId, password) => userModel.find({email: emailId, password: password});

findDuplicateUser = (emailId, username, phoneNo) => userModel.find({
    $or: [
        {'email': emailId},
        {'username': username},
        {'phoneNo': phoneNo}]
});

findAllCustomers = () => userModel.find({type: 'CUSTOMER'});
deleteCustomerById = (id) => userModel.remove({_id: id});
findCustomerById = (id) => userModel.find({$and: [{type: 'CUSTOMER'}, {_id: id}]});
updateCustomer = (uid, user) => userModel.update({_id: uid}, {$set: user});

findAllEventPlanners = () => userModel.find({type: 'EVENTPLANNER'});
deleteEventPlannerById = (id) => userModel.remove({_id: id});
findEventPlannerById = (id) => userModel.find({$and: [{type: 'EVENTPLANNER'}, {_id: id}]});
updateEventPlanner = (uid, user) => userModel.update({_id: uid}, {$set: user});


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
    findDuplicateUser,
    findAllEventPlanners,
    deleteEventPlannerById,
    findEventPlannerById,
    updateEventPlanner
};