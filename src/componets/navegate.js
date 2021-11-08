import React from 'react'



const Navegate = (props) => {
  console.log(props.users)

  return(
  <table>
    <tbody>
        {
     props.users.map(user => (
        
      <div className ="col-md-4"   >
      <div className ="card mt-4">
         <div className ="card" >
         <div className ="card-header" >
         <h3>{user.title}</h3>
         <span className ="badge badge-pill badge bg-danger ml-2">
         {user.priority}
         </span>
        </div>
          <div className ="card-body" >
          <p>{user.description}</p>
          </div>
          <button 
                className="button  bg-danger"
                onClick={() => props.deleteUser(user.title)}
                 >
                Delete
            </button>
        </div>
        </div> 
      </div> 
    
        
     ))
    } 
  </tbody>
  </table>
  )
      
}    


export default Navegate;