import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Create from './Create';
 import {BsFillTrashFill ,Bs0Circle} from 'react-icons/bs'
import Loading from '../Generalcomponents/Loading';



function Home() {


    const  [todos,settodo]= useState([]);
    const  [loading,setloading]= useState(true);
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
           { setloading(false);
          //  console.log(data);
            settodo(data);
            
          
          }
        ).catch(err => console.log(err))

   



     }

    ,[])

const HandleDelete =(id) =>
{
   fetch('http://localhost:5000/delete/'+id ,  {
    method:'DELETE'
   }).then((data)=>
   {
        
          settodo(todos.filter(todo => (todo._id !== id)));
   }
   ).
   catch(err =>console.log( err))

}


  return (

    <>
   <Create setdata={settodo} todos={todos} />
     <div className="container text-center mt-1">
     <div className="row">
    <div className="col-3">
      
    </div>
    
{
    loading ? 
  <Loading /> :  todos.length ===0 ? <h4 className="text-center text-muted mt-5 " style={{Color:'Gray'}}> <Bs0Circle > </Bs0Circle> Data Found</h4>
  :






     
      <div className="card"  >
        <div className="card-header">
        Here Is The Data
        </div>
          <div className="card-body"  >
             
     { todos.map((todo ,i)=>  ( 


        
            <div key={i}>   
              <ul className="list-group "  >
                 <li className="list-group-item d-flex "   style={{backgroundColor:'ThreeDShadow' ,color:'white'}}> 
                  <span className='p-1 flex-grow-1'> {todo.task}</span>
                  <span className='p-1 pe-5 '>  {todo.user}</span>
                  <span className='p-1 pl-5  pe-5  ' >  {todo.last_updated}</span>
                  <span className='p-1 pl-5  pe-5  ' style={{color:'red' , cursor:'pointer'}} >  <BsFillTrashFill onClick={ ()=> {HandleDelete(todo._id)}}> </BsFillTrashFill></span>

                    

                   </li>
               
             </ul>

         
          </div>

      


     )
    
    
    )}
        </div>
        </div>
}
     </div>      
     </div>

     
 


 


   
    </>
   
  )
}

export default Home