const mongo = require('mongoose');
const s = mongo.Schema;

const config = {
    name : {
        type : String
    },
    email : {
        type : String
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    }
}

const person = new s(config);

module.exports = mongo.model("person", person)