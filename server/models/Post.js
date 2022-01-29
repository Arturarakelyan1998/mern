const {Schema, model,} = require('mongoose')

const schema = new Schema({
    userId:{type:String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type:String},

})


module.exports = model('Post', schema)