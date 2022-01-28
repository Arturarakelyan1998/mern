const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')


// router.post('/create',
//     async (req, res) => {
//
//         try {
//             const encodedPhoto="adadas"
//             // base64_encode('YOUR_DECODED_STRING');
//             const post = new Post({
//                 title:req.body.title,
//                 description:req.body.description,
//                 photo:encodedPhoto,
//             })
//             await post.save()
//             res.status(201).json({message: 'post created successfully'})
//
//         } catch (error) {
//             console.log(error);
//         }
//
//
//     });