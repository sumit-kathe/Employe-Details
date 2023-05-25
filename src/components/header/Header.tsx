
import {  BrowserRouter, NavLink,Route,Routes } from "react-router-dom";
import Home from "../Home/Home";
import User from "../User/User";
import Navbar from "../Navbar/Navbar";


const Header =()=>{


    return(<>

<BrowserRouter>
<Navbar></Navbar>
<Routes>

<Route path="/" element={<Home></Home>}/>
<Route path="/User" element={<User></User>}/>





</Routes>


</BrowserRouter>

    
    </>)
}

export default Header;