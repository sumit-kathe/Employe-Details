import { createContext, useEffect, useReducer, useState } from "react";
import { initialstatevalue,initialtype,initialstate } from "../store/reducerstore";


const Employedetailcontax = createContext({

employe: initialstate,



})







export const  Employedatacontaxwraper:React.FC<any>=({children})=>{

    const [allemp,setAllemp]=useState<any>();
    const getempdata=async()=>{
    
    try{
    
        const response = await fetch("http://localhost:3005/employess")
        const empdatajson = await response.json()
    
        console.log("Fetched data from api", empdatajson)
         

        const {allemployes}=empdatajson;

    
         setAllemp(allemployes)


         console.log("state me data  store kar diya " ,allemployes)
         console.log("cheking the type of fetch data " ,typeof(allemployes) )

    
    
    }
    catch(err){
    
    console.log("errror in fetching the data from api", err)
    
    }
    }
    
    useEffect(()=>{
        getempdata()
    
    }
    
        ,[])

const reducerfun:any=()=>{
    return(<></>)}

    // const initialstatevalue=allemp;

const [currentemp,dispatch]=useReducer(reducerfun,initialstatevalue)

return(
<Employedetailcontax.Provider value={

    {
        
        employe: allemp,
              
    }
}>
{children}

</Employedetailcontax.Provider>

)


}




export default Employedetailcontax;