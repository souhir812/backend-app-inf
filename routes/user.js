const express=require ('express');
const { updateUserInfo, getAllUsers,addRoom,getUserRooms,getAllRooms,deleteRoom,getOneRoom,searchRoom } = require('../Controllers/userController');
const isAuth = require('../middelwares/isAuth');



const router=express.Router() ;

router.get('/allusers',isAuth,getAllUsers);


//add new 
router.post('/addroom',isAuth,addRoom)

// get all rooms
router.get('/allRooms',getAllRooms)

//get user room
router.get('/userroom',isAuth,getUserRooms)

//delete room
router.delete('/deleteroom:id',deleteRoom)

//update room
router.put('/updateRoom/:id',updateRoom)

//getOne room
router.get('/getOneRoom/:id',getOneRoom)

//search room
router.get('/searchroom/:service/:nbr',searchRoom)

// update user 
router.put('/updateprofile',isAuth,updateUserInfo)

// all user 
router.get('/allusers',isAuth,getAllUsers)

