const {Router}=require('express')
const router = Router()
const User = require('../models/User')
const{check, validationResult}= require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

router.post('/registration',
    [
        check('firstname','Firstname can not be empty').notEmpty(),
        check('lastname','Lastname can not be empty').notEmpty(),
        check('email','Not correct email').isEmail(),
        check('password','Not correct password').isLength({min:6}),
    ],
    async (req,res)=>{
    try {
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'not correct data upon registration'
            })
        }
        const {firstname,lastname,email, password}= req.body
        const  isUsed=await User.findOne({email})
        if(isUsed){
           return  res.status(300).json({message:'This email already registered'})
        }
        // const hashedPassword =await bcrypt.hash(password,12)

        const user = new User({
            firstname,
            lastname,
            email,
            password
        })
        await user.save()

        res.status(201).json({message:'user created successfully'})
    }
    catch(error)  {
        console.log(error);
    }
    })

router.post('/login',
    [
        check('email','Not correct email').isEmail(),
        check('password','Not correct password').exists(),
    ],
    async (req,res)=>{
    try {
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'not correct data upon login'
            })
        }

        const {email,password }= req.body

        const user = await User.findOne({email})
         if(! user )
         {
             return res.status(400).json({message:'email is false '})
         }
         // const isMatch=bcrypt.compare(password,user.password)
        if(password!=user.password){
            return res.status(400).json({message:'password is false '})
        }

        const jwtSecret="a1b2c3d4e5f6g7"

        const token = jwt.sign(
            {userId:user.id},
            jwtSecret,
            {expiresIn: '1h'}
            )

        res.json({token,userId:user.id})

    }catch(error){
        console.log(error);
    }
    })

module.exports = router