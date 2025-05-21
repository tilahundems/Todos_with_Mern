import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
function Create(props) {
   
         const  [newtodos,settodonew]= useState(
          {
             task: '',  
            last_updated: '',
            user: '',
          }
    );
    
       const  handleadd= () =>
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
                 props.setdata([...props.todos, data]);
                 
              settodonew({
        task: '',
        user: '',
        last_updated: '',
      });
 
              
              }
            ).catch(err => console.log(err))
    
    
      }
    
    
  return (
 
 
     

    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-4  mb-1"> 
                
                <input type="text" value={newtodos.task}  name='task' className='form-control'  placeholder='Task To be add' id="floatingInput"   onChange={(e) => settodonew({...newtodos  ,task : e.target.value}) } />
            </div> 
            <div className="col-sm-12 col-md-4 mb-1"> 
        <input type="text"  name='User'  value={newtodos.user}  className='form-control' placeholder='For Whom' id="floatingInput"     onChange={(e) => settodonew({...newtodos  , user : e.target.value }) } />
            </div> 
            <div className="col-sm-12 col-md-4 mb-1"> 
                <button type="button" value="Add" className='btn btn-primary  col-12'   onClick={handleadd} > ADD  </button>
            </div>  



        </div>


    </div>

  






























  )
}

export default Create