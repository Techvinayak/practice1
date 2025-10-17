import axios from "axios";
import { useEffect, useState } from "react";

export default function LoadData(){

    const[users,setUsers]=useState([]);
   
    useEffect(()=>{
       async function fetchData(){
           const response= await axios.get("https://jsonplaceholder.typicode.com/users");
           setUsers(response.data);
       }
       fetchData();
    },[]);

    return(
        <>
        <h2>Users:</h2>
        {/* <ul>
            {users.map((u)=>(
                <li key={u.id}>{u.name}</li>
            ))}
        </ul> */}


        <table border="1" cellPadding="5">
            <thead>
                <tr>
                    <td>User Id</td>
                    <td>User Name</td>
                </tr>
            </thead>
            <tbody>
                
                    {users.map((u)=>(
                      <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.username}</td>
                      </tr>
                    ))}
                
            </tbody>

        </table>
        </>
    )
    
}