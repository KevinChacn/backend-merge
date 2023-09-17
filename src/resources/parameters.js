const parameters = {

    PORT: process.env.PORT || 4000,

    //CODE AND RESPONSES MESSAGES
    MESSAGE_SUBJECT: 'Notify system',
    MESSAGE_ERROR: 'Tecnical error server',
    CODE_ERROR: 500,
    CODE_SUCCESS: 200,

    CLASS_CATEGORIES_CONTROLLER: 'CLASS_CATEGORIES_CONTROLLER',
    CLASS_PRODUCTS_CONTROLLER: 'CLASS_PRODUCTS_CONTROLLER',

    codeSuccess: 200,
    codeSuccessCreated: 201,
    codeFaultServer: 500,
    codeFaultBadRequest: 401,
    codeFaultNotFound: 404,

    findFaultAll: "Elements not found",
    findFaultById: "Element not found",

    generalError: 'Technical error',

    saveSucces: "The Object was created successfully",
    saveFault: "an error occurred while saving the object",

    updateSuccess: "The Object was updated successfully",
    updateFault: "Error to update the field of the object",

    deleteSucess: "The Object was deleted with successfully!",
    deleteFault: "Error to delete object",
}

module.exports = parameters;