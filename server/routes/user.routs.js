const {Router} = require('express')
const router = Router()
const User = require('../models/User')

router.get('/', function (req, res) {
    User.find({}, {password: 0}, null, function (err, users) {
        if (err) {
            res.status(500).send("Something went wrong!");
        } else {
            res.json(users)
        }
    })
});

router.post('/', async(req, res) => {
    const {firstname, lastname, email, password} = req.body

    const user = new User({
        firstname,
        lastname,
        email,
        password
    })
    await user.save()

    res.json(user)
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    User.findById(id, (err, user) => {
        if (err) {
            res.status(500).send("Something went wrong!");
        } else {
            res.json(user)
        }
    })
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const data = req.body;

    //stugel password@ nor uxarkel bazza heshavorac

    User.findByIdAndUpdate(id, {$set: data}, (err, user) => {
        if (err) {
            res.status(500).send("Something went wrong!");
        } else {
            res.json(user)
        }
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    User.findByIdAndDelete(id, (err, user) => {
        if (err) {
            res.status(500).send("Something went wrong!");
        } else {
            res.json(user)
        }
    })
});

module.exports = router