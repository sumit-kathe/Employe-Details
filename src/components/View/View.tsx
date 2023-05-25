import { useContext } from "react";
import Employedetailcontax from "../contax-wrapper/Contaxwrapper";
import './View.css'


const View =()=>{

    const { employe } = useContext(Employedetailcontax);



    const indivisualdetails = employe.map((info)=>{

        return(
            <>
             <h2 className="name">{info.firstName} {info.lastName}</h2>

            <ul>
             <li> <p> Works In Domain : {info.domain}</p></li>
             <li> <p> Working Experience of  : {info.exp}</p></li>
             <li> <p> Current CTC: {info.ctc}</p></li>

             <li> <p> Native Country : {info.country}</p></li>
             <li> <p> Contact at  : {info.email}</p></li>

            </ul>





            
            
            
            
            
            
            
            
            </>
        )


    });

    return(

        <>
            <h1 className="heading">This is my View section</h1>

            <br />
            <br></br>
            {indivisualdetails}
        

        </>

    )
}

export default View;