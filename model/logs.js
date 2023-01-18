const {model, Schema} = require("mongoose");

const LogSchema = new Schema ({
    url : { type : String, required : true},
});

module.exports = model('Logs', LogSchema);