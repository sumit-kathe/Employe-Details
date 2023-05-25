
import {  BrowserRouter, NavLink,Route,Routes } from "react-router-dom";
import Home from "../Home/Home";
import User from "../User/User";
import Navbar from "../Navbar/Navbar";
import Edit from "../edit/Edit";
import View from "../View/View";


const Header =()=>{


    return(<>

<BrowserRouter>
<Navbar></Navbar>
<Routes>

<Route path="/" element={<Home></Home>}/>
<Route path="/User" element={<User></User>}/>
<Route path="/Edit" element={<Edit></Edit>}/>

<Route path="/View" element={<View></View>}/>






</Routes>


</BrowserRouter>

    
    </>)
}

export default Header;