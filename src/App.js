import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navegate from './componets/navegate';
import Tdoform from './componets/Tdoform';
import {todos} from './todos.json'



function App() {


  const [ users,setdatos] = useState(todos);

  const addUser = (user) => {
    console.log(user)
    setdatos([
      ...users,
      user
    ])
  }
  const deleteUser = id => {
    console.log(id)
    setdatos(users.filter(user => user.title !== id))
  }
  

  return (
    

    <div className="App">
<nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            tasks 
            <span className= "badge badge-pill badge bg-light ml-2"
            >
              <h6 className="text-black" >{todos.length}</h6>
            </span>
          </a>
        </nav>
       
        <div className ="container">
         <div className ="row mt-4">
         <Tdoform addUser={addUser} />
         <Navegate users={users} deleteUser={deleteUser} />
         </div> 
        </div> 
      
         
      


   <img src={logo} className="App-logo" alt="logo" />
     
    </div>
  );
}

export default App;
