const express=require('express');
const { register, login,current } = require('../Controllers/authController');
const { registerRules,validator,loginRules} = require('../middelwares/validator');
const isAuth=require('../middelwares/isAuth')
const router=express.Router();


 //router.get("/test",(req,res)=>{
 //    res.send("hello world");
// });



router.post('/signup',registerRules,validator,register)
router.post('/signin',loginRules,validator,login)
router.get('/current',isAuth,current)
module.exports=router;