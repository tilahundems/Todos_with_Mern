// Area for Require
const express = require ('express');
const { env } = require('node:process');
const fs=require('fs');
const mongoose= require('mongoose');
 const TodoModel = require ('./Models/todo');
  const  cors = require('cors');

const url='mongodb+srv://tilahundems271:aVXMs1Dwi1krvYBI@tododb.txohyl5.mongodb.net/?retryWrites=true&w=majority&appName=todoDB'

// area For Variables
 const app=express();
  
const port =  5000;
mongoose.connect(url);
  
app.use(express.json());
app.use(cors());
app.listen(port,()=>
{
    console.log('Server Is Running on Port :'+  port);
   }
);


  app.get('/create',  (req,res)=>{
        TodoModel.create(
        {
            task:'taskone',
            last_updated:"me",
            user:"Me"
        }
       ).then(result =>{
         res.json(  result);
 
       }).catch(err=>{
      res.json("some Error Here"+ err);
       })

});


app.post('/Add', (req,res)=>{

  const {task,last_updated,user} = req.body;
 TodoModel.create({
 
 task:task ,
 last_updated:last_updated,
 user: user
 }  ).then(result =>{
         res.json(  result);

       }).catch(err=>{
      res.json("some Error Here"+ err);
       })


})




  app.get('/view',  (req,res)=>{
          
        TodoModel.find()
        .then(result =>{
         res.json(result);
 
       }).catch(err=>{
      res.json("some Error Here"+ err);
       })

});

 app.delete('/delete/:id', async (req,res)=>
{
      const {id}= req.params; 
    TodoModel.findByIdAndDelete(id).then((Result)=>{
          res.json(Result);  
   
    
   }).catch(err =>{
     console.error("error Occurred " + err);
   })
 
   
}

)