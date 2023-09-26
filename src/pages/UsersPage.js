
import { useState } from "react";

const URL ="https://jsonplaceholder.typicode.com/users"


export function UserPage (){
    const [users, setUsers]=useState([])
    
    

   async function getUsers (){
    const response =await fetch (URL)
    const data =await response.json()
    setUsers(data)
   
   }


   function PostUser() {
    const [users, setUsers]=useState([])    
   } 

    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(users),
    })
   
    
    return (
        <>
         <h1> Users list</h1>
        <button onClick={getUsers}> get users</button>

        <ul>
            {
                users.map(user=><li>{user.name},
                Email:{user.email},
                Phone: {user.phone},
                Website: {user.website}</li>)
            }
        </ul>

    
        </>
       
    )
        }
