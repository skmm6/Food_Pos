import React from 'react'
import NavItem from './Navitem'
import logo from '../../assets/img/logo.svg'
import {NavLink} from 'react-router-dom'



function nav() {
    return (
        <div className=" min-w-104 notscrollbar bg-basedark rounded-2xl self-stretch flex flex-col items-center pt-2 pb-3 shadow-sm  justify-between overflow-y-auto gap-y-3">
            <div className="bg-primoryop p-3 rounded-xl mt-6">
             <img src={logo} alt="Logo" />
            </div>
            <nav className="flex flex-col justify-around">
                <NavLink exact to="/" activeClassName="nav-active"> <NavItem icon="icon-home nav-icon"/> </NavLink>  
                <NavLink  activeClassName="nav-active" to="/discount"> <NavItem icon="icon-discount nav-icon"/> </NavLink>  
                <NavLink  activeClassName="nav-active" to="/message"> <NavItem icon="icon-message nav-icon"/> </NavLink>
                <NavLink  activeClassName="nav-active" to="/notification"> <NavItem icon="icon-notification nav-icon"/> </NavLink>
             </nav>
                <div className='h-2'>
                    
                </div>
        </div>
    )
}
export default nav;