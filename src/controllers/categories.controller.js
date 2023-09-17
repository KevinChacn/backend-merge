const parameters = require('../../src/resources/parameters');
const { createObjectMessage, responseStruct, nameClassObject, getDateTimeNow } = require('../../src/resources/UtilitiesClass');

const categoryModels = require('../models/categories.model');

const nameClass = nameClassObject(parameters.CLASS_CATEGORIES_CONTROLLER);

const categoriesCtl = {};


categoriesCtl.findAll = () => categoryModels.find()
    .then(data => responseStruct(data, parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.findFaultAll, error), parameters.codeFaultServer));


categoriesCtl.addOne = body => new categoryModels({
    name: body.name.trim(),
    description: body.description,
}).save()
    .then(data => responseStruct(createObjectMessage(nameClass.getName(), parameters.saveSucces, data), parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.saveFault, error), parameters.codeFaultServer));


categoriesCtl.updateOne = body => categoryModels.updateOne(
    { _id: { $eq: body.id } },
    {
        $set: {
            name: body.name,
            description: body.description,
        }
    },
    { new: true })
    .then(data => responseStruct(createObjectMessage(nameClass.getName(), parameters.updateSuccess, data), parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.updateFault, error), parameters.codeFaultServer));


categoriesCtl.deleteOne = id => categoryModels.deleteOne({ _id: { $eq: id } })
    .then(data => responseStruct(data, parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.deleteFault, error), parameters.codeFaultServer));


module.exports = categoriesCtl;