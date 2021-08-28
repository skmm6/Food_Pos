import React from 'react'
import NavItem from './Navitem'
import logo from '../assets/img/logo.svg'
import {NavLink} from 'react-router-dom'



function nav() {
    return (
        <div className=" notscrollbar bg-basedark rounded-2xl  flex flex-col items-center pt-3 pb-3 w-24 overflow-hidden justify-between overflow-y-auto ">
            <div className="bg-primoryop m-4 p-3 rounded-xl">
             <img src={logo} alt="Logo" />
            </div>
            <nav className="flex flex-col gap-y-3">
                <NavLink exact to="/" activeClassName="nav-active"> <NavItem icon="icon-home nav-icon"/> </NavLink>  
                <NavLink  activeClassName="nav-active" to="/discount"> <NavItem icon="icon-discount nav-icon"/> </NavLink>  
                <NavLink  activeClassName="nav-active" to="/dashboard"> <NavItem icon="icon-dashboard nav-icon"/> </NavLink>
                <NavLink  activeClassName="nav-active" to="/message"> <NavItem icon="icon-message nav-icon"/> </NavLink>
                <NavLink  activeClassName="nav-active" to="/notification"> <NavItem icon="icon-notification nav-icon"/> </NavLink>
                <NavLink  activeClassName="nav-active" to="/setting"> <NavItem icon="icon-setting nav-icon"/> </NavLink>
             </nav>
          <button className="mt-6"><NavItem icon="icon-log-out nav-icon"/></button>
           
           
            
            
           
  
  
        </div>
    )
}
export default nav;