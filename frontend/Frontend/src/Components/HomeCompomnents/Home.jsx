import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



function Home() {
    const  [todos,settodo]=useState([]);

     useEffect(()=>
     {
        fetch('http://localhost:5000/view' ).then(result=> result.json()).then(data => 
            console.log(data)
        ).catch(err => console.log(err))





     }

    ,[])
  return (

    <>
     <div className="container-fluid text-center mt-5">
     <div className="row">
    <div className="col-3">
     </div>
     <div className="col-5 ">
     <input type="text"  name='task' className='form-control m-2' />
     <input type="text"  name='User' className='form-control m-2'  />
      <input type="button" value="Add" className=' btn btn-success'  />
     </div>
      <div className="col-3">
     </div>
     </div>      
     </div>

      {
        todos.map(todo =>{
             <div>
                { todo }
             </div>
        })
      }
 

    


   
    </>
   
  )
}

export default Home