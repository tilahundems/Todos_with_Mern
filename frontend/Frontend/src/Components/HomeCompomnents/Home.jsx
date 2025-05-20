import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



function Home() {
    const  [todos,settodo]= useState([]);
     const  [newtodos,settodonew]= useState(
      {
         task: '',
        last_updated: '',
        user: '',
      }
    );

     useEffect(()=>
     {
        fetch('http://localhost:5000/view' ).then(result=> result.json()).then(data => 
           { 
            console.log(data);
            settodo(data);
          
          
          }
        ).catch(err => console.log(err))

   



     }

    ,[])

   function handleadd()
  {
  const todoToSend = {
    ...newtodos,
    last_updated: new Date().toISOString()
  };
  fetch('http://localhost:5000/add',{ 
      method : 'POST' ,
      headers: {
      'Content-Type': 'application/json' },
        body: JSON.stringify(todoToSend) 
  } 
  ).then(result=> result.json()).then(data => 
           { 
            console.log(data);
           settodo([...todos, data]);
             
          
          
          }
        ).catch(err => console.log(err))


  }






  return (

    <>
     <div className="container-fluid text-center mt-5">
     <div className="row">
    <div className="col-3">
     </div>
     <div className="col-5 ">
   <span>  
       <input type="text"  name='task' className='form-control m-2'  onChange={(e) => settodonew({...newtodos  ,task : e.target.value}) } />
      <input type="text"  name='User' className='form-control m-2'   onChange={(e) => settodonew({...newtodos  , user : e.target.value }) } />
  <input type="button" value="Add" className=' btn btn-success'  onClick={handleadd} />
    </span>    
  
     </div>
      <div className="col-3">
        <div className="card" >
          <div className="card-body" >
 <h1> here is the data </h1>
     { todos.map((todo ,i)=>  (
        
            <div key={i}>  
          <h3>  {todo.task}</h3>
          <h3>  {todo.last_updated}</h3>
          <h3>  {todo.user}</h3>
          </div>

      


     )
    
    
    )}
        </div>
        </div>


     </div>
     </div>      
     </div>

     
 

    


   
    </>
   
  )
}

export default Home