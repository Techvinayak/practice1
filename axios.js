import axios from "axios";
import { useEffect } from "react";

export default function getData(){
    const[users,setUsers]=useState([]);
    
    useEffect(()=>{
        async function fetchData() {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data)

            
        }
        fetchData();
    },[])


    return(
        <>
        
        </>
    )
}