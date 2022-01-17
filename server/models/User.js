const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    firstname: {type: String, required: true,},
    lastname: {type: String, required: true,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    toDos: [{type: Types.ObjectId, ref: 'Todo'}]
})


module.exports = model('User', schema)