const mongoose= require('mongoose');
const { todo } = require('node:test');
 


const TodoSchema =   new mongoose.Schema({
task : String,
last_updated : String,
user: String
});

 const TodoModel =   mongoose.model("task",TodoSchema);


module.exports=TodoModel;

