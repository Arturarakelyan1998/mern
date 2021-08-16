const express = require('express')
const mongoose = require('mongoose')


const app = express()


const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Artur:qwerty123456@cluster0.com3n.mongodb.net/example?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })

        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }

}

start();