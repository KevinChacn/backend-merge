/**
 * IMPORT PARAMETERS CLASS
 */
const parameters = require('./parameters');

/**
 * CLASS TO DYNAMICALLY ASSIGN CLASSES 
 *
 * @param name is the class name 
 *  
 * **/
var NameClass = function (name) {
    var sThis = this;
    this.dataClassName = {
        name: name
    };

    var getName = function () {
        return sThis.dataClassName.name;
    },
        setName = function (name) {
            sThis.dataClassName.name = name;
        };

    return {
        getName: getName,
        setName: setName
    };
};

/** 
 * CLASS THAT MAKE MESSAGE STRUCTURE
 *
 * @param object is the name class parameter
 * @param message parameter to inject message defined inthe parameter file
 * @param detailMessage parameter to inject the server default message error
 * 
 */
var MessageClass = function (object, message, detailMessage) {
    var sThis = this;

    this.dataMessageClass = {
        object: object,
        message: message,
        detailMessage: detailMessage
    };

    var getObject = function () {
        return sThis.dataMessageClass.object
    },
        getMessage = function () {
            return sThis.dataMessageClass.message;
        },
        getDetailMessage = function () {
            return sThis.dataMessageClass.detailMessage;
        };

    if (detailMessage)
        return {
            Object: getObject(),
            Message: getMessage(),
            DetailMessage: getDetailMessage()
        }
    else {
        return {
            Object: getObject(),
            Message: getMessage()
        }
    }
};


/**
 * CLASS TO MAKE A NOTIFICATION TYPE OBJECT
 * 
 * @param idSource is the user source parameter 
 * @param idDestiny is the user destiny parameter
 * @param comment  is the comment to show into box notification
 * 
 **/
var NotificationClass = function (idOriginUser, idDestinyUser, idSource, comment, path) {
    var sThis = this;

    this.dataNotificationClass = {
        idOriginUser: idOriginUser,
        idDestinyUser: idDestinyUser,
        idSource: idSource,
        comment: comment,
        path: path
    }

    var getIdOriginUser = () => {
        return sThis.dataNotificationClass.idOriginUser
    },
        getidDestinyUser = () => {
            return sThis.dataNotificationClass.idDestinyUser;
        },
        getidSource = () => {
            return sThis.dataNotificationClass.idSource;
        },
        getComment = () => {
            return sThis.dataNotificationClass.comment;
        },
        getPath = () => {
            return sThis.dataNotificationClass.path;
        }

    return {
        id_originUser: getIdOriginUser(),
        id_destinyUser: getidDestinyUser(),
        id_source: getidSource(),
        comment: getComment(),
        path: getPath(),
        dateCreated: getDateTimeNow()
    }

};

/**
 * CLASS TO DO PARSE THE FORMAT THE RESPONSE MESSAGE
 * 
 * @param data is the message or data that return is the case
 * @param code code that return according to the transaction
 * 
 * **/
var responseStruct = function (data, code) {
    var sThis = this;

    this.dataResponseStruct = {
        data: data,
        code: code
    }

    var getData = () => {
        return sThis.dataResponseStruct.data;
    },
        getCode = () => {
            return sThis.dataResponseStruct.code;
        }

    return {
        data: getData(),
        code: getCode(),
    }
}

/**
 *  get time current
 **/
var getDateTimeNow = () => {
    let date = new Date();
    date.setHours(date.getHours() - 5);
    return date.toISOString();
}
/**
 * print console log data
 * 
 * @param {*} data 
 */
var printLogs = data => {
    console.log('Logs:', data);
    return data;
}

//Factory methods paterns

var notificationClassObject = (idOriginUser, idDestinyUser, idSource, comment, path) => {
    return new NotificationClass(idOriginUser, idDestinyUser, idSource, comment, path);
}

var responseStructObject = (data, code) => {
    return new responseStruct(data, code);
}

var nameClassObject = (name) => {
    return new NameClass(name);
}

var createObjectMessagge = (object, message, detailMessage) => {
    return new MessageClass(object, message, detailMessage);
};

/**
 * @description method to retun random number
 */
var getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// CLASS CONTAINER ARRANGEMENT

const arrayClass = {
    nameClass: NameClass,
    messageClass: MessageClass,
    printLogs: printLogs,
    createObjectMessage: createObjectMessagge,
    getDateTimeNow: getDateTimeNow,
    nameClassObject: nameClassObject,
    notificationClassObject: notificationClassObject,
    responseStruct: responseStructObject,
    getRandomArbitrary: getRandomArbitrary,
    parameters: parameters
};

//EXPORT MODULE WITH THE CLASSES

module.exports = arrayClass;