const {body,validationResult}=require('express-validator')

 const registerRules=[
     body('name','name is required').not().isEmpty(),
     body('email','email is not valid').isEmail().normalizeEmail(),
     body('password','password must be at least 6 characters').isLength({ min: 6 })
 ];
 const loginRules=[
    
    body('email','email is not valid').isEmail().normalizeEmail(),
    body('password','password is empty').not().isEmpty()
];  
    
    const validator = (req,res,next)=> {

     const errors = validationResult(req);
        if ( !errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }
     next()
 }
 module.exports={registerRules,validator,loginRules};