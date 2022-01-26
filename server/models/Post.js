const {Schema, model,} = require('mongoose')

const schema = new Schema({
    UserId:{type:String},
    Title: {type: String, required: true},
    Description: {type: String, required: true},

})


module.exports = model('Post', schema)