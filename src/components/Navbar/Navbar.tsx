
import {NavLink} from 'react-router-dom'

import './Navbar.css'
const Navbar =()=>{


    return(

        <>

        <div className='maindiv'>
            <div className='singlediv'>

                <NavLink className={({isActive}) => {return isActive ? 'active-class': 'normal'}} to="/">Home</NavLink>
            </div>
            <div className='singlediv'>

                <NavLink className={({isActive}) => {return isActive ? 'active-class': 'normal'}} to="/User">Eployess</NavLink>
                    </div>

                  
                  

        </div>
        </>
    )
}

export default Navbar;