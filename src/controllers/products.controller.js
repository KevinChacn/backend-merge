const parameters = require('../../src/resources/parameters');
const { createObjectMessage, responseStruct, nameClassObject, getDateTimeNow } = require('../../src/resources/UtilitiesClass');

const productsModels = require('../models/products.model');

const nameClass = nameClassObject(parameters.CLASS_CATEGORIES_CONTROLLER);

const categoriesCtl = {};


categoriesCtl.findAll = () => productsModels.find()
    .populate({ path: 'id_category' })
    .then(data => responseStruct(data, parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.findFaultAll, error), parameters.codeFaultServer));


categoriesCtl.getProductByIdCategory = category => productsModels.find({ id_category: category })
    .populate({ path: 'id_category' })
    .then(data => responseStruct(data, parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.findFaultById, error), parameters.codeFaultNotFound));


categoriesCtl.addOne = body => new productsModels({
    date_create: getDateTimeNow(),
    name: body.name.trim(),
    valor: body.valor,
    stock: body.stock,
    id_category: body.id_category,
}).save()
    .then(data => responseStruct(createObjectMessage(nameClass.getName(), parameters.saveSucces, data), parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.saveFault, error), parameters.codeFaultServer));


categoriesCtl.updateOne = body => productsModels.updateOne(
    { _id: { $eq: body.id } },
    {
        $set: {
            name: body.name,
            valor: body.valor,
            stock: body.stock,
            id_category: body.id_category,
        }
    },
    { new: true })
    .then(data => responseStruct(createObjectMessage(nameClass.getName(), parameters.updateSuccess, data), parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.updateFault, error), parameters.codeFaultServer));


categoriesCtl.deleteOne = id => productsModels.deleteOne({ _id: { $eq: id } })
    .then(data => responseStruct(data, parameters.codeSuccess))
    .catch(error => responseStruct(createObjectMessage(nameClass.getName(), parameters.deleteFault, error), parameters.codeFaultServer));


module.exports = categoriesCtl;