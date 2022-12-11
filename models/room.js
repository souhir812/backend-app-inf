const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const roomSchema= new Schema({
    nbr:{
         type:int,
         required:true,
         unique:true
     },
     nompatient:{
        type:String,
        required:true,
       
     },
     appel:{
      type:String,
      required:true,
      enum:["true","false"]
   },
     statut:{
        type:String,
        required:true,
        enum:["En_attent","En_traitement","Termine"],
      },
   
      readtag:{
        type:Number,
        required:true,
        enum:[1,0],


     },

     nomservice:{
          type : String,
          required:true,
     },
     dateappel:{
        type:Date,
        required:true,

     }
   
})
module.exports= mongoose.model('Room',roomSchema)