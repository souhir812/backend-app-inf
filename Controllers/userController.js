const User=require('../models/user');
const Room=require('../models/room');


exports.addRoom=async(req,res)=>{
     let {nbr,nompatient,statut,nomservice}=req.body;
     
    try {
     
       let room = new Room({nbr,nompatient,statut,nomservice}) ;
   
       await room.save() ;
       console.log(room);
       res.status(201).send({msg:'room added',room});
    } catch (error) {
        res.status(500).send('server error');
    }
}
exports.getUserRooms=async(req,res)=>{
    try {
       let  Room=await Room.find({roomID:req.room.id});
       res.status(200).send({msg:"user room",room});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }
exports.getAllRooms=async(req,res)=>{
    try {
       let  rooms=await Room.find();
       res.status(200).send({msg:'all room',rooms});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }
exports.deleteRoom=async(req,res)=>{
    let {id}=req.params
    try {
        let  room=await Room.findByIdAndDelete(id);
        res.status(200).send({msg:'Room deleted',Room});
    } catch (error) {
        res.status(500).send('server error'); 
       
    }
}
exports.updateRoom=async(req,res)=>{
    let {id}=req.params
    try {
      const updateRoom= await Room.findByIdAndUpdate(id,
        {$set:{...req.body}} ,{new:true}) 
      res.status(200).send({msg:'Room Updated',updateRoom});
    } catch (error) {
        res.status(500).send('server error');
    }  
}
exports.getOneRoom=async(req,res)=>{
    let {id}=req.params
    try {
      
       const  room=await Room.findById(id);
       res.status(200).send({msg:'room',room});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    } 
exports.searchRoom=async(req,res)=>{
        console.log(req.body)
        let {service,nbr}=req.params;  
        try {
           const rooms= await Club.find({$or:[{service:service},{nbr:nbr}]})
            res.status(200).send({msg:'room Found',rooms})
        } catch (error) {
            res.status(500).send('servor error') 
        }
    }
exports.updateUserInfo=async(req,res)=>{
    if(req.body.nom){
       req.body.nom=String(req.body.nom)
    }
    try {
    const user= await User.findByIdAndUpdate(req.user.id,{$set:req.body},{new:true})
 
       res.status(200).send({msg:"user updated",user} ) 
    } catch (error) {
       res.status(500).send('servor error') 
    }
 }
 exports.getAllUsers=async(req,res)=>{
    try {
       let  users=await User.find();
       
       res.status(200).send({msg:'all users',users});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }
